"use client";
import { useState } from "react";
import { ARTICLES, FEATURED_SIDE, FILTERS, PRODUCTS, TAGS, TRENDING, type FilterKey } from "./data";
import { ChevronLeft, ChevronRight } from "@/constants/icons";
import SidebarFlast, { Fade } from "./SideBarFlast";
import FeaturedStripFlast from "./FeaturedStripFlast";
import ArticleCardFlast from "./ArticleCardFlast";
import BackToTop from "../BackToTop";
import style from "./new.module.scss";

// ── Tag badge ──────────────────────────────────────────────────────────────
export function TagBadge({ cls, label }: { cls: string; label: string }) {
  const mod = `tag--${cls}` as keyof typeof style;
  return (
    <span className={`${style.tag} ${style[mod] ?? ""}`}>{label}</span>
  );
}

const NewFlast = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered = activeFilter === "all"
    ? ARTICLES
    : ARTICLES.filter(a => a.tag.key === activeFilter);

  return (
    <>
      <div className={style.hero}>
        <div className={style.hero__grid} />
        <div className={style.hero__glow} />
        <div className={style.hero__inner}>
          <div className={style.hero__kicker}>Tin tức &amp; Cập nhật</div>
          <h1>
            Theo dõi <em>hành trình</em> của Flast
          </h1>
          <p className={style.hero__sub}>
            Cập nhật mới nhất về sản phẩm, case study khách hàng, kiến thức công nghệ và định hướng phát triển của Flast Solution.
          </p>
          <div className={style.hero__filters}>
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`${style["hero__filter-btn"]} ${activeFilter === f.key ? style["hero__filter-btn--active"] : ""}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <FeaturedStripFlast items={FEATURED_SIDE} />

      {/* Main body */}
      <div className={style["news-body"]}>
        <div className={style["news-body__layout"]}>
          {/* Article column */}
          <div>
            <div className={style["s-label"]}>Bài viết mới nhất</div>

            {filtered.length > 0 ? (
              <div className={style["art-grid"]}>
                {filtered.map((a) => (
                  <ArticleCardFlast key={a.id} article={a} />
                ))}
              </div>
            ) : (
              <div className={style.empty}>
                Không có bài viết nào trong danh mục này.
              </div>
            )}

            {/* Footer */}
            <Fade>
              <div className={style.pagination}>
                <a href="#" className={style.pagination__btn}><ChevronLeft /></a>
                {[1, 2, 3].map((n) => (
                  <a
                    key={n}
                    href="#"
                    className={`${style.pagination__btn} ${n === 1 ? style["pagination__btn--active"] : ""}`}
                  >
                    {n}
                  </a>
                ))}
                <span className={style.pagination__dots}>···</span>
                <a href="#" className={style.pagination__btn}>8</a>
                <a href="#" className={style.pagination__btn}><ChevronRight /></a>
              </div>
            </Fade>
          </div>

          <SidebarFlast trending={TRENDING} tags={TAGS} products={PRODUCTS} />
        </div>
      </div>
      <BackToTop />
    </>
  );
}
export default NewFlast
