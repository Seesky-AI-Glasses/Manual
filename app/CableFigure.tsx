export default function CableFigure({ title }: { title: string }) {
  return (
    <svg
      className="cable-figure"
      viewBox="0 0 340 100"
      role="img"
      aria-label={title}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>{title}</title>
      {/* USB-A plug */}
      <rect x="10" y="34" width="36" height="28" rx="2" />
      <rect x="17" y="41" width="22" height="7" fill="currentColor" stroke="none" opacity="0.55" />
      <rect x="46" y="27" width="44" height="42" rx="7" />
      {/* cable */}
      <path d="M90 48 C 128 48, 138 76, 168 76 C 198 76, 208 48, 246 48" />
      {/* USB-C plug */}
      <rect x="246" y="27" width="44" height="42" rx="7" />
      <rect x="290" y="41" width="38" height="14" rx="7" />
      {/* labels */}
      <text
        x="28"
        y="92"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontFamily="SFMono-Regular, Consolas, monospace"
        fontSize="11"
      >
        USB-A
      </text>
      <text
        x="309"
        y="92"
        textAnchor="middle"
        fill="currentColor"
        stroke="none"
        fontFamily="SFMono-Regular, Consolas, monospace"
        fontSize="11"
      >
        USB-C
      </text>
    </svg>
  );
}
