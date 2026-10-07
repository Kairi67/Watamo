import Link from "next/link";
import { company } from "@/data/site";

export default function ContactBanner() {
  return (
    <section className="contactBanner">
      <div className="contactOverlay" />
      <div className="contactInner">
        <p className="eyebrow light">CONTACT</p>
        <h2>クルマのことなら、<br />どんなことでも。</h2>
        <p>販売・整備・保険・ロードサービスまで、お気軽にご相談ください。</p>
        <div className="contactActions">
          <Link className="button buttonRed" href="/contact">お問い合わせフォーム</Link>
          <a className="phoneLink" href={`tel:${company.phone.replaceAll("-", "")}`}>{company.phone}</a>
        </div>
      </div>
    </section>
  );
}