import ServiceCard from "../components/cards/ServiceCard.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { anchorIds, copy, services } from "../data/siteData.js";

export default function Services({ language }) {
  const content = copy[language].services;

  return (
    <section className="section services" id={anchorIds[language].services} aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          kicker={content.kicker}
          id="services-title"
          title={content.title}
        />

        <div className="service-grid">
          {services[language].map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
