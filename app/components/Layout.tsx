import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* ✅ Top Bar */}
      <header className="bg-blue-800 text-white p-4 shadow-md h-16">
        <nav className="max-w-6xl mx-auto flex justify-between items-center h-full">
          <a href="/" className="flex items-center h-full px-12 -ml-4">
            <img src="/header-logo.png" alt="SlipChecker Logo" className="h-full w-auto" />
          </a>
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="/" className="hover:underline text-gray-200">หน้าแรก</a></li>
            <li><a href="#packages" className="hover:underline text-gray-200">แพ็กเกจ</a></li>
            <li><a href="#howto" className="hover:underline text-gray-200">วิธีใช้งาน</a></li>
            <li><a href="#contact" className="hover:underline text-gray-200">ติดต่อเรา</a></li>
            <li><a href="https://account.slip-checker.com/" className="hover:underline font-semibold text-yellow-300">สมาชิก</a></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      {/* ✅ Footer */}
      <footer className="bg-blue-800 text-white text-center py-6 mt-10">
        <p className="text-sm font-light">
          &copy; {new Date().getFullYear()} SlipChecker - All rights reserved.
        </p>
        <p className="text-sm mt-2">
          <a href="/privacy-policy" className="text-yellow-300 hover:underline">
            นโยบายความเป็นส่วนตัว
          </a>
        </p>
      </footer>
    </div>
  );
}