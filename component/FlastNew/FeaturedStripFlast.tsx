import { TagBadge } from ".";
import { FEATURED_MAIN, FeaturedSideItem } from "./data";
import style from "./new.module.scss";
import { Fade } from "./SideBarFlast";


// ── Meta row ───────────────────────────────────────────────────────────────
export function MetaRow({ date, read, author}: {
  date: string;
  read: string;
  author?: { initials: string; name: string };
}) {
  return (
    <div className={style.meta}>
      {author && (
        <>
          <div className={style.meta__author}>
            <div className={style.meta__avatar}>{author.initials}</div>
            <span>{author.name}</span>
          </div>
          <span className={style.meta__dot} />
        </>
      )}
      <span>{date}</span>
      <span className={style.meta__dot} />
      <span>{read}</span>
    </div>
  );
}

// ── Featured strip ─────────────────────────────────────────────────────────
const FeaturedStripFlast = ({ items }: { items: FeaturedSideItem[] }) => {
  const f = FEATURED_MAIN;
  return (
    <div className={style.featured}>
      <div className={style.featured__inner}>
        {/* Main */}
        <Fade className={style.featured__main}>
          <TagBadge cls={f.tag.cls} label={f.tag.label} />
          <h2>
            <a href="#">{f.title}</a>
          </h2>
          <p className={style["featured__main-desc"]}>{f.desc}</p>
          <MetaRow date={f.date} read={f.read} author={f.author} />
        </Fade>

        {/* Side */}
        <div className={style.featured__side}>
          {items.map((item, i) => (
            <Fade key={i}>
              <a href="#" className={style["featured__side-item"]}>
                <TagBadge cls={item.tag.cls} label={item.tag.label} />
                <div className={style["featured__side-title"]}>{item.title}</div>
                <MetaRow date={item.date} read={item.read} />
              </a>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
export default FeaturedStripFlast
