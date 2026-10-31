package com.epay.auth.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "epay.security.lockout")
@Getter
@Setter
public class LockoutProperties {

    private boolean enabled = true;
    private int maxAttempts = 3;
    private long baseDurationMinutes = 20;
    private long stepMinutes = 15;
    private long maxDurationMinutes = 1440;
    private long failWindowMinutes = 30;
    private long levelTtlHours = 24;
    private int recentIps = 5;

    public long durationMinutes(int level) {
        return Math.min(maxDurationMinutes, baseDurationMinutes + (long)(level - 1) * stepMinutes);
    }
}
