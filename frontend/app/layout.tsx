import type { Metadata } from "next";
// Use the self-hosted geist package instead of next/font/google so the build
// does not need to reach fonts.googleapis.com (fails in network-restricted CI).
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import CookieMigration from "./components/CookieMigration";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "ePay Online Wallet",
  description: "Welcome to ePay Online payment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#c9190c" />
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="Cache-control" content="no-cache" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="msapplication-TileColor" content="#c9190c" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CookieMigration />
        {children}
      </body>
    </html>
  );
}
