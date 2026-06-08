// "use client";
// import { useState } from "react";
// import { ARTICLES, FEATURED_SIDE, FILTERS, PRODUCTS, TAGS, TRENDING, type FilterKey } from "./data";
// import { ChevronLeft, ChevronRight } from "@/constants/icons";
// import SidebarFlast, { Fade } from "./SideBarFlast";
// import FeaturedStripFlast from "./FeaturedStripFlast";
// import ArticleCardFlast from "./ArticleCardFlast";
// import BackToTop from "../BackToTop";
// import style from "./new.module.scss";
// import { useCategory } from "@/context/NewCateContext";

// // ── Tag badge ──────────────────────────────────────────────────────────────
// export function TagBadge({ cls, label }: { cls: string; label: string }) {
//   const mod = `tag--${cls}` as keyof typeof style;
//   return (
//     <span className={`${style.tag} ${style[mod] ?? ""}`}>{label}</span>
//   );
// }

// const NewFlast = () => {
//   const newCategories = useCategory();
//   const [activeFilter, setActiveFilter] = useState<{ key: string; id: number | null }>({ key: "all", id: null });
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [loading, setLoading] = useState(false);
//   const filtered = activeFilter === "all"
//     ? ARTICLES
//     : ARTICLES.filter(a => a.tag.key === activeFilter);

//   const filters = [
//     { key: "all", label: "Tất cả", id: null },
//     ...newCategories.map((cat) => ({
//       key: cat.slug,
//       label: cat.name,
//       id: cat.id,
//     }))
//   ]

//   return (
//     <>
//       <div className={style.hero}>
//         <div className={style.hero__grid} />
//         <div className={style.hero__glow} />
//         <div className={style.hero__inner}>
//           <div className={style.hero__kicker}>Tin tức &amp; Cập nhật</div>
//           <h1>
//             Theo dõi <em>hành trình</em> của Flast
//           </h1>
//           <p className={style.hero__sub}>
//             Cập nhật mới nhất về sản phẩm, case study khách hàng, kiến thức công nghệ và định hướng phát triển của Flast Solution.
//           </p>
//           <div className={style.hero__filters}>
//             {filters.map((f) => (
//               <button
//                 key={f.id}
//                 onClick={() => setActiveFilter(f.key)}
//                 className={`${style["hero__filter-btn"]} ${activeFilter === f.key ? style["hero__filter-btn--active"] : ""}`}
//               >
//                 {f.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <FeaturedStripFlast items={FEATURED_SIDE} />

//       {/* Main body */}
//       <div className={style["news-body"]}>
//         <div className={style["news-body__layout"]}>
//           {/* Article column */}
//           <div>
//             <div className={style["s-label"]}>Bài viết mới nhất</div>

//             {filtered.length > 0 ? (
//               <div className={style["art-grid"]}>
//                 {filtered.map((a) => (
//                   <ArticleCardFlast key={a.id} article={a} />
//                 ))}
//               </div>
//             ) : (
//               <div className={style.empty}>
//                 Không có bài viết nào trong danh mục này.
//               </div>
//             )}

//             {/* Footer */}
//             <Fade>
//               <div className={style.pagination}>
//                 <a href="#" className={style.pagination__btn}><ChevronLeft /></a>
//                 {[1, 2, 3].map((n) => (
//                   <a
//                     key={n}
//                     href="#"
//                     className={`${style.pagination__btn} ${n === 1 ? style["pagination__btn--active"] : ""}`}
//                   >
//                     {n}
//                   </a>
//                 ))}
//                 <span className={style.pagination__dots}>···</span>
//                 <a href="#" className={style.pagination__btn}>8</a>
//                 <a href="#" className={style.pagination__btn}><ChevronRight /></a>
//               </div>
//             </Fade>
//           </div>

//           <SidebarFlast trending={TRENDING} tags={TAGS} products={PRODUCTS} />
//         </div>
//       </div>
//       <BackToTop />
//     </>
//   );
// }
// export default NewFlast
"use client";
import { useState } from "react";
import { FEATURED_SIDE, PRODUCTS, TAGS, TRENDING } from "./data";
import { ChevronLeft, ChevronRight } from "@/constants/icons";
import SidebarFlast, { Fade } from "./SideBarFlast";
import FeaturedStripFlast from "./FeaturedStripFlast";
import ArticleCardFlast from "./ArticleCardFlast";
import BackToTop from "../BackToTop";
import { useCateOrNewArticel } from "@/context/NewCateContext";
import style from "./new.module.scss";
import Link from "next/link";

interface PageProps {
  currentPage: number;
  currentCate: number;
  pageInfo: {
    total: number;
    pageSize: number;
  };
}

export function TagBadge({ cls, label }: { cls: string; label: string }) {
  const mod = `tag--${cls}` as keyof typeof style;
  return (
    <span className={`${style.tag} ${style[mod] ?? ""}`}>{label}</span>
  );
}

const NewFlast = ({
  currentPage,
  currentCate,
  pageInfo,
}: PageProps) => {
  const { categories, articles } = useCateOrNewArticel();
  const [loading, setLoading] = useState(false);

  const filters = [
    // { key: "all", label: "Tất cả", id: 19 },
    ...categories.map((cat) => ({
      key: cat.slug,
      label: cat.name,
      id: cat.id,
    })),
  ];

  const totalPages = Math.ceil(pageInfo.total / pageInfo.pageSize);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
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
            {filters.map((f) => (
              <Link
                key={f.id}
                href={`/tin-tuc?cate=${f.id}&page=1`}
                className={`${style["hero__filter-btn"]} ${
                  currentCate === f.id
                    ? style["hero__filter-btn--active"]
                    : ""
                }`}
              >
                {f.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <FeaturedStripFlast items={FEATURED_SIDE} articles={articles}/>

      <div className={style["news-body"]}>
        <div className={style["news-body__layout"]}>
          <div>
            <div className={style["s-label"]}>Bài viết mới nhất</div>

            {loading ? (
              <div className={style.empty}>Đang tải...</div>
            ) : articles.length > 0 ? (
              <div className={style["art-grid"]}>
                {articles.map((a) => (
                  <ArticleCardFlast key={a.id} article={a} />
                ))}
              </div>
            ) : (
              <div className={style.empty}>
                Không có bài viết nào trong danh mục này.
              </div>
            )}
            <Fade>
              <div className={style.pagination}>
                {currentPage > 1 && (
                  <Link
                    href={`/tin-tuc?cate=${currentCate}&page=${currentPage - 1}`}
                    className={style.pagination__btn}
                  >
                    <ChevronLeft />
                  </Link>
                )}
                {pages.map((n) => (
                  <Link
                    key={n}
                    href={`/tin-tuc?cate=${currentCate}&page=${n}`}
                    className={`${style.pagination__btn} ${
                      currentPage === n
                        ? style["pagination__btn--active"]
                        : ""
                    }`}
                  >
                    {n}
                  </Link>
                ))}

                {currentPage < totalPages && (
                  <Link
                    href={`/tin-tuc?cate=${currentCate}&page=${currentPage + 1}`}
                    className={style.pagination__btn}
                  >
                    <ChevronRight />
                  </Link>
                )}
              </div>
            </Fade>
          </div>

          <SidebarFlast trending={TRENDING} tags={TAGS} products={PRODUCTS} />
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default NewFlast;