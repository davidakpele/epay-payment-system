package com.epay.notification.listener;

import com.epay.common.config.messaging.KafkaTopicConfig;
import com.epay.domain.notification.input.AccountSecurityNotification;
import com.epay.domain.notification.input.AccountVerificationNotification;
import com.epay.domain.notification.input.ForgotPasswordOtpNotification;
import com.epay.domain.notification.input.ForgotUsernameNotification;
import com.epay.domain.notification.input.LoginAlertNotification;
import com.epay.domain.notification.input.OTPOnSignUp;
import com.epay.domain.notification.input.TwoFactorOtpNotification;
import com.epay.notification.service.AuthenticationNotificationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthNotificationListener {

    private final AuthenticationNotificationService notificationService;

    @KafkaListener(
            topics = KafkaTopicConfig.TOPIC_ACCOUNT_VERIFICATION,
            groupId = KafkaTopicConfig.GROUP_NOTIFICATION,
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void onVerificationEmail(AccountVerificationNotification payload) {
        if (payload == null) { log.warn("[AuthListener] Null payload on account-verification topic"); return; }
        notificationService.sendVerificationEmail(
                payload.getEmail(), payload.getContent(),
                payload.getLink(), payload.getUsername());
    }

    @KafkaListener(
            topics = KafkaTopicConfig.TOPIC_LOGIN_ALERT,
            groupId = KafkaTopicConfig.GROUP_NOTIFICATION,
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void onLoginAlert(LoginAlertNotification payload) {
        if (payload == null) { log.warn("[AuthListener] Null payload on login-alert topic"); return; }
        notificationService.sendLoginAlertNotification(
                payload.getEmail(), payload.getFullName(), payload.getUsername(),
                payload.getLoginTime(), payload.getIpAddress(), payload.getDeviceInfo(),
                payload.getSupportPhone(), payload.getSupportEmail());
    }

    @KafkaListener(
            topics = KafkaTopicConfig.TOPIC_USER_OTP,
            groupId = KafkaTopicConfig.GROUP_NOTIFICATION,
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void onTwoFactorOtp(TwoFactorOtpNotification payload) {
        if (payload == null) { log.warn("[AuthListener] Null payload on user-otp topic"); return; }
        notificationService.sendOptEmail(
                payload.getEmail(), payload.getOtp(),
                payload.getResetPasswordUrl(), payload.getConfig2faUrl(),
                payload.getConfig2faRecoveryUrl());
    }

    @KafkaListener(
            topics = KafkaTopicConfig.TOPIC_SIGNUP_OTP,
            groupId = KafkaTopicConfig.GROUP_NOTIFICATION,
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void onSignUpOtp(OTPOnSignUp payload) {
        if (payload == null) { log.warn("[AuthListener] Null payload on signup-otp topic"); return; }
        notificationService.sendVerificationOptEmail(payload.getEmail(), payload.getOtp());
    }

    @KafkaListener(
            topics = KafkaTopicConfig.TOPIC_FORGOT_PASSWORD_OTP,
            groupId = KafkaTopicConfig.GROUP_NOTIFICATION,
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void onForgotPasswordOtp(ForgotPasswordOtpNotification payload) {
        if (payload == null) { log.warn("[AuthListener] Null payload on forgot-password-otp topic"); return; }
        notificationService.sendForgotPasswordOtp(
                payload.getEmail(), payload.getUsername(), payload.getOtp());
    }

    @KafkaListener(
            topics = KafkaTopicConfig.TOPIC_ACCOUNT_SECURITY,
            groupId = KafkaTopicConfig.GROUP_NOTIFICATION,
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void onAccountSecurity(AccountSecurityNotification payload) {
        if (payload == null) { log.warn("[AuthListener] Null payload on account-security topic"); return; }
        notificationService.sendAccountSecurityAlert(
                payload.getEmail(), payload.getFullName(), payload.getUsername(),
                payload.getEventType(), payload.getEventTime(),
                payload.getIpAddress(), payload.getDeviceInfo(),
                payload.getSupportPhone(), payload.getSupportEmail());
    }

    @KafkaListener(
            topics = KafkaTopicConfig.TOPIC_FORGOT_USERNAME,
            groupId = KafkaTopicConfig.GROUP_NOTIFICATION,
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void onForgotUsername(ForgotUsernameNotification payload) {
        if (payload == null) { log.warn("[AuthListener] Null payload on forgot-username topic"); return; }
        notificationService.sendForgotUsernameEmail(
                payload.getEmail(), payload.getUsername(), payload.getFullName());
    }
}
