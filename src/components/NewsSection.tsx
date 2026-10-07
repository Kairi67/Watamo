const news = [
  { date: "2026.10.07", category: "NEWS", title: "ホームページリニューアル準備中です" },
  { date: "2026.09.01", category: "SERVICE", title: "車検・整備のご相談を承っています" },
  { date: "2026.08.01", category: "INFO", title: "お車の買い替え相談もお気軽にどうぞ" },
];

export default function NewsSection() {
  return (
    <section className="newsSection section">
      <div className="sectionHeader compact">
        <div>
          <p className="eyebrow">NEWS</p>
          <h2>お知らせ</h2>
        </div>
      </div>
      <div className="newsList">
        {news.map((item) => (
          <article className="newsItem" key={item.date + item.title}>
            <time>{item.date}</time>
            <span>{item.category}</span>
            <h3>{item.title}</h3>
            <b>→</b>
          </article>
        ))}
      </div>
    </section>
  );
}