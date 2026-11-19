package com.epay.notification.publisher;

import com.epay.common.interfaces.IWalletNotificationPublisher;
import com.epay.notification.service.WalletNotificationService;
import com.epay.domain.notification.input.MaintenanceDebtNotification;
import com.epay.domain.notification.input.MaintenanceDeductionNotification;
import com.epay.domain.notification.input.StatementPayload;
import com.epay.domain.notification.input.SwapCurrencyPayload;
import com.epay.domain.notification.input.WalletPinNotification;
import com.epay.domain.notification.input.BlockUserWallet;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.OffsetDateTime;

@Slf4j
@Service
@RequiredArgsConstructor
public class WalletNotificationMessageProducer implements IWalletNotificationPublisher {

    private final WalletNotificationService walletNotificationService;

    @Override
    public void publishCreditNotification(String recipientEmail, BigDecimal transferAmount,
                                          String senderFullName, String receiverFullName,
                                          BigDecimal recipientTotalBalance, String currency,
                                          String transactionId, BigDecimal previousBalance) {
        walletNotificationService.createCreditNotification(
                recipientEmail, transferAmount, senderFullName, receiverFullName,
                recipientTotalBalance, currency, transactionId, previousBalance);
    }

    @Override
    public void publishDebitNotification(String senderEmail, BigDecimal feeAmount,
                                         BigDecimal transferAmount, String senderFullName,
                                         String receiverFullName, BigDecimal balance,
                                         String currency, String transactionId,
                                         BigDecimal previousBalance) {
        walletNotificationService.createDebitNotification(
                senderEmail, feeAmount, transferAmount, senderFullName,
                receiverFullName, balance, currency, transactionId, previousBalance);
    }

    @Override
    public void publishDepositNotification(String recipientEmail, String recipientName,
                                           BigDecimal depositAmount, BigDecimal amount,
                                           String accountHolder, BigDecimal availableBalance,
                                           BigDecimal previousBalance, String terminalNumber,
                                           String currencySymbol) {
        walletNotificationService.createDepositNotification(
                recipientEmail, recipientName, depositAmount, amount,
                accountHolder, availableBalance, previousBalance, terminalNumber, currencySymbol);
    }

    @Override
    public void publishMaintenanceNotification(String actionType, BigDecimal availableBalance,
                                               String currency, BigDecimal feeAmount,
                                               BigDecimal previousBalance, String reason,
                                               Boolean success, OffsetDateTime timestamp,
                                               BigDecimal totalAmountSpent, String userEmail,
                                               String userFirstName, Long userId, String userLastName) {
        MaintenanceDeductionNotification n = new MaintenanceDeductionNotification(
                actionType, availableBalance, currency, feeAmount, previousBalance,
                reason, success, timestamp, totalAmountSpent, userEmail, userFirstName, userId, userLastName);
        walletNotificationService.createMaintenanceNotification(n);
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
        walletNotificationService.createSwapNotification(payload);
    }

    @Override
    public void publishBlockUserWallet(String email, String firstName, String lastName, String message) {
        walletNotificationService.createBlockUserWalletNotification(email, firstName, lastName, message);
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
        walletNotificationService.createWalletPinAlert(payload);
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
        walletNotificationService.createMaintenanceDebtNotification(payload);
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
        walletNotificationService.createMaintenanceDebtNotification(payload);
    }
}
