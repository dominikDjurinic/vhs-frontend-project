"use client";
import { VHSDetails } from "@/model/vhs";
import Image from "next/image";
import { useState } from "react";

export function FavouriteBtn(params: { vhs: VHSDetails }) {
  const favs = localStorage.getItem("favourites");
  let favArray: VHSDetails[] = [];
  let selectInit: Boolean;

  //set initial value of favourite state
  if (favs !== null) {
    favArray = JSON.parse(favs);
    if (favArray.findIndex(({ id }) => id === params.vhs.id) !== -1) {
      selectInit = true;
    } else {
      selectInit = false;
    }
  } else {
    selectInit = false;
  }

  const [selected, setSelected] = useState<Boolean>(selectInit);

  const changeFavourites = (select: Boolean) => {
    //add or remove favourite from localStorage
    const favs = localStorage.getItem("favourites");
    let newFav: VHSDetails[] = [];

    if (favs !== null) {
      const prevFav: VHSDetails[] = JSON.parse(favs);
      newFav = prevFav;
    }
    if (select === false) {
      //deselected
      const ind = newFav.findIndex(({ id }) => id === params.vhs.id);
      newFav.splice(ind, 1);
    } else {
      //selected
      newFav.push(params.vhs);
    }

    localStorage.setItem("favourites", JSON.stringify(newFav));
  };

  return (
    <>
      <div
        className="favBtn"
        onClick={() => {
          setSelected(!selected);
          changeFavourites(!selected);
        }}
      >
        <Image
          className="favLogo"
          src={`${selected ? "/favSel.png" : "/favNonSel.png"}`}
          alt="fav logo"
          width={20}
          height={35}
        ></Image>
      </div>
    </>
  );
}
