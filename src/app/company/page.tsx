import PageHero from "@/components/PageHero";
import ContactBanner from "@/components/ContactBanner";
import { company } from "@/data/site";

export const metadata = { title: "会社概要" };

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="COMPANY"
        title="会社概要"
        description="地域の皆さまに、安心できるカーライフを。"
        image="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=85"
      />
      <section className="companySection section">
        <div className="sectionHeader">
          <div><p className="eyebrow">PROFILE</p><h2>渡辺モータース商会について</h2></div>
          <p>1956年の創立以来、地域に根ざした車のプロとしてサービスを続けています。</p>
        </div>
        <dl className="companyTable">
          <div><dt>会社名</dt><dd>{company.name}</dd></div>
          <div><dt>所在地</dt><dd>〒{company.postal} {company.address}</dd></div>
          <div><dt>電話番号</dt><dd>{company.phone}</dd></div>
          <div><dt>営業時間</dt><dd>{company.hours}</dd></div>
          <div><dt>定休日</dt><dd>{company.closed}</dd></div>
          <div><dt>事業内容</dt><dd>新車・中古車販売、車検・点検・整備、自動車保険、ロードサービス</dd></div>
        </dl>
      </section>
      <ContactBanner />
    </>
  );
}