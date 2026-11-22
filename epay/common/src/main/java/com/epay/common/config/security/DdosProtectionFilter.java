package com.epay.common.config.security;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.List;
import java.util.Locale;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;

import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.ConsumptionProbe;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE + 10)
public class DdosProtectionFilter extends OncePerRequestFilter {

    private static final Logger log = LoggerFactory.getLogger(DdosProtectionFilter.class);

    private static final String HEALTH_PATH = "/actuator/health";
    private static final Set<String> READ_METHODS = Set.of("GET", "HEAD", "OPTIONS");

    // Strict tier: applies to every HTTP method
    private static final List<String> AUTH_PATHS = List.of(
        "/auth/login",
        "/auth/register",
        "/auth/forgot-password",
        "/auth/reset-password",
        "/auth/forgot-username",
        "/api/v1/auth/login",
        "/api/v1/auth/register",
        "/api/v1/auth/forgot-password",
        "/api/v1/auth/reset-password",
        "/api/v1/auth/forgot-username",
        "/support/chat"
  );

    // Write tier: applies to POST/PUT/PATCH/DELETE (and /deposit/verify on any method)
    private static final List<String> WRITE_PATHS = List.of(
            "/deposit",
            "/withdrawals",
            "/wallet",
            "/user"
    );

    // Bounded caches: attacker with millions of IPs cannot exhaust heap.
    private final Cache<String, Bucket> ipBuckets = Caffeine.newBuilder()
            .maximumSize(200_000).expireAfterAccess(Duration.ofMinutes(10)).build();
    private final Cache<String, Bucket> sensitiveBuckets = Caffeine.newBuilder()
            .maximumSize(200_000).expireAfterAccess(Duration.ofMinutes(10)).build();
    private final Cache<String, AtomicInteger> strikes = Caffeine.newBuilder()
            .maximumSize(500_000).expireAfterWrite(Duration.ofMinutes(5)).build();
    private final Cache<String, Boolean> bannedIps;

    private final Semaphore concurrency;
    private final Semaphore authConcurrency;
    private final int perIp;
    private final int authPerMinute;
    private final int writePerMinute;
    private final int banThreshold;
    private final long banSeconds;

    public DdosProtectionFilter(
            @Value("${app.protection.per-ip-per-minute}") int perIp,
            @Value("${app.protection.auth-per-minute}") int authPerMinute,
            @Value("${app.protection.write-per-minute}") int writePerMinute,
            @Value("${app.protection.max-concurrent-requests}") int maxConcurrent,
            @Value("${app.protection.max-concurrent-auth}") int maxConcurrentAuth,
            @Value("${app.protection.ban-threshold}") int banThreshold,
            @Value("${app.protection.ban-minutes}") int banMinutes) {
        this.perIp = perIp;
        this.authPerMinute = authPerMinute;
        this.writePerMinute = writePerMinute;
        this.concurrency = new Semaphore(maxConcurrent);
        this.authConcurrency = new Semaphore(maxConcurrentAuth);
        this.banThreshold = banThreshold;
        this.banSeconds = banMinutes * 60L;
        this.bannedIps = Caffeine.newBuilder()
                .maximumSize(500_000)
                .expireAfterWrite(Duration.ofMinutes(banMinutes))
                .build();
    }

    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res,
                                    FilterChain chain) throws ServletException, IOException {

        String path = normalizedPath(req);
        if (path.startsWith(HEALTH_PATH)) {
            chain.doFilter(req, res);
            return;
        }

        String ip = req.getRemoteAddr();

        // 0) Temporarily banned IPs are rejected with almost no work
        if (bannedIps.getIfPresent(ip) != null) {
            reject(res, 429, banSeconds);
            return;
        }

        // 1) Per-IP limit
        boolean webhook = path.startsWith("/webhook");
        long wait = webhook
        ? consume(ipBuckets, ip + "|wh", perIp * 10)
        : consume(ipBuckets, ip, perIp);
        if (wait > 0) {
            rateLimited(res, ip, wait);
            return;
        }

        // 2) Stricter limits on abusable endpoints.
        //    Key uses the matched prefix, not the full path, so /wallet/1, /wallet/2 share one bucket.
        String method = req.getMethod();
        Optional<String> authPrefix = matchPrefix(AUTH_PATHS, path);
        Optional<String> writePrefix = matchPrefix(WRITE_PATHS, path)
                .filter(p -> !READ_METHODS.contains(method) || path.startsWith("/deposit/verify"));

        Optional<String> tierKey = authPrefix.isPresent() ? authPrefix : writePrefix;
        if (tierKey.isPresent()) {
            int limit = authPrefix.isPresent() ? authPerMinute : writePerMinute;
            wait = consume(sensitiveBuckets, ip + "|" + tierKey.get(), limit);
            if (wait > 0) {
                rateLimited(res, ip, wait);
                return;
            }
        }

        // 3) Concurrency gates: protect CPU-heavy auth endpoints (BCrypt) and the app overall.
        boolean authTier = authPrefix.isPresent();
        if (authTier && !authConcurrency.tryAcquire()) {
            reject(res, 503, 5);
            return;
        }
        if (!concurrency.tryAcquire()) {
            if (authTier) {
                authConcurrency.release();
            }
            reject(res, 503, 5);
            return;
        }
        try {
            chain.doFilter(req, res);
        } finally {
            concurrency.release();
            if (authTier) {
                authConcurrency.release();
            }
        }
    }

    /** servletPath is decoded, normalized and has path params (;jsessionid) removed. */
    private String normalizedPath(HttpServletRequest req) {
        String path = req.getServletPath();
        String info = req.getPathInfo();
        if (info != null) {
            path = path + info;
        }
        return path.toLowerCase(Locale.ROOT);
    }

    private Optional<String> matchPrefix(List<String> prefixes, String path) {
        return prefixes.stream().filter(path::startsWith).findFirst();
    }

    /** Returns 0 if the request is allowed, otherwise the seconds to wait before retrying. */
    private long consume(Cache<String, Bucket> cache, String key, int perMinute) {
        Bucket bucket = cache.get(key, k -> Bucket.builder()
                .addLimit(Bandwidth.builder()
                        .capacity(perMinute)
                        .refillGreedy(perMinute, Duration.ofMinutes(1))
                        .build())
                .build());
        ConsumptionProbe probe = bucket.tryConsumeAndReturnRemaining(1);
        if (probe.isConsumed()) {
            return 0;
        }
        return Math.max(1, TimeUnit.NANOSECONDS.toSeconds(probe.getNanosToWaitForRefill()) + 1);
    }

    private void rateLimited(HttpServletResponse res, String ip, long retryAfter) throws IOException {
        int count = strikes.get(ip, k -> new AtomicInteger()).incrementAndGet();
        if (count >= banThreshold) {
            bannedIps.put(ip, Boolean.TRUE);
            strikes.invalidate(ip);
            log.warn("Temporarily banned IP {} after {} rate-limit violations", ip, count);
        }
        reject(res, 429, retryAfter);
    }

    private void reject(HttpServletResponse res, int status, long retryAfterSeconds) throws IOException {
        res.setStatus(status);
        res.setHeader("Retry-After", String.valueOf(retryAfterSeconds));
        res.setHeader("Cache-Control", "no-store");
        res.setCharacterEncoding(StandardCharsets.UTF_8.name());
        res.setContentType("application/json");
        res.getWriter().write("{\"error\":\"" + (status == 429 ? "too_many_requests" : "service_busy") + "\"}");
    }
}