/**
 * Opening hours + open/closed logic for Pizza Ville.
 *
 * Source: docs/BUSINESS-INFO.md § Hours of operation (verified via Google
 * Business Profile, checked 2026-08-10). Hours are dynamic/reconfirm-before-launch
 * per that doc — this module only encodes the currently-verified values and
 * computes status live from Quebec local time, it never hardcodes "open".
 */

export interface DayHours {
  open: number; // minutes since midnight
  close: number; // minutes since midnight
}

// Index: 0 = Sunday ... 6 = Saturday (matches Date#getDay()).
export const WEEKLY_HOURS: Record<number, DayHours> = {
  0: { open: 10 * 60, close: 20 * 60 }, // Sunday 10:00–20:00
  1: { open: 10 * 60, close: 20 * 60 }, // Monday 10:00–20:00
  2: { open: 10 * 60, close: 20 * 60 }, // Tuesday 10:00–20:00
  3: { open: 10 * 60, close: 20 * 60 }, // Wednesday 10:00–20:00
  4: { open: 10 * 60, close: 21 * 60 }, // Thursday 10:00–21:00
  5: { open: 10 * 60, close: 21 * 60 }, // Friday 10:00–21:00
  6: { open: 10 * 60, close: 21 * 60 }, // Saturday 10:00–21:00
};

export const TIMEZONE = "America/Toronto";

const WEEKDAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

/** Ordered Sun→Sat, matching WEEKLY_HOURS keys — for rendering a full-week table. */
export const WEEKDAY_ORDER = [0, 1, 2, 3, 4, 5, 6] as const;

function getTorontoParts(date: Date): { weekday: number; minutes: number } {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = formatter.formatToParts(date);
  const value = (type: string) => parts.find((p) => p.type === type)?.value ?? "";

  let hour = parseInt(value("hour"), 10);
  if (hour === 24) hour = 0; // Intl quirk: midnight can format as "24".
  const minute = parseInt(value("minute"), 10) || 0;
  const weekday = WEEKDAY_INDEX[value("weekday")] ?? date.getUTCDay();

  return { weekday, minutes: hour * 60 + minute };
}

/** Minutes before closing at which the status switches to "closing soon". */
const CLOSING_SOON_THRESHOLD = 60;
/** Minutes before closing at which "closing soon" becomes visually more urgent. */
const CLOSING_VERY_SOON_THRESHOLD = 30;

export interface OpenStatus {
  isOpen: boolean;
  weekday: number;
  minutesNow: number;
  todayHours: DayHours;
  /** True during the final hour before closing (only meaningful while isOpen). */
  isClosingSoon: boolean;
  /** True during the final 30 minutes before closing — a stronger "closing soon" variant. */
  isClosingVerySoon: boolean;
}

/** Three-way presentation state derived from OpenStatus — drives the status badge's copy/color. */
export type StatusPhase = "open" | "closingSoon" | "closed";

export function getStatusPhase(status: OpenStatus): StatusPhase {
  if (!status.isOpen) return "closed";
  if (status.isClosingSoon) return "closingSoon";
  return "open";
}

/** Computes live open/closed status from the current Quebec (America/Toronto) time. */
export function getOpenStatus(date: Date = new Date()): OpenStatus {
  const { weekday, minutes } = getTorontoParts(date);
  const todayHours = WEEKLY_HOURS[weekday];
  const isOpen = minutes >= todayHours.open && minutes < todayHours.close;
  const minutesUntilClose = todayHours.close - minutes;
  const isClosingSoon = isOpen && minutesUntilClose <= CLOSING_SOON_THRESHOLD;
  const isClosingVerySoon = isOpen && minutesUntilClose <= CLOSING_VERY_SOON_THRESHOLD;
  return { isOpen, weekday, minutesNow: minutes, todayHours, isClosingSoon, isClosingVerySoon };
}

/** Formats minutes-since-midnight as Quebec French style time, e.g. 1260 -> "21h00". */
export function formatHourMinutes(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h${String(m).padStart(2, "0")}`;
}

/** Formatted time the business next opens — today's opening time if not yet open today, else tomorrow's. */
export function nextOpenLabel(status: OpenStatus): string {
  if (status.minutesNow < status.todayHours.open) {
    return formatHourMinutes(status.todayHours.open);
  }
  const nextDay = (status.weekday + 1) % 7;
  return formatHourMinutes(WEEKLY_HOURS[nextDay].open);
}
