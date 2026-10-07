import PageHero from "@/components/PageHero";
import ServiceDetail from "@/components/ServiceDetail";
import ContactBanner from "@/components/ContactBanner";
import { services } from "@/data/site";

const s = services[0];

export const metadata = { title: "車検・整備" };

export default function MaintenancePage() {
  return (
    <>
      <PageHero eyebrow="SERVICE 01" title={s.title} description={s.lead} image={s.image} />
      <ServiceDetail
        {...s}
        points={[
          { title: "指定整備工場", text: "確かな設備と技術体制で、点検・整備・車検まで一貫して対応します。" },
          { title: "予防整備にも対応", text: "不具合が起きる前の点検・部品交換まで、お車の状態に合わせてご案内します。" },
          { title: "購入後も安心", text: "日常点検から故障診断まで、長く安心して乗るためのアフターサポートを行います。" },
        ]}
      />
      <ContactBanner />
    </>
  );
}