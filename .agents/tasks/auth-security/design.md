# Design: Redis-backed progressive account lockout + token-bucket rate limiting

## Overview

This design adds two distinct, Redis-backed security features to the epay auth flow:

1. **Task 1 — Progressive account lockout** (`/auth/login`): after a configurable number of failed logins for one account, that account is locked for a configurable duration that escalates each cycle (20 → 35 → 50 → … minutes by default). Redis is the source of truth for live lockout; the existing DB `UserAttempt` row is kept as a secondary audit/visibility mirror. The IP of every failed attempt is captured in Redis and surfaced in the lockout error.
2. **Task 2 — Token-bucket rate limiting** (filter-wide, per route+IP): replace the current fixed-window `INCR`/`expire` rate limiter in `RateLimitingFilter` with a real Bucket4j token bucket (capacity + refill rate) backed by the existing `LettuceBasedProxyManager`. Empty bucket → HTTP 429 + `Retry-After`.

The two concerns stay separate: Task 1 is per-account, lives in the auth login flow, and uses `StringRedisTemplate`; Task 2 is per-IP/route, lives in the filter, and uses the existing Bucket4j proxy manager. Both reuse the same Redis instance. No new Redis client and no new third-party libraries are introduced.

## Technology stack (locked)

- Java 21, Spring Boot 4.1.0, Maven multi-module (`epay-*` modules, parent at `epay/pom.xml`).
- Spring Data Redis (`StringRedisTemplate`, already a bean) for Task 1 lockout keys.
- Bucket4j 8.7.0 (`com.bucket4j:bucket4j-core`, `bucket4j-redis`) + the existing `LettuceBasedProxyManager` in `RateLimitService` for Task 2.
- Lombok (`@RequiredArgsConstructor`/`@Slf4j`/`@Getter`/`@Setter`), SLF4J logging, constructor injection.
- Config via `@ConfigurationProperties` field binding on `@Component` classes (matches existing `JwtProperties` and `RateLimitConfig`).

Build/verify command (from `d:/ACBS/epay-app/epay`):
`./mvnw.cmd -q -pl common,auth -am compile`
(`-pl common,auth` resolves to the reactor module directory names declared in the parent pom; `-am` builds `domain`/`notification` deps transitively.)

---

## Task 1 — Progressive account lockout

### Decision 1: Escalation schedule formula

**Choice: arithmetic progression with a configurable base, step, and cap.**

```
durationMinutes(level) = min(maxDurationMinutes, baseMinutes + (level - 1) * stepMinutes)
```

- `level` starts at 1 for the first lock and increments by 1 each subsequent lock cycle.
- Defaults: `baseMinutes = 20`, `stepMinutes = 15`, `maxDurationMinutes = 1440` (24h).
- Levels produced by the defaults: 1 → 20m, 2 → 35m, 3 → 50m, 4 → 65m, … capped at 1440m.

**Reconciliation of the user's "20 → 35" and "extra 14min":** the user's own example is 20 → 35, which is +15, not +14 (20 + 14 = 34). The "extra 14min" note is an arithmetic slip. The design uses `stepMinutes = 15` as the default because it exactly reproduces the user's stated pair (20 → 35). The step is configurable, so if a true +14 were ever required, set `stepMinutes = 14` (yielding 20 → 34); but the default reproduces the canonical 20 → 35 the user described.

Property keys (prefix `epay.security.lockout`):
- `epay.security.lockout.max-attempts` = 3
- `epay.security.lockout.base-duration-minutes` = 20
- `epay.security.lockout.step-minutes` = 15
- `epay.security.lockout.max-duration-minutes` = 1440
- `epay.security.lockout.enabled` = true

The duration calculation is a pure function of `(level, base, step, max)` — a trivial, fully unit-testable method (see Testability).

### Decision 2: Redis vs DB for attempt tracking

**Choice: Redis is the sole source of truth for live lockout decisions; keep the DB `UserAttempt` row as a secondary audit/visibility mirror. Redis drives the lock; the DB `accountLocked` flag is NOT set by progressive lockout.**

Justification:
- Redis gives atomic `INCR`, sub-millisecond reads, and self-expiring TTLs — exactly what a live, time-bounded lockout needs. The DB single-row counter (`UserAttemptService`) reuses one mutable row (`findFirstByUserIdOrderByCreatedOnDesc`) and is not a true append-only audit log, so it is unsuitable as the authoritative, self-expiring lockout store.
- Keeping the DB row preserves existing admin/dashboard visibility of the failure counter and `User.failedLoginAttempts`, and avoids breaking any tooling that reads `UserAttempt`. It is a best-effort mirror: `createFailAttempt` still writes/updates the DB row on failure (counter set from the Redis counter value), `UpdateUserAccount` still resets it on success.
- **Critical interaction avoided:** the DB `User.accountLocked` flag is NOT set by progressive lockout. If it were, Spring Security's `UserDetails.isAccountNonLocked()` would return `false`, so `authenticationManager.authenticate(...)` would throw `LockedException` even after the Redis TTL expired — breaking the "user can try again after 20min" requirement. The progressive lockout short-circuits **before** `authenticate()`, so `authenticate()` is never invoked for a Redis-locked account and never throws `LockedException` for a progressive lock. The DB `accountLocked` flag remains reserved for admin/operational permanent locks (existing admin manual-lock behavior unchanged).
- **Fail-open tradeoff:** if Redis is flushed, the lock keys vanish and lockout fails open (the user can log in). This is the accepted cache-driven-lockout tradeoff and is mitigated by Task 2's per-IP token bucket, which still throttles brute-force traffic independent of the account lockout.

The IP of each failed attempt is recorded in Redis (not in a new DB column, to avoid a schema migration under `ddl-auto: validate`). The IP is surfaced in the lockout error response and in a WARN log (audit).

### Decision 3: Lockout key

**Choice: lockout is keyed by account (`userId`) only. The IP of each failed attempt is recorded in Redis and surfaced in the lockout error/audit, but IP is not part of the lockout key.**

Justification:
- The user's described behavior is account-centric ("block user account after 3 failed attempts for 20 min", "the user can try again"). Keying by account protects a specific account against **distributed** brute force (an attacker rotating IPs still hits the same account's counter and lock).
- Keying by account+IP would let a distributed attacker bypass by rotating IPs (3 tries per IP), which defeats the protection the user asked for. account+IP also fragments a legitimate traveling/shared-NAT user's history without improving security against the account-focused attack model the user described.
- The accepted tradeoff of account-only lockout is that an attacker can intentionally lock a victim's account by submitting bad passwords 3 times (account-lockout DoS). This is inherent to account-based lockout and standard; it is mitigated by Task 2's per-IP token bucket, which throttles the very traffic that would perform such a lockout.
- The IP requirement is satisfied by capturing the IP per failed attempt (Decision 2) and surfacing it in the 423 response (`lastFailedIp`) and the audit log.

### Redis key schema (Task 1)

Namespace prefix `epay:lockout:`. All keys have TTLs.

| Key | Type | Purpose | TTL |
|---|---|---|---|
| `epay:lockout:fail:{userId}` | STRING (int) | Failure counter for the current cycle. `INCR` on each `BadCredentials`. | `fail-window-minutes` (default 30m), set on first `INCR`. Deleted when the threshold is reached (lock is set). |
| `epay:lockout:locked:{userId}` | HASH | Lock state. Fields: `level`, `lockedAtEpoch`, `lockedUntilEpoch`, `lastIp`. Presence == locked. | computed lock duration (`durationMinutes(level)`). |
| `epay:lockout:level:{userId}` | STRING (int) | Current escalation level (1 = first lock). `INCR` when a lock is set. | `level-ttl-hours` (default 24h). Deleted on successful login (full reset). |
| `epay:lockout:ips:{userId}` | LIST | Recent failed-attempt IPs (audit). `LPUSH ip` + `LTRIM 0 (recentIps-1)`. | `fail-window-minutes` (default 30m). `recentIps` default 5. |

Lifecycle (per failed login):
1. `INCR epay:lockout:fail:{userId}` (and set TTL on first increment). Capture `ip`.
2. `LPUSH ip` into `epay:lockout:ips:{userId}` + `LTRIM` + ensure TTL.
3. If the returned counter `== maxAttempts` (exactly): `level = INCR epay:lockout:level:{userId}` (ensure TTL); `duration = durationMinutes(level)`; `HSET epay:lockout:locked:{userId}` with `level/lockedAtEpoch=now/lockedUntilEpoch=now+duration/lastIp=ip`; `EXPIRE` the hash for `duration`; `DEL epay:lockout:fail:{userId}` (start clean for the next cycle). Exactly one caller sees `== threshold` because `INCR` is atomic, so the level increments exactly once per cycle.
4. If counter `> maxAttempts` (a concurrent failure landed after the threshold was hit): record the IP only; do not set the lock again (the lock hash is authoritative and already present/expiring).

`checkLockout(userId)` (run before `authenticate()`): if `epay:lockout:locked:{userId}` exists, read `lockedUntilEpoch` and `lastIp`; `retryAfterSeconds = max(0, lockedUntilEpoch - now)`; return a locked status. If absent, not locked.

`resetOnSuccess(userId)` (run after a successful `authenticate()`): `DEL` `epay:lockout:fail:{userId}`, `epay:lockout:level:{userId}`, and `epay:lockout:ips:{userId}`. (A successful login only happens when the account is not locked, so there is no `locked` hash to delete; this fully clears the escalation progression so a legit user who finally logs in gets a clean slate.)

### Lockout status code

**Choice: HTTP 423 Locked** (`HttpStatus.LOCKED`, 423). It is semantically correct for "account is temporarily locked" and distinct from 401/403 (auth failure) and 429 (rate limit). Hardcoded (not configurable) to keep the config surface focused on tunable numbers.

### Integration into `AuthenticationService.login`

`AuthController.login` is unchanged (already passes `httpRequest`). The change is inside `AuthenticationService.login(...)`. Current order: find user → check enabled → check active session → `createFailAttempt` (before auth) → `authenticate` → on success `UpdateUserAccount` + alerts.

New order:
1. `User user = userRepository.findByUsername(...)`. If null → return generic "Invalid user credentials." (400). Do NOT increment any counter (no account to lock). (Non-existent usernames are still throttled by the Task 2 per-IP bucket.)
2. `if (!user.isEnabled())` → return "This account has not been verified." (401). (unchanged)
3. `if (userTracerService.hasActiveSession(user.getId()))` → return "already logged in on another device." (401). (unchanged)
4. **NEW short-circuit:** `LockoutStatus st = accountLockoutService.checkLockout(user.getId())`. If `st.locked()` → build a lockout response: status 423, `success=false`, `message="Account is temporarily locked due to repeated failed login attempts. Try again in <minutes> minute(s)."`, plus `retryAfterSeconds`, `lockedUntilEpoch`, `lastFailedIp=st.lastIp()`. Return `ResponseEntity.status(423).body(map)`. **Do NOT call `authenticate()` and do NOT increment the counter.**
5. `final String ip = extractClientIp(httpRequest);` (extract once, reused for lockout recording and the login alert).
6. `try { authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password)); }`
7. On success: `accountLockoutService.resetOnSuccess(user.getId())`; `userAttemptService.UpdateUserAccount(user.getId())` (resets DB audit row — unchanged call). Then the existing 2FA / session / JWT / login-alert path runs unchanged (the alert reuses `ip` already extracted).
8. `catch (BadCredentialsException e)`: **NEW** `accountLockoutService.recordFailedAttempt(user.getId(), ip)` (Redis `INCR` + IP capture + threshold/lock evaluation) **and** `userAttemptService.createFailAttempt(user.getId(), AttemptType.LOGIN)` (DB audit mirror — call moved here from before-auth so only real credential failures are recorded). Return "Invalid user credentials." (400).
9. `catch (LockedException e)`: returns "account is currently locked. Please contact customer service." (401). After this change this branch only fires for admin/DB-permanent locks, since progressive locks short-circuit at step 4. (message unchanged)
10. `catch (DisabledException e)` / `catch (AuthenticationException e)`: unchanged.

Only `BadCredentialsException` increments the progressive counter. `LockedException`/`DisabledException` represent already-locked/suspended accounts, not credential failures, and must not rack up progressive lockout.

### Error handling (Task 1)

- `checkLockout` / `recordFailedAttempt` / `resetOnSuccess` use `StringRedisTemplate`. Any Redis exception is caught inside the service and logged at WARN level (`[Lockout] Redis failure for userId=...`). On a Redis error in `checkLockout` the service **fails open** (returns not-locked) so a Redis hiccup does not lock legitimate users out permanently; the per-IP bucket still protects. On a Redis error in `recordFailedAttempt`, the failure is not counted (fail-open); logged WARN. These are recoverable, non-fatal: the caller (login) always continues to its normal return path; no exception propagates to the client from the lockout service.
- `checkLockout` returns a small immutable record `LockoutStatus(boolean locked, long retryAfterSeconds, long lockedUntilEpoch, String lastIp, int level)`; `lastIp` may be `null`/empty if no IP was recorded.
- The `lastIp` surfaced in the 423 body is the IP of the attempt that triggered the lock (`locked` hash `lastIp`), satisfying the "surface the IP" requirement. It is also in the WARN log line for audit.

### New files / classes (Task 1)

- `com.epay.auth.config.LockoutProperties` — `@Component @ConfigurationProperties(prefix = "epay.security.lockout")`, `@Getter @Setter`, fields: `boolean enabled = true`, `int maxAttempts = 3`, `long baseDurationMinutes = 20`, `long stepMinutes = 15`, `long maxDurationMinutes = 1440`, `long failWindowMinutes = 30`, `long levelTtlHours = 24`, `int recentIps = 5`. Method `long durationMinutes(int level)` implementing the formula (pure, unit-tested).
- `com.epay.auth.service.AccountLockoutService` — `@Service @Slf4j @RequiredArgsConstructor`, depends on `StringRedisTemplate` and `LockoutProperties`. Methods: `LockoutStatus checkLockout(Long userId)`, `void recordFailedAttempt(Long userId, String ip)`, `void resetOnSuccess(Long userId)`. Private helpers for key building and the threshold/lock evaluation.
- `LockoutStatus` — small record (can be a nested record in `AccountLockoutService` or a standalone `com.epay.auth.service.LockoutStatus`).

### Files modified (Task 1)

- `AuthenticationService.java` — add `AccountLockoutService accountLockoutService` to the `@RequiredArgsConstructor` dependencies; insert step 4 (short-circuit) and step 8 (record on `BadCredentials`); move the `createFailAttempt` call from before-auth into the `BadCredentials` catch; extract `ip` once at step 5 and reuse it. Keep `UpdateUserAccount` call on success.
- `application.yaml` — add the `epay.security.lockout` block (under the existing `epay.security` section, alongside `jwt`).

`UserAttemptService` / `IUserAttemptService` / `UserRepository.lockAccount` are **not** removed. `lockAccount` is no longer called by the progressive lockout path (the DB flag stays reserved for admin locks); `createFailAttempt`/`UpdateUserAccount` keep their existing signatures and are still called for the DB audit mirror. No interface change, no regression.

---

## Task 2 — Token-bucket rate limiting

### Decision 4: Token-bucket key

**Choice: bucket key = `{route-group}:{ip}` (per-route, per-IP).** Route group reuses the existing `resolveGroup(uri)` resolver: `auth` | `wallet` | `user`; paths matching none of these use the `default` group.

Justification: per-route isolation prevents a client hammering `/auth/**` from starving its `/wallet/**` budget, and per-IP isolation prevents one client from starving another. This is the standard enterprise token-bucket shape and is a strict improvement over both a single global-IP bucket and the current fixed-window counters. The `default` group covers everything not explicitly grouped.

Bucket Redis key (managed by Bucket4j's `LettuceBasedProxyManager`): `epay:rl:bucket:{group}:{ip}`. TTL is auto-managed by the proxy manager's existing `ExpirationAfterWriteStrategy.basedOnTimeForRefillingBucketUpToMax(Duration.ofMinutes(10))` (expires up to 10m after the last write) — no manual TTL needed.

### Token-bucket semantics

- Bucket4j `Bandwidth.classic(capacity, Refill.greedy(refillTokens, refillPeriod))` — `Refill.greedy` refills tokens continuously (smooth drip), which is the canonical enterprise token-bucket behavior. (The existing `tryConsume` uses `Refill.intervally`, which refills in discrete bursts at period boundaries; greedy is the more accurate "refill over time" semantic the task asks for. Both compile in 8.7.0; greedy is chosen for smoothness.)
- Per request: consume 1 token. If the bucket is empty → reject with HTTP 429 + `Retry-After`.
- A new `RateLimitService` method returns enough detail for the filter to set headers and `Retry-After`. The Bucket4j `ConsumptionProbe` (from `bucket.tryConsumeAndReturnRemaining(1)`) provides `isConsumed()`, `getRemainingTokens()`, and the time-to-refill (`getNanosToWaitForRefill()` in 8.7.0). The service maps the probe to a clean DTO so the filter does not depend on Bucket4j types.

### Per-route override mechanism

`RateLimitConfig` gains a `Map<String, BucketConfig> routes` (keys are group names: `auth`, `wallet`, `user`; `default` is the base `defaultBucket`). The filter resolves the group, picks `routes.get(group)` if present else the `defaultBucket`, and consumes against `epay:rl:bucket:{group}:{ip}`.

`BucketConfig` (nested in `RateLimitConfig`): `int capacity`, `long refillTokens`, `long refillPeriodSeconds`.

Defaults:
- `defaultBucket`: capacity 100, refillTokens 10, refillPeriodSeconds 1 → burst of 100, sustained 10 req/s.
- `auth` route override: capacity 20, refillTokens 5, refillPeriodSeconds 1 → burst 20, sustained 5 req/s (login is sensitive; tighter).
- `wallet`/`user` route overrides: omitted by default → fall back to `defaultBucket`.

Property keys (extend existing `epay.rate-limit`):
- `epay.rate-limit.bucket.default.capacity` = 100
- `epay.rate-limit.bucket.default.refill-tokens` = 10
- `epay.rate-limit.bucket.default.refill-period-seconds` = 1
- `epay.rate-limit.bucket.routes.auth.capacity` = 20
- `epay.rate-limit.bucket.routes.auth.refill-tokens` = 5
- `epay.rate-limit.bucket.routes.auth.refill-period-seconds` = 1
- (`wallet`/`user` omitted → use default)

### Removed from `RateLimitConfig` and `application.yaml`

The current fixed-window fields/getters are used **only** by `RateLimitingFilter` (verified by grep) and are replaced by the token bucket. Removed from `RateLimitConfig`: `globalIpLimit`, `globalWindowSeconds`, `authLimit`, `authWindowSeconds`, `walletLimit`, `walletWindowSeconds`, `userLimit`, `userWindowSeconds`, `penaltyMultiplier`, `maxPenaltySeconds`, `suspiciousThreshold`. Removed from `application.yaml` `epay.rate-limit`: the matching fixed-window keys. The penalty/violation/`isBlocked` escalation and the per-authenticated-user group counter are removed from the filter because the token bucket is now the sole rate limiter (the task asks for a single enterprise token-bucket mechanism; layered backoff counters are out of scope). This is a deliberate, documented simplification.

### Filter rewrite (`RateLimitingFilter`)

**Registration is preserved** — `SecurityConfiguration` still does `addFilterBefore(rateLimitingFilter, UsernamePasswordAuthenticationFilter.class)`. `shouldNotFilter` (actuator/health, static, swagger-ui, v3/api-docs) is preserved. `extractIp` is preserved.

New constructor deps (Lombok `@RequiredArgsConstructor` regenerates): `IRateLimitService rateLimitService`, `RateLimitConfig config`, `ObjectMapper objectMapper`. **`RedisTemplate` is dropped** — the filter no longer touches Redis directly (all bucket state goes through `RateLimitService`).

New `doFilterInternal`:
1. `ip = extractIp(request)`.
2. `group = resolveGroup(uri)`; if null → `"default"`.
3. Resolve bucket config: `routes.get(group)` else `defaultBucket`.
4. `key = "epay:rl:bucket:" + group + ":" + ip`.
5. `RateLimitResult r = rateLimitService.tryConsumeWithRetry(key, capacity, refillTokens, Duration.ofSeconds(refillPeriodSeconds))`.
6. Always set `X-RateLimit-Limit = capacity`, `X-RateLimit-Remaining = r.remainingTokens`, `X-RateLimit-Reset = now + secondsToReset` where `secondsToReset = ceil((capacity - r.remainingTokens) * refillPeriodSeconds / refillTokens)` (time for the bucket to refill to capacity), minimum 1.
7. If `r.consumed()` → `chain.doFilter(request, response)`.
8. If `!r.consumed()` → write 429: `ErrorResponse` with `errorCode = ErrorCode.RATE_LIMIT_EXCEEDED`, `status = 429`, message "Too many requests. Please wait and retry.", `retryAfter = r.retryAfterSeconds`; `response.setHeader("Retry-After", String.valueOf(r.retryAfterSeconds))`; return (do not call `chain.doFilter`).

`resolveUserId`, `increment`, `exceeds`, `recordViolation`, `isBlocked`, the `Tightest` inner class, and the `KEY_IP_GLOBAL/KEY_IP_GROUP/KEY_USER_GROUP/KEY_PENALTY/KEY_BLOCKED` constants are removed.

### Error handling (Task 2)

- If `rateLimitService.tryConsumeWithRetry` throws (Redis/Lettuce error): catch in the filter, log ERROR (`[RATE] bucket error ip=... path=...`), and **fail open** — call `chain.doFilter` so a Redis hiccup does not take the whole API offline. (Fail-open on the rate limiter is the standard enterprise choice: availability over strictness; account lockout in Task 1 provides the security backstop.) This is recoverable, non-fatal, and the request proceeds.
- `RateLimitResult` retryAfterSeconds is `max(1, ceil(nanosToWaitForRefill / 1e9))`; when consumed it is 0.
- `X-RateLimit-*` and `Retry-After` are already in the CORS exposed-headers list (`SecurityConfiguration` exposes `X-RateLimit-Limit/Remaining/Reset`).

### New `IRateLimitService` method and result DTO

- `com.epay.common.interfaces.IRateLimitService` gains: `RateLimitResult tryConsumeWithRetry(String key, int capacity, long refillTokens, Duration refillPeriod);`
- `com.epay.common.interfaces.RateLimitResult` — record/DTO: `boolean consumed`, `long remainingTokens`, `long retryAfterSeconds`.
- `RateLimitService` implements it using `Bandwidth.classic(capacity, Refill.greedy(refillTokens, refillPeriod))` and `proxyManager.builder().build(key, () -> configuration)`, then `bucket.tryConsumeAndReturnRemaining(1)` → map to `RateLimitResult`.
- The existing `tryConsume` / `getRemainingTokens` / `startCoolDown` / `isCoolingDown` / `getCoolDownTtlSeconds` / `init` / `destroy` are **kept unchanged** to avoid breaking the interface contract (they are currently unused by the filter but remain available). The `proxyManager`/connection lifecycle (`@PostConstruct`/`@PreDestroy`) is unchanged — the new method reuses the same proxy manager.

### Files modified (Task 2)

- `RateLimitingFilter.java` — rewritten as above.
- `RateLimitConfig.java` — replace fixed-window fields with `BucketConfig defaultBucket` + `Map<String, BucketConfig> routes`; keep `@Component @ConfigurationProperties(prefix = "epay.rate-limit")`.
- `IRateLimitService.java` — add `tryConsumeWithRetry`; add `RateLimitResult` (new file or nested in interface).
- `RateLimitService.java` — implement `tryConsumeWithRetry`.
- `application.yaml` — replace `epay.rate-limit` fixed-window keys with the `bucket` keys above.

---

## Configuration surface (all new/changed properties, with defaults)

Added under `epay.security` (Task 1):
```yaml
epay:
  security:
    lockout:
      enabled: true
      max-attempts: 3
      base-duration-minutes: 20
      step-minutes: 15
      max-duration-minutes: 1440
      fail-window-minutes: 30
      level-ttl-hours: 24
      recent-ips: 5
```

`epay.rate-limit` becomes (Task 2):
```yaml
epay:
  rate-limit:
    bucket:
      default:
        capacity: 100
        refill-tokens: 10
        refill-period-seconds: 1
      routes:
        auth:
          capacity: 20
          refill-tokens: 5
          refill-period-seconds: 1
```
(The old `global-ip-limit`/`auth-limit`/`wallet-limit`/`user-limit`/`penalty-multiplier`/`max-penalty-seconds`/`suspicious-threshold` and `*-window-seconds` keys are removed.)

---

## Edge cases

- **Concurrent failures for one account:** Redis `INCR` is atomic; exactly one call returns `== maxAttempts` and sets the lock + increments the level. A second concurrent failure (`> maxAttempts`) only records its IP. The lock hash is authoritative and TTL-bound.
- **Failure right as the lock is set:** a request that passed `checkLockout` (not yet locked) but whose `authenticate` fails after another thread set the lock will still call `recordFailedAttempt`; its `INCR` starts a fresh counter (1) for the next cycle. Benign; level may increment one cycle earlier in rare races. Acceptable.
- **Counter expiry mid-cycle:** `fail-window-minutes` (30m) > `base-duration-minutes` (20m), so a counter cannot expire while a lock is active; an idle partial counter (e.g. 2 failures then silence) self-clears after the window, so a later unrelated failure does not unfairly accumulate.
- **Level growth:** capped by `max-duration-minutes`; the level key self-expires after `level-ttl-hours` even without a success.
- **Successful login:** full reset of fail counter + level + IPs (clean slate). A success can only occur when not locked (the short-circuit blocks locked attempts), so there is no stale `locked` hash to delete.
- **User not found:** no account to lock; returns generic 400, does not increment Task 1; still throttled by Task 2 per-IP bucket (prevents username-enumeration brute force).
- **Non-credential failures** (`LockedException`/`DisabledException`/`AuthenticationException`): do not increment the progressive counter.
- **Redis flush (Task 1):** lockout fails open; per-IP bucket (Task 2) still throttles.
- **Redis error (Task 2 filter):** fail open, request proceeds, logged ERROR.
- **Config change at runtime:** Bucket4j caches the bucket config in Redis per key; a capacity/refill change applies to new buckets and to existing buckets after they expire from Redis (≤10m idle, per the proxy manager's expiration strategy). Acceptable for tuning without redeploy of long-idle buckets.

## Invariants and ownership

- **"Account is locked right now"** is owned by the Redis `epay:lockout:locked:{userId}` key (presence + TTL). The login flow enforces it via the step-4 short-circuit. The DB `accountLocked` flag does NOT own progressive lockout (reserved for admin locks).
- **"Failure count for the current cycle"** is owned by `epay:lockout:fail:{userId}` (Redis `INCR`). The DB `UserAttempt.counter` is a best-effort mirror only.
- **"Escalation level"** is owned by `epay:lockout:level:{userId}` (Redis). Reset on success.
- **"Per-IP/per-route request budget"** is owned by the Bucket4j bucket at `epay:rl:bucket:{group}:{ip}`, enforced by `RateLimitingFilter`.

## Testability

- **Unit (no Redis/DB needed):** `LockoutProperties.durationMinutes(level)` — pure formula; a trivial test asserts `durationMinutes(1)=20`, `durationMinutes(2)=35`, `durationMinutes(3)=50`, and that `max-duration-minutes` caps it. The task permits this minimal unit test.
- **Unit:** the `RateLimitResult` mapping from a fake `ConsumptionProbe` (consumed vs. not-consumed) and the `X-RateLimit-Reset` formula are pure and unit-testable.
- **Integration (not required by the task, out of scope to add):** the full lockout cycle (3 failures → lock → expiry → retry → 3 more failures → escalated lock) and the bucket drain/refill require Redis + the app context. Per the task, no broad test suite is added; verification is by compilation and by code inspection of the modified login flow and filter.

## Verification plan (by inspection + compile)

After implementing, re-read `AuthenticationService.login` and `RateLimitingFilter` and confirm:
1. 3 failures → `recordFailedAttempt` sets `epay:lockout:locked:{userId}` with `durationMinutes(1)=20m`.
2. While locked, step 4 short-circuits with 423 + remaining time + `lastFailedIp` **before** `authenticate()`; counter is not incremented.
3. After the 20m TTL, the `locked` hash is gone → `checkLockout` returns not-locked → `authenticate()` runs.
4. 3 more failures → `level=2` → `durationMinutes(2)=35m`.
5. A successful login calls `resetOnSuccess` (clears fail/level/ips) and `UpdateUserAccount` (DB mirror).
6. The filter consumes 1 token per request; when the bucket is empty it returns 429 + `Retry-After` and does not call `chain.doFilter`.
7. `./mvnw.cmd -q -pl common,auth -am compile` (from `epay/`) compiles cleanly.

## Final report will include

- The Redis key schema (the two tables above).
- The application properties added (the two YAML blocks above, with defaults).
- The chosen escalation formula: `durationMinutes(level) = min(maxDuration, base + (level-1)*step)`, defaults 20/15/1440 → 20, 35, 50, …; reconciled with the user's 20→35 (+15, not +14).
- The token-bucket capacity/refill defaults: default 100 / 10 per 1s (10 req/s); auth override 20 / 5 per 1s (5 req/s).

## Assumptions

- Component scanning covers `com.epay.auth.config` (the main app scans `com.epay.*`, since auth `@Service` beans are already picked up). `LockoutProperties` is `@Component @ConfigurationProperties`, matching `JwtProperties`/`RateLimitConfig`.
- `HttpStatus.LOCKED` (423) exists in Spring Boot 4.1.0 (it does).
- Bucket4j 8.7.0 `ConsumptionProbe.getNanosToWaitForRefill()` and `Refill.greedy(long, Duration)` exist (they do in 8.x; the existing code already uses `Refill.intervally` and `Bandwidth.classic`).
- `extractClientIp` stays private in `AuthenticationService` and is called once per login (no change to its signature); the IP is passed into `AccountLockoutService.recordFailedAttempt(userId, ip)` so no fourth IP-extractor is introduced.
