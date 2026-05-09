import { useEffect, useState } from "react";
import { assets, copy } from "../../data/siteData.js";

export default function Preloader({ language }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), 1350);
    return () => window.clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader" aria-label={copy[language].preloader} role="status">
      <img src={assets.logo} alt="" />
      <span />
    </div>
  );
}
