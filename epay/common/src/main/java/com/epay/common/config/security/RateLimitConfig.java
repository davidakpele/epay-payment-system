package com.epay.common.config.security;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "epay.rate-limit")
public class RateLimitConfig {

    private BucketConfig defaultBucket = new BucketConfig();
    private Map<String, BucketConfig> routes = new HashMap<>();

    @Getter
    @Setter
    public static class BucketConfig {
        private int capacity = 100;
        private long refillTokens = 10;
        private long refillPeriodSeconds = 1;
    }
}
