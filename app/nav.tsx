import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div>
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
      </div>
      <div></div>
    </nav>
  );
};
