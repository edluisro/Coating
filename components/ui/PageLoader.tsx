"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const logoSrc =
  "https://res.cloudinary.com/wqsitnyu/image/upload/v1785449990/ChatGPT_Image_30_jul_2026__06_12_13_p.m.-removebg-preview_t2r0pe.png";

export function PageLoader() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startedAt = window.performance.now();
    setIsMounted(true);

    const hideLoader = () => {
      const elapsed = window.performance.now() - startedAt;
      const remaining = Math.max(0, 1400 - elapsed);

      window.setTimeout(() => {
        setIsVisible(false);
      }, remaining);
    };

    if (document.readyState === "complete") {
      hideLoader();
      return;
    }

    window.addEventListener("load", hideLoader, { once: true });
    return () => window.removeEventListener("load", hideLoader);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`pageLoader ${isMounted ? "is-mounted" : ""}`}
      aria-hidden="true"
    >
      <div className="pageLoader__backdrop" />
      <div className="pageLoader__glow pageLoader__glow--blue" />
      <div className="pageLoader__glow pageLoader__glow--gold" />

      <div className="pageLoader__core">
        <div className="pageLoader__ring pageLoader__ring--outer" />
        <div className="pageLoader__ring pageLoader__ring--mid" />
        <div className="pageLoader__ring pageLoader__ring--inner" />

        <div className="pageLoader__logoWrap">
          <div className="pageLoader__logoHalo" />
          <div className="pageLoader__logoFrame">
            <Image
              src={logoSrc}
              alt=""
              fill
              sizes="180px"
              className="pageLoader__logo"
              priority
            />
          </div>
        </div>

        <div className="pageLoader__shine" />
      </div>

      <div className="pageLoader__text">
        <span className="pageLoader__eyebrow">Florida ElectroStatic</span>
        <span className="pageLoader__label">Electrostatic Painting Services</span>
      </div>
    </div>
  );
}
