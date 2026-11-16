"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which page section is currently in view.
 * The section whose top edge is closest to (but above) the viewport anchor wins,
 * which keeps the highlight stable while scrolling through long sections.
 */
export function useActiveSection(ids: readonly string[], anchorRatio = 0.3): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const anchor = window.innerHeight * anchorRatio;
      let current: string | null = null;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= anchor) current = el.id;
      }
      // At the very bottom of the page the last section is active even if it is short.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setActive(atBottom ? elements[elements.length - 1].id : current);
    };
    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids, anchorRatio]);

  return active;
}
