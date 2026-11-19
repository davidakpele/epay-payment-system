package com.epay.notification.publisher;

import com.epay.common.interfaces.IAuthNotificationPublisher;
import com.epay.domain.notification.input.StatementPayload;
import com.epay.notification.service.AuthenticationNotificationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthNotificationPublisher implements IAuthNotificationPublisher {

    private final AuthenticationNotificationService notificationService;

    @Override
    public void publishVerificationEmail(String email, String content, String link, String username) {
        notificationService.sendVerificationEmail(email, content, link, username);
    }

    @Override
    public void publishLoginAlert(String email, String fullName, String username,
                                   String loginTime, String ipAddress, String deviceInfo,
                                   String supportPhone, String supportEmail) {
        notificationService.sendLoginAlertNotification(
                email, fullName, username, loginTime, ipAddress, deviceInfo, supportPhone, supportEmail);
    }

    @Override
    public void publishTwoFactorOtp(String email, String otp,
                                     String resetPasswordUrl, String config2faUrl,
                                     String config2faRecoveryUrl) {
        notificationService.sendOptEmail(email, otp, resetPasswordUrl, config2faUrl, config2faRecoveryUrl);
    }

    @Override
    public void publishNewUserOTPVerification(String email, String otp) {
        notificationService.sendVerificationOptEmail(email, otp);
    }

    @Override
    public void publishForgotPasswordOtp(String email, String username, String otp) {
        notificationService.sendForgotPasswordOtp(email, username, otp);
    }

    @Override
    public void publishAccountSecurityAlert(String email, String fullName, String username,
                                             String eventType, String eventTime,
                                             String ipAddress, String deviceInfo,
                                             String supportPhone, String supportEmail) {
        notificationService.sendAccountSecurityAlert(
                email, fullName, username, eventType, eventTime, ipAddress, deviceInfo, supportPhone, supportEmail);
    }

    @Override
    public void publishForgotUsername(String email, String username, String fullName) {
        notificationService.sendForgotUsernameEmail(email, username, fullName);
    }

    @Override
    public void publishAccountStatement(String email, String username, byte[] pdfBytes, String period) {
        notificationService.sendBankStatementEmail(email, username, pdfBytes, period);
    }
}
