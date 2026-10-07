import { faqs } from "@/data/site";

export default function FaqSection() {
  return (
    <section className="faqSection section">
      <div className="sectionHeader compact">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2>よくあるご質問</h2>
        </div>
      </div>
      <div className="faqList">
        {faqs.map((item, i) => (
          <details className="faqItem" key={item.q}>
            <summary><span>Q{i + 1}</span>{item.q}</summary>
            <div className="faqAnswer">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}