"use client";

import type { ReactNode, PointerEvent } from "react";

/** Glass card whose border + glow follow the pointer. */
export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  function onMove(e: PointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  return (
    <div onPointerMove={onMove} className={`spotlight glass ${className}`}>
      {children}
    </div>
  );
}
