import Link from "next/link";
import { company, navItems } from "@/data/site";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerTop">
        <div>
          <div className="brand footerBrand">
            <span className="brandMark" aria-hidden="true"><i /><b /></span>
            <span>WATAMO</span>
          </div>
          <p>{company.name}</p>
          <p>〒{company.postal} {company.address}</p>
          <p>TEL {company.phone}</p>
        </div>
        <nav className="footerNav" aria-label="フッターナビゲーション">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/contact">お問い合わせ</Link>
        </nav>
      </div>
      <div className="footerBottom">
        <span>© WATAMO. All Rights Reserved.</span>
        <span>静岡のカーライフをトータルサポート</span>
      </div>
    </footer>
  );
}