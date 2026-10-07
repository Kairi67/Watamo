import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="homeHero">
      <div className="heroOverlay" />
      <div className="heroContent">
        <p className="eyebrow light">TOTAL CAR LIFE SUPPORT</p>
        <h1>クルマのこと、<br />すべてワタモに。</h1>
        <p className="heroLead">
          販売・整備・保険・ロードサービスまで。<br />
          静岡のカーライフをトータルでサポートします。
        </p>
        <div className="heroActions">
          <Link className="button buttonRed" href="/contact">お問い合わせ</Link>
          <Link className="button buttonGhost" href="/company">ワタモについて</Link>
        </div>
      </div>
    </section>
  );
}