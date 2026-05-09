import Button from "../components/ui/Button.jsx";
import { anchorIds, copy, heroFacts } from "../data/siteData.js";

export default function Hero({ language }) {
  const content = copy[language].hero;
  const anchors = anchorIds[language];

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" role="img" aria-label={content.imageLabel} />
      <div className="hero__overlay" />

      <div className="container hero__inner">
        <p className="eyebrow reveal-hero">{content.eyebrow}</p>
        <h1 className="reveal-hero" id="hero-title">{content.title}</h1>
        <p className="hero__lead reveal-hero">{content.lead}</p>
        <div className="hero__actions">
          <Button href={`#${anchors.contact}`}>{content.primary}</Button>
          <Button href={`#${anchors.services}`} variant="ghost">
            {content.secondary}
          </Button>
        </div>
        <dl className="hero__facts" aria-label={content.factsLabel}>
          {heroFacts[language].map((fact) => (
            <div key={fact.value}>
              <dt>{fact.value}</dt>
              <dd>{fact.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
