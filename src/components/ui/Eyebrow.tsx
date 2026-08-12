const TONE_CLASSES = {
  brick: "text-brick before:bg-gold",
  gold: "text-gold before:bg-gold",
} as const;

export function Eyebrow({
  children,
  tone = "brick",
  className = "",
}: {
  children: React.ReactNode;
  tone?: keyof typeof TONE_CLASSES;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] before:h-px before:w-6 ${TONE_CLASSES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
