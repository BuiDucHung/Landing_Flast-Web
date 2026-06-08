"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { GitHubIcon, LogoIcon } from "@/constants/icons";
import style from "./FlastNew/new.module.scss";

const HeaderFlast = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_LINKS = [
    ["/#products", "Sản phẩm"],
    ["/#ai-agent", "AI Agent"],
    ["/#casestudy", "Case Study"],
    ["/#shield", "Bảo mật"],
    ["/#opensource", "Open Source"],
    ["/tin-tuc", "Tin tức"],
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
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
              <Link
                href={href}
                className={href === "/tin-tuc" ? style["nav__links--active"] : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={style.nav__right}>
          
          <a href="https://github.com/Flast-Solution"
            target="_blank"
            rel="noreferrer"
            className={`${style.btn} ${style["btn--ghost"]} ${style["btn--hide-mobile"]}`}
          >
            <GitHubIcon /> GitHub
          </a>
          
          <a href="#"
            className={`${style.btn} ${style["btn--primary"]} ${style["btn--hide-mobile"]}`}
          >
            Dùng thử miễn phí
          </a>

          <button
            className={`${style.hamburger} ${menuOpen ? style["hamburger--open"] : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className={style.nav__overlay} onClick={close} />
      )}

      <div className={`${style.nav__drawer} ${menuOpen ? style["nav__drawer--open"] : ""}`}>
        <div className={style.nav__drawer_header}>
          <span className={style["nav__logo-name"]}>
            Flast <span>Solution</span>
          </span>
          <button onClick={close} className={style.nav__drawer_close} aria-label="Close">✕</button>
        </div>

        <ul className={style.nav__drawer_links}>
          {NAV_LINKS.map(([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                onClick={close}
                className={href === "/tin-tuc" ? style["nav__links--active"] : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={style.nav__drawer_footer}>
          <a href="https://github.com/Flast-Solution"
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
      </div>
    </>
  );
};

export default HeaderFlast;