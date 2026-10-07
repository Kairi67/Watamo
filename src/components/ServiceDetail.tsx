import Link from "next/link";

type Props = {
  number: string;
  title: string;
  lead: string;
  description: string;
  image: string;
  points: { title: string; text: string }[];
};

export default function ServiceDetail({ number, title, lead, description, image, points }: Props) {
  return (
    <>
      <section className="serviceIntro section">
        <div>
          <p className="eyebrow">SERVICE {number}</p>
          <h2>{lead}</h2>
        </div>
        <p>{description}</p>
      </section>
      <section className="wideImage" style={{ backgroundImage: `url("${image}")` }} />
      <section className="pointSection section">
        <div className="pointGrid">
          {points.map((point, index) => (
            <article className="pointCard" key={point.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
        <div className="centerAction">
          <Link className="button buttonRed" href="/contact">このサービスについて相談する</Link>
        </div>
      </section>
    </>
  );
}