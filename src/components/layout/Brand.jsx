import { anchorIds, assets } from "../../data/siteData.js";

export default function Brand({ language = "pt", variant = "default" }) {
  const className = variant === "footer" ? "brand brand--footer" : "brand";

  return (
    <a className={className} href={`#${anchorIds[language].home}`} aria-label="SG Consultoria e Assessoria">
      <img src={assets.logo} alt="" className="brand__mark" />
      <span className="brand__text">
        <strong>SG</strong>
        <span>Consultoria e Assessoria</span>
      </span>
    </a>
  );
}
