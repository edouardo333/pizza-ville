import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant =
  | "primary"
  | "primaryPremium"
  | "primaryCta"
  | "secondary"
  | "outlineLight"
  | "outlineGold"
  | "gold"
  | "goldPremium"
  | "goldCta";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-brick text-cream hover:bg-burgundy active:translate-y-px shadow-sm shadow-brick/20",
  primaryCta:
    "cursor-pointer bg-brick text-cream shadow-md shadow-brick/30 ring-1 ring-inset ring-cream/10 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-burgundy hover:shadow-xl hover:shadow-brick/50 active:translate-y-0 active:scale-100",
  primaryPremium:
    "bg-gradient-to-b from-brick to-burgundy text-cream shadow-md shadow-brick/25 ring-1 ring-inset ring-cream/10 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/25 hover:ring-gold/40 active:translate-y-0 cursor-pointer",
  secondary:
    "bg-transparent text-charcoal border border-charcoal/25 hover:border-charcoal/60 hover:bg-charcoal/5",
  outlineLight:
    "bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-cream/10",
  outlineGold:
    "bg-charcoal/40 text-gold border border-gold/40 backdrop-blur-sm hover:border-gold hover:bg-charcoal/60",
  gold: "bg-gold text-charcoal hover:bg-mustard active:translate-y-px shadow-sm shadow-gold/30",
  goldPremium:
    "bg-gold text-charcoal shadow-sm shadow-gold/20 hover:-translate-y-0.5 hover:bg-mustard hover:shadow-lg hover:shadow-mustard/45 active:translate-y-0",
  goldCta:
    "cursor-pointer bg-gold text-charcoal shadow-md shadow-charcoal/25 ring-1 ring-inset ring-gold/30 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-mustard hover:shadow-xl hover:shadow-gold/50 active:translate-y-0 active:scale-100",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
}

/** Shared CTA button. Renders a plain <a> for tel:/external/hash links, next/link otherwise. */
export function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 ${VARIANT_CLASSES[variant]} ${className}`;

  const isExternal = /^(tel:|mailto:|https?:|#)/.test(href);

  if (isExternal) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
      {icon}
    </Link>
  );
}
