import Link from "next/link";
import Image from "next/image";
import styles from "../styles/footer.module.css";

export function Footer() {
  return (
    <div className={styles.footerDiv}>
      <p>Created: Dominik Đurinić</p>
      <Link href={"/catalogue"}>
        <Image
          id={styles.homeLogo}
          src={"/title-logo.png"}
          alt="title logo duck"
          width={350}
          height={210}
        ></Image>
      </Link>
      <p>Copyright © 2024</p>
    </div>
  );
}
