export default function SocialIcon({ name }) {
  const normalizedName = name.toLowerCase();

  if (normalizedName === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.4" />
        <circle cx="16.8" cy="7.2" r="0.9" />
      </svg>
    );
  }

  if (normalizedName === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M5.2 9.1h3.2v9.7H5.2z" />
        <path d="M6.8 7.7a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z" />
        <path d="M10.3 9.1h3.1v1.3c.5-.8 1.5-1.5 3.1-1.5 3.2 0 3.8 2.1 3.8 4.9v5h-3.2v-4.4c0-1.1 0-2.4-1.5-2.4s-1.7 1.2-1.7 2.3v4.5h-3.2z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M14.1 8.1h2V4.9c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.2v2.9H4.8v3.6h3.3v7.1h4v-7.1h3.3l.5-3.6h-3.8v-2.5c0-1 .3-1.7 2-1.7z" />
    </svg>
  );
}
