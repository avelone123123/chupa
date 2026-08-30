import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};
export const metadata: Metadata = {
  title: `${siteConfig.ticker} — ${siteConfig.projectName} | Казахстанский мем-токен`,
  description: siteConfig.tagline,
  keywords: ["chupa", "meme coin", "crypto", "казахстан", "мем", "токен", "chupacoin"],
  openGraph: {
    title: `${siteConfig.ticker} — ${siteConfig.projectName}`,
    description: siteConfig.tagline,
    type: "website",
    siteName: siteConfig.projectName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.ticker} — ${siteConfig.projectName}`,
    description: siteConfig.tagline,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning>
      <body className="noise-bg">{children}</body>
    </html>
  );
}
