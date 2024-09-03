import Image from "next/image";
import styles from "../styles/header.module.css";
import { headerNavigation } from "@/model/headerNavigation";
import Link from "next/link";

export function MenuPopUp(params: {
  menuClicked: boolean;
  setMenuClicked: (click: boolean) => void;
  selectedNav: string;
}) {
  return (
    <div
      className={`${styles.popUpMenu} ${
        params.menuClicked ? "visibleDiv" : "hiddenDiv"
      }`}
    >
      {headerNavigation.map((nav) => (
        <Link
          href={`/${nav.name.toLowerCase()}`}
          key={nav.name}
          onClick={() => params.setMenuClicked(false)}
        >
          <div
            className={`${
              params.selectedNav === nav.name ? styles.selectedNavDiv : ""
            } ${styles.navColumnDiv}`}
          >
            <div className={styles.navPlusLogo}>
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
          </div>
        </Link>
      ))}
    </div>
  );
}
