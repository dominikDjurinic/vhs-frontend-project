"use client";
import styles from "../styles/header.module.css";
import { VHSDetails } from "@/model/vhs";
import { useEffect, useState } from "react";
import { getAllVhs } from "@/api/getAllVhs";
import { SearchItem } from "./SearchItem";

export function SearchPopUp(params: { searchClicked: boolean }) {
  const [vhs, setVhs] = useState<VHSDetails[] | undefined>();
  const [searchedVhs, setSearchedVhs] = useState<VHSDetails[]>([]);
  const [searchString, setSearchString] = useState<string>("");

  useEffect(() => {
    /**GET all VHS movies from database**/
    getAllVhs().then((data) => {
      setVhs(data);
    });
  }, []);

  useEffect(() => {
    setSearchedVhs([]);
    vhs?.map((data) => {
      if (data.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
        setSearchedVhs((searchedVhs) => [...searchedVhs, data]);
      }
    });
  }, [searchString, vhs]);

  return (
    <div
      className={`${styles.popUpMenu} ${
        params.searchClicked ? "visibleDiv" : "hiddenDiv"
      }`}
    >
      <div className={`${styles.navColumnDiv} ${styles.selectedNavDiv}`}>
        <div className={styles.searchBar}>
          <input
            placeholder="Search by movie title ..."
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
          ></input>
        </div>
      </div>
      {searchString !== "" ? (
        <>
          {searchedVhs?.length === 0 ? (
            <div className={styles.searchColumnDiv}>
              <p>No result for &apos;{searchString}&apos;</p>
            </div>
          ) : null}
          {searchedVhs?.map(({ title, genre, releasedAt, id }) => (
            <div className={styles.searchColumnDiv} key={id}>
              <SearchItem
                id={id}
                title={title}
                genre={genre}
                year={releasedAt}
              />
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}
