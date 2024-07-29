"use client";
import { VHSDetails } from "@/model/vhs";
import { Footer } from "@/modules/Footer";
import { Header } from "@/modules/Header";
import { VHSCollection } from "@/modules/VHSCollection";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/catalogue.module.css";
import { useEffect, useState } from "react";
import { headers } from "next/headers";
import { getAllVhs } from "@/api/getAllVhs";

export default function Catalogue() {
  const [vhs, setVhs] = useState<VHSDetails[] | undefined>();

  useEffect(() => {
    /**GET all VHS movies from database**/
    getAllVhs().then((data) => {
      setVhs(data);
    });
  }, []);

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
