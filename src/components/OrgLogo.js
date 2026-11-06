// Organization logo, falling back to initials when there's no image.
function OrgLogo({ src, name }) {
  if (src) {
    return <img className="org-logo" src={src} alt={`${name} logo`} />;
  }
  const initials = name
    .split(/[\s,]+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div className="org-logo org-initials" aria-hidden="true">
      {initials}
    </div>
  );
}

export default OrgLogo;
