type Props = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export default function PageHero({ eyebrow, title, description, image }: Props) {
  return (
    <section className="pageHero" style={{ backgroundImage: `url("${image}")` }}>
      <div className="pageHeroOverlay" />
      <div className="pageHeroContent">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}