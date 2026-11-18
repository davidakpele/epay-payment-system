"use client";

import {
  X,
  Smartphone,
  Wifi,
  Tv,
  Lightbulb,
  Trophy,
  ShoppingBag,
  Droplets,
  GraduationCap,
  FileText,
  Building,
  Heart,
  Car,
  Shield,
} from "lucide-react";
import "./BillsDrawer.css";
import { useRouter } from "next/navigation";

interface BillItem {
  label: string;
  icon: React.ReactNode;
  color: string;
  route: string;
}

const billItems: BillItem[] = [
  {
    label: "Airtime",
    icon: <Smartphone size={22} color="#fff" />,
    color: "#ff7a5c",
    route: "/services/bills/airtime",
  },
  {
    label: "Data",
    icon: <Wifi size={22} color="#fff" />,
    color: "#5ecdbf",
    route: "/services/bills/data",
  },
  {
    label: "Cable TV",
    icon: <Tv size={22} color="#fff" />,
    color: "#5eb7cd",
    route: "/services/bills/cabletv",
  },
  {
    label: "Electricity",
    icon: <Lightbulb size={22} color="#fff" />,
    color: "#ffac7a",
    route: "/services/bills/electricity",
  },
  {
    label: "Betting",
    icon: <Trophy size={22} color="#fff" />,
    color: "#b5a1d5",
    route: "/services/bills/betting",
  },
  {
    label: "Shopping",
    icon: <ShoppingBag size={22} color="#fff" />,
    color: "#f472b6",
    route: "/services/bills/shopping",
  },
  {
    label: "Water",
    icon: <Droplets size={22} color="#fff" />,
    color: "#2563eb",
    route: "/services/bills",
  },
  {
    label: "School Fees",
    icon: <GraduationCap size={22} color="#fff" />,
    color: "#d97706",
    route: "/services/bills",
  },
  {
    label: "Tax & Govt",
    icon: <FileText size={22} color="#fff" />,
    color: "#374151",
    route: "/services/bills",
  },
  {
    label: "Rent",
    icon: <Building size={22} color="#fff" />,
    color: "#1d4ed8",
    route: "/services/bills",
  },
  {
    label: "Medical",
    icon: <Heart size={22} color="#fff" />,
    color: "#e11d48",
    route: "/services/bills",
  },
  {
    label: "Vehicle",
    icon: <Car size={22} color="#fff" />,
    color: "#92400e",
    route: "/services/bills",
  },
  {
    label: "Insurance",
    icon: <Shield size={22} color="#fff" />,
    color: "#0f766e",
    route: "/services/bills",
  },
];

interface BillsDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function BillsDrawer({ open, onClose }: BillsDrawerProps) {
  const router = useRouter();

  const handleItemClick = (route: string) => {
    onClose();
    router.push(route);
  };

  return (
    <>
      {open && (
        <div
          className="bills-drawer-overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <div
        className={`bills-drawer${open ? " bills-drawer--open" : ""}`}
        aria-label="Pay Bills"
        aria-hidden={!open}
      >
        <div className="bills-drawer__header">
          <h2 className="bills-drawer__title">Pay Bills</h2>
          <button
            className="bills-drawer__close"
            onClick={onClose}
            aria-label="Close bills"
            type="button"
          >
            <X size={15} />
          </button>
        </div>

        <div className="bills-drawer__body">
          <div className="bills-grid">
            {billItems.map((item) => (
              <button
                key={item.label}
                className="bills-item"
                type="button"
                onClick={() => handleItemClick(item.route)}
              >
                <span
                  className="bills-item__icon"
                  style={{ background: item.color }}
                >
                  {item.icon}
                </span>
                <span className="bills-item__label">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
