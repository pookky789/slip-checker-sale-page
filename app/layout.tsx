import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SlipChecker | ระบบตรวจสอบสลิปอัตโนมัติ",
  icons: {
    icon: "/header-logo.png",
    apple: "/header-logo.png",
    shortcut: "/header-logo.png",
    other: [
      {
        rel: "icon",
        url: "/header-logo.png",
      },
    ]

  },
  description: "SlipChecker ระบบช่วยตรวจสอบสลิปอัตโนมัติ ลดการปลอมแปลง เพิ่มความปลอดภัย ใช้งานง่ายผ่าน API และหน้าเว็บ รองรับธุรกิจทุกขนาด พร้อมแพ็กเกจให้เลือกใช้งานตามความต้องการ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
