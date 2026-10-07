import PageHero from "@/components/PageHero";
import ServiceDetail from "@/components/ServiceDetail";
import ContactBanner from "@/components/ContactBanner";
import { services } from "@/data/site";

const s = services[3];

export const metadata = { title: "自動車保険" };

export default function InsurancePage() {
  return (
    <>
      <PageHero eyebrow="SERVICE 04" title={s.title} description={s.lead} image={s.image} />
      <ServiceDetail
        {...s}
        points={[
          { title: "カーライフに合う補償", text: "車の使い方や家族構成を伺い、必要な補償を整理してご案内します。" },
          { title: "事故時も相談しやすい", text: "販売・整備・ロードサービス部門と連携し、万一の際も相談しやすい体制です。" },
          { title: "自動車保険以外も", text: "火災・傷害・賠償・生命保険など、暮らし全体のリスクにも対応します。" },
        ]}
      />
      <ContactBanner />
    </>
  );
}