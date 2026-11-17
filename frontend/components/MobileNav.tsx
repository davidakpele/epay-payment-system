"use client";

import { useRouter } from "next/navigation";
import {
  HomeIcon,
  BillNavIcon,
  PlusIcon,
  ExchangeIcon,
  UserIcon,
} from "@/app/utils/Icons";
import "./MobileNav.css";

interface MobileNavProps {
  activeTab?: string;
  onPlusClick?: () => void;
  onBillsClick?: () => void;
}

const MobileNav = ({
  activeTab = "home",
  onPlusClick,
  onBillsClick,
}: MobileNavProps) => {
  const router = useRouter();

  const handleExchangeRoute = () => {
    router.push("/exchange");
  };

  const handleHomeRoute = () => {
    router.push("/dashboard");
  };

  const handleUserProfileRoute = () => {
    router.push("/settings/profile");
  };

  const isActive = (tabName: string) => {
    return activeTab !== "none" && activeTab === tabName;
  };

  return (
    <footer className="mobile-footer">
      <div
        className={`footer-tab ${isActive("home") ? "active" : ""}`}
        onClick={handleHomeRoute}
      >
        <HomeIcon size={22} />
        <span>Home</span>
      </div>

      <div
        className={`footer-tab ${isActive("bills") ? "active" : ""}`}
        onClick={() => onBillsClick?.()}
      >
        <BillNavIcon size={22} />
        <span>Bills</span>
      </div>

      <div className="center-send" onClick={onPlusClick}>
        <PlusIcon size={28} />
      </div>

      <div
        className={`footer-tab ${isActive("exchange") ? "active" : ""}`}
        onClick={handleExchangeRoute}
      >
        <ExchangeIcon size={20} />
        <span>Swap</span>
      </div>

      <div
        className={`footer-tab ${isActive("profile") ? "active" : ""}`}
        onClick={handleUserProfileRoute}
      >
        <UserIcon size={22} />
        <span>Profile</span>
      </div>
    </footer>
  );
};

export default MobileNav;
