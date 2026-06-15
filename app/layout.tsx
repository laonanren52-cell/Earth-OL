import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_SC({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "-apple-system", "PingFang SC", "sans-serif"],
});

export const metadata: Metadata = {
  title: "人生打卡 - 记录你的每一次成长",
  description: "像玩游戏一样解锁人生小成就，AI 记录你的每一次成长。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#F7F5F2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={"min-h-[100dvh] " + notoSans.className}>
        <main className="mx-auto min-h-[100dvh] max-w-md bg-ivory-100 pb-20">
          {children}
        </main>
      </body>
    </html>
  );
}