"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.scss";

export const Nav: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/assets/logo.svg"
            alt="Steven McHenry's personal logo of the letters S and M"
            width={78}
            height={40}
            priority
          />
        </Link>
        <div className={styles["desktop-links"]}>
          <Link href="/page">page</Link>
        </div>
      </div>
      <button
        className={styles["mobile-toggle"]}
        onClick={() => setToggle((prev) => !prev)}
      >
        <div
          className={`${styles["toggle-wrapper"]} ${
            toggle ? styles["toggle-active"] : ""
          }`}
        />
      </button>
    </nav>
  );
};
