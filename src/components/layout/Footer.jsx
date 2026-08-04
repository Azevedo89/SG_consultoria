import Brand from "./Brand.jsx";
import SocialIcon from "../ui/SocialIcon.jsx";
import { anchorIds, contacts, copy, navigation, offices, socialLinks } from "../../data/siteData.js";

export default function Footer({ language }) {
  const content = copy[language].footer;
  const anchors = anchorIds[language];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand" data-reveal>
            <Brand language={language} variant="footer" />
            <p>{content.tagline}</p>
            <div className="footer-socials" aria-label={content.social}>
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                  <SocialIcon name={social.label} />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-column" aria-label={content.navigation} data-reveal>
            <h2>{content.navigation}</h2>
            {navigation[language].map((item) => (
              <a key={item.target} href={`#${anchors[item.target]}`}>
                {item.label}
              </a>
            ))}
            <a href={`#${anchors.contact}`}>{copy[language].contact.kicker}</a>
          </nav>

          <div className="footer-column" data-reveal>
            <h2>{content.contacts}</h2>
            <a href={contacts.phoneHref}>{contacts.phone}</a>
            <a href={contacts.emailHref}>{contacts.email}</a>
          </div>

          <div className="footer-column footer-column--offices" data-reveal>
            <h2>{content.offices}</h2>
            {offices.map((office) => (
              <p key={office.country}>
                <strong>{office.country}</strong>
                {office.lines.map((line) => (
                  <span
                    key={line}
                    className={line === "Plateau, Praia - 7600 Cabo Verde" ? "footer-office-line--nowrap" : undefined}
                  >
                    {line}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 SG Consultoria e Assessoria. {content.rights}</p>
          <div className="footer-legal">
            <a href={language === "en" ? "/privacy-policy.html" : "/politica-de-privacidade.html"}>{content.privacy}</a>
            <a href={language === "en" ? "/terms-of-service.html" : "/termos-de-servico.html"}>{content.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
