"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowUpRight,
  ArrowDownLeft,
  X,
  ChevronDown,
  Check,
  Plus,
} from "lucide-react";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import RightPanel from "@/components/RightPanel";
import "./Statement.css";
import { Currency } from "../../types/api";
import { AccountTransactionStatement } from "../../types/utils";
import LoadingScreen from "@/components/loader/Loadingscreen";
import { StatementItem } from "../../types/errors";
import {
  capitalizeFirstLetter,
  formatAmount,
  getUserFullName,
  getUserId,
  getUsername,
  getWallet,
  historyService,
  userService,
} from "../../api";
import { useRouter } from "next/navigation";
import SupportChatBot from "@/components/SupportChatBot";

type TxnTypeFilter =
  | "ALL"
  | "DEPOSIT"
  | "WITHDRAWAL"
  | "TRANSFER_DEBIT"
  | "TRANSFER_CREDIT"
  | "SWAP"
  | "FEE"
  | "INVESTMENT_DEBIT"
  | "INVESTMENT_CREDIT"
  | "SAVINGS_DEBIT"
  | "SAVINGS_CREDIT";

interface FilterState {
  type: TxnTypeFilter;
  status: "ALL" | "Completed" | "Pending" | "Failed";
  startDate: string;
  endDate: string;
  search: string;
  period: string;
}

const DEFAULT_FILTERS: FilterState = {
  type: "ALL",
  status: "ALL",
  startDate: "",
  endDate: "",
  search: "",
  period: "Last 30 Days",
};

const TXN_TYPE_LABELS: Record<TxnTypeFilter, string> = {
  ALL: "All Types",
  DEPOSIT: "Deposit",
  WITHDRAWAL: "Withdrawal",
  TRANSFER_DEBIT: "Transfer Sent",
  TRANSFER_CREDIT: "Transfer Received",
  SWAP: "Swap",
  FEE: "Fee",
  INVESTMENT_DEBIT: "Investment (Debit)",
  INVESTMENT_CREDIT: "Investment (Credit)",
  SAVINGS_DEBIT: "Savings (Debit)",
  SAVINGS_CREDIT: "Savings (Credit)",
};

const ITEMS_PER_PAGE = 10;

const AVAILABLE_CURRENCIES: Currency[] = [
  { name: "Nigerian Naira", code: "NGN", symbol: "₦" },
  { name: "US Dollar", code: "USD", symbol: "$" },
  { name: "British Pound", code: "GBP", symbol: "£" },
  { name: "Euro", code: "EUR", symbol: "€" },
  { name: "Australian Dollar", code: "AUD", symbol: "$" },
  { name: "Canadian Dollar", code: "CAD", symbol: "$" },
  { name: "Japanese Yen", code: "JPY", symbol: "¥" },
  { name: "Swiss Franc", code: "CHF", symbol: "Fr" },
  { name: "Chinese Yuan", code: "CNY", symbol: "¥" },
  { name: "Ghanaian Cedi", code: "GHS", symbol: "₵" },
];

const FLAG_CODES: Record<string, string> = {
  NGN: "NG",
  USD: "US",
  GBP: "GB",
  EUR: "EU",
  AUD: "AU",
  CAD: "CA",
  JPY: "JP",
  CHF: "CH",
  CNY: "CN",
  GHS: "GH",
};

function fmtDate(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function fmtTime(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function groupByDate(items: AccountTransactionStatement[]) {
  const map = new Map<string, AccountTransactionStatement[]>();
  for (const t of items) {
    const label = fmtDate(t.date || t.createdAt || "");
    if (!map.has(label)) map.set(label, []);
    map.get(label)!.push(t);
  }
  return Array.from(map.entries()).map(([label, items]) => ({ label, items }));
}

function isCredit(t: AccountTransactionStatement) {
  if (t.debitCredit) return t.debitCredit.toUpperCase() === "CREDIT";
  const up = (t.type || "").toUpperCase();
  return [
    "DEPOSIT",
    "TRANSFER_CREDIT",
    "INVESTMENT_CREDIT",
    "SAVINGS_CREDIT",
  ].some((c) => up.includes(c));
}

interface Toast {
  id: number;
  message: string;
  type: "warning" | "success";
  exiting: boolean;
}

function DetailDrawer({
  txn,
  onClose,
}: {
  txn: AccountTransactionStatement;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const credit = isCredit(txn);

  function handleCopy() {
    navigator.clipboard
      .writeText(txn.reference || txn.id || "")
      .catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <>
      <div
        className="stmt-drawer-overlay"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className="stmt-detail-drawer stmt-detail-drawer--open"
        aria-label="Transaction details"
      >
        <div className="stmt-detail__header">
          <h2 className="stmt-detail__title">Transaction Details</h2>
          <button
            className="stmt-detail__close"
            type="button"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={18} color="#555" />
          </button>
        </div>

        <div
          className={`stmt-detail__hero ${credit ? "stmt-detail__hero--credit" : "stmt-detail__hero--debit"}`}
        >
          <div className="stmt-detail__hero-icon">
            {credit ? (
              <ArrowDownLeft size={28} color="#16a34a" />
            ) : (
              <ArrowUpRight size={28} color="#dc2626" />
            )}
          </div>
          <p className="stmt-detail__hero-amount">
            {credit ? "+" : "-"}
            {txn.symbol || ""}
            {formatAmount(Math.abs(txn.amount))}
          </p>
          <p className="stmt-detail__hero-desc">{txn.description}</p>
          <span
            className={`stmt-status stmt-status--${(txn.status || "pending").toLowerCase()}`}
          >
            {txn.status}
          </span>
        </div>

        <div className="stmt-detail__body">
          {[
            {
              label: "Date",
              value: `${fmtDate(txn.date || txn.createdAt || "")} ${fmtTime(txn.date || txn.createdAt || "")}`,
            },
            {
              label: "Type",
              value: TXN_TYPE_LABELS[txn.type as TxnTypeFilter] || txn.type,
            },
            { label: "Currency", value: txn.currencyType },
            { label: "Account", value: txn.accountHolder },
            {
              label: "Balance After",
              value: `${txn.symbol || ""}${formatAmount(txn.availableBalance || 0)}`,
            },
          ].map(({ label, value }) => (
            <div className="stmt-detail__row" key={label}>
              <span className="stmt-detail__row-label">{label}</span>
              <span className="stmt-detail__row-value">{value}</span>
            </div>
          ))}
          <div className="stmt-detail__row">
            <span className="stmt-detail__row-label">Reference</span>
            <div className="stmt-detail__ref-wrap">
              <span className="stmt-detail__row-value">
                {txn.reference || txn.id}
              </span>
              <button
                className={`stmt-detail__copy${copied ? " stmt-detail__copy--copied" : ""}`}
                type="button"
                onClick={handleCopy}
                aria-label="Copy reference"
              >
                {copied ? (
                  <Check size={14} color="#15803d" />
                ) : (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="11"
                      height="11"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M5 15V5a2 2 0 0 1 2-2h10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function FilterSheet({
  filters,
  onApply,
  onClose,
}: {
  filters: FilterState;
  onApply: (f: FilterState) => void;
  onClose: () => void;
}) {
  const [local, setLocal] = useState<FilterState>(filters);
  const [typeSearch, setTypeSearch] = useState("");

  function set<K extends keyof FilterState>(k: K, v: FilterState[K]) {
    setLocal((p) => ({ ...p, [k]: v }));
  }

  const txnTypes = Object.keys(TXN_TYPE_LABELS) as TxnTypeFilter[];
  const filteredTypes = txnTypes.filter((t) =>
    TXN_TYPE_LABELS[t].toLowerCase().includes(typeSearch.toLowerCase()),
  );

  return (
    <>
      <div
        className="stmt-drawer-overlay"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="stmt-filter-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Filter transactions"
      >
        <div className="stmt-filter-panel__header">
          <span className="stmt-filter-modal__title">Transaction type</span>
          <span className="stmt-filter-modal__tag">FILTER</span>
        </div>
        <p className="stmt-filter-modal__sub">
          Search by transaction type, useful for tracking one specific payment
        </p>
        <div className="stmt-filter__search-wrap">
          <input
            className="stmt-filter__search"
            type="text"
            placeholder="Search amount, narration"
            value={typeSearch}
            onChange={(e) => setTypeSearch(e.target.value)}
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" stroke="#aaa" strokeWidth="1.8" />
            <path
              d="m16.5 16.5 4 4"
              stroke="#aaa"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="stmt-filter-panel__body">
          <div className="stmt-filter__radio-list">
            {filteredTypes.length === 0 && (
              <p className="stmt-filter__no-result">No match</p>
            )}
            {filteredTypes.map((t) => (
              <label className="stmt-filter__radio-row" key={t}>
                <span
                  className={`stmt-filter__radio${local.type === t ? " stmt-filter__radio--active" : ""}`}
                />
                <input
                  type="radio"
                  name="txnType"
                  value={t}
                  checked={local.type === t}
                  onChange={() => set("type", t)}
                  className="stmt-filter__radio-input"
                />
                {TXN_TYPE_LABELS[t]}
              </label>
            ))}
          </div>

          <div className="stmt-filter__date-section">
            <p className="stmt-filter-modal__title">Date</p>
            <p className="stmt-filter-modal__sub">
              See only transactions within a specific timeframe. Choose custom
              to pick exact dates
            </p>
            <div className="stmt-filter__date-stack">
              <div className="stmt-filter__date-group">
                <label className="stmt-filter__date-label">Start Date</label>
                <input
                  className="stmt-filter__date-input"
                  type="date"
                  value={local.startDate}
                  onChange={(e) => set("startDate", e.target.value)}
                />
              </div>
              <div className="stmt-filter__date-group">
                <label className="stmt-filter__date-label">End Date</label>
                <input
                  className="stmt-filter__date-input"
                  type="date"
                  value={local.endDate}
                  onChange={(e) => set("endDate", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="stmt-filter-modal__footer">
          <button
            className="stmt-filter__reset"
            type="button"
            onClick={() => {
              setLocal(DEFAULT_FILTERS);
              onApply(DEFAULT_FILTERS);
              onClose();
            }}
          >
            Clear All
          </button>
          <button
            className="stmt-filter__apply"
            type="button"
            onClick={() => {
              onApply({ ...local, period: "Custom" });
              onClose();
            }}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
}

function EmailStatementModal({
  filters,
  statements,
  currency,
  onClose,
}: {
  filters: FilterState;
  statements: AccountTransactionStatement[];
  currency: string;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [format, setFormat] = useState<"PDF" | "CSV" | "EXCEL">("PDF");
  const [emailError, setEmailError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    setEmailError("");
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    if (statements.length === 0) {
      setEmailError("No transactions to include. Apply filters first.");
      return;
    }
    setSending(true);
    try {
      const userId = getUserId();
      const payload = {
        email: email.trim(),
        statements: statements.map(
          (item) =>
            ({
              id: item.id ?? "",
              date: item.date ?? "",
              description: item.description ?? "",
              type: item.type ?? "",
              currencyType: item.currencyType || currency || "USD",
              netAmount: item.amount ?? 0,
              balance: item.availableBalance || item.previousBalance || 0,
              reference: item.reference ?? "",
            }) as StatementItem,
        ),
      };
      await userService.sendAccountStatement(userId, email.trim(), payload);
      setSent(true);
    } catch {
      setEmailError("Failed to send statement. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="stmt-overlay" onClick={onClose}>
      <div
        className="stmt-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="stmt-modal__header">
          <div className="stmt-modal__header-left">
            <div className="stmt-modal__icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <polyline
                  points="14 2 14 8 20 8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <line
                  x1="9"
                  y1="13"
                  x2="15"
                  y2="13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <line
                  x1="9"
                  y1="17"
                  x2="13"
                  y2="17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <h2 className="stmt-modal__title">Request Account Statement</h2>
              <p className="stmt-modal__subtitle">
                {statements.length} transaction
                {statements.length !== 1 ? "s" : ""} · {currency} Wallet
                {filters.startDate && filters.endDate
                  ? ` · ${filters.startDate} → ${filters.endDate}`
                  : ` · ${filters.period || "All time"}`}
              </p>
            </div>
          </div>
          <button
            className="stmt-modal__close"
            type="button"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={16} color="#555" />
          </button>
        </div>

        {sent ? (
          <div className="stmt-modal__success">
            <div className="stmt-modal__success-icon">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Statement Requested!</h3>
            <p>
              Your account statement has been sent to <strong>{email}</strong>.
              Check your inbox shortly.
            </p>
            <button
              className="stmt-modal__done-btn"
              type="button"
              onClick={onClose}
            >
              Done
            </button>
          </div>
        ) : (
          <form className="stmt-modal__form" onSubmit={handleSend} noValidate>
            <div className="stmt-modal__summary">
              <div className="stmt-modal__summary-row">
                <span>Transactions</span>
                <strong>{statements.length}</strong>
              </div>
              <div className="stmt-modal__summary-row">
                <span>Currency</span>
                <strong>{currency}</strong>
              </div>
              <div className="stmt-modal__summary-row">
                <span>Period</span>
                <strong>
                  {filters.startDate && filters.endDate
                    ? `${filters.startDate} → ${filters.endDate}`
                    : filters.period || "All time"}
                </strong>
              </div>
              {filters.type !== "ALL" && (
                <div className="stmt-modal__summary-row">
                  <span>Type</span>
                  <strong>{TXN_TYPE_LABELS[filters.type]}</strong>
                </div>
              )}
            </div>

            <div className="stmt-modal__field">
              <label className="stmt-modal__label" htmlFor="stmt-email">
                Send to email address{" "}
                <span className="stmt-modal__required">*</span>
              </label>
              <input
                id="stmt-email"
                className={`stmt-modal__input${emailError ? " stmt-modal__input--error" : ""}`}
                type="email"
                placeholder="e.g. you@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                autoFocus
              />
              {emailError && <p className="stmt-modal__error">{emailError}</p>}
            </div>

            <div className="stmt-modal__field">
              <label className="stmt-modal__label">Statement format</label>
              <div className="stmt-modal__format-group">
                {(["PDF", "CSV", "EXCEL"] as const).map((f) => (
                  <label
                    key={f}
                    className={`stmt-modal__format-option${format === f ? " stmt-modal__format-option--active" : ""}`}
                  >
                    <input
                      type="radio"
                      name="format"
                      value={f}
                      checked={format === f}
                      onChange={() => setFormat(f)}
                      className="sr-only"
                    />
                    {f}
                  </label>
                ))}
              </div>
            </div>

            <button
              className="stmt-modal__submit"
              type="submit"
              disabled={sending}
            >
              {sending ? (
                <>
                  <span className="stmt-modal__spinner" /> Sending…
                </>
              ) : (
                "Send Statement"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const Statements = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [statements, setStatements] = useState<AccountTransactionStatement[]>(
    [],
  );
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [filterOpen, setFilterOpen] = useState(false);
  const [periodOpen, setPeriodOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const [detailTxn, setDetailTxn] =
    useState<AccountTransactionStatement | null>(null);
  const [stmtModalOpen, setStmtModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [serverTotalPages, setServerTotalPages] = useState(0);
  const [serverTotalElements, setServerTotalElements] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>({
    name: "Nigerian Naira",
    code: "NGN",
    symbol: "₦",
  });
  const [currentBalance, setCurrentBalance] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const periodRef = useRef<HTMLDivElement>(null);
  const walletRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
    const t = setTimeout(() => setIsPageLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (selectedCurrency.code) {
      const wallet = getWallet(selectedCurrency.code);
      if (wallet && typeof wallet === "object" && "balance" in wallet) {
        setCurrentBalance(Number((wallet as any).balance) || 0);
      }
    }
  }, [selectedCurrency.code]);

  useEffect(() => {
    if (!periodOpen && !walletOpen) return;
    const handler = (e: MouseEvent) => {
      if (periodRef.current && !periodRef.current.contains(e.target as Node))
        setPeriodOpen(false);
      if (walletRef.current && !walletRef.current.contains(e.target as Node))
        setWalletOpen(false);
    };
    const t = setTimeout(
      () => document.addEventListener("click", handler),
      100,
    );
    return () => {
      clearTimeout(t);
      document.removeEventListener("click", handler);
    };
  }, [periodOpen, walletOpen]);

  const toggleTheme = () => {
    const n = theme === "light" ? "dark" : "light";
    setTheme(n);
    localStorage.setItem("theme", n);
    document.documentElement.classList.toggle("dark", n === "dark");
    document.body.classList.toggle("dark-theme", n === "dark");
  };

  const handleSearch = useCallback(
    async (f: FilterState) => {
      if (!f.startDate || !f.endDate) {
        showToast("Please select both FROM and TO dates", "warning");
        return;
      }
      setLoading(true);
      setHasSearched(true);
      setCurrentPage(1);
      try {
        const userId = getUserId();
        if (!userId) {
          showToast("Please login to view statements", "warning");
          return;
        }

        const response = await historyService.getFilteredHistory(userId, {
          startDate: f.startDate,
          endDate: f.endDate,
          transactionType: f.type !== "ALL" ? f.type : "ALL",
          currency: selectedCurrency.code || "ALL",
        });

        const content: any[] =
          response?.data?.content ??
          response?.data?.data?.content ??
          (Array.isArray(response?.data) ? response.data : []);

        if (content.length > 0) {
          const transformed = content.map((item: any) => {
            const amountObj = item.amount || {};
            const balanceObj = item.balance || {};
            const net = Number(
              amountObj.net ?? item.netAmount ?? item.amount ?? 0,
            );
            return {
              id: item.transactionId || item.id || "",
              transactionId: item.transactionId || item.id || "",
              reference: item.reference || item.referenceNo || "",
              amount: net,
              gross: Number(amountObj.gross ?? net),
              fee: Number(amountObj.fee ?? 0),
              tax: Number(amountObj.tax ?? 0),
              netAmount: net,
              symbol: amountObj.symbol || item.symbol || "",
              currencyType:
                amountObj.currency ||
                item.currencyType ||
                selectedCurrency.code ||
                "NGN",
              availableBalance: Number(
                balanceObj.available ?? item.availableBalance ?? 0,
              ),
              previousBalance: Number(
                balanceObj.previous ?? item.previousBalance ?? 0,
              ),
              runningBalance: Number(
                balanceObj.running ?? item.runningBalance ?? 0,
              ),
              date: item.completedAt || item.timestamp || item.createdOn || "",
              createdAt: item.createdAt || "",
              description: item.description || item.message || "",
              type: item.transactionType || item.type || "TRANSFER",
              debitCredit: item.debitCredit || "",
              channel: item.channel || "",
              status: mapStatus(item.currentStatus || item.status),
              rawStatus: item.currentStatus || item.status || "",
              accountHolder:
                item.user?.accountHolder || item.accountHolder || "",
              userId: Number(item.user?.id || 0),
              walletId: Number(item.user?.walletId || 0),
              statusTimeline: item.statusTimeline?.statuses || {},
            };
          });

          setStatements(transformed);
          const meta = response?.data ?? {};
          const totalEl = meta.totalElements ?? transformed.length;
          const totalPg =
            meta.totalPages ?? Math.ceil(totalEl / ITEMS_PER_PAGE);
          setServerTotalElements(totalEl);
          setServerTotalPages(totalPg);
          showToast(`Found ${totalEl} transaction(s)`, "success");
        } else {
          setStatements([]);
          setServerTotalElements(0);
          setServerTotalPages(0);
          showToast(
            "No transactions found for the selected filters",
            "warning",
          );
        }
      } catch (error: any) {
        showToast(error?.message || "Error loading statements", "warning");
        setStatements([]);
      } finally {
        setLoading(false);
      }
    },
    [selectedCurrency.code],
  );

  function mapStatus(s: string | undefined) {
    const v = s?.toLowerCase() || "";
    if (["success", "completed", "confirmed", "delivered"].includes(v))
      return "Completed";
    if (["failed", "rejected", "cancelled"].includes(v)) return "Failed";
    return "Pending";
  }

  function applyFilters(f: FilterState) {
    setFilters(f);
    if (f.startDate && f.endDate) handleSearch(f);
  }

  function periodToDates(p: string) {
    const end = new Date(),
      start = new Date();
    if (p === "Last 7 Days") start.setDate(start.getDate() - 7);
    else if (p === "Last 30 Days") start.setDate(start.getDate() - 30);
    else if (p === "Last 3 Months") start.setMonth(start.getMonth() - 3);
    return {
      startDate: start.toISOString().split("T")[0],
      endDate: end.toISOString().split("T")[0],
    };
  }

  const totalPages =
    serverTotalPages > 0
      ? serverTotalPages
      : Math.ceil(statements.length / ITEMS_PER_PAGE);
  const pageItems = statements.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );
  const groups = groupByDate(pageItems);

  const activeFilterCount = [
    filters.type !== "ALL",
    filters.status !== "ALL",
    !!(filters.startDate && filters.endDate),
  ].filter(Boolean).length;

  if (isPageLoading) return <LoadingScreen />;

  return (
    <>
      {toasts.length > 0 && (
        <div className="stmt-toast-stack">
          {toasts.map((t) => (
            <div
              key={t.id}
              className={`stmt-toast stmt-toast--${t.type}${t.exiting ? " stmt-toast--exit" : ""}`}
            >
              {t.message}
            </div>
          ))}
        </div>
      )}

      {detailTxn && (
        <DetailDrawer txn={detailTxn} onClose={() => setDetailTxn(null)} />
      )}

      {filterOpen && (
        <FilterSheet
          filters={filters}
          onApply={applyFilters}
          onClose={() => setFilterOpen(false)}
        />
      )}

      {stmtModalOpen && (
        <EmailStatementModal
          filters={filters}
          statements={statements}
          currency={selectedCurrency.code || "NGN"}
          onClose={() => setStmtModalOpen(false)}
        />
      )}

      <div className={`dashboard-container${theme === "dark" ? " dark" : ""}`}>
        <Sidebar />
        <main className="main-content">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <div className="scrollable-content">
            <div className="stmt-page">
              <div className="stmt-page__heading">
                <h1 className="stmt-page__title">Transaction History</h1>
                <p className="stmt-page__sub">
                  Review and filter your account activity.
                </p>
              </div>

              <div className="stmt-toolbar">
                <div className="stmt-toolbar__account">
                  <span className="stmt-toolbar__acct-name">
                    {selectedCurrency.code
                      ? `${selectedCurrency.code} Wallet`
                      : capitalizeFirstLetter(
                          getUserFullName()?.toString() || "",
                        )}
                  </span>
                  <span className="stmt-toolbar__acct-num">
                    {selectedCurrency.symbol}
                    {formatAmount(currentBalance)}
                  </span>
                </div>

                <div className="stmt-toolbar__other" ref={walletRef}>
                  <button
                    className="stmt-toolbar__other-btn"
                    type="button"
                    onClick={() => {
                      setWalletOpen((o) => !o);
                      setPeriodOpen(false);
                    }}
                  >
                    Other Accounts <ChevronDown size={13} />
                  </button>
                  {walletOpen && (
                    <div
                      className="stmt-wallet-dropdown"
                      role="listbox"
                      aria-label="Select wallet"
                    >
                      <p className="stmt-wallet-dropdown__title">
                        Select Wallet
                      </p>
                      {AVAILABLE_CURRENCIES.map((c) => (
                        <button
                          key={c.code}
                          className={`stmt-wallet-dropdown__item${selectedCurrency.code === c.code ? " stmt-wallet-dropdown__item--active" : ""}`}
                          type="button"
                          role="option"
                          aria-selected={selectedCurrency.code === c.code}
                          onClick={() => {
                            setSelectedCurrency(c);
                            setStatements([]);
                            setHasSearched(false);
                            setWalletOpen(false);
                          }}
                        >
                          <span className="stmt-wallet-dropdown__flag">
                            {FLAG_CODES[c.code] ?? c.code.slice(0, 2)}
                          </span>
                          <div className="stmt-wallet-dropdown__info">
                            <span className="stmt-wallet-dropdown__currency">
                              {c.code}
                            </span>
                            {c.code === "NGN" && (
                              <span className="stmt-wallet-dropdown__badge">
                                Primary
                              </span>
                            )}
                          </div>
                          <span className="stmt-wallet-dropdown__check">
                            {selectedCurrency.code === c.code ? (
                              <Check size={14} color="#fff" />
                            ) : (
                              <span className="stmt-wallet-dropdown__radio" />
                            )}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="stmt-toolbar__period" ref={periodRef}>
                  <button
                    className={`stmt-toolbar__period-btn${periodOpen ? " stmt-toolbar__period-btn--open" : ""}`}
                    type="button"
                    onClick={() => {
                      setPeriodOpen((o) => !o);
                      setWalletOpen(false);
                      setFilterOpen(false);
                    }}
                  >
                    {filters.period === "Custom" &&
                    filters.startDate &&
                    filters.endDate
                      ? `${filters.startDate} → ${filters.endDate}`
                      : filters.period || "Last 30 Days"}{" "}
                    <ChevronDown size={13} />
                  </button>
                  {periodOpen && (
                    <ul className="stmt-period-dropdown">
                      {[
                        "Today",
                        "Last 7 Days",
                        "Last 30 Days",
                        "Last 3 Months",
                        "Custom",
                      ].map((p) => (
                        <li key={p}>
                          <button
                            className={`stmt-period-option${(filters.period || "Last 30 Days") === p ? " stmt-period-option--active" : ""}`}
                            type="button"
                            onClick={() => {
                              if (p === "Custom") {
                                setPeriodOpen(false);
                                setFilterOpen(true);
                              } else {
                                const dates = periodToDates(p);
                                applyFilters({
                                  ...filters,
                                  period: p,
                                  ...dates,
                                });
                                setPeriodOpen(false);
                              }
                            }}
                          >
                            {p}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {statements.length > 0 && (
                  <button
                    className="stmt-stmt-btn"
                    type="button"
                    onClick={() => setStmtModalOpen(true)}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="14 2 14 8 20 8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Statement
                  </button>
                )}
              </div>

              {(filters.type !== "ALL" ||
                (filters.startDate && filters.endDate)) && (
                <div className="stmt-chips">
                  {filters.type !== "ALL" && (
                    <span className="stmt-chip">
                      {TXN_TYPE_LABELS[filters.type]}
                      <button
                        type="button"
                        onClick={() =>
                          applyFilters({ ...filters, type: "ALL" })
                        }
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {filters.startDate && filters.endDate && (
                    <span className="stmt-chip">
                      {filters.startDate} → {filters.endDate}
                      <button
                        type="button"
                        onClick={() =>
                          applyFilters({
                            ...filters,
                            startDate: "",
                            endDate: "",
                            period: "Last 30 Days",
                          })
                        }
                      >
                        ×
                      </button>
                    </span>
                  )}
                  <button
                    className="stmt-chip stmt-chip--clear"
                    type="button"
                    onClick={() => applyFilters(DEFAULT_FILTERS)}
                  >
                    Clear all
                  </button>
                </div>
              )}

              {loading && (
                <div className="stmt-loading">
                  <div className="stmt-spinner" />
                  <span>Loading transactions…</span>
                </div>
              )}

              {!loading && hasSearched && statements.length === 0 && (
                <div className="stmt-empty">
                  <div className="stmt-empty__icon">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="11"
                        cy="11"
                        r="7"
                        stroke="#ccc"
                        strokeWidth="1.5"
                      />
                      <path
                        d="m16.5 16.5 4 4"
                        stroke="#ccc"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p className="stmt-empty__title">No transactions found</p>
                  <p className="stmt-empty__sub">
                    Try adjusting your filters or date range.
                  </p>
                  <button
                    className="stmt-empty__reset"
                    type="button"
                    onClick={() => applyFilters(DEFAULT_FILTERS)}
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {!loading && !hasSearched && (
                <div className="stmt-empty">
                  <div className="stmt-empty__icon">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="11"
                        cy="11"
                        r="7"
                        stroke="#ccc"
                        strokeWidth="1.5"
                      />
                      <path
                        d="m16.5 16.5 4 4"
                        stroke="#ccc"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p className="stmt-empty__title">Select a date range</p>
                  <p className="stmt-empty__sub">
                    Use the period picker or filter to view your transaction
                    history.
                  </p>
                </div>
              )}

              {!loading && statements.length > 0 && (
                <div className="stmt-results">
                  <p className="stmt-results__count">
                    {serverTotalElements || statements.length} transaction
                    {(serverTotalElements || statements.length) !== 1
                      ? "s"
                      : ""}
                  </p>

                  {groups.map(({ label, items }) => (
                    <div className="stmt-group" key={label}>
                      <p className="stmt-group__label">{label}</p>
                      <div className="stmt-group__list">
                        {items.map((txn) => {
                          const credit = isCredit(txn);
                          return (
                            <button
                              key={txn.id}
                              className="stmt-item"
                              type="button"
                              onClick={() => setDetailTxn(txn)}
                            >
                              <div
                                className={`stmt-item__icon ${credit ? "stmt-item__icon--credit" : "stmt-item__icon--debit"}`}
                              >
                                {credit ? (
                                  <ArrowDownLeft size={18} color="#16a34a" />
                                ) : (
                                  <ArrowUpRight size={18} color="#dc2626" />
                                )}
                              </div>
                              <div className="stmt-item__body">
                                <p className="stmt-item__desc">
                                  {txn.description || txn.type}
                                </p>
                                <p className="stmt-item__meta">
                                  {txn.accountHolder || txn.type}
                                  {(txn.date || txn.createdAt) &&
                                    ` · ${fmtTime(txn.date || txn.createdAt || "")}`}
                                </p>
                              </div>
                              <div className="stmt-item__right">
                                <p
                                  className={`stmt-item__amount ${credit ? "stmt-item__amount--credit" : "stmt-item__amount--debit"}`}
                                >
                                  {credit ? "+" : "-"}
                                  {txn.symbol || ""}
                                  {formatAmount(Math.abs(txn.amount))}
                                </p>
                                <span
                                  className={`stmt-status stmt-status--${(txn.status || "pending").toLowerCase()}`}
                                >
                                  {txn.status}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  {totalPages > 1 && (
                    <div className="stmt-pagination">
                      <button
                        className="stmt-page-btn"
                        type="button"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => p - 1)}
                      >
                        ← Prev
                      </button>
                      <span className="stmt-page-info">
                        {currentPage} / {totalPages}
                      </span>
                      <button
                        className="stmt-page-btn"
                        type="button"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((p) => p + 1)}
                      >
                        Next →
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>

        <RightPanel theme={theme} />
        <MobileNav activeTab="home" />

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
    </>
  );
};

export default Statements;
