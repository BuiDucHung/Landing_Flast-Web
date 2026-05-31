import { caseStudies } from "./data";
import s from "./style.module.scss";

// ─── CASE CARD COMPONENT ──────────────────────────────────────────────────
const CaseCard = ({ cs }: { cs: (typeof caseStudies)[0] }) => {
  return (
    <div className={`${s.csCard} ${s[cs.variant]}`}>
      <div className={s.csCardTop}>
        <span className={`${s.csIndustry} ${s[cs.variant]}`}>
          {cs.industry}
        </span>
        <span className={s.csProductBadge}>{cs.product}</span>
      </div>
      <h3 className={s.csTitle}>{cs.title}</h3>
      <p className={s.csDesc}>{cs.desc}</p>
      <div className={s.csMetrics}>
        {cs.metrics.map((m) => (
          <div key={m.label}>
            <div className={`${s.csMetricVal} ${s[cs.variant]}`}>
              {m.value}
            </div>
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
}
export default CaseCard