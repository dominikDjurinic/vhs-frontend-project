import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/notfinished.module.css";

export function NotFinished(params: { name: string }) {
  return (
    <div className={styles.notFinishedContainer}>
      <p>
        <span className={styles.siteName}>{params.name}</span> coming soon!
      </p>
      <Image
        src={"/movieTape.png"}
        alt="movie icon"
        width={130}
        height={100}
      ></Image>
      <Link href={"/catalogue"} className={styles.backNavBtn}>
        <div className={styles.navBtn}>
          <Image
            src={"/fi-br-angle-left.png"}
            alt="left icon"
            width={20}
            height={20}
          ></Image>
          <p className="boldText">Back to catalogue</p>
        </div>
      </Link>
    </div>
  );
}
