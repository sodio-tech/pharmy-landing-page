import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import TopLoader from "@/components/landing/TopLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pharmy - Pharmacy Management Software for Billing & Inventory",
  description: "Pharmy helps pharmacies manage billing, inventory, staff, and reports. Start your free 3-day trial and simplify daily pharmacy operations.",
  openGraph: {
    title: "Pharmy - Pharmacy Management Software for Billing & Inventory",
    description: "Pharmy helps pharmacies manage billing, inventory, staff, and reports. Start your free 3-day trial and simplify daily pharmacy operations.",
    url: "https://www.pharmy.one",
    siteName: "Pharmy",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Pharmy - Pharmacy Management Software",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmy – Pharmacy Management Software for Billing & Inventory",
    description: "Pharmy helps pharmacies manage billing, inventory, staff, and reports. Start your free 3-day trial and simplify daily pharmacy operations.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-851334617"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-851334617');
          `}
        </Script>
        <TopLoader />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {children}
      </body>
    </html>
  );
}
