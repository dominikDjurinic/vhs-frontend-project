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
import { useWindowSizeContext } from "@/context/WindowSizeContext";

export default function Catalogue() {
  const [vhs, setVhs] = useState<VHSDetails[] | undefined>();

  useEffect(() => {
    /**GET all VHS movies from database**/
    getAllVhs().then((data) => {
      setVhs(data);
    });
  }, []);

  const { mobileWindowSize } = useWindowSizeContext();

  return (
    <>
      <Header selectedNav="Catalogue" />
      <div className="wrapper">
        <Link href={"/newmovie"} className={styles.btnAddLink}>
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
          </div>
        </Link>
        {vhs === undefined ? (
          <div className="loaderDiv">
            <Image
              className="loader"
              src={"/loader.png"}
              alt="loader"
              width={30}
              height={30}
            ></Image>
            <p>Loading...</p>
          </div>
        ) : null}
        <VHSCollection vhs={vhs} />
      </div>
      <Footer />
    </>
  );
}
