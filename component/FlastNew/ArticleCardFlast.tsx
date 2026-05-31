import { ArrowRight, ARTICLE_ICONS } from "@/constants/icons";
import style from "./new.module.scss";
import { Article } from "./data";
import { Fade } from "./SideBarFlast";
import { TagBadge } from ".";

const ArticleCardFlast = ({ article }: { article: Article }) => {
  const icon = ARTICLE_ICONS[article.tag.key]?.(article.iconStroke);
  return (
    <Fade>
      <a href="#" className={style.card}>
        <div className={style.card__img} style={{ background: article.gradient }}>
          {icon}
        </div>
        <div className={style.card__body}>
          <TagBadge cls={article.tag.cls} label={article.tag.label} />
          <div className={style.card__title}>{article.title}</div>
          <div className={style.card__desc}>{article.desc}</div>
          <div className={style.card__footer}>
            <span className={style.card__date}>{article.date}</span>
            <span className={style.card__read}>
              Đọc thêm
              <span className={style["card__read-arrow"]}><ArrowRight /></span>
            </span>
          </div>
        </div>
      </a>
    </Fade>
  );
}
export default ArticleCardFlast
