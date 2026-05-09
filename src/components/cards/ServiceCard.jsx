export default function ServiceCard({ icon, title, items }) {
  return (
    <article className="service-card" data-reveal>
      <div className="service-card__top">
        <span className="service-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
