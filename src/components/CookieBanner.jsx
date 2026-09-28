import { useEffect, useState } from "react";
import { copy } from "../data/siteData.js";

const storageKey = "sg-consent";

const readConsent = () => {
  try {
    return window.localStorage.getItem(storageKey);
  } catch {
    return null;
  }
};

const writeConsent = (value) => {
  try {
    window.localStorage.setItem(storageKey, value);
  } catch {
    /* localStorage indisponível: a escolha vale só para esta visita */
  }
};

export default function CookieBanner({ language }) {
  const [visible, setVisible] = useState(() => readConsent() === null);
  const content = copy[language].cookies;

  useEffect(() => {
    const reopen = () => setVisible(true);
    window.addEventListener("sg-consent-reset", reopen);
    return () => window.removeEventListener("sg-consent-reset", reopen);
  }, []);

  if (!visible) return null;

  const accept = () => {
    writeConsent("granted");
    window.gtag?.("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });
    setVisible(false);
  };

  const decline = () => {
    writeConsent("denied");
    window.gtag?.("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
    setVisible(false);
  };

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label={content.message}>
      <p>
        {content.message}{" "}
        <a href={language === "en" ? "/privacy-policy.html" : "/politica-de-privacidade.html"}>{content.policy}</a>
      </p>
      <div className="cookie-banner__actions">
        <button className="btn btn--ghost" type="button" onClick={decline}>
          {content.decline}
        </button>
        <button className="btn btn--primary" type="button" onClick={accept}>
          {content.accept}
        </button>
      </div>
    </div>
  );
}
