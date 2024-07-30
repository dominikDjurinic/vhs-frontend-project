"use client";
import { getAllVhs } from "@/api/getAllVhs";
import { VHSDetails } from "@/model/vhs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SearchItem } from "./SearchItem";

export function SearchBar(props: { isSmall: boolean }) {
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
  }, [searchString]);

  return (
    <div className="searchDiv">
      <div className={`${props.isSmall ? "searchBarSmall" : "searchBar"}`}>
        <input
          placeholder="Search by movie title ..."
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        ></input>
        <Image
          src={"/fi-br-search.png"}
          alt="right icon"
          width={20}
          height={20}
        />
      </div>
      {searchString !== "" ? (
        <div
          className={`${
            props.isSmall ? "searchResultsDiv" : "searchResultDivHome"
          }`}
        >
          {searchedVhs?.length === 0 ? (
            <p>No result for &apos;{searchString}&apos;</p>
          ) : null}
          {searchedVhs?.map(({ title, genre, releasedAt, id }) => (
            <SearchItem
              key={id}
              id={id}
              title={title}
              genre={genre}
              year={releasedAt}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
