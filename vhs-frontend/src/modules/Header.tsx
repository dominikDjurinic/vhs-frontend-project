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
          <Link href={`/${nav.name.toLowerCase()}`} key={nav.name}>
            <div
              className={`${styles.navPlusLogo} ${
                params.selectedNav === nav.name ? styles.selectedNavLine : ""
              }`}
            >
              {nav.image !== "" ? (
                <Image
                  src={nav.image}
                  width={nav.name === "Cart" ? 20 : 24}
                  height={nav.name === "Cart" ? 20 : 24}
                  alt="nav logo"
                ></Image>
              ) : null}
              <p
                className={`${
                  params.selectedNav === nav.name ? styles.selectedNav : ""
                }`}
              >
                {nav.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
