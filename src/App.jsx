import { useEffect, useState } from "react";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import Preloader from "./components/ui/Preloader.jsx";
import About from "./sections/About.jsx";
import Approach from "./sections/Approach.jsx";
import Contact from "./sections/Contact.jsx";
import Hero from "./sections/Hero.jsx";
import Method from "./sections/Method.jsx";
import Services from "./sections/Services.jsx";
import { anchorIds, siteMeta } from "./data/siteData.js";

export default function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "pt";
    const stored = window.localStorage.getItem("language");
    return stored === "pt" || stored === "en" ? stored : "pt";
  });

  const handleLanguageChange = (nextLanguage) => {
    if (nextLanguage === language) return;

    setLanguage(nextLanguage);
    window.localStorage.setItem("language", nextLanguage);
    window.history.replaceState(null, "", window.location.pathname);

    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-PT" : "en";

    document.title = siteMeta.title[language];

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", siteMeta.description[language]);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    ogTitle?.setAttribute("content", siteMeta.title[language]);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    ogDescription?.setAttribute("content", siteMeta.description[language]);

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    ogLocale?.setAttribute("content", siteMeta.locale[language]);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    twitterTitle?.setAttribute("content", siteMeta.title[language]);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    twitterDescription?.setAttribute("content", siteMeta.description[language]);
  }, [language]);

  useEffect(() => {
    if (!window.location.hash) return;

    const targetId = window.location.hash.slice(1);
    const headerOffset = 132;

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (!target) return;

      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const timer = window.setTimeout(scrollToTarget, 1400);
    return () => window.clearTimeout(timer);
  }, [language]);

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [language]);

  return (
    <>
      <Preloader language={language} />
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <main id={anchorIds[language].home}>
        <Hero language={language} />
        <Method language={language} />
        <Approach language={language} />
        <Services language={language} />
        <About language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </>
  );
}
