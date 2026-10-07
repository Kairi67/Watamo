import PageHero from "@/components/PageHero";
import ServiceDetail from "@/components/ServiceDetail";
import ContactBanner from "@/components/ContactBanner";
import { services } from "@/data/site";

const s = services[1];

export const metadata = { title: "新車・中古車販売" };

export default function CarsPage() {
  return (
    <>
      <PageHero eyebrow="SERVICE 02" title={s.title} description={s.lead} image={s.image} />
      <ServiceDetail
        {...s}
        points={[
          { title: "新車・中古車に対応", text: "メーカーを問わず、お客様の希望に合った一台を一緒に探します。" },
          { title: "買い方までご提案", text: "ローンやリースなど、予算や使い方に合う購入方法を分かりやすくご案内します。" },
          { title: "整備までワンストップ", text: "ご購入後の車検・点検・保険相談まで、同じ窓口で継続してサポートします。" },
        ]}
      />
      <ContactBanner />
    </>
  );
}