"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@/components/icons";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  /** The image group this instance navigates. Kept separate per section by the caller. */
  images: LightboxImage[];
  /** Currently open image index, or null when closed. */
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

/**
 * Fullscreen image viewer, portaled to `document.body` so its `fixed`
 * positioning is always relative to the viewport regardless of any
 * transformed/animated ancestor in the calling section (see Gallery.tsx for
 * the same rationale). Each caller owns its own `index` state, so groups
 * never mix — e.g. Incontournables and MenuPreview each mount their own
 * Lightbox instance with their own image array.
 */
export function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const step = useCallback(
    (delta: number) => {
      if (index === null || images.length === 0) return;
      onIndexChange((index + delta + images.length) % images.length);
    },
    [index, images.length, onIndexChange],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [index, onClose, step]);

  const touchStartX = useRef<number | null>(null);

  if (index === null || images.length === 0) return null;

  const image = images[index];
  const showArrows = images.length > 1;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex animate-fade-in items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        const startX = touchStartX.current;
        touchStartX.current = null;
        if (startX === null) return;
        const delta = e.changedTouches[0].clientX - startX;
        if (Math.abs(delta) < 40) return;
        step(delta > 0 ? -1 : 1);
      }}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold sm:right-8 sm:top-8"
        aria-label="Fermer"
      >
        <CloseIcon className="h-5 w-5" />
      </button>

      {showArrows && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold sm:left-6"
            aria-label="Image précédente"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold sm:right-6"
            aria-label="Image suivante"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </>
      )}

      <div className="relative h-[78vh] w-[92vw] max-w-3xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 720px, 92vw"
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>,
    document.body,
  );
}
