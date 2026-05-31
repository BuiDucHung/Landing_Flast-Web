"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  heroStats,
  heroWorkflows,
  trustLogos,
  products,
  workflowSteps,
  flowNodes,
  erpBenefits,
  erpMicroservices,
  erpSystems,
  shieldFeatures,
  ossModules,
  ossTargets,
  ossRepos,
  aiCapabilities,
  aiFlowSteps,
  caseStudies,
  pricingPlans
} from "./data";
import BackToTop from "../BackToTop";
import CaseCard from "./CaseCard";
import s from "./style.module.scss";

// ─── SVG ICONS ────────────────────────────────────────────────────────────
const GitHubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

// Chip status helper
function chipClass(status: string) {
  if (status === "Running") return s.run;
  if (status === "Pending") return s.pend;
  if (status === "Done") return s.done;
  return "";
}

// Flow node styling helper
function flowNodeStyle(variant: string) {
  if (variant === "done")
    return {
      containerStyle: {},
      iconClass: s.g,
      stStyle: { background: "var(--green-bg)", color: "var(--green-text)" },
    };
  if (variant === "running")
    return {
      containerStyle: {
        borderColor: "#93B9F5",
        background: "var(--blue-50)",
      } as React.CSSProperties,
      iconClass: s.b,
      stStyle: { background: "#EFF6FF", color: "#1D4ED8" },
    };
  return {
    containerStyle: { opacity: 0.4 } as React.CSSProperties,
    iconClass: variant === "waiting2" ? s.a : s.s,
    stStyle: { background: "var(--slate-1)", color: "var(--slate-5)" },
  };
}

// ─── PAGE ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [activeStep, setActiveStep] = useState(0);
  const [showBtt, setShowBtt] = useState(false);

  // Intersection observer for fade-in
  const fadeRefs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(s.in || "in");
        });
      },
      { threshold: 0.1 }
    );
    fadeRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);


  const addFadeRef = (el: HTMLElement | null) => {
    if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el);
  };

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className={s.hero}>
        <div className={s.heroGridBg} />
        <div className={s.heroGlow} />
        <div className={s.heroInner}>
          {/* Left */}
          <div>
            <div className={s.heroKicker}>
              <span className={s.heroKickerDot} />
              Công ty Cổ Phần Flast Solution
            </div>
            <h1 className={s.heroH1}>
              Nền tảng công nghệ
              <br />
              <em>cho doanh nghiệp Việt</em>
            </h1>
            <p className={s.heroSub}>
              Ba sản phẩm — một hệ sinh thái: Tự động hóa quy trình no-code,
              ERP mã nguồn mở cho SMB, bảo vệ máy chủ Linux tầng kernel — và{" "}
              <strong>AI Agent</strong> tích hợp sâu vào mọi nghiệp vụ.
            </p>
            <div className={s.heroBtns}>
              <a href="#products" className={`${s.btn} ${s.btnWhite} ${s.btnLg}`}>
                Khám phá sản phẩm
              </a>
              <a href="#" className={`${s.btn} ${s.btnOutlineWhite} ${s.btnLg}`}>
                Đặt lịch demo →
              </a>
            </div>
            <div className={s.heroTrust}>
              <div className={s.avatars}>
                {["NT", "HM", "TL", "+"].map((t) => (
                  <span key={t} className={s.avatar}>
                    {t}
                  </span>
                ))}
              </div>
              <p className={s.heroTrustText}>
                Được tin dùng bởi <strong>200+ doanh nghiệp</strong> Việt Nam
              </p>
            </div>
          </div>

          {/* Dashboard mock */}
          <div className={s.hDash}>
            <div className={s.hDashBar}>
              <div className={s.hDashDots}>
                <span style={{ background: "#FF5F57" }} />
                <span style={{ background: "#FEBC2E" }} />
                <span style={{ background: "#28C840" }} />
              </div>
              <span className={s.hDashTitle}>flast.io / dashboard</span>
            </div>
            <div className={s.hDashBody}>
              <div className={s.hStats}>
                {heroStats.map((st) => (
                  <div key={st.label} className={s.hStat}>
                    <div className={s.hStatL}>{st.label}</div>
                    <div className={s.hStatV}>
                      {st.value}
                      {st.badge && <span className={s.up}>{st.badge}</span>}
                    </div>
                  </div>
                ))}
              </div>
              <div className={s.wfRows}>
                {heroWorkflows.map((wf) => (
                  <div key={wf.name} className={s.wfR}>
                    <div
                      className={s.wfDot}
                      style={{ background: wf.color }}
                    />
                    <span className={s.wfN}>{wf.name}</span>
                    <span className={s.wfS}>{wf.step}</span>
                    <span className={`${s.chip} ${chipClass(wf.status)}`}>
                      {wf.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOS BAR ───────────────────────────────────────────────────── */}
      <div className={s.logosBar}>
        <p className={s.logosLabel}>Phương châm: Nhanh — Hiệu quả — Tiết kiệm</p>
        <div className={s.logosRow}>
          {trustLogos.map((l) => (
            <span key={l} className={s.logoTxt}>
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* ── PRODUCTS ────────────────────────────────────────────────────── */}
      <section id="products" className={s.productsSection}>
        <div className={s.wrap}>
          <div
            className={s.productsHeader}
            ref={(el) => addFadeRef(el as HTMLElement)}
          >
            <div className={s.sKicker} style={{ color: "var(--blue-2)" }}>
              Hệ sinh thái sản phẩm
            </div>
            <h2 className={s.sTitle}>
              Ba sản phẩm — <strong>Một hệ sinh thái</strong> - Hoàn chỉnh
            </h2>
            <p className={s.sSub}>
              Từ tự động hóa quy trình đến quản lý toàn diện đến bảo vệ hạ tầng
              — Flast Solution cung cấp đủ bộ công cụ cho doanh nghiệp hiện đại.
            </p>
          </div>

          <div
            className={s.prodCards}
            ref={(el) => addFadeRef(el as HTMLElement)}
          >
            {products.map((p) => (
              <div
                key={p.name}
                className={`${s.prodCard} ${s[p.variant]}`}
              >
                <div className={s.prodHeader}>
                  <div className={`${s.prodIcon} ${s[p.variant]}`}>
                    {p.variant === "blue" && (
                      <svg viewBox="0 0 24 24">
                        <rect x="3" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="14" width="7" height="7" rx="1" />
                        <path d="M6.5 10v4h11v-4" />
                      </svg>
                    )}
                    {p.variant === "green" && (
                      <svg viewBox="0 0 24 24">
                        <path d="M3 3h18v18H3z" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                    )}
                    {p.variant === "teal" && (
                      <svg viewBox="0 0 24 24">
                        <path d="M12 2L4 6v6c0 5.25 3.75 10.15 8 11 4.25-.85 8-5.75 8-11V6l-8-4z" />
                      </svg>
                    )}
                  </div>
                  <div className={`${s.prodTag} ${s[p.variant]}`}>
                    {p.tag}
                  </div>
                  <h3 className={s.prodName}>{p.name}</h3>
                  <p className={s.prodDesc}>{p.desc}</p>
                </div>

                <hr className={s.prodDivider} />

                <div className={s.prodBody}>
                  {p.modules && (
                    <div className={s.moduleTags}>
                      {p.modules.map((m) => (
                        <span key={m} className={s.mTag}>
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className={s.prodFeatList}>
                    {p.features.map((f) => (
                      <div key={f} className={s.prodFeat}>
                        <div
                          className={`${s.pfCheck} ${s[p.variant]}`}
                        />
                        <span
                          style={
                            f.startsWith("✦")
                              ? { fontWeight: 500, color: "var(--blue)" }
                              : {}
                          }
                        >
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={s.prodFooter}>
                  {p.variant === "green" ? (
                    <a
                      href={p.primaryBtn.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`${s.btn} ${s.btnGreen}`}
                      style={{ flex: 1, justifyContent: "center" }}
                    >
                      <GitHubIcon size={14} /> {p.primaryBtn.label}
                    </a>
                  ) : p.variant === "teal" ? (
                    <a
                      href={p.primaryBtn.href}
                      className={`${s.btn} ${s.btnTeal}`}
                      style={{ flex: 1, justifyContent: "center" }}
                    >
                      {p.primaryBtn.label}
                    </a>
                  ) : (
                    <a
                      href={p.primaryBtn.href}
                      className={`${s.btn} ${s.btnPrimary}`}
                      style={{ flex: 1, justifyContent: "center" }}
                    >
                      {p.primaryBtn.label}
                    </a>
                  )}
                  <a href={p.secondaryBtn.href} className={`${s.btn} ${s.btnGhost}`}>
                    {p.secondaryBtn.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WORKFLOW WORKS ──────────────────────────────────────────── */}
      <section id="workflow" className={s.howSection}>
        <div className={s.wrap}>
          <div className={s.sKicker} style={{ color: "var(--blue-2)" }}>
            Flast Workflow
          </div>
          <h2 className={s.sTitle}>
            Từ ý tưởng đến <strong>vận hành</strong> trong vài giờ
          </h2>
          <p className={s.sSub}>
            Không viết code. Không chờ đội kỹ thuật.
            <br />
            Bộ phận nghiệp vụ tự thiết kế và chạy quy trình của mình.
          </p>

          <div className={s.howInner}>
            {/* Steps */}
            <div
              className={s.steps}
              ref={(el) => addFadeRef(el as HTMLElement)}
            >
              {workflowSteps.map((step, i) => (
                <div
                  key={step.num}
                  className={`${s.step} ${activeStep === i ? s.active : ""}`}
                  onClick={() => setActiveStep(i)}
                >
                  <div className={s.stepNum}>{step.num}</div>
                  <div>
                    <h4 className={s.stepTitle}>{step.title}</h4>
                    <p className={s.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Flow card */}
            <div
              className={s.flowCard}
              ref={(el) => addFadeRef(el as HTMLElement)}
            >
              <div className={s.fcBar}>
                <span className={s.fcBarTitle}>
                  order-approval · Instance #10042
                </span>
                <span className={s.fcLive}>● Live</span>
              </div>
              <div className={s.fcBody}>
                {flowNodes.map((node, i) => {
                  const ns = flowNodeStyle(node.variant);
                  return (
                    <div key={node.label}>
                      <div
                        className={s.fn}
                        style={ns.containerStyle}
                      >
                        <div
                          className={`${s.fnIco} ${ns.iconClass}`}
                          style={
                            node.variant === "running"
                              ? { color: "var(--blue)" }
                              : {}
                          }
                        >
                          {node.icon}
                        </div>
                        <span
                          className={s.fnLabel}
                          style={
                            node.variant === "running"
                              ? { color: "var(--blue)", fontWeight: 600 }
                              : {}
                          }
                        >
                          {node.label}
                        </span>
                        <span className={s.fnSt} style={ns.stStyle}>
                          {node.status}
                        </span>
                      </div>
                      {i < flowNodes.length - 1 && (
                        <div className={s.fnCon} />
                      )}
                    </div>
                  );
                })}
                <div className={s.fnErpBox}>
                  <div className={s.fnErpIco}>E</div>
                  <span className={s.fnErpTxt}>
                    Webhook sẵn sàng → SAP ERP khi bước phê duyệt hoàn thành
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ERP INTEGRATION ─────────────────────────────────────────────── */}
      <section id="erp" className={s.erpSection}>
        <div className={`${s.wrap} ${s.erpInner}`}>
          <div>
            <div className={`${s.sKicker} ${s.erpKicker}`}>
              ERP Integration
            </div>
            <h2 className={`${s.sTitle} ${s.erpTitle}`}>
              Kết nối <strong>không giới hạn</strong>
              <br />
              với hệ thống hiện tại
            </h2>
            <p className={`${s.sSub} ${s.erpSub}`}>
              Tích hợp với bất kỳ ERP nào qua REST API và Webhook chuẩn — không
              thay đổi hệ thống hiện có.
            </p>
            <div className={s.erpBens}>
              {erpBenefits.map((b) => (
                <div key={b.title} className={s.erpBen}>
                  <div className={s.erpBenIco}>
                    <svg viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={s.erpBenH4}>{b.title}</h4>
                    <p className={s.erpBenP}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={s.erpDiagram}
            ref={(el) => addFadeRef(el as HTMLElement)}
          >
            <div className={s.erpCenter}>
              <h3>FLAST WORKFLOW ENGINE</h3>
              <p>No-code · Multi-tenant · Schema Registry</p>
            </div>
            <div className={s.erpCols}>
              <div className={s.erpColChips}>
                <div className={s.erpColLabel}>Microservices</div>
                {erpMicroservices.map((svc) => (
                  <div key={svc} className={s.erpChip2}>
                    <div
                      className={s.erpChip2Dot}
                      style={{ background: "var(--green-2)" }}
                    />
                    {svc}
                  </div>
                ))}
              </div>
              <div className={s.erpMid}>
                <div className={s.erpMidLine} />
                <div className={s.erpMidLbl}>REST / Webhook</div>
                <div className={s.erpMidLine} />
              </div>
              <div className={s.erpColChips}>
                <div className={s.erpColLabel}>ERP Systems</div>
                {erpSystems.map((sys) => (
                  <div key={sys} className={s.erpChip2}>
                    <div
                      className={s.erpChip2Dot}
                      style={{ background: "var(--amber-2)" }}
                    />
                    {sys}
                  </div>
                ))}
              </div>
            </div>
            <div className={s.erpSla}>
              ✓ 99.9% uptime · TLS 1.3 · Mã hóa end-to-end
            </div>
          </div>
        </div>
      </section>

      {/* ── SHIELD ──────────────────────────────────────────────────────── */}
      <section id="shield" className={s.shieldSection}>
        <div className={`${s.wrap} ${s.shieldInner}`}>
          <div>
            <div className={`${s.sKicker} ${s.shieldKicker}`}>
              Flast Shield
            </div>
            <h2 className={`${s.sTitle} ${s.shieldTitle}`}>
              <strong>Bảo mật Linux từ gốc Kernel</strong>
            </h2>
            <p className={s.sSub}>
              Cô lập ứng dụng bằng namespace Linux — mỗi process chạy trong
              sandbox riêng, không thể gây hại cho máy chủ dù bị tấn công hay
              có lỗi.
            </p>
            <div className={s.shieldFeats}>
              {shieldFeatures.map((f) => (
                <div key={f.title} className={s.shieldFeat}>
                  <div className={s.sfIco}>
                    <svg viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={s.shieldFeatH4}>{f.title}</h4>
                    <p className={s.shieldFeatP}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={s.shieldDiagram}
            ref={(el) => addFadeRef(el as HTMLElement)}
          >
            <div className={s.sdBar}>
              <span className={s.sdDot} />
              flast-shield · kernel module · active
            </div>
            <div className={s.sdBody}>
              <div className={s.sdLayers}>
                {/* App A */}
                <div className={`${s.sdLayer} ${s.layerApp}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                  </svg>
                  <span className={s.sdLayerLabel}>Ứng dụng A</span>
                  <span className={s.sdLayerBadge}>App</span>
                </div>
                {/* Namespace A */}
                <div className={`${s.sdLayer} ${s.layerNs}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#065F46" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  <span className={s.sdLayerLabel}>Namespace Sandbox A</span>
                  <span className={s.sdLayerBadge}>Isolated</span>
                </div>

                <div className={s.sdArrow}>Tường cô lập — không thể vượt qua</div>

                {/* App B */}
                <div className={`${s.sdLayer} ${s.layerApp}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round">
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                  <span className={s.sdLayerLabel}>Ứng dụng B</span>
                  <span className={s.sdLayerBadge}>App</span>
                </div>
                {/* Namespace B */}
                <div className={`${s.sdLayer} ${s.layerNs}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#065F46" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  <span className={s.sdLayerLabel}>Namespace Sandbox B</span>
                  <span className={s.sdLayerBadge}>Isolated</span>
                </div>
                {/* Kernel */}
                <div className={`${s.sdLayer} ${s.layerKernel}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 2L4 6v6c0 5.25 3.75 10.15 8 11 4.25-.85 8-5.75 8-11V6l-8-4z" />
                  </svg>
                  <span className={s.sdLayerLabel}>Linux Kernel · Flast Shield</span>
                  <span className={s.sdLayerBadge}>Protected</span>
                </div>
              </div>
              <div className={s.sdNote}>
                ✓ Ứng dụng bị tấn công không thể ảnh hưởng đến máy chủ hoặc ứng dụng khác
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPEN SOURCE ─────────────────────────────────────────────────── */}
      <section id="opensource" className={s.ossSection}>
        <div className={s.wrap}>
          <div style={{ marginBottom: 48 }}>
            <div className={`${s.sKicker} ${s.ossKicker}`}>Open Source</div>
            <h2 className={`${s.sTitle} ${s.ossTitle}`}>
              Open CDP-ERP — <strong>Hoàn toàn miễn phí</strong>
            </h2>
            <p className={`${s.sSub} ${s.ossSub}`}>
              ERP mã nguồn mở với quy trình fix sẵn cho SMB Việt Nam. Dữ liệu
              là của bạn. Chi phí vận hành chỉ bằng một VPS 200k/tháng.
            </p>
          </div>

          <div className={s.ossInner}>
            <div>
              <div className={s.ossModules}>
                {ossModules.map((m) => (
                  <div key={m.title} className={s.ossMod}>
                    <div className={s.ossModIcon}>
                      <svg viewBox="0 0 24 24">
                        <path d="M3 3h18v18H3zM3 9h18M9 21V9" />
                      </svg>
                    </div>
                    <h4 className={s.ossModH4}>{m.title}</h4>
                    <p className={s.ossModP}>{m.desc}</p>
                  </div>
                ))}
              </div>
              <div className={s.ossTargets}>
                <p className={s.ossTargetsLabel}>Phù hợp cho:</p>
                <div className={s.ossDomainTags}>
                  {ossTargets.map((t) => (
                    <span key={t} className={s.ossDt}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={s.ossCard}
              ref={(el) => addFadeRef(el as HTMLElement)}
            >
              <div className={s.ossCardLabel}>GITHUB REPOSITORIES</div>
              {ossRepos.map((repo) => (
                <div key={repo.name} className={s.ossRepo}>
                  <div className={s.ossRepoName}>{repo.name}</div>
                  <div className={s.ossRepoDesc}>{repo.desc}</div>
                  <div className={s.ossRepoTags}>
                    {repo.tags.map((t) => (
                      <span key={t} className={s.ossRepoTag}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noreferrer"
                    className={s.ossRepoLink}
                  >
                    <GitHubIcon size={13} /> Xem repository →
                  </a>
                </div>
              ))}
              <div className={s.ossLicense}>
                <strong>MIT License</strong> · Tự do sử dụng, chỉnh sửa và
                triển khai. Dữ liệu thuộc về doanh nghiệp.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI AGENT ────────────────────────────────────────────────────── */}
      <section id="ai-agent" className={s.aiSection}>
        <div className={s.wrap}>
          <div
            className={s.aiTop}
            ref={(el) => addFadeRef(el as HTMLElement)}
          >
            <div className={`${s.sKicker} ${s.aiKicker}`}>Flast AI Agent</div>
            <h2 className={`${s.sTitle} ${s.aiTitle}`}>
              Trợ lý AI tích hợp sâu — <strong>Không chỉ là chatbot</strong>
            </h2>
            <p className={`${s.sSub} ${s.aiSub}`}>
              AI Agent của Flast hiểu ngữ cảnh nghiệp vụ, thao tác trực tiếp
              trên giao diện, tự sinh báo cáo và chứng từ — như một nhân viên
              thực thụ.
            </p>
          </div>

          <div
            className={s.aiCaps}
            ref={(el) => addFadeRef(el as HTMLElement)}
          >
            {aiCapabilities.map((cap) => (
              <div key={cap.title} className={s.aiCap}>
                <div className={`${s.aiCapIcon} ${s[cap.variant]}`}>
                  <svg viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                  </svg>
                </div>
                <h3 className={s.aiCapH3}>{cap.title}</h3>
                <p className={s.aiCapP}>{cap.desc}</p>
                <div className={s.aiCapExamples}>
                  {cap.examples.map((ex) => (
                    <div
                      key={ex}
                      className={`${s.aiExample} ${
                        cap.variant === "violet"
                          ? s.v
                          : cap.variant === "emerald"
                          ? s.e
                          : s.a
                      }`}
                    >
                      &ldquo;{ex}&rdquo;
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Chat demo */}
          <div
            className={s.aiDemoWrap}
            ref={(el) => addFadeRef(el as HTMLElement)}
          >
            <div>
              <h3 className={s.aiDemoLeftH3}>Hoạt động như thế nào?</h3>
              <p className={s.aiDemoLeftP}>
                AI Agent kết nối trực tiếp với Flast Workflow và Open CDP-ERP.
                Mỗi lệnh được phân tích ý định, ánh xạ sang API nghiệp vụ tương
                ứng, thực thi và trả về kết quả có cấu trúc.
              </p>
              <div className={s.aiFlow}>
                {aiFlowSteps.map((step) => (
                  <div key={step.num} className={s.aiFlowStep}>
                    <div className={s.afNum}>{step.num}</div>
                    <div>
                      <h4 className={s.afTxtH4}>{step.title}</h4>
                      <p className={s.afTxtP}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat mock */}
            <div className={s.aiChat}>
              <div className={s.aiChatBar}>
                <div className={s.aiChatAvatar}>AI</div>
                <div>
                  <div className={s.aiChatName}>Flast AI Agent</div>
                  <div className={s.aiChatStatus}>Đang hoạt động</div>
                </div>
              </div>
              <div className={s.aiChatBody}>
                {/* User message */}
                <div className={`${s.msg} ${s.user}`}>
                  <div className={`${s.msgAvatar} ${s.hu}`}>TL</div>
                  <div className={`${s.msgBubble} ${s.user}`}>
                    Cho tôi xem doanh thu tháng 4, so sánh với tháng 3 và cho
                    biết sản phẩm nào bán chạy nhất
                  </div>
                </div>
                {/* AI response */}
                <div className={s.msg}>
                  <div className={`${s.msgAvatar} ${s.ai}`}>AI</div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      maxWidth: "85%",
                    }}
                  >
                    <div className={`${s.msgBubble} ${s.ai}`}>
                      Đang truy vấn dữ liệu từ{" "}
                      <strong>Order Service</strong> và{" "}
                      <strong>ERP</strong>...
                    </div>
                    <div className={s.aiResultCard}>
                      <div className={s.rcTitle}>
                        📊 Báo cáo doanh thu — Tháng 4 vs Tháng 3
                      </div>
                      {[
                        { label: "Tháng 4:", value: "₫ 2.84 tỷ", color: "#34D399" },
                        { label: "Tháng 3:", value: "₫ 2.51 tỷ", color: "rgba(255,255,255,.5)" },
                        { label: "Tăng trưởng:", value: "+13.1% ↑", color: "#FCD34D" },
                      ].map((row) => (
                        <div key={row.label} className={s.aiResultRow}>
                          <span>{row.label}</span>
                          <span style={{ color: row.color, fontWeight: 600 }}>
                            {row.value}
                          </span>
                        </div>
                      ))}
                      <div className={s.aiResultDivider}>
                        <div className={s.aiResultSubLabel}>TOP SẢN PHẨM THÁNG 4</div>
                        {[
                          { name: "1. Áo Polo Classic", val: "₫ 480tr" },
                          { name: "2. Quần Jean Slim", val: "₫ 320tr" },
                          { name: "3. Áo sơ mi Oxford", val: "₫ 290tr" },
                        ].map((row) => (
                          <div key={row.name} className={s.aiResultRow}>
                            <span>{row.name}</span>
                            <span style={{ color: "#A78BFA" }}>{row.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`${s.msgBubble} ${s.ai}`}>
                      Doanh thu tăng <strong>13.1%</strong> so tháng 3. Áo Polo
                      Classic dẫn đầu, tăng 22% — đang vào mùa hè. Bạn muốn
                      tôi <strong>xuất báo cáo PDF</strong> hay{" "}
                      <strong>tạo đề xuất nhập hàng</strong>?
                    </div>
                  </div>
                </div>
                {/* User follow-up */}
                <div className={`${s.msg} ${s.user}`}>
                  <div className={`${s.msgAvatar} ${s.hu}`}>TL</div>
                  <div className={`${s.msgBubble} ${s.user}`}>
                    Xuất báo cáo PDF và tạo luôn phiếu đề xuất nhập thêm Áo
                    Polo
                  </div>
                </div>
                {/* Typing indicator */}
                <div className={s.msg}>
                  <div className={`${s.msgAvatar} ${s.ai}`}>AI</div>
                  <div className={s.aiTyping}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ────────────────────────────────────────────────── */}
      <section id="casestudy" className={s.csSection}>
        <div className={s.wrap}>
          <div
            className={s.csHeader}
            ref={(el) => addFadeRef(el as HTMLElement)}
          >
            <div className={s.sKicker} style={{ color: "var(--blue-2)" }}>
              Case Study
            </div>
            <h2 className={s.sTitle}>
              Doanh nghiệp thực tế — <strong>Kết quả thực tế</strong>
            </h2>
            <p className={s.sSub}>
              Flast Solution đã giúp hơn 200 doanh nghiệp Việt Nam chuyển đổi
              số theo phương châm Nhanh – Hiệu quả – Tiết kiệm.
            </p>
          </div>

          {/* Top 3 */}
          <div
            className={s.csGrid}
            ref={(el) => addFadeRef(el as HTMLElement)}
          >
            {caseStudies.slice(0, 3).map((cs) => (
              <CaseCard key={cs.title} cs={cs} />
            ))}
          </div>
          {/* Bottom 2 */}
          <div
            className={s.csGrid2}
            ref={(el) => addFadeRef(el as HTMLElement)}
          >
            {caseStudies.slice(3).map((cs) => (
              <CaseCard key={cs.title} cs={cs} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────────── */}
      <section id="pricing" className={s.pricingSection}>
        <div className={s.wrap}>
          <div className={s.sKicker} style={{ color: "var(--blue-2)" }}>
            Bảng giá
          </div>
          <h2 className={s.sTitle} style={{ margin: "0 auto" }}>
            Rõ ràng, <strong>không phí ẩn</strong>
          </h2>
          <p className={s.sSub} style={{ margin: "0 auto" }}>
            Bắt đầu miễn phí. Nâng cấp khi doanh nghiệp phát triển.
          </p>

          <div
            className={s.pricingGrid}
            ref={(el) => addFadeRef(el as HTMLElement)}
          >
            {pricingPlans.map((plan) => (
              <div
                key={plan.plan}
                className={`${s.pCard} ${plan.featured ? s.featured : ""}`}
              >
                {plan.popular && (
                  <div className={s.pPopular}>{plan.popular}</div>
                )}
                <div className={s.pPlan}>{plan.plan}</div>
                <div className={s.pPrice}>
                  {plan.price}
                  {plan.priceSuffix && (
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 400,
                        color: "var(--slate-5)",
                      }}
                    >
                      {plan.priceSuffix}
                    </span>
                  )}
                </div>
                <div className={s.pPeriod}>{plan.period}</div>
                <ul className={s.pFs}>
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  href={plan.btn.href}
                  target={plan.btn.href.startsWith("http") ? "_blank" : undefined}
                  rel={plan.btn.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`${s.btn} ${
                    plan.btn.ghost ? s.btnGhost : s.btnPrimary
                  }`}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {plan.btn.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className={s.ctaSection}>
        <div className={s.ctaInner}>
          <h2 className={s.ctaH2}>
            Sẵn sàng chuyển đổi số doanh nghiệp của bạn .?
          </h2>
          <p className={s.ctaP}>
            Bắt đầu với Open CDP-ERP miễn phí hoặc dùng thử Flast Workflow ngay
            hôm nay.
          </p>
          <div className={s.ctaBtns}>
            <a href="#" className={`${s.btn} ${s.btnWhite} ${s.btnLg}`}>
              Dùng thử Workflow miễn phí
            </a>
            <a
              href="https://github.com/Flast-Solution/Open-CDP-ERP-BackEnd"
              target="_blank"
              rel="noreferrer"
              className={`${s.btn} ${s.btnOutlineWhite} ${s.btnLg}`}
            >
              Clone Open ERP trên GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* ── BACK TO TOP ─────────────────────────────────────────────────── */}
      <BackToTop/>
    </>
  );
}
