export default function ProcessCard({ number, title, text }) {
  return (
    <article className="process-card" data-reveal>
      <span>{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
