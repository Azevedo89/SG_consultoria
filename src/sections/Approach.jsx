import SectionHeading from "../components/ui/SectionHeading.jsx";
import { anchorIds, approachPillars, copy } from "../data/siteData.js";

export default function Approach({ language }) {
  const content = copy[language].approach;
  const pillars = approachPillars[language];

  return (
    <section className="section approach" id={anchorIds[language].approach} aria-labelledby="approach-title">
      <div className="container">
        <SectionHeading
          kicker={content.kicker}
          id="approach-title"
          title={content.title}
        />

        <p className="approach__lead" data-reveal>{content.lead}</p>

        <div className="approach-grid">
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="approach-card"
              data-reveal
            >
              <span className="approach-card__number" aria-hidden="true">{pillar.number}</span>
              <span className="approach-card__eyebrow">{pillar.eyebrow}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>

        <figure className="approach-quote" data-reveal>
          <span className="approach-quote__mark" aria-hidden="true">&ldquo;</span>
          <blockquote>{content.quote}</blockquote>
          <figcaption>{content.quoteCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
