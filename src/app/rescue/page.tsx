import PageHero from "@/components/PageHero";
import ServiceDetail from "@/components/ServiceDetail";
import ContactBanner from "@/components/ContactBanner";
import { services } from "@/data/site";

const s = services[2];

export const metadata = { title: "24時間カーレスキュー" };

export default function RescuePage() {
  return (
    <>
      <PageHero eyebrow="SERVICE 03" title={s.title} description={s.lead} image={s.image} />
      <ServiceDetail
        {...s}
        points={[
          { title: "365日24時間対応", text: "時間を問わず発生する車のトラブルに、迅速な対応を目指します。" },
          { title: "幅広いトラブルに対応", text: "バッテリー上がり、パンク、故障、事故搬送など、状況に合わせて対応します。" },
          { title: "各保険会社にも対応", text: "保険会社を通じたロードサービス案件にも対応しています。" },
        ]}
      />
      <ContactBanner />
    </>
  );
}