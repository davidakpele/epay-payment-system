"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DepositModal from "@/components/DepositModal";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import {
  beneficiaryService,
  getFiat,
  getUserId,
  getUserWalletId,
  getUsername,
  getWalletList,
  uuidv4,
  withdrawService,
} from "@/app/api";
import type { UserWallet } from "@/app/types/dto";
import { eventEmitter } from "@/app/utils/eventEmitter";
import "./BeneficiaryTransfer.css";

interface BeneficiaryRecord {
  id: number;
  beneficiaryType: "BANK" | "USER";
  beneficiaryName: string;
  currency: string;
  accountNumber?: string;
  accountName?: string;
  bankCode?: string;
  bankName?: string;
  recipientUsername?: string;
}

const currencySymbols: Record<string, string> = {
  NGN: "₦",
  USD: "$",
  EUR: "€",
  GBP: "£",
  CAD: "$",
  GHS: "GH",
  KES: "KSh",
};

export default function BeneficiaryTransferPage() {
  const router = useRouter();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [beneficiary, setBeneficiary] = useState<BeneficiaryRecord | null>(
    null,
  );
  const [beneficiaries, setBeneficiaries] = useState<BeneficiaryRecord[]>([]);
  const [wallets, setWallets] = useState<UserWallet[]>([]);
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [narration, setNarration] = useState("");
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const selectedWallet = wallets.find(
    (wallet) => wallet.currency_code === currency,
  );
  const symbol =
    currencySymbols[currency] || selectedWallet?.symbol || `${currency} `;
  const frequentBeneficiaries = beneficiaries
    .filter(
      (record) =>
        record.beneficiaryType === "USER" ||
        record.currency.toUpperCase() === "NGN",
    )
    .slice(0, 5);
  const amountUsedPercent =
    selectedWallet && Number(amount) > 0
      ? Math.min(
          (Number(amount) / Number(selectedWallet.balance || 1)) * 100,
          100,
        )
      : 0;

  useEffect(() => {
    let active = true;

    const loadBeneficiary = async () => {
      try {
        const userId = getUserId();
        const beneficiaryId = new URLSearchParams(window.location.search).get(
          "beneficiaryId",
        );
        if (!userId || !beneficiaryId)
          throw new Error("Choose a saved beneficiary to continue");

        const [response, storedWallets] = await Promise.all([
          beneficiaryService.getAllByUserId(userId),
          Promise.resolve(getWalletList() ?? []),
        ]);
        const records: BeneficiaryRecord[] = Array.isArray(response?.data)
          ? response.data
          : Array.isArray(response?.data?.content)
            ? response.data.content
            : [];
        const selected = records.find(
          (record) => String(record.id) === beneficiaryId,
        );
        if (!selected)
          throw new Error("The selected beneficiary could not be found");
        if (!active) return;

        setBeneficiary(selected);
        setBeneficiaries(records);
        setWallets(storedWallets);
        const preferredCurrency = selected.currency || getFiat() || "";
        setCurrency(
          storedWallets.some(
            (wallet) => wallet.currency_code === preferredCurrency,
          )
            ? preferredCurrency
            : (storedWallets[0]?.currency_code ?? ""),
        );
      } catch (loadError) {
        if (active) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Unable to load beneficiary details",
          );
        }
      } finally {
        if (active) setIsLoading(false);
      }
    };

    loadBeneficiary();
    return () => {
      active = false;
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  const submitTransfer = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!beneficiary || !selectedWallet) {
      setError("A source wallet is required to transfer funds");
      return;
    }
    if (!Number.isFinite(Number(amount)) || Number(amount) <= 0) {
      setError("Enter an amount greater than zero");
      return;
    }
    if (Number(amount) > Number(selectedWallet.balance)) {
      setError("The transfer amount exceeds your available balance");
      return;
    }
    if (!/^\d{4}$/.test(pin)) {
      setError("Enter your 4-digit transfer PIN");
      return;
    }

    const userId = getUserId();
    const walletId = getUserWalletId();
    const username = getUsername();
    if (!userId || !walletId || !username) {
      setError("Your wallet session is incomplete. Sign in again and retry.");
      return;
    }

    setIsProcessing(true);
    try {
      const request = {
        amount: Number(amount).toFixed(2),
        currency,
        currencySymbol: symbol,
        walletId,
        userId,
        username,
        withdrawalType:
          beneficiary.beneficiaryType === "BANK" ? "BANK_TRANSFER" : "INTERNAL",
        transferPin: pin,
        idempotencyKey: uuidv4(),
        narration: narration.trim(),
      };
      const response =
        beneficiary.beneficiaryType === "BANK"
          ? await withdrawService.withdrawToBank({
              ...request,
              accountNumber: beneficiary.accountNumber,
              bankCode: beneficiary.bankCode,
              accountName: beneficiary.accountName,
            })
          : await withdrawService.transferToUser({
              ...request,
              recipient: beneficiary.recipientUsername,
            });

      const status = response?.status ?? response?.data?.status;
      const completed =
        response?.success === true ||
        response?.data?.success === true ||
        ["COMPLETED", "success", "OK"].includes(status);
      if (!completed) {
        throw new Error(
          response?.message ||
            response?.data?.message ||
            "Transfer could not be completed",
        );
      }

      eventEmitter.emit("refreshBalance");
      setSuccess(`Transfer sent to ${beneficiary.beneficiaryName}`);
      setAmount("");
      setNarration("");
      setPin("");
    } catch (transferError) {
      setError(
        transferError instanceof Error
          ? transferError.message
          : "Transfer failed. Please try again.",
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="dashboard-container no-right-panel">
      <Sidebar />
      <main className="main-content">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <div className="scrollable-content">
          <div className="pt-20 px-4 sm:px-6 lg:px-8">
            <section className="beneficiary-transfer-page">
              <button
                className="beneficiary-transfer-back"
                type="button"
                onClick={() => router.back()}
              >
                <i className="fas fa-chevron-left" aria-hidden="true"></i> Back
              </button>
              <h1>Other Bank Transfers</h1>

              {error && (
                <div
                  className="beneficiary-transfer-message beneficiary-transfer-message--error"
                  role="alert"
                >
                  {error}
                </div>
              )}
              {success && (
                <div
                  className="beneficiary-transfer-message beneficiary-transfer-message--success"
                  role="status"
                >
                  {success}
                </div>
              )}

              {isLoading ? (
                <div className="beneficiary-transfer-card beneficiary-transfer-state">
                  Loading transfer details...
                </div>
              ) : beneficiary ? (
                <div className="beneficiary-transfer-layout">
                  <form
                    className="beneficiary-transfer-card"
                    onSubmit={submitTransfer}
                  >
                    <label className="beneficiary-transfer-field">
                      <span>Source account</span>
                      <select
                        value={currency}
                        onChange={(event) => setCurrency(event.target.value)}
                        required
                      >
                        {wallets.map((wallet) => (
                          <option
                            key={wallet.currency_code}
                            value={wallet.currency_code}
                          >
                            {wallet.currency_code} Wallet ·{" "}
                            {wallet.symbol ?? ""}
                            {Number(wallet.balance).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </option>
                        ))}
                      </select>
                    </label>

                    <div className="beneficiary-transfer-balance">
                      <div className="beneficiary-transfer-balance-row">
                        <span>Available balance</span>
                        <strong>
                          {symbol}
                          {Number(selectedWallet?.balance ?? 0).toLocaleString(
                            undefined,
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          )}
                        </strong>
                      </div>
                      <div className="beneficiary-transfer-balance-track">
                        <span style={{ width: `${amountUsedPercent}%` }} />
                      </div>
                      <div className="beneficiary-transfer-balance-row beneficiary-transfer-balance-row--caption">
                        <span>Transfer amount</span>
                        <span>
                          {symbol}
                          {Number(amount || 0).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    </div>

                    <p className="beneficiary-transfer-section-label">
                      Frequent beneficiaries
                    </p>
                    <div className="beneficiary-transfer-frequent">
                      <button
                        className="beneficiary-transfer-frequent-tile beneficiary-transfer-frequent-tile--all"
                        type="button"
                        onClick={() => router.push("/wallet/beneficiary")}
                      >
                        <span>
                          <i
                            className="fas fa-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <small>View all</small>
                      </button>
                      {frequentBeneficiaries.map((record) => (
                        <button
                          className={`beneficiary-transfer-frequent-tile${record.id === beneficiary.id ? " beneficiary-transfer-frequent-tile--active" : ""}`}
                          key={record.id}
                          type="button"
                          onClick={() => setBeneficiary(record)}
                        >
                          <span>
                            {record.beneficiaryName
                              .split(/\s+/)
                              .slice(0, 2)
                              .map((part) => part.charAt(0))
                              .join("")
                              .toUpperCase()}
                          </span>
                          <small>
                            {record.beneficiaryName.trim().split(/\s+/).at(-1)}
                          </small>
                        </button>
                      ))}
                    </div>

                    {beneficiary.beneficiaryType === "BANK" ? (
                      <>
                        <label className="beneficiary-transfer-field">
                          <span>Bank</span>
                          <input
                            value={`${beneficiary.bankCode ?? ""} - ${beneficiary.bankName ?? ""}`}
                            readOnly
                          />
                        </label>
                        <label className="beneficiary-transfer-field">
                          <span>Beneficiary account number</span>
                          <input
                            value={beneficiary.accountNumber ?? ""}
                            readOnly
                          />
                          <small className="beneficiary-transfer-account-name">
                            {beneficiary.accountName}
                          </small>
                        </label>
                      </>
                    ) : (
                      <label className="beneficiary-transfer-field">
                        <span>ePay beneficiary</span>
                        <input
                          value={`@${beneficiary.recipientUsername ?? ""}`}
                          readOnly
                        />
                      </label>
                    )}

                    <label className="beneficiary-transfer-field">
                      <span>Amount ({currency})</span>
                      <div className="beneficiary-transfer-amount">
                        <span>{symbol}</span>
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0.01"
                          step="0.01"
                          value={amount}
                          onChange={(event) => setAmount(event.target.value)}
                          placeholder="0.00"
                          required
                        />
                      </div>
                    </label>

                    <label className="beneficiary-transfer-field">
                      <span>Narration (optional)</span>
                      <input
                        value={narration}
                        onChange={(event) => setNarration(event.target.value)}
                        placeholder="e.g. Rent payment"
                        maxLength={120}
                      />
                    </label>

                    <label className="beneficiary-transfer-field">
                      <span>4-digit transfer PIN</span>
                      <input
                        type="password"
                        inputMode="numeric"
                        autoComplete="off"
                        value={pin}
                        onChange={(event) =>
                          setPin(
                            event.target.value.replace(/\D/g, "").slice(0, 4),
                          )
                        }
                        placeholder="••••"
                        maxLength={4}
                        required
                      />
                    </label>

                    <button
                      className="beneficiary-transfer-submit"
                      type="submit"
                      disabled={isProcessing || wallets.length === 0}
                    >
                      {isProcessing ? "Processing..." : "Proceed"}
                    </button>
                  </form>

                  <aside className="beneficiary-transfer-secure">
                    <div className="beneficiary-transfer-secure-heading">
                      <span>
                        <i className="fas fa-shield-alt" aria-hidden="true"></i>
                      </span>
                      Secure transfer
                    </div>
                    <ol>
                      <li>
                        <span className="beneficiary-transfer-step-icon">
                          <i className="fas fa-wallet" aria-hidden="true"></i>
                        </span>
                        <span>
                          <strong>Select source</strong>
                          <small>Choose the wallet to send from</small>
                        </span>
                      </li>
                      <li>
                        <span className="beneficiary-transfer-step-icon">
                          <i className="fas fa-user" aria-hidden="true"></i>
                        </span>
                        <span>
                          <strong>Enter recipient</strong>
                          <small>{beneficiary.beneficiaryName}</small>
                        </span>
                      </li>
                      <li>
                        <span className="beneficiary-transfer-step-icon">
                          <i
                            className="fas fa-money-bill-wave"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span>
                          <strong>Set amount</strong>
                          <small>Enter the transfer amount</small>
                        </span>
                      </li>
                      <li>
                        <span className="beneficiary-transfer-step-icon">
                          <i
                            className="fas fa-check-square"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span>
                          <strong>Confirm &amp; send</strong>
                          <small>Verify your PIN to complete</small>
                        </span>
                      </li>
                    </ol>
                    <p className="beneficiary-transfer-secure-note">
                      <i className="fas fa-info-circle" aria-hidden="true"></i>
                      Transfers are processed according to the selected transfer
                      type and bank network.
                    </p>
                  </aside>
                </div>
              ) : (
                <div className="beneficiary-transfer-card beneficiary-transfer-state">
                  <p>{error || "Beneficiary not found."}</p>
                  <button
                    type="button"
                    onClick={() => router.push("/wallet/beneficiary")}
                  >
                    Back to beneficiaries
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
      <MobileNav activeTab="none" onPlusClick={() => setIsDepositOpen(true)} />
      <DepositModal
        isOpen={isDepositOpen}
        onClose={() => setIsDepositOpen(false)}
        theme={theme}
      />
    </div>
  );
}
