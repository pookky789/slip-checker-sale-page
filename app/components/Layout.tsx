import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* ✅ Top Bar */}
      <header className="bg-blue-800 text-white p-4 shadow-md h-16">
        <nav className="max-w-6xl mx-auto flex justify-between items-center h-full">
          <Link href="/" className="flex items-center h-full px-12 -ml-4">
            <Image
              src="/header-logo.png"
              alt="SlipChecker Logo"
              width={120} // กำหนดความกว้างของโลโก้
              height={48} // กำหนดความสูงของโลโก้
              className="h-full w-auto"
            />
          </Link>
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <Link href="/" className="hover:underline text-gray-200">
                หน้าแรก
              </Link>
            </li>
            <li>
              <Link href="#packages" className="hover:underline text-gray-200">
                แพ็กเกจ
              </Link>
            </li>
            <li>
              <Link href="#howto" className="hover:underline text-gray-200">
                วิธีใช้งาน
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline text-gray-200">
                ติดต่อเรา
              </Link>
            </li>
            <li>
              <Link href="https://account.slip-checker.com/" className="hover:underline font-semibold text-yellow-300">
                สมาชิก
              </Link>
            </li>
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
          <Link href="/privacy-policy" className="text-yellow-300 hover:underline">
            นโยบายความเป็นส่วนตัว
          </Link>
        </p>
      </footer>
    </div>
  );
}