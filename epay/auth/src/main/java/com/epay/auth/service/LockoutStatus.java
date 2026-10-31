package com.epay.auth.service;

public record LockoutStatus(boolean locked, long retryAfterSeconds, long lockedUntilEpoch, String lastIp, int level) {}
