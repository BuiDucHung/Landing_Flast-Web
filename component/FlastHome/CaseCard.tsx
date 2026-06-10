"use client";

import { useEffect, useRef } from "react";
import { caseStudies } from "./data";
import s from "./style.module.scss";

const CaseCard = ({ cs, index = 0 }: { cs: (typeof caseStudies)[0]; index?: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial state
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div ref={ref} className={`${s.csCard} ${s[cs.variant]}`}>
      <div className={s.csCardTop}>
        <span className={`${s.csIndustry} ${s[cs.variant]}`}>{cs.industry}</span>
        <span className={s.csProductBadge}>{cs.product}</span>
      </div>
      <h3 className={s.csTitle}>{cs.title}</h3>
      <p className={s.csDesc}>{cs.desc}</p>
      <div className={s.csMetrics}>
        {cs.metrics.map((m) => (
          <div key={m.label}>
            <div className={`${s.csMetricVal} ${s[cs.variant]}`}>{m.value}</div>
            <div className={s.csMetricLabel}>{m.label}</div>
          </div>
        ))}
      </div>
      <div className={s.csQuote}>
        {cs.quote}
        <div className={s.csQuoteAttr}>— {cs.author}</div>
      </div>
    </div>
  );
};

export default CaseCard;