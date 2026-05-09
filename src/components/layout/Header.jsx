import { useEffect, useState } from "react";
import Brand from "./Brand.jsx";
import { anchorIds, headerLabels, navigation } from "../../data/siteData.js";

export default function Header({ language, onLanguageChange }) {
  const anchors = anchorIds[language];
  const contactHref = `#${anchors.contact}`;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(`#${anchors.home}`);

  useEffect(() => {
    const syncHeader = () => setIsScrolled(window.scrollY > 24);

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
    return () => window.removeEventListener("scroll", syncHeader);
  }, []);

  useEffect(() => {
    const trackedSections = [anchors.home, anchors.method, anchors.approach, anchors.services, anchors.about, anchors.contact];

    const syncActiveSection = () => {
      const offset = 132;
      const currentSection = trackedSections.reduce((current, sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return current;

        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        return window.scrollY >= top ? sectionId : current;
      }, anchors.home);

      setActiveHref(`#${currentSection}`);
    };

    syncActiveSection();
    window.addEventListener("scroll", syncActiveSection, { passive: true });
    window.addEventListener("resize", syncActiveSection);
    return () => {
      window.removeEventListener("scroll", syncActiveSection);
      window.removeEventListener("resize", syncActiveSection);
    };
  }, [anchors]);

  useEffect(() => {
    setActiveHref(`#${anchors.home}`);
  }, [anchors.home]);

  const handleNavClick = (href) => {
    setActiveHref(href);
    setIsOpen(false);
  };

  const headerClassName = ["site-header", isScrolled ? "is-scrolled" : "", isOpen ? "is-open" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClassName}>
      <Brand language={language} />

      <button
        className="nav-toggle"
        type="button"
        aria-label="Abrir menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`main-nav ${isOpen ? "is-open" : ""}`.trim()} aria-label="Navegação principal">
        {navigation[language].map((item) => {
          const href = `#${anchors[item.target]}`;

          return (
          <a
            key={href}
            className={activeHref === href ? "is-active" : ""}
            href={href}
            aria-current={activeHref === href ? "page" : undefined}
            onClick={() => handleNavClick(href)}
          >
            {item.label}
          </a>
          );
        })}
        <div className="mobile-nav-actions">
          <LanguageSwitch language={language} onChange={onLanguageChange} />
          <a
            className={`header-cta ${activeHref === contactHref ? "is-active" : ""}`.trim()}
            href={contactHref}
            aria-current={activeHref === contactHref ? "page" : undefined}
            onClick={() => handleNavClick(contactHref)}
          >
            {headerLabels[language].contact}
          </a>
        </div>
      </nav>

      <div className="header-actions">
        <LanguageSwitch language={language} onChange={onLanguageChange} />
        <a
          className={`header-cta ${activeHref === contactHref ? "is-active" : ""}`.trim()}
          href={contactHref}
          aria-current={activeHref === contactHref ? "page" : undefined}
          onClick={() => handleNavClick(contactHref)}
        >
          {headerLabels[language].contact}
        </a>
      </div>
    </header>
  );
}

function LanguageSwitch({ language, onChange }) {
  return (
    <div className="language-switch" aria-label="Selecionar idioma">
      <button type="button" aria-pressed={language === "pt"} onClick={() => onChange("pt")}>
        PT
      </button>
      <button type="button" aria-pressed={language === "en"} onClick={() => onChange("en")}>
        EN
      </button>
    </div>
  );
}
