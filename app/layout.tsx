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
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  description: "SlipChecker ระบบช่วยตรวจสอบสลิปอัตโนมัติ ลดการปลอมแปลง เพิ่มความปลอดภัย ใช้งานง่ายผ่าน API และหน้าเว็บ รองรับธุรกิจทุกขนาด พร้อมแพ็กเกจให้เลือกใช้งานตามความต้องการ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
