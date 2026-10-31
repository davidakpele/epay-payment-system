package com.epay.common.interfaces;

public record RateLimitResult(boolean consumed, long remainingTokens, long retryAfterSeconds) {}
