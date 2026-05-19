"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const { ref, isInView } = useInView();
  const state = isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-700 ${state} ${className}`}
    >
      {children}
    </div>
  );
}
