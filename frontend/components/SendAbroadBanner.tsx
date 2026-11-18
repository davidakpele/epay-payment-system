"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import "./SendAbroadBanner.css";

interface SendAbroadBannerProps {
  theme?: "light" | "dark";
}

const SendAbroadBanner = ({ theme = "light" }: SendAbroadBannerProps) => {
  const router = useRouter();

  return (
    <div className={`send-abroad-banner ${theme === "dark" ? "send-abroad-banner--dark" : ""}`}>
      <div className="send-abroad-banner__content">
        <h3 className="send-abroad-banner__heading">Need to send money abroad?</h3>
        <p className="send-abroad-banner__sub">
          Send to over 50 countries with great rates and low fees.
        </p>
        <button
          className="send-abroad-banner__cta"
          onClick={() => router.push("/exchange")}
          type="button"
        >
          Send International <ChevronRight size={15} />
        </button>
      </div>
      <div className="send-abroad-banner__globe" aria-hidden="true">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="40" cy="40" rx="14" ry="36" stroke="currentColor" strokeWidth="2" />
          <path d="M4 40h72" stroke="currentColor" strokeWidth="2" />
          <path d="M10 22h60M10 58h60" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default SendAbroadBanner;
