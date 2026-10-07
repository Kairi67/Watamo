import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = { title: "採用情報" };

export default function RecruitPage() {
  return (
    <>
      <PageHero
        eyebrow="RECRUIT"
        title="一緒に、地域の移動を支える。"
        description="整備・販売・ロードサービス。それぞれのプロが連携して、お客様の安心をつくっています。"
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85"
      />
      <section className="section recruitSection">
        <div className="sectionHeader">
          <div><p className="eyebrow">JOIN US</p><h2>ワタモで働く</h2></div>
          <p>経験の有無だけでなく、お客様や仲間に誠実に向き合える方を歓迎します。</p>
        </div>
        <div className="pointGrid">
          <article className="pointCard"><span>01</span><h3>地域密着</h3><p>静岡のカーライフを身近な場所で支える仕事です。</p></article>
          <article className="pointCard"><span>02</span><h3>幅広い経験</h3><p>販売・整備・救援など、車に関する幅広い知識と経験が身につきます。</p></article>
          <article className="pointCard"><span>03</span><h3>チームで対応</h3><p>部門を越えて連携し、お客様の課題を解決していきます。</p></article>
        </div>
        <div className="centerAction"><Link className="button buttonRed" href="/contact">採用について問い合わせる</Link></div>
      </section>
    </>
  );
}