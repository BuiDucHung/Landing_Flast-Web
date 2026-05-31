"use client";
import Link from "next/link";
import { GitHubIcon, LogoIcon } from "@/constants/icons";
import style from "./FlastNew/new.module.scss";

const HeaderFlast = () => {
  const NAV_LINKS = [
    ["/#products", "Sản phẩm"],
    ["/#ai-agent", "AI Agent"],
    ["/#casestudy", "Case Study"],
    ["/#shield", "Bảo mật"],
    ["/#opensource", "Open Source"],
  ];

  return (
    <nav className={style.nav}>
      <Link href="/" className={style.nav__logo}>
        <div className={style["nav__logo-mark"]}><LogoIcon /></div>
        <span className={style["nav__logo-name"]}>
          Flast <span>Solution</span>
        </span>
      </Link>

      <ul className={style.nav__links}>
        {NAV_LINKS.map(([href, label]) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
        <li>
          <Link href="/tin-tuc" className={style["nav__links--active"]}>Tin tức</Link>
        </li>
      </ul>

      <div className={style.nav__right}>
        <a
          href="https://github.com/Flast-Solution"
          target="_blank"
          rel="noreferrer"
          className={`${style.btn} ${style["btn--ghost"]}`}
        >
          <GitHubIcon /> GitHub
        </a>
        <a href="#" className={`${style.btn} ${style["btn--primary"]}`}>
          Dùng thử miễn phí
        </a>
      </div>
    </nav>
  );
}
export default HeaderFlast