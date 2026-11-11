import { useId } from "react";

// JB column mark (brand kit v2, F5). One color (currentColor); `compact` merges
// the two capital bars into one solid bar for sizes under 48px. The J is hollow:
// a heavy outline whose glyph shape is masked out of everything beneath it.
const B =
  "M40 21 132 36V764L40 778V800H345Q453 800 517 780Q581 760 610 719.5Q639 679 639 613Q639 469 457 429V424Q568 409 629.5 358Q691 307 691 216Q691 106 610.5 53Q530 0 393 0H40ZM353 432Q433 432 476 477Q519 522 519 605V611Q519 775 345 775H242V432ZM393 24Q478 24 525 73.5Q572 123 572 215V226Q572 317 525.5 362Q479 407 393 407H242V24Z M-166 800 H132 V771 H-166 Z";
const J =
  "M7 82Q7 115 25.5 135.5Q44 156 74 156Q98 156 112 143Q126 130 131.5 115.5Q137 101 137 97Q108 76 108 48Q108 29 120 16Q132 3 153 3Q185 3 203.5 46.5Q222 90 222 197V764L130 778V800H420V778L328 764V197Q328 127 314.5 80.5Q301 34 261 7Q221 -20 146 -20Q86 -20 46.5 6Q7 32 7 82Z";

// The tall J: its top stem, the hook (shifted down) and a long middle stem.
function JShape({ id }) {
  return (
    <g transform="translate(-207.9 380) scale(0.6 0.5)">
      <g clipPath={`url(#${id}-u)`}>
        <rect x="222" y="340" width="105" height="1000" />
      </g>
      <g transform="translate(0 -1090)">
        <g clipPath={`url(#${id}-d)`}>
          <path d={J} />
        </g>
      </g>
      <rect x="222" y="-672" width="105" height="1094" />
    </g>
  );
}

function Mark({ compact = false, title, className }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      className={className}
      viewBox="-262.5 -1004 1009.9 1364"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <clipPath id={`${id}-u`}>
          <rect x="-200" y="360" width="1000" height="408" />
        </clipPath>
        <clipPath id={`${id}-d`}>
          <rect x="-200" y="-400" width="1000" height="820" />
        </clipPath>
        <mask id={`${id}-m`} maskUnits="userSpaceOnUse" x="-300" y="-400" width="1100" height="1450">
          <rect x="-300" y="-400" width="1100" height="1450" fill="#fff" />
          <g fill="#000">
            <JShape id={id} />
          </g>
        </mask>
      </defs>
      <g transform="scale(1 -1)" fill="currentColor" stroke="currentColor" mask={`url(#${id}-m)`}>
        {compact ? (
          <rect x="-262.5" y="856" width="1009.9" height="148" stroke="none" />
        ) : (
          <>
            <rect x="-262.5" y="856" width="1009.9" height="60" stroke="none" />
            <rect x="-262.5" y="944" width="1009.9" height="60" stroke="none" />
          </>
        )}
        <rect x="-262.5" y="-360" width="1009.9" height="304" stroke="none" />
        <path d={B} strokeWidth="20.4" />
        <g fill="none" strokeWidth="120" strokeLinejoin="round">
          <JShape id={id} />
        </g>
      </g>
    </svg>
  );
}

export default Mark;
