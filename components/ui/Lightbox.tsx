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
  title: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ items, index, title, onClose, onPrev, onNext }: LightboxProps) {
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
    <div className="lightbox" aria-modal="true" role="dialog" aria-label={`${title} project gallery`}>
      <button className="lightbox__backdrop" type="button" onClick={onClose} aria-label="Close gallery" />
      <div className="lightbox__dialog">
        <div className="lightbox__topbar">
          <p>{title}</p>
          <button className="lightbox__close" type="button" onClick={onClose} aria-label="Close gallery">
            x
          </button>
        </div>

        <button className="lightbox__nav lightbox__nav--prev" type="button" onClick={onPrev} aria-label="Previous image">
          <span aria-hidden="true">&lt;</span>
        </button>

        <div className="lightbox__frame">
          <Image src={item.src} alt={item.alt} fill sizes="100vw" className="lightbox__image" priority />
        </div>

        <button className="lightbox__nav lightbox__nav--next" type="button" onClick={onNext} aria-label="Next image">
          <span aria-hidden="true">&gt;</span>
        </button>

        <p className="lightbox__count">
          {index + 1} / {items.length}
        </p>
      </div>
    </div>
  );
}
