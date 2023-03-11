"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.scss";

export const Nav: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  return (
    <Dialog.Root open={toggle} onOpenChange={setToggle}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/assets/logo.svg"
              alt="Steven McHenry's personal logo of the letters S and M"
              width={75}
              height={33}
              priority
            />
          </Link>
          <div className={styles["desktop-links"]}>
            <Link
              href="/page"
              className={
                pathname.includes("page") ? styles["current-link"] : ""
              }
            >
              page
            </Link>
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
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <p>Hi</p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
