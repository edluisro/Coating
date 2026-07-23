import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: "article" | "div";
  highlight?: boolean;
};

export function Card({
  children,
  as: Component = "article",
  highlight = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <Component className={`card ${highlight ? "card--highlight" : ""} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
