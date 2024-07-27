import { Footer } from "@/modules/Footer";
import { Header } from "@/modules/Header";
import { VHSDetailsCell } from "@/modules/VHSCell/VHSDetailsCell";
import styles from "@/styles/details.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Details({ params }: { params: { movieId: number } }) {
  return (
    <div className="wrapper">
      <Header selectedNav="" />
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
      <div className={styles.detailsMainDiv}>
        <VHSDetailsCell movieId={params.movieId} />
      </div>
      <Footer />
    </div>
  );
}
