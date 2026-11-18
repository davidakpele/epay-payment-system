"use client";

import { X, Smartphone, Wifi, Tv, Lightbulb, Trophy, CreditCard, Repeat, Send, ArrowDownLeft, TrendingUp, Shield, Users, FileText, Headphones, MapPin, Landmark, Settings, Lock, AlertTriangle, BookOpen, Car, Bus, ShoppingBag, Gift, Ticket, Film, Gamepad2, Heart, Receipt, Wallet, PiggyBank, BarChart3, Link, QrCode, Store, Calendar, ArrowUpDown, Globe, Building2 } from "lucide-react";
import "./AllServicesDrawer.css";
import { useRouter } from "next/navigation";

interface ServiceItem {
  label: string;
  icon: React.ReactNode;
  color: string;
  route?: string;
}

interface ServiceCategory {
  title: string;
  services: ServiceItem[];
}

const allServiceCategories: ServiceCategory[] = [
  {
    title: "Top Up & Airtime",
    services: [
      { label: "Buy Airtime",      icon: <Smartphone size={20} color="#fff" />, color: "#ff7a5c", route: "/services/bills/airtime" },
      { label: "Buy Data",         icon: <Wifi       size={20} color="#fff" />, color: "#5ecdbf", route: "/services/bills/data"    },
    ],
  },
  {
    title: "Pay Bills",
    services: [
      { label: "Electricity",      icon: <Lightbulb  size={20} color="#fff" />, color: "#ffac7a", route: "/services/bills/electricity" },
      { label: "Cable TV",         icon: <Tv         size={20} color="#fff" />, color: "#5eb7cd", route: "/services/bills/cabletv"     },
      { label: "Betting",          icon: <Trophy     size={20} color="#fff" />, color: "#b5a1d5", route: "/services/bills/betting"     },
      { label: "Shopping",         icon: <ShoppingBag size={20} color="#fff" />, color: "#f472b6", route: "/services/bills/shopping"  },
    ],
  },
  {
    title: "Transfers & Exchange",
    services: [
      { label: "Send Money",       icon: <Send       size={20} color="#fff" />, color: "#0f172a"  },
      { label: "Deposit",          icon: <ArrowDownLeft size={20} color="#fff" />, color: "#16a34a" },
      { label: "Bank Transfer",    icon: <Landmark   size={20} color="#fff" />, color: "#1d4ed8"  },
      { label: "Exchange",         icon: <Repeat     size={20} color="#fff" />, color: "#b45309", route: "/exchange" },
      { label: "Send Abroad",      icon: <Globe      size={20} color="#fff" />, color: "#0369a1"  },
      { label: "Receive Intl",     icon: <ArrowUpDown size={20} color="#fff" />, color: "#0f766e" },
    ],
  },
  {
    title: "Cards & Payments",
    services: [
      { label: "Virtual Card",     icon: <CreditCard size={20} color="#fff" />, color: "#9adbb9", route: "/cards" },
      { label: "Pay with QR",      icon: <QrCode     size={20} color="#fff" />, color: "#0284c7"  },
      { label: "Pay Merchants",    icon: <Store      size={20} color="#fff" />, color: "#b45309"  },
      { label: "Payment Links",    icon: <Link       size={20} color="#fff" />, color: "#7c3aed"  },
      { label: "Invoice",          icon: <Receipt    size={20} color="#fff" />, color: "#059669"  },
    ],
  },
  {
    title: "Finance & Investments",
    services: [
      { label: "Investments",      icon: <TrendingUp size={20} color="#fff" />, color: "#b45309", route: "/investments" },
      { label: "Save Money",       icon: <PiggyBank  size={20} color="#fff" />, color: "#15803d"  },
      { label: "Pay Loan",         icon: <Wallet     size={20} color="#fff" />, color: "#374151"  },
      { label: "Apply Loan",       icon: <BarChart3  size={20} color="#fff" />, color: "#1d4ed8"  },
      { label: "Insurance",        icon: <Shield     size={20} color="#fff" />, color: "#0f766e"  },
      { label: "Refer & Earn",     icon: <Users      size={20} color="#fff" />, color: "#7c3aed", route: "/refer" },
    ],
  },
  {
    title: "Shopping & Lifestyle",
    services: [
      { label: "Gift Cards",       icon: <Gift       size={20} color="#fff" />, color: "#db2777"  },
      { label: "Event Tickets",    icon: <Ticket     size={20} color="#fff" />, color: "#9333ea"  },
      { label: "Streaming",        icon: <Film       size={20} color="#fff" />, color: "#dc2626"  },
      { label: "Gaming",           icon: <Gamepad2   size={20} color="#fff" />, color: "#059669"  },
      { label: "Medical Bills",    icon: <Heart      size={20} color="#fff" />, color: "#e11d48"  },
      { label: "Transport",        icon: <Bus        size={20} color="#fff" />, color: "#0284c7"  },
    ],
  },
  {
    title: "Account & Tools",
    services: [
      { label: "Statements",       icon: <FileText   size={20} color="#fff" />, color: "#374151"  },
      { label: "Verify BVN",       icon: <BookOpen   size={20} color="#fff" />, color: "#1d4ed8"  },
      { label: "Verify NIN",       icon: <BookOpen   size={20} color="#fff" />, color: "#0369a1"  },
      { label: "Block Account",    icon: <Lock       size={20} color="#fff" />, color: "#dc2626"  },
      { label: "Report Fraud",     icon: <AlertTriangle size={20} color="#fff" />, color: "#b91c1c" },
      { label: "Support",          icon: <Headphones size={20} color="#fff" />, color: "#0f172a", route: "/support" },
      { label: "Locate ATM",       icon: <MapPin     size={20} color="#fff" />, color: "#374151"  },
      { label: "Bank Branches",    icon: <Building2  size={20} color="#fff" />, color: "#1e40af"  },
    ],
  },
];

interface AllServicesDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function AllServicesDrawer({ open, onClose }: AllServicesDrawerProps) {
  const router = useRouter();

  const handleItemClick = (route?: string) => {
    if (route) {
      onClose();
      router.push(route);
    }
  };

  return (
    <>
      {open && (
        <div
          className="all-services-overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`all-services-drawer${open ? " all-services-drawer--open" : ""}`}
        aria-label="All Services"
        aria-hidden={!open}
      >
        <div className="all-services-drawer__header">
          <div>
            <h2 className="all-services-drawer__title">All Services</h2>
            <p className="all-services-drawer__subtitle">Everything you can do on ePay</p>
          </div>
          <button
            className="all-services-drawer__close"
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            <X size={16} />
          </button>
        </div>

        <div className="all-services-drawer__body">
          {allServiceCategories.map((cat) => (
            <section key={cat.title} className="asd-category">
              <h3 className="asd-category__title">{cat.title}</h3>
              <div className="asd-grid">
                {cat.services.map((item) => (
                  <button
                    key={item.label}
                    className="asd-item"
                    type="button"
                    onClick={() => handleItemClick(item.route)}
                  >
                    <span
                      className="asd-item__icon"
                      style={{ background: item.color }}
                    >
                      {item.icon}
                    </span>
                    <span className="asd-item__label">{item.label}</span>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </aside>
    </>
  );
}
