import { useEffect, useRef } from "react";
import style from "@/component/FlastNew/new.module.scss";

// ── Fade-in hook ───────────────────────────────────────────────────────────
export function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(style.in); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
