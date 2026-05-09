import { anchorIds, assets, copy, trustMarkers } from "../data/siteData.js";

export default function About({ language }) {
  const content = copy[language].about;

  return (
    <section className="section about" id={anchorIds[language].about} aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__media" data-reveal>
          <img src={assets.about} alt={content.imageAlt} />
        </div>
        <div className="about__content" data-reveal>
          <p className="section-kicker">{content.kicker}</p>
          <h2 id="about-title">{content.title}</h2>
          <p>{content.text}</p>
          <div className="about-list">
            {trustMarkers[language].map((benefit) => (
              <span key={benefit} data-reveal>{benefit}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
