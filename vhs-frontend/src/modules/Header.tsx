import Image from "next/image";
import styles from "../styles/header.module.css";
import { SearchBar } from "@/components/SearchBar";
import { headerNavigation } from "@/model/headerNavigation";
import Link from "next/link";

export function Header(params: { selectedNav: string }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.searchLogo}>
        <Link href={"/catalogue"}>
          <Image
            id={styles.homeLogo}
            src={"/title-logo.png"}
            alt="title logo duck"
            width={350}
            height={210}
          ></Image>
        </Link>
        <SearchBar isSmall={true} />
      </div>
      <div className={styles.navDiv}>
        {headerNavigation.map((nav) => (
          <Link href={`/${nav.toLowerCase()}`} key={nav}>
            <p
              className={`${
                params.selectedNav === nav ? styles.selectedNav : ""
              }`}
            >
              {nav}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
