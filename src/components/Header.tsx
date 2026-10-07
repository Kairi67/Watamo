"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brandMark" aria-hidden="true"><i /><b /></span>
          <span>WATAMO</span>
        </Link>

        <nav className={open ? "globalNav isOpen" : "globalNav"} aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="headerContact" href="/contact">お問い合わせ</Link>

        <button
          className="menuButton"
          type="button"
          aria-label="メニューを開閉"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}