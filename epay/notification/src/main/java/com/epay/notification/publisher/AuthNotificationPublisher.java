package com.epay.notification.publisher;

import com.epay.common.config.messaging.KafkaTopicConfig;
import com.epay.common.interfaces.IAuthNotificationPublisher;
import com.epay.domain.notification.input.AccountSecurityNotification;
import com.epay.domain.notification.input.AccountVerificationNotification;
import com.epay.domain.notification.input.ForgotPasswordOtpNotification;
import com.epay.domain.notification.input.ForgotUsernameNotification;
import com.epay.domain.notification.input.LoginAlertNotification;
import com.epay.domain.notification.input.OTPOnSignUp;
import com.epay.domain.notification.input.StatementPayload;
import com.epay.domain.notification.input.TwoFactorOtpNotification;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthNotificationPublisher implements IAuthNotificationPublisher {

    private final KafkaTemplate<String, Object> kafkaTemplate;

    @Override
    public void publishVerificationEmail(String email, String content, String link, String username) {
        AccountVerificationNotification payload = AccountVerificationNotification.builder()
                .email(email).content(content).link(link).username(username).build();
        send(KafkaTopicConfig.TOPIC_ACCOUNT_VERIFICATION, email, payload);
    }

    @Override
    public void publishLoginAlert(String email, String fullName, String username,
                                   String loginTime, String ipAddress, String deviceInfo,
                                   String supportPhone, String supportEmail) {
        LoginAlertNotification payload = LoginAlertNotification.builder()
                .email(email).fullName(fullName).username(username)
                .loginTime(loginTime).ipAddress(ipAddress).deviceInfo(deviceInfo)
                .supportPhone(supportPhone).supportEmail(supportEmail).build();
        send(KafkaTopicConfig.TOPIC_LOGIN_ALERT, email, payload);
    }

    @Override
    public void publishTwoFactorOtp(String email, String otp,
                                     String resetPasswordUrl, String config2faUrl,
                                     String config2faRecoveryUrl) {
        TwoFactorOtpNotification payload = TwoFactorOtpNotification.builder()
                .email(email).otp(otp)
                .resetPasswordUrl(resetPasswordUrl)
                .config2faUrl(config2faUrl)
                .config2faRecoveryUrl(config2faRecoveryUrl).build();
        send(KafkaTopicConfig.TOPIC_USER_OTP, email, payload);
    }

    @Override
    public void publishForgotPasswordOtp(String email, String username, String otp) {
        ForgotPasswordOtpNotification payload = ForgotPasswordOtpNotification.builder()
                .email(email).username(username).otp(otp).build();
        send(KafkaTopicConfig.TOPIC_FORGOT_PASSWORD_OTP, email, payload);
    }

    @Override
    public void publishAccountSecurityAlert(String email, String fullName, String username,
                                             String eventType, String eventTime,
                                             String ipAddress, String deviceInfo,
                                             String supportPhone, String supportEmail) {
        AccountSecurityNotification payload = AccountSecurityNotification.builder()
                .email(email).fullName(fullName).username(username)
                .eventType(eventType).eventTime(eventTime)
                .ipAddress(ipAddress).deviceInfo(deviceInfo)
                .supportPhone(supportPhone).supportEmail(supportEmail).build();
        send(KafkaTopicConfig.TOPIC_ACCOUNT_SECURITY, email, payload);
    }

    @Override
    public void publishForgotUsername(String email, String username, String fullName) {
        ForgotUsernameNotification payload = ForgotUsernameNotification.builder()
                .email(email).username(username).fullName(fullName).build();
        send(KafkaTopicConfig.TOPIC_FORGOT_USERNAME, email, payload);
    }

    @Override
    public void publishAccountStatement(String email, String username, byte[] pdfBytes, String period) {
        StatementPayload payload = new StatementPayload(email, username, pdfBytes, period);
        send(KafkaTopicConfig.TOPIC_ACCOUNT_STATEMENT, email, payload);
    }

    @Override
    public void publishNewUserOTPVerification(String email, String otp) {
        OTPOnSignUp payload = new OTPOnSignUp(otp, email);
        send(KafkaTopicConfig.TOPIC_SIGNUP_OTP, email, payload);
    }

    private void send(String topic, String key, Object payload) {
        kafkaTemplate.send(topic, key, payload)
                .whenComplete((result, ex) -> {
                    if (ex != null) {
                        log.error("[AuthNotification] Failed to publish to topic={}: {}", topic, ex.getMessage());
                    } else {
                        log.info("[AuthNotification] Published to topic={} partition={} offset={}",
                                topic,
                                result.getRecordMetadata().partition(),
                                result.getRecordMetadata().offset());
                    }
                });
    }
}
