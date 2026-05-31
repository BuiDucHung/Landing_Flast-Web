"use client";
import Link from "next/link";
import { LogoIcon } from "@/constants/icons";
import style from "./FlastNew/new.module.scss";

const FlastFooter = ({ cols }: {
  cols: { title: string; links: string[][] }[];
}) => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__wrap}>
        <div className={style.footer__top}>
          <div className={style.footer__brand}>
            <Link href="/" className={style.nav__logo}>
              <div className={style["nav__logo-mark"]}><LogoIcon /></div>
              <span className={style["nav__logo-name"]} style={{ color: "#fff" }}>
                Flast <span>Solution</span>
              </span>
            </Link>
            <p>
              Chúng tôi xây dựng công nghệ giúp doanh nghiệp Việt vận hành thông minh hơn — tự động hóa quy trình, số hóa nghiệp vụ và bảo vệ hạ tầng — với chi phí thực sự phù hợp cho SMB.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title} className={style.footer__col}>
              <h5>{col.title}</h5>
              {col.links.map(([href, label]) => (
                <a key={label} href={href}>{label}</a>
              ))}
            </div>
          ))}
        </div>
        <div className={style.footer__bottom}>
          <span>© 2024 Công ty Cổ Phần Flast Solution. All rights reserved.</span>
          <span>Hà Nội, Việt Nam · flast.vn · contact@flast.vn</span>
        </div>
      </div>
    </footer>
  );
}
export default FlastFooter