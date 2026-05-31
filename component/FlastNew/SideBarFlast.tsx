"use client";
import type { ProductItem } from "./data";
import { PRODUCT_ICONS, SidebarIcon } from "@/constants/icons";
import { useFadeIn } from "@/utils/hooks/useFadeIn";
import style from "./new.module.scss";

export function Fade({ children, className = "" }: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`${style.fade} ${className}`}>
      {children}
    </div>
  );
}

const SidebarFlast = ({ trending, tags, products }: {
  trending: string[];
  tags: string[];
  products: ProductItem[];
}) => {
  return (
    <aside className={style.sidebar}>
      {/* Trending */}
      <Fade>
        <div className={style.sidebar__card}>
          <div className={style.sidebar__title}>
            <SidebarIcon d="M3 17l4-8 4 4 4-6 4 10" />
            Đọc nhiều nhất
          </div>
          <div className={style.trending}>
            {trending.map((txt, i) => (
              <a key={i} href="#" className={style.trending__item}>
                <span className={style.trending__num}>{String(i + 1).padStart(2, "0")}</span>
                <span className={style.trending__text}>{txt}</span>
              </a>
            ))}
          </div>
        </div>
      </Fade>

      {/* Newsletter */}
      <Fade>
        <div className={style.sidebar__card}>
          <div className={style.sidebar__title}>
            <SidebarIcon d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" />
            Nhận tin mới
          </div>
          <p className={style.newsletter__desc}>
            Cập nhật tính năng, case study và kiến thức về tự động hóa — thẳng vào inbox của bạn, 2 lần/tháng.
          </p>
          <input
            type="email"
            placeholder="email@congty.vn"
            className={style.newsletter__input}
          />
          <button className={style.newsletter__btn}>Đăng ký nhận bản tin</button>
        </div>
      </Fade>

      {/* Product updates */}
      <Fade>
        <div className={style.sidebar__card}>
          <div className={style.sidebar__title}>
            <SidebarIcon d="M21 2H3v16h5l3 3 3-3h7V2zM12 8v4M12 16h.01" />
            Cập nhật sản phẩm
          </div>
          <div className={style["prod-list"]}>
            {products.map((p) => (
              <a key={p.name} href="#" className={style["prod-item"]}>
                <div className={`${style["prod-item__icon"]} ${style[`prod-item__icon--${p.color}` as keyof typeof style]}`}>
                  {PRODUCT_ICONS[p.color]}
                </div>
                <div>
                  <div className={style["prod-item__name"]}>{p.name}</div>
                  <div className={style["prod-item__count"]}>{p.count}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Fade>

      {/* Tags */}
      <Fade>
        <div className={style.sidebar__card}>
          <div className={style.sidebar__title}>
            <SidebarIcon d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01" />
            Chủ đề
          </div>
          <div className={style["tags-cloud"]}>
            {tags.map((t) => (
              <a key={t} href="#" className={style["tags-cloud__item"]}>{t}</a>
            ))}
          </div>
        </div>
      </Fade>
    </aside>
  );
}
export default SidebarFlast
