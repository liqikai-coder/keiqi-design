import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "凯奇设计 KEIQI DESIGN | 高端住宅空间定制",
    template: "%s | 凯奇设计 KEIQI DESIGN",
  },
  description:
    "凯奇设计，专注别墅、大平层、顶层复式与私人会所的高端住宅空间定制。一户一案，凯奇精工体系、健康住宅体系与日本整体厨卫体系。",
  keywords: [
    "凯奇设计",
    "KEIQI DESIGN",
    "高端住宅设计",
    "别墅设计",
    "大平层设计",
    "健康住宅",
    "日本整体厨卫",
    "AI设计顾问",
  ],
  openGraph: {
    title: "凯奇设计 KEIQI DESIGN | 高端住宅空间定制",
    description:
      "设计的不只是房子，而是未来十年的生活方式。高端住宅 × 健康住宅 × 日本整体厨卫 × AI设计顾问。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col bg-keiqi-cream text-keiqi-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
