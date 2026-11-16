"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/components/Icons";

const noop = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // false during SSR/hydration, true on the client: avoids a hydration mismatch on the icon.
  const mounted = useSyncExternalStore(noop, () => true, () => false);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const next = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent hover:text-text"
    >
      {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  );
}
