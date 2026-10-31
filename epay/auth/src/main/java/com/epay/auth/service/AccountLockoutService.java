package com.epay.auth.service;

import com.epay.auth.config.LockoutProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.Instant;
import java.util.Map;

@Service
@Slf4j
@RequiredArgsConstructor
public class AccountLockoutService {

    private static final String KEY_FAIL   = "epay:lockout:fail:%d";
    private static final String KEY_LOCKED = "epay:lockout:locked:%d";
    private static final String KEY_LEVEL  = "epay:lockout:level:%d";
    private static final String KEY_IPS    = "epay:lockout:ips:%d";

    private final StringRedisTemplate stringRedisTemplate;
    private final LockoutProperties lockoutProperties;

    public LockoutStatus checkLockout(Long userId) {
        String key = String.format(KEY_LOCKED, userId);
        try {
            Map<Object, Object> hash = stringRedisTemplate.opsForHash().entries(key);
            if (hash == null || hash.isEmpty()) {
                return new LockoutStatus(false, 0, 0, null, 0);
            }
            long lockedUntil = Long.parseLong(String.valueOf(hash.getOrDefault("lockedUntilEpoch", "0")));
            long now = Instant.now().getEpochSecond();
            long remaining = Math.max(0L, lockedUntil - now);
            int level = Integer.parseInt(String.valueOf(hash.getOrDefault("level", "1")));
            String lastIp = String.valueOf(hash.getOrDefault("lastIp", ""));
            return new LockoutStatus(true, remaining, lockedUntil, lastIp, level);
        } catch (Exception e) {
            log.warn("[Lockout] checkLockout failed for userId={}: {}", userId, e.getMessage());
            return new LockoutStatus(false, 0, 0, null, 0);
        }
    }

    public void recordFailedAttempt(Long userId, String ip) {
        try {
            String failKey   = String.format(KEY_FAIL, userId);
            String levelKey  = String.format(KEY_LEVEL, userId);
            String lockedKey = String.format(KEY_LOCKED, userId);
            String ipsKey    = String.format(KEY_IPS, userId);

            Long count = stringRedisTemplate.opsForValue().increment(failKey);
            if (count == 1L) {
                stringRedisTemplate.expire(failKey, Duration.ofMinutes(lockoutProperties.getFailWindowMinutes()));
            }

            stringRedisTemplate.opsForList().leftPush(ipsKey, ip != null ? ip : "unknown");
            stringRedisTemplate.opsForList().trim(ipsKey, 0, lockoutProperties.getRecentIps() - 1);
            stringRedisTemplate.expire(ipsKey, Duration.ofMinutes(lockoutProperties.getFailWindowMinutes()));

            if (count != null && count == lockoutProperties.getMaxAttempts()) {
                Long rawLevel = stringRedisTemplate.opsForValue().increment(levelKey);
                if (rawLevel == 1L) {
                    stringRedisTemplate.expire(levelKey, Duration.ofHours(lockoutProperties.getLevelTtlHours()));
                }
                int level = rawLevel != null ? rawLevel.intValue() : 1;
                long durationMinutes = lockoutProperties.durationMinutes(level);
                long now = Instant.now().getEpochSecond();
                long lockedUntil = now + durationMinutes * 60L;

                Map<String, String> lockData = new java.util.LinkedHashMap<>();
                lockData.put("level", String.valueOf(level));
                lockData.put("lockedAtEpoch", String.valueOf(now));
                lockData.put("lockedUntilEpoch", String.valueOf(lockedUntil));
                lockData.put("lastIp", ip != null ? ip : "unknown");

                stringRedisTemplate.opsForHash().putAll(lockedKey, lockData);
                stringRedisTemplate.expire(lockedKey, Duration.ofMinutes(durationMinutes));
                stringRedisTemplate.delete(failKey);
                log.warn("[Lockout] Account locked userId={} level={} durationMinutes={} ip={}", userId, level, durationMinutes, ip);
            }
        } catch (Exception e) {
            log.warn("[Lockout] recordFailedAttempt failed for userId={}: {}", userId, e.getMessage());
        }
    }

    public void resetOnSuccess(Long userId) {
        try {
            stringRedisTemplate.delete(String.format(KEY_FAIL, userId));
            stringRedisTemplate.delete(String.format(KEY_LEVEL, userId));
            stringRedisTemplate.delete(String.format(KEY_IPS, userId));
            log.debug("[Lockout] Reset lockout state for userId={}", userId);
        } catch (Exception e) {
            log.warn("[Lockout] resetOnSuccess failed for userId={}: {}", userId, e.getMessage());
        }
    }
}
