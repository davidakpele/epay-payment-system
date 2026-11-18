package com.epay.common.config.messaging;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

/**
 * Kafka topic definitions.
 *
 * <p>Topic naming convention: {@code <domain>.<event>}
 * Each topic uses 3 partitions and a replication factor of 1 (override via
 * environment / broker defaults in production).
 */
@Configuration
public class KafkaTopicConfig {

    // ------------------------------------------------------------------ //
    //  Auth topics                                                         //
    // ------------------------------------------------------------------ //
    public static final String TOPIC_ACCOUNT_VERIFICATION  = "auth.account.verification";
    public static final String TOPIC_USER_OTP              = "auth.user.otp";
    public static final String TOPIC_SIGNUP_OTP            = "auth.signup.otp";
    public static final String TOPIC_RESET_PASSWORD        = "auth.password.reset";
    public static final String TOPIC_REGISTRATION_OTP      = "auth.registration.otp";
    public static final String TOPIC_WELCOME_MESSAGE       = "auth.welcome.message";
    public static final String TOPIC_LOGIN_ALERT           = "auth.login.alert";
    public static final String TOPIC_ACCOUNT_SECURITY      = "auth.account.security";
    public static final String TOPIC_FORGOT_PASSWORD_OTP   = "auth.forgot.password.otp";
    public static final String TOPIC_FORGOT_USERNAME       = "auth.forgot.username";

    // ------------------------------------------------------------------ //
    //  Wallet topics                                                       //
    // ------------------------------------------------------------------ //
    public static final String TOPIC_CREDIT_WALLET              = "wallet.credit";
    public static final String TOPIC_DEBIT_WALLET               = "wallet.debit";
    public static final String TOPIC_DEPOSIT_WALLET             = "wallet.deposit";
    public static final String TOPIC_MAINTENANCE_DEDUCTION      = "wallet.maintenance.deduction";
    public static final String TOPIC_MAINTENANCE_DEBT           = "wallet.maintenance.debt";
    public static final String TOPIC_SWAP_WALLET                = "wallet.swap";
    public static final String TOPIC_BLOCK_USER_WALLET          = "wallet.block.user";
    public static final String TOPIC_WALLET_PIN_ALERT           = "wallet.pin.alert";

    // ------------------------------------------------------------------ //
    //  Account topics                                                      //
    // ------------------------------------------------------------------ //
    public static final String TOPIC_ACCOUNT_STATEMENT = "account.statement";

    // ------------------------------------------------------------------ //
    //  Consumer group IDs                                                  //
    // ------------------------------------------------------------------ //
    public static final String GROUP_NOTIFICATION = "epay-notification";

    // ------------------------------------------------------------------ //
    //  Topic beans (auto-created on startup when auto-create is enabled)   //
    // ------------------------------------------------------------------ //

    // --- Auth ---

    @Bean
    public NewTopic accountVerificationTopic() {
        return TopicBuilder.name(TOPIC_ACCOUNT_VERIFICATION).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic userOtpTopic() {
        return TopicBuilder.name(TOPIC_USER_OTP).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic signupOtpTopic() {
        return TopicBuilder.name(TOPIC_SIGNUP_OTP).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic resetPasswordTopic() {
        return TopicBuilder.name(TOPIC_RESET_PASSWORD).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic registrationOtpTopic() {
        return TopicBuilder.name(TOPIC_REGISTRATION_OTP).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic welcomeMessageTopic() {
        return TopicBuilder.name(TOPIC_WELCOME_MESSAGE).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic loginAlertTopic() {
        return TopicBuilder.name(TOPIC_LOGIN_ALERT).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic accountSecurityTopic() {
        return TopicBuilder.name(TOPIC_ACCOUNT_SECURITY).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic forgotPasswordOtpTopic() {
        return TopicBuilder.name(TOPIC_FORGOT_PASSWORD_OTP).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic forgotUsernameTopic() {
        return TopicBuilder.name(TOPIC_FORGOT_USERNAME).partitions(3).replicas(1).build();
    }

    // --- Wallet ---

    @Bean
    public NewTopic creditWalletTopic() {
        return TopicBuilder.name(TOPIC_CREDIT_WALLET).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic debitWalletTopic() {
        return TopicBuilder.name(TOPIC_DEBIT_WALLET).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic depositWalletTopic() {
        return TopicBuilder.name(TOPIC_DEPOSIT_WALLET).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic maintenanceDeductionTopic() {
        return TopicBuilder.name(TOPIC_MAINTENANCE_DEDUCTION).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic maintenanceDebtTopic() {
        return TopicBuilder.name(TOPIC_MAINTENANCE_DEBT).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic swapWalletTopic() {
        return TopicBuilder.name(TOPIC_SWAP_WALLET).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic blockUserWalletTopic() {
        return TopicBuilder.name(TOPIC_BLOCK_USER_WALLET).partitions(3).replicas(1).build();
    }

    @Bean
    public NewTopic walletPinAlertTopic() {
        return TopicBuilder.name(TOPIC_WALLET_PIN_ALERT).partitions(3).replicas(1).build();
    }

    // --- Account ---

    @Bean
    public NewTopic accountStatementTopic() {
        return TopicBuilder.name(TOPIC_ACCOUNT_STATEMENT).partitions(3).replicas(1).build();
    }
}
