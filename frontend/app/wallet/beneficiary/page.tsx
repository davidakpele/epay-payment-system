"use client";

import { beneficiaryService, getUserId, historyService } from "@/app/api";
import DepositModal from "@/components/DepositModal";
import Header from "@/components/Header";
import LoadingScreen from "@/components/loader/Loadingscreen";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import SupportChatBot from "@/components/SupportChatBot";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import "./BeneficiaryManager.css";


interface Transaction {
  id: string | number;
  date: string;
  amount: number;
  type: string;
  description?: string;
  direction: "CREDIT" | "DEBIT";
  status: string;
  reference?: string;
  currencyType?: string;
}

interface Beneficiary {
  id: number;
  userId: number;
  beneficiaryType: "BANK" | "USER";
  beneficiaryName: string;
  currency: string;
  accountNumber?: string;
  accountName?: string;
  bankCode?: string;
  bankName?: string;
  recipientUsername?: string;
  isActive: boolean;
  createdOn: string;
  initial: string;
  detail: string;
  category: string;
  isEpay: boolean;
  lastTransaction: string;
  amount: string;
  transactions: Transaction[];
}

const BeneficiaryManager = () => {
  const router = useRouter();
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeFilter, setActiveFilter] = useState("transfer");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedBeneficiaryId, setExpandedBeneficiaryId] = useState<
    number | null
  >(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isCreatingBeneficiary, setIsCreatingBeneficiary] = useState(false);
  const [addForm, setAddForm] = useState({
    beneficiaryType: "BANK" as "BANK" | "USER",
    beneficiaryName: "",
    currency: "NGN",
    accountNumber: "",
    accountName: "",
    bankCode: "",
    bankName: "",
    recipientUsername: "",
  });
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [selectedBeneficiary, setSelectedBeneficiary] =
    useState<Beneficiary | null>(null);
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [beneficiaryToDelete, setBeneficiaryToDelete] = useState<number | null>(
    null,
  );
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);
  const [editingBeneficiary, setEditingBeneficiary] =
    useState<Beneficiary | null>(null);
  const [editForm, setEditForm] = useState({
    beneficiaryName: "",
    accountNumber: "",
    accountName: "",
    bankCode: "",
    bankName: "",
    recipientUsername: "",
    currency: "NGN",
  });
  const [isSavingBeneficiary, setIsSavingBeneficiary] = useState(false);
  const [isLoadingBeneficiaries, setIsLoadingBeneficiaries] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const formatBeneficiary = (apiBeneficiary: any): Beneficiary => {
    const isEpay = apiBeneficiary.beneficiaryType === "USER";
    const nameParts = apiBeneficiary.beneficiaryName.split(" ");
    const initial = nameParts
      .map((part: string) => part[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
    let detail = "";
    if (isEpay) {
      detail = `ePay Wallet • @${apiBeneficiary.recipientUsername}`;
    } else {
      detail = `${apiBeneficiary.bankName} • ${apiBeneficiary.accountNumber}`;
    }
    const category = isEpay ? "epay" : "banks";
    const createdDate = new Date(apiBeneficiary.createdOn);
    const daysDiff = Math.floor(
      (Date.now() - createdDate.getTime()) / (1000 * 60 * 60 * 24),
    );
    let lastTransaction = "";
    if (daysDiff === 0) lastTransaction = "Today";
    else if (daysDiff === 1) lastTransaction = "Yesterday";
    else if (daysDiff < 7) lastTransaction = `${daysDiff} days ago`;
    else if (daysDiff < 30)
      lastTransaction = `${Math.floor(daysDiff / 7)} week${Math.floor(daysDiff / 7) > 1 ? "s" : ""} ago`;
    else
      lastTransaction = `${Math.floor(daysDiff / 30)} month${Math.floor(daysDiff / 30) > 1 ? "s" : ""} ago`;

    return {
      ...apiBeneficiary,
      initial,
      detail,
      category,
      isEpay,
      lastTransaction,
      amount: "₦0.00",
      transactions: [],
    };
  };

  const fetchBeneficiaries = async () => {
    setIsLoadingBeneficiaries(true);
    setError(null);
    try {
      const userId = getUserId();
      if (!userId) throw new Error("User not authenticated");
      const response = await beneficiaryService.getAllByUserId(userId);
      if (response && response.data) {
        setBeneficiaries(response.data.map(formatBeneficiary));
      } else {
        setBeneficiaries([]);
      }
    } catch (err: any) {
      setError(err.message || "Failed to load beneficiaries");
      setBeneficiaries([]);
    } finally {
      setIsLoadingBeneficiaries(false);
    }
  };

  const deleteBeneficiary = async (id: number) => {
    try {
      const userId = getUserId();
      if (!userId) throw new Error("User not authenticated");
      await beneficiaryService.deleteBeneficiary(id, userId);
      setBeneficiaries((current) => current.filter((b) => b.id !== id));
      setShowDeleteConfirm(false);
      setBeneficiaryToDelete(null);
    } catch (err: any) {
      setError(err.message || "Failed to delete beneficiary");
    }
  };

  useEffect(() => {
    const initializePage = async () => {
      setIsPageLoading(true);
      const minimumLoadTime = new Promise((resolve) =>
        setTimeout(resolve, 2000),
      );
      const dataFetch = fetchBeneficiaries();
      await Promise.all([minimumLoadTime, dataFetch]);
      setIsPageLoading(false);
    };
    initializePage();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const filteredBeneficiaries = useMemo(() => {
    return beneficiaries.filter((b) => {
      const matchesTab =
        activeFilter === "transfer"
          ? b.beneficiaryType === "USER" || b.currency.toUpperCase() === "NGN"
          : activeFilter === "fcy"
            ? b.beneficiaryType === "BANK" && b.currency.toUpperCase() !== "NGN"
            : false;
      const matchesSearch =
        b.beneficiaryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.detail.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeFilter, searchQuery, beneficiaries]);

    const mapHistoryItem = (t: any, fallbackCurrency: string): Transaction => ({
      id: t.transactionId ?? t.historyId ?? t.reference ?? "",
      date: t.timestamps?.completedAt ?? t.timestamps?.createdAt ?? "",
      amount: Number(t.amount?.net ?? t.amount?.gross ?? 0),
      type: t.transactionType ?? "TRANSFER",
      direction: t.debitCredit === "CREDIT" ? "CREDIT" : "DEBIT",
      status: mapTransactionStatus(
        t.status ?? t.stateMachine?.currentState ?? "",
      ),
      description: t.description ?? "",
      reference: t.reference ?? t.transactionId ?? "",
      currencyType: t.amount?.currency ?? fallbackCurrency,
    });

      const extractHistoryItems = (response: any): any[] => {
        const candidates = [
          response,
          response?.content,
          response?.data,
          response?.data?.content,
          response?.data?.data,
          response?.data?.data?.content,
        ];
        return candidates.find((c) => Array.isArray(c)) ?? [];
      };

      const normalizeName = (value?: string | null) =>
        (value ?? "").replace(/\s+/g, " ").trim().toUpperCase();

       const openHistoryModal = async (beneficiary: Beneficiary) => {
         try {
           setSelectedBeneficiary({ ...beneficiary, transactions: [] });
           setShowHistoryModal(true);
           setIsLoadingTransactions(true);

           const minimumDelay = new Promise((resolve) =>
             setTimeout(resolve, 1000),
           );
           const userId = getUserId();
           const fetchData = historyService.getHistoryByBeneficiaryId(userId);
           const [, response] = await Promise.all([minimumDelay, fetchData]);

           const allItems: any[] = response?.data?.content ?? [];

           const normalize = (value?: string | null) =>
             (value ?? "").replace(/\s+/g, " ").trim().toUpperCase();

           const targets = [
             beneficiary.beneficiaryName,
             beneficiary.accountName,
             beneficiary.recipientUsername,
           ]
             .map(normalize)
             .filter(Boolean);
           const DEBUG_SHOW_ALL = true;
           
           const transactions = allItems
             .filter((t: any) => {
               if (DEBUG_SHOW_ALL) return true;
               const holder = normalize(t.recipient?.accountHolder);
               const description = normalize(t.description);
               return targets.some(
                 (name) =>
                   (holder !== "" &&
                     (holder === name ||
                       holder.includes(name) ||
                       name.includes(holder))) ||
                   description.includes(name),
               );
             })
             .map((t: any) => mapHistoryItem(t, beneficiary.currency))
             .sort(
               (a, b) =>
                 new Date(b.date).getTime() - new Date(a.date).getTime(),
             );

           console.log("[history] items from api:", allItems.length);
           console.log("[history] match targets:", targets);
           console.log(
             "[history] holders in api:",
             allItems.map((t: any) => t.recipient?.accountHolder),
           );
           console.log("[history] matched:", transactions.length);

           setSelectedBeneficiary({ ...beneficiary, transactions });
         } catch (err: any) {
           console.error("[history] failed:", err);
           setError(err.message || "Failed to load transaction history");
           setSelectedBeneficiary({ ...beneficiary, transactions: [] });
         } finally {
           setIsLoadingTransactions(false);
         }
       };

  const mapTransactionStatus = (status: string): string => {
    const s = status?.toLowerCase() || "";
    if (
      ["success", "completed", "confirmed", "delivered", "settled"].includes(s)
    )
      return "completed";
    if (
      [
        "pending",
        "processing",
        "initiated",
        "processed",
        "authorized",
        "settlement_pending",
      ].includes(s)
    )
      return "pending";
    if (["failed", "rejected", "cancelled"].includes(s)) return "failed";
    return "pending";
  };

  const handleDeleteClick = (id: number) => {
    setBeneficiaryToDelete(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (beneficiaryToDelete) deleteBeneficiary(beneficiaryToDelete);
  };

  const groupedBeneficiaries = useMemo(() => {
    const groups = new Map<string, Beneficiary[]>();
    for (const beneficiary of filteredBeneficiaries) {
      const nameParts = beneficiary.beneficiaryName.trim().split(/\s+/);
      const letter = (
        nameParts[nameParts.length - 1]?.charAt(0) ||
        nameParts[0]?.charAt(0) ||
        "#"
      ).toUpperCase();
      const key = letter || "#";
      groups.set(key, [...(groups.get(key) ?? []), beneficiary]);
    }
    return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filteredBeneficiaries]);

  const openEditModal = (beneficiary: Beneficiary) => {
    setEditingBeneficiary(beneficiary);
    setEditForm({
      beneficiaryName: beneficiary.beneficiaryName,
      accountNumber: beneficiary.accountNumber ?? "",
      accountName: beneficiary.accountName ?? "",
      bankCode: beneficiary.bankCode ?? "",
      bankName: beneficiary.bankName ?? "",
      recipientUsername: beneficiary.recipientUsername ?? "",
      currency: beneficiary.currency ?? "NGN",
    });
  };

  const saveBeneficiary = async () => {
    if (!editingBeneficiary) return;
    const userId = getUserId();
    if (!userId) {
      setError("User not authenticated");
      return;
    }
    if (!editForm.beneficiaryName.trim()) {
      setError("Enter a beneficiary name");
      return;
    }
    if (
      editingBeneficiary.beneficiaryType === "BANK" &&
      (!editForm.accountNumber.trim() ||
        !editForm.accountName.trim() ||
        !editForm.bankCode.trim() ||
        !editForm.bankName.trim())
    ) {
      setError("Complete all bank account details");
      return;
    }
    if (
      editingBeneficiary.beneficiaryType === "USER" &&
      !editForm.recipientUsername.trim()
    ) {
      setError("Enter an ePay username");
      return;
    }

    setIsSavingBeneficiary(true);
    setError(null);
    try {
      const payload = {
        userId,
        beneficiaryType: editingBeneficiary.beneficiaryType,
        beneficiaryName: editForm.beneficiaryName.trim(),
        currency: editForm.currency.trim().toUpperCase(),
        ...(editingBeneficiary.beneficiaryType === "BANK"
          ? {
              accountNumber: editForm.accountNumber.trim(),
              accountName: editForm.accountName.trim(),
              bankCode: editForm.bankCode.trim(),
              bankName: editForm.bankName.trim(),
            }
          : { recipientUsername: editForm.recipientUsername.trim() }),
      };
      await beneficiaryService.updateBeneficiary(
        editingBeneficiary.id,
        payload,
      );
      setBeneficiaries((current) =>
        current.map((beneficiary) =>
          beneficiary.id === editingBeneficiary.id
            ? formatBeneficiary({ ...beneficiary, ...payload })
            : beneficiary,
        ),
      );
      setEditingBeneficiary(null);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to update beneficiary",
      );
    } finally {
      setIsSavingBeneficiary(false);
    }
  };

  const createBeneficiary = async () => {
    const userId = getUserId();
    if (!userId) {
      setError("User not authenticated");
      return;
    }
    if (!addForm.beneficiaryName.trim()) {
      setError("Enter a beneficiary name");
      return;
    }
    if (
      addForm.beneficiaryType === "BANK" &&
      (!addForm.accountNumber.trim() ||
        !addForm.accountName.trim() ||
        !addForm.bankCode.trim() ||
        !addForm.bankName.trim())
    ) {
      setError("Complete all bank account details");
      return;
    }
    if (
      addForm.beneficiaryType === "USER" &&
      !addForm.recipientUsername.trim()
    ) {
      setError("Enter an ePay username");
      return;
    }

    setIsCreatingBeneficiary(true);
    setError(null);
    try {
      await beneficiaryService.saveBeneficiary({
        userId,
        beneficiaryType: addForm.beneficiaryType,
        beneficiaryName: addForm.beneficiaryName.trim(),
        currency: addForm.currency.trim().toUpperCase(),
        ...(addForm.beneficiaryType === "BANK"
          ? {
              accountNumber: addForm.accountNumber.trim(),
              accountName: addForm.accountName.trim(),
              bankCode: addForm.bankCode.trim(),
              bankName: addForm.bankName.trim(),
            }
          : { recipientUsername: addForm.recipientUsername.trim() }),
      });
      await fetchBeneficiaries();
      setShowAddModal(false);
      setAddForm({
        beneficiaryType: "BANK",
        beneficiaryName: "",
        currency: "NGN",
        accountNumber: "",
        accountName: "",
        bankCode: "",
        bankName: "",
        recipientUsername: "",
      });
    } catch (createError) {
      setError(
        createError instanceof Error
          ? createError.message
          : "Failed to add beneficiary",
      );
    } finally {
      setIsCreatingBeneficiary(false);
    }
  };
  

  const transferToBeneficiary = (beneficiary: Beneficiary) => {
    router.push(`/beneficiary-transfer?beneficiaryId=${beneficiary.id}`);
  };

  const isCredit = (type: string) =>
    [
      "CREDITED",
      "CREDIT",
      "DEPOSIT",
      "TRANSFER_CREDIT",
      "INVESTMENT_CREDIT",
      "SAVINGS_CREDIT",
    ].includes(type.toUpperCase());

  if (isPageLoading) return <LoadingScreen />;

  return (
    <div
      className={`dashboard-container no-right-panel${theme === "dark" ? " dark" : ""}`}
    >
      <Sidebar />
      <main className={`main-content ${isDepositOpen ? "blur-sm" : ""}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <div className="scrollable-content">
          <div className="pt-20 px-4 sm:px-6 lg:px-8">
            <section className="beneficiary-page">
              <button
                className="beneficiary-back"
                type="button"
                onClick={() => router.back()}
              >
                <i className="fas fa-chevron-left" aria-hidden="true"></i>
                Back
              </button>
              <div className="beneficiary-heading">
                <h1>Beneficiaries</h1>
              </div>

              {error && (
                <div className="beneficiary-error" role="alert">
                  <span>{error}</span>
                  <button
                    type="button"
                    onClick={() => setError(null)}
                    aria-label="Dismiss error"
                  >
                    <i className="fas fa-times" aria-hidden="true"></i>
                  </button>
                </div>
              )}

              <div
                className="beneficiary-tabs"
                role="tablist"
                aria-label="Beneficiary type"
              >
                {[
                  { key: "transfer", label: "Transfer" },
                  { key: "fcy", label: "FCY" },
                  { key: "bill-payments", label: "Bill payments" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={activeFilter === tab.key}
                    className={`beneficiary-tab${activeFilter === tab.key ? " beneficiary-tab--active" : ""}`}
                    onClick={() => setActiveFilter(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="beneficiary-toolbar">
                <label className="beneficiary-search">
                  <i className="fas fa-search" aria-hidden="true"></i>
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      aria-label="Clear search"
                    >
                      <i className="fas fa-times" aria-hidden="true"></i>
                    </button>
                  )}
                </label>
                <button
                  className="beneficiary-add-button"
                  type="button"
                  onClick={() => {
                    setError(null);
                    setShowAddModal(true);
                  }}
                >
                  Add beneficiary
                </button>
              </div>

              {isLoadingBeneficiaries ? (
                <div className="beneficiary-state">
                  Loading beneficiaries...
                </div>
              ) : groupedBeneficiaries.length === 0 ? (
                <div className="beneficiary-state">No beneficiaries found.</div>
              ) : (
                <div className="beneficiary-list">
                  {groupedBeneficiaries.map(([letter, items]) => (
                    <div className="beneficiary-group" key={letter}>
                      {items.map((beneficiary, index) => {
                        const expanded =
                          expandedBeneficiaryId === beneficiary.id;
                        return (
                          <div
                            className="beneficiary-item-wrap"
                            key={beneficiary.id}
                          >
                            <div className="beneficiary-item-row">
                              <button
                                className="beneficiary-item"
                                type="button"
                                onClick={() =>
                                  transferToBeneficiary(beneficiary)
                                }
                              >
                                <span className="beneficiary-avatar">
                                  {beneficiary.initial}
                                </span>
                                <span className="beneficiary-item-body">
                                  <span className="beneficiary-name">
                                    {beneficiary.beneficiaryName}
                                  </span>
                                  <span className="beneficiary-detail">
                                    {beneficiary.detail}
                                  </span>
                                </span>
                                {beneficiary.isEpay && (
                                  <span className="beneficiary-kind">ePay</span>
                                )}
                                {index === 0 && (
                                  <span className="beneficiary-letter">
                                    {letter}
                                  </span>
                                )}
                              </button>
                              <button
                                className="beneficiary-menu-btn"
                                type="button"
                                aria-label="More actions"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpandedBeneficiaryId(
                                    expanded ? null : beneficiary.id,
                                  );
                                }}
                              >
                                <i
                                  className="fas fa-ellipsis-v"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                            {expanded && (
                              <div className="beneficiary-actions">
                                <button
                                  type="button"
                                  className="beneficiary-action beneficiary-action--delete"
                                  onClick={() =>
                                    handleDeleteClick(beneficiary.id)
                                  }
                                >
                                  <i
                                    className="fas fa-trash"
                                    aria-hidden="true"
                                  />
                                  Delete
                                </button>
                                <button
                                  type="button"
                                  className="beneficiary-action beneficiary-action--edit"
                                  onClick={() => openEditModal(beneficiary)}
                                >
                                  <i
                                    className="fas fa-pen"
                                    aria-hidden="true"
                                  />
                                  Edit
                                </button>
                                <button
                                  type="button"
                                  className="beneficiary-action beneficiary-action--history"
                                  onClick={() => openHistoryModal(beneficiary)}
                                >
                                  <i
                                    className="fas fa-clock"
                                    aria-hidden="true"
                                  />
                                  History
                                </button>
                                <button
                                  type="button"
                                  className="beneficiary-action beneficiary-action--transfer"
                                  onClick={() =>
                                    transferToBeneficiary(beneficiary)
                                  }
                                >
                                  Transfer
                                  <i
                                    className="fas fa-arrow-right"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
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

      {showAddModal && (
        <div
          className="beneficiary-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Add beneficiary"
        >
          <div className="beneficiary-modal">
            <div className="beneficiary-modal-heading">
              <h2>Add beneficiary</h2>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                aria-label="Close add form"
              >
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
            {error && (
              <div className="beneficiary-error" role="alert">
                {error}
              </div>
            )}
            <label className="beneficiary-field">
              <span>Beneficiary type</span>
              <select
                value={addForm.beneficiaryType}
                onChange={(event) =>
                  setAddForm({
                    ...addForm,
                    beneficiaryType: event.target.value as "BANK" | "USER",
                  })
                }
              >
                <option value="BANK">Bank account</option>
                <option value="USER">ePay user</option>
              </select>
            </label>
            <label className="beneficiary-field">
              <span>Beneficiary name</span>
              <input
                value={addForm.beneficiaryName}
                onChange={(event) =>
                  setAddForm({
                    ...addForm,
                    beneficiaryName: event.target.value,
                  })
                }
                maxLength={100}
              />
            </label>
            {addForm.beneficiaryType === "BANK" ? (
              <>
                <label className="beneficiary-field">
                  <span>Account name</span>
                  <input
                    value={addForm.accountName}
                    onChange={(event) =>
                      setAddForm({
                        ...addForm,
                        accountName: event.target.value,
                      })
                    }
                    maxLength={100}
                  />
                </label>
                <label className="beneficiary-field">
                  <span>Account number</span>
                  <input
                    inputMode="numeric"
                    value={addForm.accountNumber}
                    onChange={(event) =>
                      setAddForm({
                        ...addForm,
                        accountNumber: event.target.value.replace(/\D/g, ""),
                      })
                    }
                    maxLength={16}
                  />
                </label>
                <div className="beneficiary-field-row">
                  <label className="beneficiary-field">
                    <span>Bank name</span>
                    <input
                      value={addForm.bankName}
                      onChange={(event) =>
                        setAddForm({ ...addForm, bankName: event.target.value })
                      }
                    />
                  </label>
                  <label className="beneficiary-field">
                    <span>Bank code</span>
                    <input
                      value={addForm.bankCode}
                      onChange={(event) =>
                        setAddForm({ ...addForm, bankCode: event.target.value })
                      }
                    />
                  </label>
                </div>
              </>
            ) : (
              <label className="beneficiary-field">
                <span>ePay username</span>
                <input
                  value={addForm.recipientUsername}
                  onChange={(event) =>
                    setAddForm({
                      ...addForm,
                      recipientUsername: event.target.value,
                    })
                  }
                />
              </label>
            )}
            <label className="beneficiary-field">
              <span>Currency</span>
              <input
                value={addForm.currency}
                onChange={(event) =>
                  setAddForm({
                    ...addForm,
                    currency: event.target.value.toUpperCase(),
                  })
                }
                maxLength={10}
              />
            </label>
            <button
              className="beneficiary-save-button"
              type="button"
              disabled={isCreatingBeneficiary}
              onClick={createBeneficiary}
            >
              {isCreatingBeneficiary ? "Saving..." : "Save beneficiary"}
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 bg-[var(--bg-main)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-trash text-[var(--bg-main)] text-2xl"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-2">
              Delete Beneficiary?
            </h3>
            <p className="text-gray-600 text-center mb-6">
              This action cannot be undone. Are you sure you want to remove this
              beneficiary from your list?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 py-3 bg-[var(--bg-main)] text-white rounded-xl font-bold hover:opacity-90 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {editingBeneficiary && (
        <div
          className="beneficiary-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Edit beneficiary"
        >
          <div className="beneficiary-modal">
            <div className="beneficiary-modal-heading">
              <h2>Edit beneficiary</h2>
              <button
                type="button"
                onClick={() => setEditingBeneficiary(null)}
                aria-label="Close edit form"
              >
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
            {error && (
              <div className="beneficiary-error" role="alert">
                {error}
              </div>
            )}
            <label className="beneficiary-field">
              <span>Beneficiary name</span>
              <input
                value={editForm.beneficiaryName}
                onChange={(event) =>
                  setEditForm({
                    ...editForm,
                    beneficiaryName: event.target.value,
                  })
                }
                maxLength={100}
              />
            </label>
            {editingBeneficiary.beneficiaryType === "BANK" ? (
              <>
                <label className="beneficiary-field">
                  <span>Account name</span>
                  <input
                    value={editForm.accountName}
                    onChange={(event) =>
                      setEditForm({
                        ...editForm,
                        accountName: event.target.value,
                      })
                    }
                    maxLength={100}
                  />
                </label>
                <label className="beneficiary-field">
                  <span>Account number</span>
                  <input
                    inputMode="numeric"
                    value={editForm.accountNumber}
                    onChange={(event) =>
                      setEditForm({
                        ...editForm,
                        accountNumber: event.target.value.replace(/\D/g, ""),
                      })
                    }
                    maxLength={16}
                  />
                </label>
                <div className="beneficiary-field-row">
                  <label className="beneficiary-field">
                    <span>Bank name</span>
                    <input
                      value={editForm.bankName}
                      onChange={(event) =>
                        setEditForm({
                          ...editForm,
                          bankName: event.target.value,
                        })
                      }
                    />
                  </label>
                  <label className="beneficiary-field">
                    <span>Bank code</span>
                    <input
                      value={editForm.bankCode}
                      onChange={(event) =>
                        setEditForm({
                          ...editForm,
                          bankCode: event.target.value,
                        })
                      }
                    />
                  </label>
                </div>
              </>
            ) : (
              <label className="beneficiary-field">
                <span>ePay username</span>
                <input
                  value={editForm.recipientUsername}
                  onChange={(event) =>
                    setEditForm({
                      ...editForm,
                      recipientUsername: event.target.value,
                    })
                  }
                />
              </label>
            )}
            <label className="beneficiary-field">
              <span>Currency</span>
              <input
                value={editForm.currency}
                onChange={(event) =>
                  setEditForm({
                    ...editForm,
                    currency: event.target.value.toUpperCase(),
                  })
                }
                maxLength={10}
              />
            </label>
            <button
              className="beneficiary-save-button"
              type="button"
              disabled={isSavingBeneficiary}
              onClick={saveBeneficiary}
            >
              {isSavingBeneficiary ? "Saving..." : "Save changes"}
            </button>
          </div>
        </div>
      )}

      {/* History Side Panel */}
      {showHistoryModal && selectedBeneficiary && (
        <>
          <div
            className="history-backdrop"
            onClick={() => setShowHistoryModal(false)}
          />
          <div className="history-panel">
            <div className="history-panel-header">
              <div className="history-panel-header-content">
                <div className="history-panel-back-button">
                  <button
                    onClick={() => setShowHistoryModal(false)}
                    className="history-back-button"
                  >
                    <i className="fas fa-arrow-left"></i>
                  </button>
                </div>
                <div className="history-panel-title-section">
                  <h2 className="history-panel-title">
                    <i className="fas fa-user-circle history-panel-title-icon"></i>
                    Transaction History
                  </h2>
                </div>
                <div className="history-panel-header-actions">
                  <button
                    onClick={() => setShowHistoryModal(false)}
                    className="history-panel-send-button"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* Beneficiary Info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="fas fa-info-circle text-[var(--bg-main)]"></i>
                  Beneficiary Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Name</span>
                    <span className="font-semibold text-gray-900 text-sm">
                      {selectedBeneficiary.beneficiaryName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Type</span>
                    <span className="font-semibold text-gray-900 text-sm">
                      {selectedBeneficiary.isEpay
                        ? "ePay User"
                        : "Bank Account"}
                    </span>
                  </div>
                  {selectedBeneficiary.isEpay ? (
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Username</span>
                      <span className="font-semibold text-gray-900 text-sm">
                        @{selectedBeneficiary.recipientUsername}
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-sm">Bank</span>
                        <span className="font-semibold text-gray-900 text-sm">
                          {selectedBeneficiary.bankName}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-sm">
                          Account Number
                        </span>
                        <span className="font-semibold text-gray-900 text-sm">
                          {selectedBeneficiary.accountNumber}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 text-sm">
                          Account Name
                        </span>
                        <span className="font-semibold text-gray-900 text-sm">
                          {selectedBeneficiary.accountName}
                        </span>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Currency</span>
                    <span className="font-semibold text-gray-900 text-sm">
                      {selectedBeneficiary.currency}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Added</span>
                    <span className="font-semibold text-gray-900 text-sm">
                      {new Date(
                        selectedBeneficiary.createdOn,
                      ).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Transaction History */}
              <div className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <i className="fas fa-history text-[var(--bg-main)]"></i>
                    Transaction History
                    <span className="text-sm font-normal text-gray-500">
                      ({selectedBeneficiary.transactions.length})
                    </span>
                  </h3>
                </div>

                {isLoadingTransactions ? (
                  <div className="p-12 text-center">
                    <div className="w-16 h-16 border-4 border-[var(--bg-main)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">
                      Loading Transactions...
                    </h4>
                    <p className="text-xs text-gray-500">
                      Please wait while we fetch your transaction history.
                    </p>
                  </div>
                ) : (
                  <div
                    className={
                      selectedBeneficiary.transactions.length > 5
                        ? "history-transaction-scrollable"
                        : ""
                    }
                  >
                    {selectedBeneficiary.transactions.length === 0 ? (
                      <div className="p-8 text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <i className="fas fa-inbox text-2xl text-gray-400"></i>
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">
                          No Transactions Yet
                        </h4>
                        <p className="text-xs text-gray-500">
                          No transaction history available for this beneficiary.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2 p-4">
                        {selectedBeneficiary.transactions.map((transaction) => {
                          const credit = transaction.direction === "CREDIT";
                          return (
                            <div
                              key={transaction.id}
                              className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                            >
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                      credit
                                        ? "bg-[var(--bg-main)]/10 text-[var(--bg-main)]"
                                        : "bg-red-100 text-red-600"
                                    }`}
                                  >
                                    <i
                                      className={`fas ${credit ? "fa-arrow-down" : "fa-arrow-up"}`}
                                    ></i>
                                  </div>
                                  <div>
                                    <h5 className="font-bold text-gray-900 text-sm">
                                      {transaction.type.replace(/_/g, " ")}
                                    </h5>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                      {new Date(
                                        transaction.date,
                                      ).toLocaleDateString("en-GB", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      })}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p
                                    className={`font-bold text-sm ${credit ? "text-[var(--bg-main)]" : "text-red-600"}`}
                                  >
                                    {credit ? "+" : "-"}
                                    {transaction.currencyType === "NGN"
                                      ? "₦"
                                      : transaction.currencyType === "USD"
                                        ? "$"
                                        : transaction.currencyType === "EUR"
                                          ? "€"
                                          : transaction.currencyType === "GBP"
                                            ? "£"
                                            : ""}
                                    {transaction.amount.toLocaleString(
                                      "en-US",
                                      {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      },
                                    )}
                                  </p>
                                  <span
                                    className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                                      transaction.status === "completed"
                                        ? "bg-[var(--bg-main)]/10 text-[var(--bg-main)]"
                                        : transaction.status === "pending"
                                          ? "bg-yellow-100 text-yellow-700"
                                          : "bg-red-100 text-red-700"
                                    }`}
                                  >
                                    {transaction.status}
                                  </span>
                                </div>
                              </div>
                              {transaction.description && (
                                <p className="text-xs text-gray-600 mt-2 ml-13">
                                  {transaction.description}
                                </p>
                              )}
                              {transaction.reference && (
                                <p className="text-xs text-gray-400 mt-1 ml-13 font-mono">
                                  Ref: {transaction.reference}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {!isChatOpen && (
        <button
          className="chat-fab"
          onClick={() => setIsChatOpen(true)}
          aria-label="Open support chat"
        >
          <i className="fa-solid fa-comment-dots"></i>
        </button>
      )}
      <SupportChatBot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  );
};

export default BeneficiaryManager;
