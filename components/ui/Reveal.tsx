"use client";

import { useEffect, useRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

type RevealVariant = "fade-up" | "fade-in" | "slide-left" | "slide-right";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  stagger?: number;
};

export function Reveal({
  children,
  className = "",
  variant = "fade-up",
  delay,
  stagger,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      element.classList.add("is-visible");
      return;
    }

    if (stagger !== undefined) {
      Array.from(element.children).forEach((child, index) => {
        if (child instanceof HTMLElement) {
          child.style.transitionDelay = `${index * stagger}ms`;
          child.classList.add("reveal", `reveal--${variant}`);
        }
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        element.classList.add("is-visible");
        Array.from(element.children).forEach((child) => {
          if (child instanceof HTMLElement && child.classList.contains("reveal")) {
            child.classList.add("is-visible");
          }
        });
        observer.unobserve(element);
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [stagger, variant]);

  return (
    <div
      {...props}
      ref={ref}
      className={`reveal reveal--${variant} ${className}`.trim()}
      data-delay={delay}
      data-stagger={stagger}
      style={{
        ...props.style,
        transitionDelay: delay !== undefined ? `${delay}ms` : props.style?.transitionDelay,
      }}
    >
      {children}
    </div>
  );
}
