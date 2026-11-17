package com.epay.notification.publisher;

import com.epay.common.config.messaging.KafkaTopicConfig;
import com.epay.common.interfaces.IWalletNotificationPublisher;
import com.epay.domain.notification.input.BlockUserWallet;
import com.epay.domain.notification.input.CreditWalletNotification;
import com.epay.domain.notification.input.DebitWalletNotification;
import com.epay.domain.notification.input.DepositWalletNotification;
import com.epay.domain.notification.input.MaintenanceDebtNotification;
import com.epay.domain.notification.input.MaintenanceDeductionNotification;
import com.epay.domain.notification.input.StatementPayload;
import com.epay.domain.notification.input.SwapCurrencyPayload;
import com.epay.domain.notification.input.WalletPinNotification;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.OffsetDateTime;

@Slf4j
@Service
@RequiredArgsConstructor
public class WalletNotificationMessageProducer implements IWalletNotificationPublisher {

    private final KafkaTemplate<String, Object> kafkaTemplate;

    @Override
    public void publishCreditNotification(String recipientEmail, BigDecimal transferAmount,
                                          String senderFullName, String receiverFullName,
                                          BigDecimal recipientTotalBalance, String currency,
                                          String transactionId, BigDecimal previousBalance) {
        send(KafkaTopicConfig.TOPIC_CREDIT_WALLET, transactionId,
                new CreditWalletNotification(recipientEmail, transferAmount, senderFullName,
                        receiverFullName, recipientTotalBalance, currency, transactionId, previousBalance));
    }

    @Override
    public void publishDebitNotification(String senderEmail, BigDecimal feeAmount,
                                         BigDecimal transferAmount, String senderFullName,
                                         String receiverFullName, BigDecimal balance,
                                         String currency, String transactionId,
                                         BigDecimal previousBalance) {
        send(KafkaTopicConfig.TOPIC_DEBIT_WALLET, transactionId,
                new DebitWalletNotification(senderEmail, feeAmount, transferAmount,
                        senderFullName, receiverFullName, balance, currency, transactionId, previousBalance));
    }

    @Override
    public void publishDepositNotification(String recipientEmail, String recipientName,
                                           BigDecimal depositAmount, BigDecimal amount,
                                           String accountHolder, BigDecimal availableBalance,
                                           BigDecimal previousBalance, String terminalNumber,
                                           String currencySymbol) {
        send(KafkaTopicConfig.TOPIC_DEPOSIT_WALLET, recipientEmail,
                new DepositWalletNotification(recipientEmail, recipientName, depositAmount,
                        amount, previousBalance, availableBalance, terminalNumber, accountHolder, currencySymbol));
    }

    @Override
    public void publishMaintenanceNotification(String actionType, BigDecimal availableBalance,
                                               String currency, BigDecimal feeAmount,
                                               BigDecimal previousBalance, String reason,
                                               Boolean success, OffsetDateTime timestamp,
                                               BigDecimal totalAmountSpent, String userEmail,
                                               String userFirstName, Long userId, String userLastName) {
        send(KafkaTopicConfig.TOPIC_MAINTENANCE_DEDUCTION, userEmail,
                new MaintenanceDeductionNotification(actionType, availableBalance, currency,
                        feeAmount, previousBalance, reason, success, timestamp,
                        totalAmountSpent, userEmail, userFirstName, userId, userLastName));
    }

    @Override
    public void publishSwapNotification(String email, BigDecimal amount, String name,
                                        BigDecimal availableBalance, BigDecimal previousBalance,
                                        String currency, String currencyExchange) {
        SwapCurrencyPayload payload = new SwapCurrencyPayload();
        payload.setAmount(amount);
        payload.setEmail(email);
        payload.setAccountHolder(name);
        payload.setPreviousBalance(previousBalance);
        payload.setAvailableBalance(availableBalance);
        payload.setCurrencySymbol(currency);
        payload.setCurrencyExchange(currencyExchange);
        send(KafkaTopicConfig.TOPIC_SWAP_WALLET, email, payload);
    }

    @Override
    public void publishBlockUserWallet(String email, String firstName, String lastName, String message) {
        BlockUserWallet payload = new BlockUserWallet();
        payload.setEmail(email);
        payload.setFirstName(firstName);
        payload.setLastName(lastName);
        payload.setMessage(message);
        send(KafkaTopicConfig.TOPIC_BLOCK_USER_WALLET, email, payload);
    }

    @Override
    public void publishWalletPinAlert(String email, String username, String eventType,
                                      String eventTime, String ipAddress, String deviceInfo) {
        WalletPinNotification payload = new WalletPinNotification();
        payload.setEmail(email);
        payload.setUsername(username);
        payload.setAction(eventType);
        payload.setActionTime(eventTime);
        payload.setIpAddress(ipAddress);
        payload.setDeviceInfo(deviceInfo);
        send(KafkaTopicConfig.TOPIC_WALLET_PIN_ALERT, email, payload);
    }

    @Override
    public void publishDebtCreatedNotification(String userEmail, String userFirstName, String userLastName,
                                               Long userId, String currency, BigDecimal feeAmount,
                                               BigDecimal deductedAmount, BigDecimal debtAmount,
                                               BigDecimal walletBalance, String billingMonth) {
        MaintenanceDebtNotification payload = new MaintenanceDebtNotification();
        payload.setEventType("DEBT_CREATED");
        payload.setUserEmail(userEmail);
        payload.setUserFirstName(userFirstName);
        payload.setUserLastName(userLastName);
        payload.setUserId(userId);
        payload.setCurrency(currency);
        payload.setFeeAmount(feeAmount);
        payload.setDeductedAmount(deductedAmount);
        payload.setDebtAmount(debtAmount);
        payload.setWalletBalance(walletBalance);
        payload.setBillingMonth(billingMonth);
        send(KafkaTopicConfig.TOPIC_MAINTENANCE_DEBT, userEmail, payload);
    }

    @Override
    public void publishDebtRepaidNotification(String userEmail, String userFirstName, String userLastName,
                                              Long userId, String currency, BigDecimal repaidAmount,
                                              BigDecimal remainingDebt, BigDecimal newWalletBalance,
                                              boolean fullySettled) {
        MaintenanceDebtNotification payload = new MaintenanceDebtNotification();
        payload.setEventType("DEBT_REPAID");
        payload.setUserEmail(userEmail);
        payload.setUserFirstName(userFirstName);
        payload.setUserLastName(userLastName);
        payload.setUserId(userId);
        payload.setCurrency(currency);
        payload.setRepaidAmount(repaidAmount);
        payload.setRemainingDebt(remainingDebt);
        payload.setNewWalletBalance(newWalletBalance);
        payload.setFullySettled(fullySettled);
        send(KafkaTopicConfig.TOPIC_MAINTENANCE_DEBT, userEmail, payload);
    }

    public void sendAccountStatement(String email, String period, String username, byte[] pdfBytes) {
        send(KafkaTopicConfig.TOPIC_ACCOUNT_STATEMENT, email,
                new StatementPayload(email, username, pdfBytes, period));
    }

    private void send(String topic, String key, Object payload) {
        kafkaTemplate.send(topic, key, payload)
                .whenComplete((result, ex) -> {
                    if (ex != null) {
                        log.error("[WalletNotification] Failed to publish to topic={}: {}", topic, ex.getMessage());
                    } else {
                        log.info("[WalletNotification] Published to topic={} partition={} offset={}",
                                topic,
                                result.getRecordMetadata().partition(),
                                result.getRecordMetadata().offset());
                    }
                });
    }
}
