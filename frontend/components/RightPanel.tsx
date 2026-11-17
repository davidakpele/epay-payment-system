"use client";

import { ChevronRight, Download, Send, Smartphone, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import "./RightPanel.css";

interface WalletBalance {
  currency_code: string;
  symbol: string;
  balance: string;
}

interface RightPanelProps {
  walletBalances?: WalletBalance[];
  theme?: "light" | "dark";
}

const FLAG_MAP: Record<string, string> = {
  USD: "US",
  NGN: "NG",
  GBP: "GB",
  EUR: "EU",
  AUD: "AU",
  CAD: "CA",
  JPY: "JP",
  CNY: "CN",
  CHF: "CH",
  GHS: "GH",
};

function formatBalance(value: string): string {
  const n = parseFloat(value);
  if (isNaN(n)) return "0.00";
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const RightPanel = ({ walletBalances = [], theme = "light" }: RightPanelProps) => {
  const router = useRouter();

  const quickActions = [
    { icon: <Send size={20} />,       label: "Send Money",  route: "/wallet/transfer"           },
    { icon: <Download size={20} />,   label: "Deposit",     route: "/wallet/deposit"            },
    { icon: <Smartphone size={20} />, label: "Buy Airtime", route: "/services/bills/airtime"    },
    { icon: <Zap size={20} />,        label: "Pay Bills",   route: "/bills"                     },
  ];

  const displayBalances = walletBalances.slice(0, 4);

  return (
    <aside className={`right-panel${theme === "dark" ? " right-panel--dark" : ""}`}>

      <section className="rp-quick-actions">
        <h3 className="rp-section-title">Quick Actions</h3>
        <div className="rp-quick-actions__grid">
          {quickActions.map((action) => (
            <button
              key={action.label}
              className="rp-quick-action__btn"
              onClick={() => router.push(action.route)}
              type="button"
            >
              <span className="rp-quick-action__icon">{action.icon}</span>
              <span className="rp-quick-action__label">{action.label}</span>
            </button>
          ))}
        </div>
      </section>

      {displayBalances.length > 0 && (
        <section className="rp-wallet-overview">
          <div className="rp-wallet-overview__header">
            <h3 className="rp-section-title">Wallet Overview</h3>
            <button
              className="rp-wallet-overview__view-all"
              onClick={() => router.push("/wallet")}
              type="button"
            >
              View all
            </button>
          </div>
          <ul className="rp-wallet-overview__list">
            {displayBalances.map((b) => (
              <li
                key={b.currency_code}
                className="rp-wallet-overview__item"
                onClick={() => router.push("/wallet")}
              >
                <span className="rp-wallet-overview__flag">
                  {FLAG_MAP[b.currency_code] ?? b.currency_code.slice(0, 2)}
                </span>
                <span className="rp-wallet-overview__code">{b.currency_code}</span>
                <span className="rp-wallet-overview__balance">
                  {b.symbol}{formatBalance(b.balance)}
                </span>
                <ChevronRight size={15} className="rp-wallet-overview__arrow" />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="rp-promo">
        <div className="rp-promo__globe" aria-hidden="true">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="2" />
            <ellipse cx="40" cy="40" rx="14" ry="36" stroke="currentColor" strokeWidth="2" />
            <path d="M4 40h72" stroke="currentColor" strokeWidth="2" />
            <path d="M10 22h60M10 58h60" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <p className="rp-promo__heading">Manage multiple currencies with ease.</p>
        <p className="rp-promo__sub">
          Switch between your wallets, transfer, and make payments in your preferred currency.
        </p>
        <button
          className="rp-promo__cta"
          onClick={() => router.push("/wallet")}
          type="button"
        >
          View Wallets <ChevronRight size={14} />
        </button>
      </section>

    </aside>
  );
};

export default RightPanel;
