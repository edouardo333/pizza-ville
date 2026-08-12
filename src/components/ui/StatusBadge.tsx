"use client";

import { formatHourMinutes, getStatusPhase, nextOpenLabel, type OpenStatus } from "@/lib/hours";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Dictionary } from "@/lib/i18n/translations";

/**
 * Live open/closed status indicator — one shared source of copy/color for the
 * hero service row and the "today" row in the hours list, so both read as
 * the same system (dot color, wording, pulse) per docs/DESIGN-SYSTEM.md.
 *
 * Phases: open (green) · closingSoon (warm gold, final hour — a touch
 * stronger in the final 30 min) · closed (brick red).
 */

const TONE = {
  open: {
    dot: "bg-emerald-400",
    text: "text-emerald-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/10",
    pulse: true,
  },
  closingSoon: {
    dot: "bg-mustard",
    text: "text-mustard",
    border: "border-mustard/35",
    bg: "bg-mustard/12",
    pulse: true,
  },
  closingSoonUrgent: {
    dot: "bg-mustard",
    text: "text-mustard",
    border: "border-mustard/55",
    bg: "bg-mustard/20",
    pulse: true,
  },
  closed: {
    dot: "bg-brick",
    text: "text-brick",
    border: "border-brick/30",
    bg: "bg-brick/10",
    pulse: false,
  },
} as const;

function statusCopy(status: OpenStatus, t: Dictionary) {
  const phase = getStatusPhase(status);

  const word =
    phase === "open" ? t.quickInfo.open : phase === "closingSoon" ? t.quickInfo.closingSoon : t.quickInfo.closed;

  const detail =
    phase === "closed"
      ? `${t.quickInfo.opensAt} ${nextOpenLabel(status)}`
      : `${t.quickInfo.closesAt} ${formatHourMinutes(status.todayHours.close)}`;

  const toneKey = phase === "closingSoon" && status.isClosingVerySoon ? "closingSoonUrgent" : phase;

  return { word, detail, tone: TONE[toneKey] };
}

/** Compact pill for the hero service row — sits inline with the other service badges. */
export function StatusBadge({ status }: { status: OpenStatus | null }) {
  const { t } = useLanguage();

  if (!status) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-cream/60 sm:text-sm">
        {t.quickInfo.loading}
      </span>
    );
  }

  const { word, detail, tone } = statusCopy(status, t);

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 ${tone.border} ${tone.bg}`}
      aria-live="polite"
    >
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${tone.dot} ${tone.pulse ? "animate-pulse" : ""}`} aria-hidden />
      <span className="inline-flex flex-wrap items-baseline gap-x-1.5 text-xs font-semibold sm:text-sm">
        <span className={`uppercase tracking-wide ${tone.text}`}>{word}</span>
        <span className="text-[11px] font-medium normal-case tracking-normal text-cream/70 sm:text-xs">{detail}</span>
      </span>
    </span>
  );
}

/** Subtle inline variant for today's row in the hours list — dot + status word only, no pill. */
export function StatusRowLabel({ status }: { status: OpenStatus | null }) {
  const { t } = useLanguage();
  if (!status) return null;
  const { word, tone } = statusCopy(status, t);

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold">
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${tone.dot} ${tone.pulse ? "animate-pulse" : ""}`} aria-hidden />
      <span className={tone.text}>{word}</span>
    </span>
  );
}
