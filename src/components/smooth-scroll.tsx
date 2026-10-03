"use client";

import "lenis/dist/lenis.css";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Lenis caches the page's scroll limit and only re-measures it on a 250ms
// debounced ResizeObserver tick, which keeps getting pushed back while content
// is still changing height (images decoding, fonts swapping, sections
// mounting). Until it settles, scrolling stops short of the real bottom and
// feels stuck. Re-measure on the next frame after any change in the page's
// height, and after every client-side navigation, since the root instance
// survives route changes while the page underneath is swapped out.
function LenisHeightSync() {
  const lenis = useLenis();
  const pathname = usePathname();

  // pathname is a dependency so the sync re-runs on navigation
  useEffect(() => {
    if (!lenis) return;
    let frame = 0;
    const resize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => lenis.resize());
    };
    const observer = new ResizeObserver(resize);
    observer.observe(document.body);
    resize();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [lenis, pathname]);

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Visitors who ask for reduced motion keep native wheel scrolling.
  const [smoothWheel, setSmoothWheel] = useState(true);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setSmoothWheel(!query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel }}>
      <LenisHeightSync />
      {children}
    </ReactLenis>
  );
}
