import type { Metadata, Viewport } from "next";
import "../globals.css";
import { PWARegister } from "@/components/PWARegister";

const fontLink = (
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap'
);

export const metadata: Metadata = {
  title: "FreelanceFlow — Financial Clarity for Independent Minds",
  applicationName: "FreelanceFlow",
  description: "Stop guessing your finances. FreelanceFlow calculates your safe monthly spend, automates taxes, and gives you AI-powered financial guidance — built exclusively for the irregular income life.",
  keywords: "freelance, finance, taxes, budgeting, independent contractor, safe to spend, financial planning",
  authors: [{ name: "FreelanceFlow" }],
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "FreelanceFlow",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: "/icons/icon.svg",
    shortcut: "/icons/icon.svg",
    apple: "/icons/icon.svg",
  },
  openGraph: {
    title: "FreelanceFlow — Financial Clarity for Independent Minds",
    description: "Stop guessing your finances. FreelanceFlow calculates your safe monthly spend, automates taxes, and gives you AI-powered financial guidance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreelanceFlow — Financial Clarity for Independent Minds",
    description: "Stop guessing your finances. FreelanceFlow calculates your safe monthly spend, automates taxes, and gives you AI-powered financial guidance.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0f1e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href={fontLink} rel="stylesheet" />
      </head>
      <body>
        <PWARegister />
        {children}
      </body>
    </html>
  );
}
