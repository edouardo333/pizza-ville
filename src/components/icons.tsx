import type { SVGProps } from "react";

/**
 * Small, consistent stroke-style icon set (no external icon library).
 * All icons share a 24x24 viewBox, currentColor stroke, and rounded caps.
 */

function base(props: SVGProps<SVGSVGElement>) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 4.5c0-.55.45-1 1-1h2.6c.47 0 .87.32.97.78l.8 3.6a1 1 0 0 1-.3.96l-1.6 1.5a13.4 13.4 0 0 0 5.7 5.7l1.5-1.6a1 1 0 0 1 .96-.3l3.6.8c.46.1.78.5.78.97v2.6c0 .55-.45 1-1 1h-1.5C10.34 20.5 3.5 13.66 3.5 5V4.5" />
    </svg>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="m9 5.5 6.5 6.5L9 18.5" />
    </svg>
  );
}

export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="m15 5.5-6.5 6.5L15 18.5" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base({ strokeWidth: 1.25, ...props })} fill="currentColor" stroke="none">
      <path d="M12 3.5l2.53 5.36 5.72.55-4.35 3.88 1.27 5.71L12 16.1l-5.17 2.9 1.27-5.71-4.35-3.88 5.72-.55L12 3.5Z" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M14.5 8.5h2V5.5h-2c-1.93 0-3.5 1.57-3.5 3.5v2H9v3h2v6.5h3V13.5h2.2l.8-3H14v-1.5c0-.28.22-.5.5-.5Z" />
    </svg>
  );
}

/**
 * Filled Facebook "f" mark — used where a recognizable, solid brand glyph
 * reads better than the thin stroke set (e.g. the footer social button).
 */
export function FacebookFilledIcon({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...rest}>
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.86c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.78-1.63 1.58v1.89h2.78l-.44 2.91h-2.34v7.03C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

export function DineInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M7 3v7.5M5 3v4.5a2 2 0 0 0 4 0V3M17 3c-1.66 0-3 1.79-3 4s1.34 4 3 4m0-8v18m0-10c1.66 0 3 1.79 3 4" />
      <path d="M7 10.5V21" />
    </svg>
  );
}

export function TakeoutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M5.5 8.5h13l-1 11a1.5 1.5 0 0 1-1.5 1.4H8a1.5 1.5 0 0 1-1.5-1.4l-1-11Z" />
      <path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" />
    </svg>
  );
}

export function DeliveryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 6.5h9v9h-9zM12.5 10.5h4l3 3v2h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="16.5" cy="18" r="1.6" />
    </svg>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.3 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.3-3.4-8.5S9.8 5.8 12 3.5Z" />
    </svg>
  );
}

export function MenuVarietyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13" y="3.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="3.5" y="13" width="7.5" height="7.5" rx="1.5" />
      <rect x="13" y="13" width="7.5" height="7.5" rx="1.5" />
    </svg>
  );
}

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9.5a1 1 0 0 0 1 1h3.5v-5.5h3V20.5H17a1 1 0 0 0 1-1V10" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 12h15M13 5.5l6.5 6.5L13 18.5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Menu category icons — same stroke language as the rest of the set. */
/* ------------------------------------------------------------------ */

export function AppetizerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="13" r="7.5" />
      <path d="M6.5 13a5.5 5.5 0 0 1 11 0" />
      <path d="M12 5.5V3M9.3 5.9 8.2 4M14.7 5.9l1.1-1.9" />
    </svg>
  );
}

export function PizzaSliceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5 20.5 20h-17L12 3.5Z" />
      <circle cx="12" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="9.7" cy="14.7" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.3" cy="14.7" r="1" fill="currentColor" stroke="none" />
      <path d="M8 20a4 4 0 0 1 8 0" />
    </svg>
  );
}

export function SubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 13.5c0-3 2.5-6.5 8.5-6.5s8.5 3.5 8.5 6.5-2.8 4-8.5 4-8.5-1-8.5-4Z" />
      <path d="M6 11.5c1-.6 2-.9 3-1M11 10.7c1-.3 2-.3 3 0M16 11c.9.3 1.6.7 2 1.3" />
    </svg>
  );
}

export function FriesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M6 21 5 10h2l.6 11M11 21l-.4-13h2l-.3 13M16.5 21l1-11h2l-1.3 11" />
      <path d="M4.5 10.2 5 6.5a1 1 0 0 1 1-.9h1a1 1 0 0 1 1 1.1l-.4 3.5M10 10l.1-5.2a1 1 0 0 1 1-1h1.1a1 1 0 0 1 1 1L13 10M15.7 10.2l.5-3.6a1 1 0 0 1 1-.9h1a1 1 0 0 1 1 1.1l-.4 3.5" />
    </svg>
  );
}

export function PastaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 15.5c1.5-3.5 3-6 3-9M8 15.5c1-3.5 2-6 2-9M12 15.5c.4-3.5 1-6 1-9M16 15.5c-.1-3.5.4-6 1-9M20 15.5c-.7-3.5-.2-6 .5-9" />
      <path d="M3.5 15.5h17c0 3-2.5 5-8.5 5s-8.5-2-8.5-5Z" />
    </svg>
  );
}

export function SaladIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 13a8.5 8.5 0 0 1 17 0Z" />
      <path d="M3.5 13h17M12 13c0-3.5-1.5-6-3.5-7.5M12 13c0-3.5 1.5-6 3.5-7.5M7 13c-.3-2.6-.1-4.6.8-6.6" />
    </svg>
  );
}

export function PitaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 12c0-4.5 3.6-8 8-8s8 3.5 8 8-3.6 6.5-8 6.5S4 16.5 4 12Z" />
      <path d="M8 10.5c1.3.9 2.7 1.3 4 1.3s2.7-.4 4-1.3M7.5 14.2c1.4.7 2.9 1 4.5 1s3.1-.3 4.5-1" />
    </svg>
  );
}

export function RibsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 7c3-2 14-2 17 0-1 1.6-1 3.4 0 5-3 2-14 2-17 0 1-1.6 1-3.4 0-5Z" />
      <path d="M7 6.3v6.4M10.3 5.8v7.4M13.7 5.8v7.4M17 6.3v6.4" />
    </svg>
  );
}

export function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#4285F4"
        d="M23.04 12.27c0-.82-.07-1.42-.22-2.05H12.24v3.72h6.19c-.12 1.02-.8 2.57-2.31 3.61l-.02.14 3.35 2.55.23.02c2.13-1.94 3.36-4.8 3.36-8Z"
      />
      <path
        fill="#34A853"
        d="M12.24 23.5c3.04 0 5.6-.98 7.46-2.68l-3.56-2.71c-.95.65-2.23 1.1-3.9 1.1a6.77 6.77 0 0 1-6.4-4.6l-.13.01-3.48 2.65-.05.12A11.5 11.5 0 0 0 12.24 23.5Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.61a6.9 6.9 0 0 1-.38-2.24c0-.78.14-1.53.37-2.24l-.01-.15-3.52-2.7-.12.05A11.4 11.4 0 0 0 .74 12.37c0 1.85.45 3.6 1.24 5.15l3.86-2.9Z"
      />
      <path
        fill="#EA4335"
        d="M12.24 5.27c2.12 0 3.55.9 4.37 1.66l3.19-3.06C17.83 2.09 15.28 1 12.24 1a11.5 11.5 0 0 0-10.4 6.5l3.86 3.02a6.83 6.83 0 0 1 6.54-5.25Z"
      />
    </svg>
  );
}
