"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  articleMeta,
  keyStats,
  tocItems,
  articleTags,
  relatedArticles,
  moreArticles,
} from "./data";
import BackToTop from "../BackToTop";
import s from "./style.module.scss";


const ChevronRight = () => (
  <svg viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

// ─── CODE COPY BUTTON ─────────────────────────────────────────────────────
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button className={s.codeCopy} onClick={handleCopy}>
      <svg viewBox="0 0 24 24">
        <rect x="9" y="9" width="13" height="13" rx="2" />
        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
      </svg>
      {copied ? "Đã copy ✓" : "Copy"}
    </button>
  );
}

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────
export default function AIAgent2Page() {
  const [progress, setProgress] = useState(0);
  const [showBtt, setShowBtt] = useState(false);
  const [activeToc, setActiveToc] = useState("van-de");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(pct);
      setShowBtt(window.scrollY > 400);

      // TOC active
      let current = "";
      tocItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) current = id;
      });
      if (current) setActiveToc(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const codeText = `// Người dùng gõ trong chat:
    "Xuất Commercial Invoice và Packing List
    cho đơn #ORD-2025-0891, gửi về
    email khach@cty.com"

    // AI Agent thực hiện:
    1. Fetch đơn hàng từ Order Service
    2. Map dữ liệu → mẫu Invoice chuẩn
    3. Render PDF (2.8s)
    4. Gửi email tự động ✓`;

  return (
    <>
      {/* ── PROGRESS BAR ──────────────────────────────────────────────── */}
      <div className={s.progressBar}>
        <div className={s.progressFill} style={{ width: `${progress}%` }} />
      </div>

      {/* ── ARTICLE BODY ──────────────────────────────────────────────── */}
      <div className={s.artBody}>
        <div className={s.artContainer}>

          {/* ── ARTICLE HEADER ──────────────────────────────────────── */}
          <div className={s.artHeader}>
            {/* Breadcrumb */}
            <div className={s.breadcrumb}>
              {articleMeta.breadcrumbs.map((crumb, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {i > 0 && <ChevronRight />}
                  {crumb.href ? (
                    <Link href={crumb.href}>{crumb.label}</Link>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                </span>
              ))}
            </div>

            {/* Tag */}
            <div className={`${s.artTag} ${s[articleMeta.tagVariant]}`}>
              {articleMeta.tag}
            </div>

            {/* Title & subtitle */}
            <h1 className={s.artHeroTitle}>{articleMeta.title}</h1>
            <p className={s.artHeroSub}>{articleMeta.subtitle}</p>

            {/* Meta bar */}
            <div className={s.artMetaBar}>
              <div className={s.artAuthor}>
                <div className={s.artAvatar}>{articleMeta.author.initials}</div>
                <div>
                  <div className={s.artAuthorName}>{articleMeta.author.name}</div>
                  <div className={s.artAuthorRole}>{articleMeta.author.role}</div>
                </div>
              </div>

              <div className={s.artMetaSep} />

              <div className={s.artMetaItem}>
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                {articleMeta.date}
              </div>

              <div className={s.artMetaSep} />

              <div className={s.artMetaItem}>
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
                {articleMeta.readTime}
              </div>

              <div className={s.artMetaSep} />

              <div className={s.artMetaItem}>
                <svg viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                {articleMeta.views}
              </div>
            </div>
          </div>

          {/* ── CONTENT + SIDEBAR ─────────────────────────────────── */}
          <div className={s.artLayout}>

            {/* ── ARTICLE CONTENT ─────────────────────────────────── */}
            <article className={s.artContent}>
              <div className={s.prose}>

                <p>
                  Hôm nay chúng tôi ra mắt{" "}
                  <strong>Flast AI Agent 2.0</strong> — phiên bản nâng cấp toàn
                  diện với khả năng tự động sinh chứng từ thương mại quốc tế.
                  Đây là tính năng được cộng đồng người dùng xuất nhập khẩu của
                  Flast yêu cầu nhiều nhất trong 6 tháng vừa qua.
                </p>

                {/* Stats */}
                <div className={s.statsRow}>
                  {keyStats.map((st) => (
                    <div key={st.label} className={s.statBox}>
                      <div className={s.statBoxVal}>{st.value}</div>
                      <div className={s.statBoxLabel}>{st.label}</div>
                    </div>
                  ))}
                </div>

                <h2 id="van-de">Vấn đề mà chúng tôi muốn giải quyết</h2>
                <p>
                  Mỗi lô hàng xuất khẩu đòi hỏi một bộ chứng từ phức tạp:{" "}
                  <strong>Commercial Invoice</strong>,{" "}
                  <strong>Packing List</strong>,{" "}
                  <strong>Certificate of Origin (C/O)</strong>, và tờ khai hải
                  quan. Kế toán xuất nhập khẩu thường mất 2–4 giờ mỗi ngày chỉ
                  để sao chép dữ liệu từ đơn hàng vào các mẫu này — công việc
                  lặp lại, dễ nhầm, và không tạo ra giá trị thực sự.
                </p>

                <blockquote className={s.artQuote}>
                  <p>
                    Nhân viên của tôi mất cả buổi sáng để làm chứng từ cho 5
                    lô hàng. Sau khi dùng AI Agent, công việc đó xong trong 15
                    phút.
                  </p>
                  <cite>— Kế toán trưởng, Công ty XNK Hải Phòng</cite>
                </blockquote>

                <h2 id="tinh-nang">Tính năng mới trong v2.0</h2>

                <h3 id="doc-don-hang">1. Đọc và phân tích đơn hàng tự động</h3>
                <p>
                  AI Agent kết nối với{" "}
                  <strong>Schema Registry</strong> của Flast Workflow để hiểu
                  cấu trúc dữ liệu đơn hàng của từng doanh nghiệp. Không cần
                  cấu hình mapping thủ công — AI tự suy luận trường nào ứng với
                  trường nào trong mẫu chứng từ.
                </p>

                <div className={`${s.callout} ${s.info}`}>
                  <div className={s.calloutIcon}>
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <div className={s.calloutTitle}>Lưu ý về Schema Registry</div>
                    <div className={s.calloutDesc}>
                      Tính năng này yêu cầu domain entity &ldquo;Đơn hàng&rdquo; đã được
                      khai báo trong Schema Registry. Xem hướng dẫn thiết lập
                      tại mục tài liệu.
                    </div>
                  </div>
                </div>

                <h3 id="sinh-chung-tu">2. Sinh chứng từ bằng lệnh ngôn ngữ tự nhiên</h3>
                <p>
                  Thay vì điền form, người dùng chỉ cần gõ lệnh trong chat. AI
                  Agent sẽ truy vấn dữ liệu, điền vào mẫu chuẩn và xuất file
                  PDF sẵn sàng ký.
                </p>

                {/* Code block */}
                <div className={s.codeBlock}>
                  <div className={s.codeHeader}>
                    <span className={s.codeLang}>LỆNH CHAT</span>
                    <CopyButton text={codeText} />
                  </div>
                  <div className={s.codeBody}>
                    <span className={s.cm}>// Người dùng gõ trong chat:</span>
                    {"\n"}
                    <span className={s.str}>
                      &quot;Xuất Commercial Invoice và Packing List{"\n"}
                      cho đơn #ORD-2025-0891, gửi về{"\n"}
                      email khach@cty.com&quot;
                    </span>
                    {"\n\n"}
                    <span className={s.cm}>// AI Agent thực hiện:</span>
                    {"\n"}
                    <span className={s.kw}>1.</span> Fetch đơn hàng từ Order
                    Service{"\n"}
                    <span className={s.kw}>2.</span> Map dữ liệu → mẫu Invoice
                    chuẩn{"\n"}
                    <span className={s.kw}>3.</span> Render PDF (
                    <span className={s.num}>2.8s</span>){"\n"}
                    <span className={s.kw}>4.</span> Gửi email tự động ✓
                  </div>
                </div>

                <div className={`${s.callout} ${s.success}`}>
                  <div className={s.calloutIcon}>
                    <svg viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" />
                    </svg>
                  </div>
                  <div>
                    <div className={s.calloutTitle}>Hỗ trợ 8 loại chứng từ</div>
                    <div className={s.calloutDesc}>
                      Commercial Invoice · Packing List · C/O Form D/E · Bill
                      of Lading draft · Phiếu xuất kho · Biên bản nghiệm thu ·
                      Hóa đơn VAT · Hợp đồng mua bán
                    </div>
                  </div>
                </div>

                <h2 id="ket-qua">Kết quả thực tế</h2>
                <p>
                  Sau 3 tháng beta với 40 doanh nghiệp xuất nhập khẩu, dữ liệu
                  cho thấy AI Agent 2.0 giảm thời gian làm chứng từ trung bình{" "}
                  <strong>85%</strong>, tỷ lệ lỗi nhập liệu giảm về gần 0, và
                  kế toán có thêm thời gian cho các công việc phân tích giá trị
                  cao hơn.
                </p>

                {/* Chart placeholder */}
                <div className={s.artImg}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M7 16l4-6 4 4 4-8" />
                  </svg>
                </div>
                <p className={s.artImgCaption}>
                  Biểu đồ so sánh thời gian xử lý chứng từ trước và sau khi
                  dùng AI Agent 2.0
                </p>

                <div className={`${s.callout} ${s.warning}`}>
                  <div className={s.calloutIcon}>
                    <svg viewBox="0 0 24 24">
                      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                      <path d="M12 9v4M12 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <div className={s.calloutTitle}>Lưu ý quan trọng</div>
                    <div className={s.calloutDesc}>
                      AI Agent sinh chứng từ dựa trên dữ liệu trong hệ thống.
                      Luôn review lại trước khi gửi cho đối tác — đặc biệt với
                      các trường số lượng, đơn giá và điều khoản thanh toán.
                    </div>
                  </div>
                </div>

                <h2 id="bat-dau">Bắt đầu sử dụng</h2>
                <p>
                  Tính năng này có sẵn từ gói <strong>Business</strong> trở
                  lên. Nếu bạn đang dùng bản trial, tính năng sẽ tự động được
                  bật. Truy cập{" "}
                  <a href="#">tài liệu hướng dẫn</a> để xem danh sách mẫu chứng
                  từ hiện có và cách thêm mẫu tùy chỉnh của doanh nghiệp.
                </p>
              </div>

              {/* ── TAGS + SHARE ───────────────────────────────────── */}
              <div className={s.artFooter}>
                <div className={s.artTags}>
                  {articleTags.map((tag) => (
                    <a key={tag} href="#" className={s.artTagItem}>
                      {tag}
                    </a>
                  ))}
                </div>
                <div className={s.shareRow}>
                  <span className={s.shareLabel}>Chia sẻ:</span>
                  {/* Facebook */}
                  <a href="#" className={s.shareBtn} title="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="#" className={s.shareBtn} title="LinkedIn">
                    <svg viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  {/* Twitter/X */}
                  <a href="#" className={s.shareBtn} title="Twitter/X">
                    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* Copy link */}
                  <a href="#" className={s.shareBtn} title="Copy link">
                    <svg viewBox="0 0 24 24">
                      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* ── AUTHOR CARD ────────────────────────────────────── */}
              <div className={s.authorCard}>
                <div className={s.authorCardAvatar}>
                  {articleMeta.author.initials}
                </div>
                <div>
                  <div className={s.authorCardName}>
                    {articleMeta.author.name}
                  </div>
                  <div className={s.authorCardRole}>
                    {articleMeta.author.role}
                  </div>
                  <div className={s.authorCardBio}>
                    {articleMeta.author.bio}
                  </div>
                </div>
              </div>
            </article>

            {/* ── SIDEBAR ─────────────────────────────────────────── */}
            <aside className={s.sidebar}>

              {/* TOC */}
              <div className={s.sidebarCard}>
                <div className={s.sidebarTitle}>
                  <svg viewBox="0 0 24 24">
                    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                  </svg>
                  Nội dung bài viết
                </div>
                <nav className={s.tocList}>
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`${s.tocItem} ${item.level === 3 ? s.h3 : ""
                        } ${activeToc === item.id ? s.active : ""}`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* CTA */}
              <div className={s.ctaCard}>
                <h4>Thử AI Agent ngay</h4>
                <p>
                  Dùng thử 14 ngày miễn phí — không cần thẻ tín dụng. Kết nối
                  ERP và sinh chứng từ đầu tiên trong hôm nay.
                </p>
                <a href="#" className={s.ctaCardBtn}>
                  Bắt đầu miễn phí →
                </a>
              </div>

              {/* Related articles */}
              <div className={s.sidebarCard}>
                <div className={s.sidebarTitle}>
                  <svg viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h10M4 18h6" />
                  </svg>
                  Bài viết liên quan
                </div>
                <div className={s.relatedList}>
                  {relatedArticles.map((item) => (
                    <a key={item.title} href={item.href} className={s.relatedItem}>
                      <span
                        className={s.relatedTag}
                        style={item.tagStyle as React.CSSProperties}
                      >
                        {item.tag}
                      </span>
                      <div className={s.relatedTitle}>{item.title}</div>
                      <div className={s.relatedMeta}>{item.meta}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* More articles (with image) */}
              <div className={s.sidebarCard} style={{ padding: 0, overflow: "hidden" }}>
                <div className={s.sidebarTitle} style={{ padding: "18px 18px 0" }}>
                  <svg viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  Bài viết khác có thể bạn quan tâm
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {moreArticles.map((item) => (
                    <a key={item.title} href={item.href} className={s.moreCard}>
                      <div
                        className={s.moreCardImg}
                        style={{ background: item.imgBg }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <div className={s.moreCardBody}>
                        <div
                          className={s.moreCardTagSm}
                          style={item.tagStyle as React.CSSProperties}
                        >
                          {item.tagLabel}
                        </div>
                        <div className={s.moreCardTitle}>{item.title}</div>
                        <div className={s.moreCardMeta}>{item.meta}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </div>
      {/* ── BACK TO TOP ─────────────────────────────────────────────────── */}
      <BackToTop />
    </>
  );
}
