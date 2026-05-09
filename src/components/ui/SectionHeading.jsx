export default function SectionHeading({ kicker, title, id, children, wide = false, action }) {
  return (
    <div className={`section-heading ${wide ? "section-heading--wide" : ""}`.trim()} data-reveal>
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {children}
      {action}
    </div>
  );
}
