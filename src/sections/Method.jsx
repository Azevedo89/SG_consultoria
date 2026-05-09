import ProcessCard from "../components/cards/ProcessCard.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { anchorIds, copy, processSteps } from "../data/siteData.js";

export default function Method({ language }) {
  const content = copy[language].method;

  return (
    <section className="section process" id={anchorIds[language].method} aria-labelledby="process-title">
      <div className="container">
        <SectionHeading
          kicker={content.kicker}
          id="process-title"
          title={content.title}
        />

        <div className="process-grid">
          {processSteps[language].map((step) => (
            <ProcessCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
