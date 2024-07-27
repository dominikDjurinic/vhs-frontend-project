import { VHSDetails } from "@/model/vhs";
import { Footer } from "@/modules/Footer";
import { Header } from "@/modules/Header";
import { VHSCollection } from "@/modules/VHSCollection";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/catalogue.module.css";

export default async function Catalogue() {
  //get all VHS movies from database
  const response = await fetch(`http://localhost:3000/api/vhs`, {
    method: "GET",
  });

  const details: VHSDetails[] = await response.json();

  const vhs: VHSDetails[] = details;

  return (
    <>
      <Header selectedNav="Catalogue" />
      <Link href={"/newmovie"}>
        <div className={styles.addNewMovieBtn}>
          <div className={styles.addNewMovieBtnIcon}>
            <Image
              className={styles.switchImg}
              src={"/plus.png"}
              alt="plus icon"
              width={18}
              height={18}
            ></Image>
          </div>
          <p className={styles.addMovieMsg}>Add new movie</p>
        </div>
      </Link>
      <VHSCollection vhs={vhs} />
      <Footer />
    </>
  );
}
