package com.epay.common.config.messaging;

public final class KafkaTopicConfig {

    private KafkaTopicConfig() {}

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

    public static final String TOPIC_CREDIT_WALLET         = "wallet.credit";
    public static final String TOPIC_DEBIT_WALLET          = "wallet.debit";
    public static final String TOPIC_DEPOSIT_WALLET        = "wallet.deposit";
    public static final String TOPIC_MAINTENANCE_DEDUCTION = "wallet.maintenance.deduction";
    public static final String TOPIC_MAINTENANCE_DEBT      = "wallet.maintenance.debt";
    public static final String TOPIC_SWAP_WALLET           = "wallet.swap";
    public static final String TOPIC_BLOCK_USER_WALLET     = "wallet.block.user";
    public static final String TOPIC_WALLET_PIN_ALERT      = "wallet.pin.alert";

    public static final String TOPIC_ACCOUNT_STATEMENT     = "account.statement";

    public static final String GROUP_NOTIFICATION          = "epay-notification";
}
