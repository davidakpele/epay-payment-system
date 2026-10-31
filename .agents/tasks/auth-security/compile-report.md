# Auth Security Implementation — Compile Report

## Redis Key Schema

| Key Pattern | Purpose |
|---|---|
| `epay:lockout:fail:{userId}` | Failure counter within current window |
| `epay:lockout:locked:{userId}` | Lock hash: `level`, `lockedAtEpoch`, `lockedUntilEpoch`, `lastIp` |
| `epay:lockout:level:{userId}` | Escalation level counter (persists 24h) |
| `epay:lockout:ips:{userId}` | Recent IPs list (up to 5) |
| `epay:rl:bucket:{group}:{ip}` | Token-bucket state per route group per IP |

## Application Properties Added

### `epay.security.lockout` (auth module)

| Property | Default | Description |
|---|---|---|
| `enabled` | `true` | Master switch |
| `max-attempts` | `3` | Failures before lockout |
| `base-duration-minutes` | `20` | Lock duration at level 1 |
| `step-minutes` | `15` | Added per escalation level |
| `max-duration-minutes` | `1440` | Hard cap (24 h) |
| `fail-window-minutes` | `30` | Window for counting failures |
| `level-ttl-hours` | `24` | How long escalation level persists |
| `recent-ips` | `5` | IPs to retain per user |

### `epay.rate-limit` (common module / main app)

| Property | Default |
|---|---|
| `default-bucket.capacity` | `100` |
| `default-bucket.refill-tokens` | `10` |
| `default-bucket.refill-period-seconds` | `1` |
| `routes.auth.capacity` | `20` |
| `routes.auth.refill-tokens` | `5` |
| `routes.auth.refill-period-seconds` | `1` |

## Escalation Formula

```
durationMinutes(level) = min(maxDurationMinutes, baseDurationMinutes + (level - 1) * stepMinutes)
```

- Level 1: 20 min
- Level 2: 35 min
- Level 3: 50 min
- Level N: 20 + (N-1) × 15, capped at 1440 min

## Token-Bucket Capacity / Refill Defaults

- Default bucket: 100 tokens, refills 10 tokens/second
- Auth routes: 20 tokens, refills 5 tokens/second
- `Refill.greedy` used (tokens available as soon as refill period elapses proportionally)

## Compilation Result

**BUILD SUCCESS**

```
[INFO] Building epay-server 1.0.0-SNAPSHOT
[INFO] Building epay-domain 1.0.0-SNAPSHOT
[INFO] Building epay-common 1.0.0-SNAPSHOT
[INFO] Building epay-notification 1.0.0-SNAPSHOT
[INFO] Building epay-auth 1.0.0-SNAPSHOT
[INFO] BUILD SUCCESS
```

One pre-existing deprecation warning on `Jackson2JsonRedisSerializer` in `RedisConnectionConfig.java` — unrelated to this change.
