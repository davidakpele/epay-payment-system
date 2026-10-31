package com.epay.common.config.security;

import com.epay.common.exception.ErrorCode;
import com.epay.common.exception.ErrorResponse;
import com.epay.common.interfaces.IRateLimitService;
import com.epay.common.interfaces.RateLimitResult;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.Duration;
import java.time.Instant;
import java.util.UUID;

@Slf4j
@Component
@RequiredArgsConstructor
public class RateLimitingFilter extends OncePerRequestFilter {

    private final IRateLimitService rateLimitService;
    private final RateLimitConfig config;
    private final ObjectMapper objectMapper;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain chain) throws ServletException, IOException {
        String ip = extractIp(request);
        String group = resolveGroup(request.getRequestURI());
        if (group == null) group = "default";

        RateLimitConfig.BucketConfig bc = config.getRoutes().getOrDefault(group, config.getDefaultBucket());
        String key = "epay:rl:bucket:" + group + ":" + ip;

        try {
            RateLimitResult result = rateLimitService.tryConsumeWithRetry(
                    key,
                    bc.getCapacity(),
                    bc.getRefillTokens(),
                    Duration.ofSeconds(bc.getRefillPeriodSeconds()));

            long secondsToReset;
            if (result.consumed()) {
                secondsToReset = bc.getRefillPeriodSeconds();
            } else {
                secondsToReset = result.retryAfterSeconds();
            }

            response.setHeader("X-RateLimit-Limit", String.valueOf(bc.getCapacity()));
            response.setHeader("X-RateLimit-Remaining", String.valueOf(result.remainingTokens()));
            response.setHeader("X-RateLimit-Reset", String.valueOf(Instant.now().getEpochSecond() + secondsToReset));

            if (result.consumed()) {
                chain.doFilter(request, response);
            } else {
                log.warn("[RATE] Bucket empty ip={} group={} path={} retryAfter={}",
                        ip, group, request.getRequestURI(), result.retryAfterSeconds());
                rejectTooManyRequests(request, response, result.retryAfterSeconds());
            }
        } catch (Exception e) {
            log.error("[RATE] Bucket error ip={} path={}: {}", ip, request.getRequestURI(), e.getMessage());
            chain.doFilter(request, response);
        }
    }

    private void rejectTooManyRequests(HttpServletRequest request, HttpServletResponse response,
                                        long retryAfterSeconds) throws IOException {
        ErrorResponse body = ErrorResponse.builder()
                .success(false)
                .errorId(UUID.randomUUID().toString())
                .errorCode(ErrorCode.RATE_LIMIT_EXCEEDED)
                .message("Too many requests. Please wait and retry.")
                .timestamp(Instant.now())
                .path(request.getRequestURI())
                .status(HttpStatus.TOO_MANY_REQUESTS.value())
                .retryAfter(retryAfterSeconds)
                .build();

        response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Retry-After", String.valueOf(retryAfterSeconds));
        objectMapper.writeValue(response.getWriter(), body);
    }

    private String resolveGroup(String uri) {
        if (uri.startsWith("/auth/"))   return "auth";
        if (uri.startsWith("/wallet/")) return "wallet";
        if (uri.startsWith("/user/"))   return "user";
        return null;
    }

    private String extractIp(HttpServletRequest request) {
        String xff = request.getHeader("X-Forwarded-For");
        if (xff != null && !xff.isBlank()) return xff.split(",")[0].trim();
        String xri = request.getHeader("X-Real-IP");
        if (xri != null && !xri.isBlank()) return xri.trim();
        return request.getRemoteAddr();
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        String path = request.getRequestURI();
        return path.equals("/actuator/health")
                || path.startsWith("/static/")
                || path.startsWith("/swagger-ui")
                || path.startsWith("/v3/api-docs");
    }
}
