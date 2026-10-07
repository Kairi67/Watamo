import Link from "next/link";
import { services } from "@/data/site";

export default function ServiceGrid() {
  return (
    <section className="serviceGridWrap section">
      <div className="sectionHeader">
        <div>
          <p className="eyebrow">SERVICE</p>
          <h2>カーライフを、ひとつにつなぐ。</h2>
        </div>
        <p>購入からメンテナンス、保険、万一のトラブルまで。ワタモが一貫して支えます。</p>
      </div>

      <div className="serviceGrid">
        {services.map((service) => (
          <Link className="serviceCard" href={`/${service.slug}`} key={service.slug}>
            <div className="serviceImage" style={{ backgroundImage: `url("${service.image}")` }} />
            <div className="serviceBody">
              <span className="serviceNumber">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="textLink">詳しく見る <b>→</b></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}