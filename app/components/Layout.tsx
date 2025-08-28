"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* ✅ Top Bar */}
      <header className="bg-blue-800 text-white p-4 shadow-md h-16">
        <nav className="max-w-6xl mx-auto flex justify-between items-center h-full">
          <Link href="/" className="flex items-center h-full px-4 sm:px-12 -ml-2 sm:-ml-4">
            <Image
              src="/header-logo.png"
              alt="SlipChecker Logo"
              width={120}
              height={48}
              className="h-full w-auto"
            />
          </Link>
          {/* Hamburger menu for mobile */}
          <div className="sm:hidden">
            <button
              type="button"
              className="text-white focus:outline-none"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) menu.classList.toggle("hidden");
              }}
              aria-label="เปิดเมนู"
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
          {/* Desktop menu */}
          <ul className="hidden sm:flex gap-6 text-sm font-medium">
            <li>
              <Link href="/" className="hover:underline text-gray-200">หน้าแรก</Link>
            </li>
            <li>
              <Link href="#packages" className="hover:underline text-gray-200">แพ็กเกจ</Link>
            </li>
            <li>
              <Link href="#howto" className="hover:underline text-gray-200">วิธีใช้งาน</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:underline text-gray-200">ติดต่อเรา</Link>
            </li>
            <li>
              <Link href="https://account.slip-checker.com/" className="hover:underline font-semibold text-yellow-300">สมาชิก</Link>
            </li>
          </ul>
        </nav>
        {/* Mobile menu */}
        <ul
          id="mobile-menu"
          className="sm:hidden flex flex-col gap-2 text-sm font-medium bg-blue-900 px-6 py-4 absolute top-16 left-0 right-0 z-50 hidden"
        >
          <li>
            <Link href="/" className="hover:underline text-gray-200 block py-2">หน้าแรก</Link>
          </li>
          <li>
            <Link href="#packages" className="hover:underline text-gray-200 block py-2">แพ็กเกจ</Link>
          </li>
          <li>
            <Link href="#howto" className="hover:underline text-gray-200 block py-2">วิธีใช้งาน</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline text-gray-200 block py-2">ติดต่อเรา</Link>
          </li>
          <li>
            <Link href="https://account.slip-checker.com/" className="hover:underline font-semibold text-yellow-300 block py-2">สมาชิก</Link>
          </li>
        </ul>
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