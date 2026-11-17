package com.epay.notification.listener;

import com.epay.common.config.messaging.KafkaTopicConfig;
import com.epay.domain.notification.input.BlockUserWallet;
import com.epay.domain.notification.input.CreditWalletNotification;
import com.epay.domain.notification.input.DebitWalletNotification;
import com.epay.domain.notification.input.DepositWalletNotification;
import com.epay.domain.notification.input.MaintenanceDebtNotification;
import com.epay.domain.notification.input.MaintenanceDeductionNotification;
import com.epay.domain.notification.input.StatementPayload;
import com.epay.domain.notification.input.SwapCurrencyPayload;
import com.epay.domain.notification.input.WalletPinNotification;
import com.epay.notification.service.WalletNotificationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class WalletNotificationListener {

    private final WalletNotificationService walletNotificationService;

    @KafkaListener(
            topics = KafkaTopicConfig.TOPIC_CREDIT_WALLET,
            groupId = KafkaTopicConfig.GROUP_NOTIFICATION,
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void onCreditWallet(CreditWalletNotification payload) {
        if (payload == null) { log.warn("[WalletListener] Null payload on credit-wallet topic"); return; }
        walletNotificationService.createCreditNotification(
                payload.getRecipientEmail(), payload.getTransferAmount(),
                payload.getSenderFullName(), payload.getReceiverFullName(),
                payload.getRecipientTotalBalance(), payload.getCurrency(),
                payload.getTransactionId(), payload.getPreviousBalance());
    }

    @KafkaListener(
            topics = KafkaTopicConfig.TOPIC_DEBIT_WALLET,
            groupId = KafkaTopicConfig.GROUP_NOTIFICATION,
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void onDebitWallet(DebitWalletNotification payload) {
        if (payload == null) { log.warn("[WalletListener] Null payload on debit-wallet topic"); return; }
        walletNotificationService.createDebitNotification(
                payload.getSenderEmail(), payload.getFeeAmount(),
                payload.getTransferAmount(), payload.getSenderFullName(),
                payload.getReceiverFullName(), payload.getBalance(),
                payload.getCurrency(), payload.getTransactionId(),
                payload.getPreviousBalance());
    }

    @KafkaListener(
            topics = KafkaTopicConfig.TOPIC_DEPOSIT_WALLET,
            groupId = KafkaTopicConfig.GROUP_NOTIFICATION,
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void onDepositWallet(DepositWalletNotification payload) {
        if (payload == null) { log.warn("[WalletListener] Null payload on deposit-wallet topic"); return; }
        walletNotificationService.createDepositNotification(
                payload.getRecipientEmail(), payload.getRecipientName(),
                payload.getDepositAmount(), payload.getAmount(),
                payload.getAccountHolder(), payload.getAvailableBalance(),
                payload.getPreviousBalance(), payload.getTerminalNumber(),
                payload.getCurrencySymbol());
    }

    @KafkaListener(
            topics = KafkaTopicConfig.TOPIC_MAINTENANCE_DEDUCTION,
            groupId = KafkaTopicConfig.GROUP_NOTIFICATION,
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void onMaintenanceDeduction(MaintenanceDeductionNotification payload) {
        if (payload == null) { log.warn("[WalletListener] Null payload on maintenance-deduction topic"); return; }
        walletNotificationService.createMaintenanceNotification(payload);
    }

    @KafkaListener(
            topics = KafkaTopicConfig.TOPIC_MAINTENANCE_DEBT,
            groupId = KafkaTopicConfig.GROUP_NOTIFICATION,
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void onMaintenanceDebt(MaintenanceDebtNotification payload) {
        if (payload == null) { log.warn("[WalletListener] Null payload on maintenance-debt topic"); return; }
        walletNotificationService.createMaintenanceDebtNotification(payload);
    }

    @KafkaListener(
            topics = KafkaTopicConfig.TOPIC_SWAP_WALLET,
            groupId = KafkaTopicConfig.GROUP_NOTIFICATION,
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void onSwapWallet(SwapCurrencyPayload payload) {
        if (payload == null) { log.warn("[WalletListener] Null payload on swap-wallet topic"); return; }
        walletNotificationService.createSwapNotification(payload);
    }

    @KafkaListener(
            topics = KafkaTopicConfig.TOPIC_BLOCK_USER_WALLET,
            groupId = KafkaTopicConfig.GROUP_NOTIFICATION,
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void onBlockUserWallet(BlockUserWallet payload) {
        if (payload == null) { log.warn("[WalletListener] Null payload on block-user-wallet topic"); return; }
        walletNotificationService.createBlockUserWalletNotification(
                payload.getEmail(), payload.getFirstName(),
                payload.getLastName(), payload.getMessage());
    }

    @KafkaListener(
            topics = KafkaTopicConfig.TOPIC_WALLET_PIN_ALERT,
            groupId = KafkaTopicConfig.GROUP_NOTIFICATION,
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void onWalletPinAlert(WalletPinNotification payload) {
        if (payload == null) { log.warn("[WalletListener] Null payload on wallet-pin-alert topic"); return; }
        walletNotificationService.createWalletPinAlert(payload);
    }

    @KafkaListener(
            topics = KafkaTopicConfig.TOPIC_ACCOUNT_STATEMENT,
            groupId = KafkaTopicConfig.GROUP_NOTIFICATION,
            containerFactory = "kafkaListenerContainerFactory"
    )
    public void onAccountStatement(StatementPayload payload) {
        if (payload == null) { log.warn("[WalletListener] Null payload on account-statement topic"); return; }
        walletNotificationService.sendAccountStatement(payload);
    }
}
