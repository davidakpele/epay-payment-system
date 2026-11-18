package com.epay.auth.service;

import com.epay.auth.interfaces.IMessagingService;
import com.epay.common.interfaces.IAuthNotificationPublisher;
import com.epay.domain.auth.dto.OTPData;
import com.epay.domain.auth.enums.ContactMethod;
import com.epay.domain.auth.enums.OTPType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationContext;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class MessagingService implements IMessagingService {

    private static final Duration     OTP_TTL              = Duration.ofMinutes(10);
    private static final String       OTP_PREFIX           = "otp:";
    private static final int          DEFAULT_OTP_LENGTH   = 6;
    private static final long         DEFAULT_OTP_EXPIRY_MIN = 10;
    private static final SecureRandom RANDOM               = new SecureRandom();

    private static final String NUMERIC          = "0123456789";
    private static final String ALPHANUMERIC     = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final String ALPHANUMERIC_LOW = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    private static final ConcurrentHashMap<String, OTPData> OTP_STORE = new ConcurrentHashMap<>();

    private final RedisTemplate<String, Object> redisTemplate;
    private final IAuthNotificationPublisher    notificationPublisher;

    /**
     * ApplicationContext lets us look up the Spring proxy of this bean lazily,
     * which is the only way to invoke @Async methods on 'this' without
     * introducing a circular dependency via self-injection.
     */
    private final ApplicationContext applicationContext;

    // ------------------------------------------------------------------ //
    //  Public send methods                                                 //
    // ------------------------------------------------------------------ //

    @Override
    public void sendSmSMessage(String phoneNumber) {
        String otp = generateAndStore(phoneNumber, OTPType.NUMERIC, DEFAULT_OTP_LENGTH, DEFAULT_OTP_EXPIRY_MIN);
        proxy().dispatchNotification(phoneNumber, otp, "SMS");
    }

    @Override
    public void sendWhatsAppMessage(String phoneNumber) {
        String otp = generateAndStore(phoneNumber, OTPType.NUMERIC, DEFAULT_OTP_LENGTH, DEFAULT_OTP_EXPIRY_MIN);
        proxy().dispatchNotification(phoneNumber, otp, "WhatsApp");
    }

    @Override
    public void sendEmailMessage(String email) {
        String otp = generateAndStore(email, OTPType.NUMERIC, DEFAULT_OTP_LENGTH, DEFAULT_OTP_EXPIRY_MIN);
        log.info("[Messaging] OTP generated for email={} — dispatching via Kafka", mask(email));
        proxy().dispatchNotification(email, otp, "EMAIL");
    }

    @Override
    public void sendWelcomeMessage(String recipient, String username, ContactMethod method) {
        proxy().dispatchWelcome(recipient, username, method);
    }

    // ------------------------------------------------------------------ //
    //  Async dispatch — must be called through the proxy to honour @Async  //
    // ------------------------------------------------------------------ //

    @Async("taskExecutor")
    public void dispatchNotification(String identifier, String otp, String channel) {
        try {
            notificationPublisher.publishNewUserOTPVerification(identifier, otp);
            log.info("[Messaging] {} OTP Kafka publish succeeded for identifier={}", channel, mask(identifier));
        } catch (Exception e) {
            log.error("[Messaging] {} OTP Kafka publish FAILED for identifier={}: {}",
                    channel, mask(identifier), e.getMessage(), e);
        }
    }

    @Async("taskExecutor")
    public void dispatchWelcome(String recipient, String username, ContactMethod method) {
        try {
            switch (method) {
                case EMAIL -> notificationPublisher.publishVerificationEmail(
                        recipient,
                        "Welcome to ePay, " + username + "! Your account has been created successfully.",
                        null,
                        username);
                case SMS, WHATSAPP -> notificationPublisher.publishNewUserOTPVerification(recipient, username);
                default -> log.warn("[Messaging] Unknown contact method={} for welcome message", method);
            }
            log.info("[Messaging] Welcome message dispatched to={} via={}", mask(recipient), method);
        } catch (Exception e) {
            log.error("[Messaging] Welcome notification FAILED for recipient={}: {}",
                    mask(recipient), e.getMessage(), e);
        }
    }

    // ------------------------------------------------------------------ //
    //  OTP verification                                                    //
    // ------------------------------------------------------------------ //

    @Override
    public boolean verifyOTP(String identifier, String otpToVerify) {
        String key = normalizeIdentifier(identifier);
        try {
            Object stored = redisTemplate.opsForValue().get(OTP_PREFIX + key);
            if (stored != null) {
                boolean valid = stored.toString().equals(otpToVerify);
                if (valid) invalidateOTP(identifier);
                return valid;
            }
            OTPData data = OTP_STORE.get(key);
            if (data != null && data.isValid() && data.getOtp().equals(otpToVerify)) {
                data.setUsed(true);
                invalidateOTP(identifier);
                return true;
            }
            log.debug("[Messaging] No valid OTP found for identifier={}", mask(identifier));
            return false;
        } catch (Exception e) {
            log.warn("[Messaging] Redis verify failed for identifier={}: {}", mask(identifier), e.getMessage());
            return false;
        }
    }

    @Override
    public void invalidateOTP(String identifier) {
        String key = normalizeIdentifier(identifier);
        try {
            redisTemplate.delete(OTP_PREFIX + key);
        } catch (Exception e) {
            log.warn("[Messaging] Redis delete failed for identifier={}: {}", mask(identifier), e.getMessage());
        }
        OTP_STORE.remove(key);
    }

    // ------------------------------------------------------------------ //
    //  OTP generation and storage                                         //
    // ------------------------------------------------------------------ //

    public String generateAndStore(String identifier, OTPType type, int length, long expiryMinutes) {
        String key   = normalizeIdentifier(identifier);
        String otp   = generateOTP(type, length);
        LocalDateTime expiry = LocalDateTime.now().plusMinutes(expiryMinutes);
        try {
            redisTemplate.opsForValue().set(OTP_PREFIX + key, otp, OTP_TTL);
            log.info("[Messaging] OTP stored in Redis for identifier={}", mask(identifier));
        } catch (Exception e) {
            log.warn("[Messaging] Redis store failed for identifier={} — using in-memory fallback: {}",
                    mask(identifier), e.getMessage());
        }
        OTP_STORE.put(key, new OTPData(otp, expiry, key, false));
        if (RANDOM.nextInt(100) < 5) {
            OTP_STORE.entrySet().removeIf(entry -> entry.getValue().isExpired());
        }
        return otp;
    }

    public String generateAndStoreDefault(String identifier) {
        return generateAndStore(identifier, OTPType.NUMERIC, DEFAULT_OTP_LENGTH, DEFAULT_OTP_EXPIRY_MIN);
    }

    public static String generateOTP(OTPType type, int length) {
        return switch (type) {
            case NUMERIC            -> generateNumericOTP(length);
            case ALPHANUMERIC       -> generateAlphanumericOTP(length, false);
            case ALPHANUMERIC_LOWER -> generateAlphanumericOTP(length, true);
        };
    }

    private static String generateNumericOTP(int length) {
        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++) sb.append(NUMERIC.charAt(RANDOM.nextInt(NUMERIC.length())));
        return sb.toString();
    }

    private static String generateAlphanumericOTP(int length, boolean lowercase) {
        String chars = lowercase ? ALPHANUMERIC_LOW : ALPHANUMERIC;
        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++) sb.append(chars.charAt(RANDOM.nextInt(chars.length())));
        return sb.toString();
    }

    // ------------------------------------------------------------------ //
    //  Utilities                                                           //
    // ------------------------------------------------------------------ //

    /** Returns the Spring CGLIB proxy of this bean so @Async is honoured. */
    private MessagingService proxy() {
        return applicationContext.getBean(MessagingService.class);
    }

    public static String normalizeIdentifier(String identifier) {
        if (identifier == null) return null;
        String trimmed = identifier.trim();
        if (trimmed.matches("^\\+?\\d{7,15}$")) {
            return trimmed.startsWith("+") ? trimmed : "+" + trimmed;
        }
        return trimmed.toLowerCase();
    }

    private static String mask(String value) {
        if (value == null || value.length() < 4) return "***";
        return value.substring(0, 3) + "***";
    }
}
