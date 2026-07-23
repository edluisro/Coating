import type { HTMLAttributes, ReactNode } from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Reveal({ children, className = "", ...props }: RevealProps) {
  return (
    <div className={`reveal is-visible ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
