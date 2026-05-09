import ContactForm from "../components/forms/ContactForm.jsx";
import { anchorIds, contacts, copy, offices } from "../data/siteData.js";

export default function Contact({ language }) {
  const content = copy[language].contact;
  const renderOfficeLine = (line) => <span className="office-line__nowrap">{line}</span>;

  return (
    <section className="section contact" id={anchorIds[language].contact} aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__content" data-reveal>
            <p className="section-kicker">{content.kicker}</p>
            <h2 id="contact-title">{content.title}</h2>
            <p>{content.text}</p>

            <div className="contact-methods" aria-label={content.directLabel}>
              <a href={contacts.phoneHref}>
                <span>{content.phone}</span>
                {contacts.phone}
              </a>
              <a href={contacts.emailHref}>
                <span>{content.email}</span>
                {contacts.email}
              </a>
            </div>
          </div>

          <ContactForm language={language} />
        </div>

        <div className="office-grid">
          {offices.map((office) => (
            <div className="office-card" key={office.country} data-reveal>
              <address>
                <strong>{office.country}</strong>
                {office.company}
                <br />
                {office.lines.map((line) => (
                  <span key={line}>
                    {renderOfficeLine(line)}
                    <br />
                  </span>
                ))}
              </address>
              <div className="office-card__map">
                <iframe
                  title={`Mapa do escritório em ${office.country}`}
                  src={`https://www.google.com/maps?${office.mapEmbed}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
