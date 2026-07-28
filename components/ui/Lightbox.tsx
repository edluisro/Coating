"use client";

import Image from "next/image";
import { useEffect } from "react";

type LightboxItem = {
  src: string;
  alt: string;
};

type LightboxProps = {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ items, index, onClose, onPrev, onNext }: LightboxProps) {
  const item = items[index];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        onPrev();
      }
      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  if (!item) {
    return null;
  }

  return (
    <div
      className="lightbox"
      aria-modal="true"
      role="dialog"
      aria-label="Project image gallery"
      onClick={onClose}
    >
      <div className="lightbox__backdrop" />
      <div className="lightbox__dialog" onClick={(event) => event.stopPropagation()}>
        <button className="lightbox__close" type="button" onClick={onClose} aria-label="Close gallery">
          ×
        </button>

        <button className="lightbox__nav lightbox__nav--prev" type="button" onClick={onPrev} aria-label="Previous image">
          ‹
        </button>

        <div className="lightbox__frame">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="100vw"
            className="lightbox__image"
            priority
          />
        </div>

        <button className="lightbox__nav lightbox__nav--next" type="button" onClick={onNext} aria-label="Next image">
          ›
        </button>
      </div>
    </div>
  );
}
