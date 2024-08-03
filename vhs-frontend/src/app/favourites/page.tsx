"use client";
import { VHSDetails } from "@/model/vhs";
import { Footer } from "@/modules/Footer";
import { Header } from "@/modules/Header";
import Image from "next/image";
import styles from "@/styles/favourite.module.css";
import { useEffect, useState } from "react";
import { VHSListCell } from "@/modules/VHSCell/ListCell";
import { useWindowSizeContext } from "@/context/WindowSizeContext";
import { VHSGridCell } from "@/modules/VHSCell/GridCell";

export default function Catalogue() {
  const [favVhs, setFavVhs] = useState<VHSDetails[] | undefined>();

  useEffect(() => {
    const favourites = localStorage.getItem("favourites");
    if (favourites !== null) {
      setFavVhs(JSON.parse(favourites));
    }
  }, []);

  const { mobileWindowSize } = useWindowSizeContext();

  return (
    <>
      <Header selectedNav="Favourites" />
      <div className="wrapper">
        <div className={styles.favContainer}>
          <div className={styles.titleContainer}>
            <p className={styles.favTitle}>
              Favourites: <span className="boldText">{favVhs?.length}</span>
            </p>
          </div>
          {favVhs === undefined || favVhs.length === 0 ? (
            <p>No favourites.</p>
          ) : mobileWindowSize ? (
            <div className={styles.cellsGridContainer}>
              {favVhs.map((tape) => (
                <VHSGridCell key={tape.id} vhs={tape} />
              ))}
            </div>
          ) : (
            <div className={styles.cellsListContainer}>
              {favVhs.map((tape) => (
                <VHSListCell key={tape.id} vhs={tape} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
