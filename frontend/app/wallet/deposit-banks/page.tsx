"use client";

import DepositModal from "@/components/DepositModal";
import Header from "@/components/Header";
import LoadingScreen from "@/components/loader/Loadingscreen";
import MobileNav from "@/components/MobileNav";
import RightPanel from "@/components/RightPanel";
import Sidebar from "@/components/Sidebar";
import SupportChatBot from "@/components/SupportChatBot";
import { CheckCircle, ChevronLeft, Trash2 } from "lucide-react";
import { MouseEvent, useEffect, useState } from "react";
import Select from "react-select";
import { bankCollectionService, getUserId } from "../../api/index";
import { Toast } from "../../types/auth";
import "./Banks.css";

type BankAccount = {
  id: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
  currency: string;
  addedDate: string;
};

type NewBankForm = {
  bankName: string;
  bankCode: string;
  accountNumber: string;
  accountName: string;
  currency: string;
};

type BankOption = {
  value: string;
  label: string;
  code: string;
};

const BankIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 67 67"
    width="24"
    height="24"
  >
    <path d="M7.722 57.657a.75.75 0 0 0-.75.75V64.5c0 .414.336.75.75.75h51.556a.75.75 0 0 0 .75-.75v-6.093a.75.75 0 0 0-.75-.75h-4.325V27.442h4.325a.75.75 0 0 0 .75-.75v-5.35a.75.75 0 0 0-.75-.75h-.187L33.94 1.899a.75.75 0 0 0-.895 0L7.91 20.593h-.187a.75.75 0 0 0-.75.75v5.349c0 .414.336.75.75.75h4.325v30.215H7.722zm50.806 6.093H8.472v-4.593h50.056v4.593zM24.214 27.442v30.215h-5.761V27.442h5.761zm12.167 0v30.215H30.62V27.442h5.761zm12.166 0v30.215h-5.761V27.442h5.761zm-7.261 30.215H37.88V27.442h3.405v30.215zm-12.166 0h-3.406V27.442h3.406v30.215zm24.333 0h-3.406V27.442h3.406v30.215zM33.493 3.435l23.083 17.158H10.423l23.07-17.158zM8.474 22.098h50.055v3.844H8.472v-3.844zm5.074 5.344h3.406v30.215h-3.406V27.442z" />
  </svg>
);

const Banks = () => {
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [bankToDelete, setBankToDelete] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [verify, setVerify] = useState(false);
  const [bankOptions, setBankOptions] = useState<BankOption[]>([]);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [banks, setBanks] = useState<BankAccount[]>([]);
  const [selectedBankOption, setSelectedBankOption] = useState<any>(null);
  const [newBank, setNewBank] = useState<NewBankForm>({
    bankName: "",
    bankCode: "",
    accountNumber: "",
    accountName: "",
    currency: "NGN",
  });
  const [loading, setLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [verifying, setVerifying] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedBanks, setSelectedBanks] = useState<Set<string>>(new Set());
  const [showBulkDeleteConfirm, setShowBulkDeleteConfirm] = useState(false);

  const showToast = (msg: string, type: "warning" | "success" = "warning") => {
    setToasts((prev) => {
      if (prev.length >= 5) return prev;
      const id = Date.now();
      const newToast: Toast = { id, message: msg, type, exiting: false };
      setTimeout(() => {
        setToasts((c) =>
          c.map((t) => (t.id === id ? { ...t, exiting: true } : t)),
        );
        setTimeout(() => setToasts((c) => c.filter((t) => t.id !== id)), 300);
      }, 3000);
      return [...prev, newToast];
    });
  };

  useEffect(() => {
    const t = setTimeout(() => setIsPageLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark";
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    fetchUserBanks();
    fetchBankList();
  }, []);

  const fetchUserBanks = async () => {
    try {
      setLoading(true);
      const result = await bankCollectionService.getByUserId(getUserId());
      if (result?.data && Array.isArray(result.data)) {
        setBanks(
          result.data.map((bank: any) => ({
            id: bank.id,
            bankCode: bank.bankCode,
            bankName: bank.bankName,
            accountNumber: bank.accountNumber,
            accountName: bank.accountHolderName,
            currency: "NGN",
            addedDate: bank.createdOn
              ? new Date(bank.createdOn).toISOString().split("T")[0]
              : new Date().toISOString().split("T")[0],
          })),
        );
      }
    } catch {
      showToast("Network error. Please try again.", "warning");
    } finally {
      setLoading(false);
    }
  };

  const fetchBankList = async () => {
    try {
      const response = await bankCollectionService.getBankList();
      if (response.data?.length > 0) {
        setBankOptions(
          response.data.map((bank: any) => ({
            value: bank.code,
            label: bank.name,
            code: bank.code,
          })),
        );
      }
    } catch {
      showToast("Failed to load bank list.", "warning");
    }
  };

  const toggleTheme = () => {
    const n = theme === "light" ? "dark" : "light";
    setTheme(n);
    localStorage.setItem("theme", n);
  };

  const handleBankChange = (option: any) => {
    setSelectedBankOption(option);
    setNewBank((p) => ({
      ...p,
      bankName: option?.label ?? "",
      bankCode: option?.value ?? "",
    }));
  };

  const validate = () => {
    if (!newBank.bankCode) {
      showToast("Please select your bank", "warning");
      return false;
    }
    if (!newBank.accountNumber.trim() || newBank.accountNumber.length !== 10) {
      showToast("Valid account number (10 digits) is required", "warning");
      return false;
    }
    return true;
  };

  const handleSearch = async () => {
    if (!validate()) return;
    try {
      setVerifying(true);
      const result = await bankCollectionService.getUserBanks(
        newBank.accountNumber,
        newBank.bankCode,
      );
      if (result?.success) {
        setVerify(true);
        setNewBank((p) => ({ ...p, accountName: result.data.account_name }));
        showToast("Account verified successfully!", "success");
      } else {
        showToast(result?.message || "Invalid Account Details", "warning");
      }
    } catch (error: any) {
      showToast(
        error?.message || "Network error. Please try again.",
        "warning",
      );
    } finally {
      setVerifying(false);
    }
  };

  const handleAddBank = async () => {
    if (banks.length >= 5) {
      showToast("Maximum 5 banks allowed", "warning");
      return;
    }
    if (!verify) {
      showToast("Please verify account details first", "warning");
      return;
    }
    try {
      setLoading(true);
      const result = await bankCollectionService.create({
        bankCode: newBank.bankCode,
        bankName: newBank.bankName,
        accountNumber: newBank.accountNumber,
        accountHolderName: newBank.accountName,
        userId: getUserId(),
        currency: newBank.currency,
      });
      if (result?.success) {
        setBanks((p) => [
          ...p,
          {
            id: result.data?.id || crypto.randomUUID(),
            bankName: newBank.bankName,
            accountNumber: newBank.accountNumber,
            accountName: newBank.accountName,
            currency: newBank.currency,
            addedDate: new Date().toISOString().split("T")[0],
          },
        ]);
        showToast("Bank successfully added!", "success");
        setTimeout(resetForm, 1500);
      } else {
        showToast(result?.response?.message || "Error adding bank.", "warning");
      }
    } catch (error: any) {
      showToast(error?.message || "Network error.", "warning");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setNewBank({
      bankName: "",
      bankCode: "",
      accountNumber: "",
      accountName: "",
      currency: "NGN",
    });
    setSelectedBankOption(null);
    setVerify(false);
  };

  const handleDeleteClick = (bankId: string, e: MouseEvent) => {
    e.stopPropagation();
    setBankToDelete(bankId);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    if (bankToDelete) {
      try {
        const result = await bankCollectionService.delete(bankToDelete);
        if (result) {
          setBanks((p) => p.filter((b) => b.id !== bankToDelete));
          setSelectedBanks((p) => {
            const s = new Set(p);
            s.delete(bankToDelete);
            return s;
          });
          showToast("Bank account deleted successfully", "success");
        } else {
          showToast("Failed to delete bank account", "warning");
        }
      } catch {
        showToast("Network error.", "warning");
      }
    }
    setShowDeleteConfirm(false);
    setBankToDelete(null);
  };

  const handleCheckboxChange = (bankId: string, e: MouseEvent) => {
    e.stopPropagation();
    setSelectedBanks((p) => {
      const s = new Set(p);
      s.has(bankId) ? s.delete(bankId) : s.add(bankId);
      return s;
    });
  };

  const confirmBulkDelete = async () => {
    try {
      setLoading(true);
      const ids = Array.from(selectedBanks);
      const results = await Promise.all(
        ids.map((id) => bankCollectionService.delete(id)),
      );
      if (results.every(Boolean)) {
        setBanks((p) => p.filter((b) => !selectedBanks.has(b.id)));
        setSelectedBanks(new Set());
        showToast(`${ids.length} account(s) deleted successfully`, "success");
      } else {
        showToast("Some accounts could not be deleted.", "warning");
        await fetchUserBanks();
      }
    } catch {
      showToast("Network error.", "warning");
    } finally {
      setLoading(false);
      setShowBulkDeleteConfirm(false);
    }
  };

  if (isPageLoading) return <LoadingScreen />;

  const selectStyles = {
    control: (base: any, state: any) => ({
      ...base,
      borderColor: state.isFocused ? "var(--bg-main)" : "#d1d5db",
      borderRadius: "8px",
      minHeight: "44px",
      boxShadow: "none",
      "&:hover": { borderColor: "#9ca3af" },
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "var(--bg-main)"
        : state.isFocused
          ? "#f5f0ff"
          : "white",
      color: state.isSelected ? "white" : "#334155",
      cursor: "pointer",
    }),
    menu: (base: any) => ({ ...base, zIndex: 9999, borderRadius: "8px" }),
  };

  return (
    <div className={`dashboard-container${theme === "dark" ? " dark" : ""}`}>
      <Sidebar />
      <main className="main-content">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <div className="toastrs">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`toastr toastr--${toast.type}${toast.exiting ? " toast-exit" : ""}`}
            >
              <div className="toast-icon">
                <i
                  className={`fa ${toast.type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}`}
                  aria-hidden="true"
                />
              </div>
              <div className="toast-message">{toast.message}</div>
            </div>
          ))}
        </div>

        <div className="scrollable-content">
          <div className="db-page">
            <button
              className="db-back"
              type="button"
              onClick={() => history.back()}
            >
              <ChevronLeft size={16} />
              Back
            </button>

            <h1 className="db-title">Deposit Accounts</h1>
            <p className="db-subtitle">
              Manage the bank accounts where your deposits are made.
            </p>

            <div className="db-note">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#6b7280"
                  strokeWidth="1.8"
                />
                <path
                  d="M12 8v4M12 16h.01"
                  stroke="#6b7280"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <p>
                <strong>NOTE:</strong> Accounts added here are solely for
                deposits and not for withdrawals. Make sure it is your own
                account and the account name matches.
              </p>
            </div>

            <div className="db-grid">
              <div className="db-card">
                <div className="db-card__header">
                  <h2 className="db-card__title">Add New Bank Account</h2>
                  {verify && (
                    <button
                      className="db-cancel-btn"
                      type="button"
                      onClick={resetForm}
                    >
                      Cancel
                    </button>
                  )}
                </div>

                {!verify ? (
                  <>
                    <div className="db-form-group">
                      <label className="db-label">Select Your Bank</label>
                      <Select
                        options={bankOptions}
                        value={selectedBankOption}
                        onChange={handleBankChange}
                        styles={selectStyles}
                        placeholder="Select Bank..."
                      />
                    </div>

                    <div className="db-form-group">
                      <label className="db-label">Account Number</label>
                      <input
                        type="text"
                        className="db-input"
                        placeholder="Enter account number"
                        value={newBank.accountNumber}
                        onChange={(e) => {
                          const v = e.target.value.replace(/\D/g, "");
                          if (v.length <= 10)
                            setNewBank((p) => ({ ...p, accountNumber: v }));
                        }}
                        maxLength={10}
                      />
                    </div>

                    <button
                      className="db-search-btn"
                      type="button"
                      onClick={handleSearch}
                      disabled={
                        verifying || !newBank.bankCode || !newBank.accountNumber
                      }
                    >
                      {verifying ? "Checking..." : "Search"}
                    </button>
                  </>
                ) : (
                  <>
                    <div className="db-verified-card">
                      <div className="db-verified-card__icon">
                        <BankIcon />
                      </div>
                      <div className="db-verified-card__body">
                        <span className="db-verified-card__bank">
                          {newBank.bankName}
                        </span>
                        <span className="db-verified-card__name">
                          {newBank.accountName}
                        </span>
                        <span className="db-verified-card__number">
                          {newBank.accountNumber}
                        </span>
                      </div>
                      <CheckCircle size={18} color="#16a34a" />
                    </div>

                    <button
                      className="db-search-btn"
                      type="button"
                      onClick={handleAddBank}
                      disabled={loading}
                    >
                      {loading ? "Saving..." : "Add Bank Account"}
                    </button>
                  </>
                )}
              </div>

              <div className="db-card">
                <div className="db-card__header">
                  <h2 className="db-card__title">Your Linked Bank Accounts</h2>
                  <div className="db-card__header-right">
                    <span className="db-linked-badge">
                      {banks.length}/5 linked
                    </span>
                    {selectedBanks.size > 0 && (
                      <button
                        className="db-delete-btn"
                        type="button"
                        onClick={() => setShowBulkDeleteConfirm(true)}
                      >
                        <Trash2 size={14} />
                        Delete ({selectedBanks.size})
                      </button>
                    )}
                  </div>
                </div>

                {loading && banks.length === 0 ? (
                  <div className="db-empty">Loading bank accounts…</div>
                ) : banks.length === 0 ? (
                  <div className="db-empty">
                    <p>No bank accounts added yet</p>
                    <small>Add your first bank account using the form</small>
                  </div>
                ) : (
                  <div className="db-bank-list">
                    {banks.map((bank) => {
                      const checked = selectedBanks.has(bank.id);
                      return (
                        <div
                          key={bank.id}
                          className={`db-bank-item${checked ? " db-bank-item--checked" : ""}`}
                        >
                          <div
                            className={`db-checkbox${checked ? " db-checkbox--checked" : ""}`}
                            onClick={(e) => handleCheckboxChange(bank.id, e)}
                          >
                            {checked && (
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                aria-hidden="true"
                              >
                                <path
                                  d="M1.5 5L4 7.5L8.5 2.5"
                                  stroke="white"
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </div>

                          <div className="db-bank-item__icon">
                            <BankIcon />
                          </div>

                          <div className="db-bank-item__body">
                            <span className="db-bank-item__bank">
                              {bank.bankName}
                            </span>
                            <span className="db-bank-item__name">
                              {bank.accountName}
                            </span>
                            <span className="db-bank-item__number">
                              {bank.accountNumber}
                            </span>
                          </div>

                          <span className="db-bank-item__currency">
                            {bank.currency}
                          </span>

                          {selectedBanks.size === 0 && (
                            <button
                              className="db-bank-item__del"
                              type="button"
                              onClick={(e) => handleDeleteClick(bank.id, e)}
                              aria-label="Delete bank account"
                            >
                              <Trash2 size={15} />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                <p className="db-banks-footer">
                  You can link up to 5 bank accounts for deposits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <RightPanel theme={theme} />

      {showDeleteConfirm && (
        <div
          className="db-modal-overlay"
          onClick={() => setShowDeleteConfirm(false)}
        >
          <div className="db-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="db-modal__title">Delete Bank Account</h3>
            <p className="db-modal__text">
              Are you sure you want to delete this bank account? This action
              cannot be undone.
            </p>
            <div className="db-modal__actions">
              <button
                className="db-modal__cancel"
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
              >
                Cancel
              </button>
              <button
                className="db-modal__confirm"
                type="button"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {showBulkDeleteConfirm && (
        <div
          className="db-modal-overlay"
          onClick={() => setShowBulkDeleteConfirm(false)}
        >
          <div className="db-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="db-modal__title">
              Delete {selectedBanks.size} Account
              {selectedBanks.size > 1 ? "s" : ""}
            </h3>
            <p className="db-modal__text">
              Are you sure? This action cannot be undone.
            </p>
            <div className="db-modal__actions">
              <button
                className="db-modal__cancel"
                type="button"
                onClick={() => setShowBulkDeleteConfirm(false)}
              >
                Cancel
              </button>
              <button
                className="db-modal__confirm"
                type="button"
                onClick={confirmBulkDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <MobileNav activeTab="none" onPlusClick={() => setIsDepositOpen(true)} />
      <DepositModal
        isOpen={isDepositOpen}
        onClose={() => setIsDepositOpen(false)}
        theme={theme}
      />
      {!isChatOpen && (
        <button
          className="chat-fab"
          onClick={() => setIsChatOpen(true)}
          aria-label="Open support chat"
        >
          <i className="fa-solid fa-comment-dots" />
        </button>
      )}
      <SupportChatBot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  );
};

export default Banks;
