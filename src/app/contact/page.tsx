import { company } from "@/data/site";

export const metadata = { title: "お問い合わせ" };

export default function ContactPage() {
  return (
    <section className="contactPage section">
      <div className="contactPageHead">
        <p className="eyebrow">CONTACT</p>
        <h1>お問い合わせ</h1>
        <p>車検・整備、販売、保険、その他お車に関するご相談はこちらから。</p>
      </div>

      <div className="contactColumns">
        <div className="contactCard">
          <p className="eyebrow">PHONE</p>
          <h2>{company.phone}</h2>
          <p>営業時間 {company.hours}<br />定休日 {company.closed}</p>
          <a className="button buttonRed" href={`tel:${company.phone.replaceAll("-", "")}`}>電話をかける</a>
        </div>
        <div className="contactCard">
          <p className="eyebrow">FORM</p>
          <h2>メールフォーム</h2>
          <p>お問い合わせフォームは、運用中のフォームサービスまたはAPI接続先を設定して利用してください。</p>
          <p className="note">※ 現時点ではUIのみ実装し、送信処理は未接続です。</p>
        </div>
      </div>
    </section>
  );
}