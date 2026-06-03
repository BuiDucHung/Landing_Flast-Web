import { ArrowRight, ARTICLE_ICONS } from "@/constants/icons";
import style from "./new.module.scss";
import { Fade } from "./SideBarFlast";
import { TagBadge } from ".";
import { Article } from "@/lib/api/newList";
import Image from "next/image";
import Link from "next/link";

// const ArticleCardFlast = ({ article }: { article: Article }) => {
//   const icon = ARTICLE_ICONS[article.tag.key]?.(article.iconStroke);
//   return (
//     <Fade>
//       <a href="#" className={style.card}>
//         <div className={style.card__img} style={{ background: article.gradient }}>
//           {icon}
//         </div>
//         <div className={style.card__body}>
//           <TagBadge cls={article.tag.cls} label={article.tag.label} />
//           <div className={style.card__title}>{article.title}</div>
//           <div className={style.card__desc}>{article.desc}</div>
//           <div className={style.card__footer}>
//             <span className={style.card__date}>{article.date}</span>
//             <span className={style.card__read}>
//               Đọc thêm
//               <span className={style["card__read-arrow"]}><ArrowRight /></span>
//             </span>
//           </div>
//         </div>
//       </a>
//     </Fade>
//   );
// }
// export default ArticleCardFlast

// const CATEGORY_MAP: Record<number, string> = {
//   1: "Tài chính",
//   2: "Đầu tư",
//   3: "Bảo hiểm",
//   4: "Tin tức",
// };

// const getCategoryLabel = (id: number): string => {
//   return CATEGORY_MAP[id] ?? "Khác";
// };


// const ArticleCardFlast = ({ article }: { article: Article }) => {
//   return (
//     <Fade>
//       <a href={article.siteLink ?? "#"} className={style.card}>
        
//         {/* Image */}
//         <div className={style.card__img}>
//           {article.image 
//             ? <img src={article.image} alt={article.title} />
//             : <div className={style.card__img__placeholder} />
//           }
//         </div>

//         <div className={style.card__body}>

//           {/* Tag → dùng pageCategoryId */}
//           <TagBadge cls={`tag--${article.pageCategoryId}`} label={getCategoryLabel(article.pageCategoryId)} />

//           {/* Title */}
//           <div className={style.card__title}>{article.title}</div>

//           {/* Description */}
//           <div className={style.card__desc}>{article.desc}</div>

//           <div className={style.card__footer}>

//             {/* Date → format từ createdAt (unix timestamp) */}
//             <span className={style.card__date}>
//               {new Date(article.createdAt * 1000).toLocaleDateString("vi-VN")}
//             </span>

//             <span className={style.card__read}>
//               Đọc thêm
//               <span className={style["card__read-arrow"]}><ArrowRight /></span>
//             </span>

//           </div>
//         </div>
//       </a>
//     </Fade>
//   );
// };
// export default ArticleCardFlast

// Map pageCategoryId → icon key
const CATEGORY_ICON_KEY: Record<number, string> = {
  1: "finance",
  2: "invest", 
  3: "insurance",
  4: "news",
};

// Map pageCategoryId → màu stroke
const CATEGORY_STROKE: Record<number, string> = {
  1: "#3b82f6",
  2: "#10b981",
  3: "#f59e0b",
  4: "#8b5cf6",
};

// Map pageCategoryId → gradient
const CATEGORY_GRADIENT: Record<number, string> = {
  1: "linear-gradient(135deg, #e0f2fe, #bfdbfe)",
  2: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
  3: "linear-gradient(135deg, #fef3c7, #fde68a)",
  4: "linear-gradient(135deg, #ede9fe, #ddd6fe)",
};

const CATEGORY_MAP: Record<number, string> = {
  1: "Tài chính",
  2: "Đầu tư",
  3: "Bảo hiểm",
  4: "Tin tức",
};

const getCategoryLabel = (id: number): string => {
  return CATEGORY_MAP[id] ?? "Khác";
};


const ArticleCardFlast = ({ article }: { article: Article }) => {
  const iconKey = CATEGORY_ICON_KEY[article.pageCategoryId];
  const stroke  = CATEGORY_STROKE[article.pageCategoryId]   ?? "#3b82f6";
  const gradient = CATEGORY_GRADIENT[article.pageCategoryId] ?? "linear-gradient(135deg, #f1f5f9, #e2e8f0)";

  // Dùng đúng như code cũ
  const icon = ARTICLE_ICONS[iconKey]?.(stroke);

  return (
    <Fade>
      <div className={style.card}>
      <Link href={{
        pathname: article?.slug ?? "",
        query: { id: article?.id }
      }}>
      {/* Icon với gradient như thiết kế gốc */}
        {article?.image ? <Image width={'100'} height={'100'} src={article.image} alt={article.title} /> : (
          <div className={style.card__img} style={{ background: gradient }}>
            {icon}
          </div>
        )}

        <div className={style.card__body}>
          <TagBadge cls={`tag--${article.pageCategoryId}`} label={getCategoryLabel(article.pageCategoryId)} />
          <div className={style.card__title}>{article.title}</div>
          <div className={style.card__desc}>{article.desc}</div>
          <div className={style.card__footer}>
            <span className={style.card__date}>
              {new Date(article.createdAt).toLocaleDateString("vi-VN")}
            </span>
            <span className={style.card__read}>
              Đọc thêm
              <span className={style["card__read-arrow"]}><ArrowRight /></span>
            </span>
          </div>
        </div>
      </Link>
      </div>
    </Fade>
  );
};
export default ArticleCardFlast


