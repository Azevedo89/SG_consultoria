export default function Button({ children, href, variant = "primary", className = "" }) {
  return (
    <a className={`btn btn--${variant} ${className}`.trim()} href={href}>
      {children}
    </a>
  );
}
