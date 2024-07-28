"use client";
import { VHSDetails } from "@/model/vhs";
import { VHSGridCell } from "@/modules/VHSCell/GridCell";
import { VHSListCell } from "@/modules/VHSCell/ListCell";
import styles from "@/styles/catalogue.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export function VHSCollection(params: { vhs: VHSDetails[] }) {
  const [gridView, setGridView] = useState(true); //grid/list view selection

  useEffect(() => {
    //reading from users local storage grid/list view preference
    let view = localStorage.getItem("gridView");

    if (view === "true") {
      setGridView(true);
    } else {
      setGridView(false);
    }
  }, []);

  return (
    <>
      <div className={styles.catalogueContainer}>
        <div className={styles.catalogueInfoContainer}>
          <p>
            Number of movies:{" "}
            <span className="boldText">{params.vhs.length}</span>
          </p>
          <div className={styles.gridListSwitch}>
            <Image
              className={styles.switchImg}
              src={`${gridView ? "/gridNosel.png" : "/gridSel.png"}`}
              alt="grid"
              width={18}
              height={18}
              onClick={() => {
                setGridView(true);
                localStorage.setItem("gridView", "true"); //setting users preference
              }}
            ></Image>
            <Image
              className={styles.switchImg}
              src={`${gridView ? "/listSel.png" : "/listNosel.png"}`}
              alt="list"
              width={18}
              height={18}
              onClick={() => {
                setGridView(false);
                localStorage.setItem("gridView", "false"); //setting users preference
              }}
            ></Image>
          </div>
        </div>
        {gridView ? (
          <div className={styles.cellsGridContainer}>
            {params.vhs.map((tape) => (
              <VHSGridCell key={tape.id} vhs={tape} />
            ))}
          </div>
        ) : (
          <div className={styles.cellsListContainer}>
            {params.vhs.map((tape) => (
              <VHSListCell key={tape.id} vhs={tape} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
