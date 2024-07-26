"use client";

import Image from "next/image";
import { useState } from "react";

export function FavouriteBtn() {
  const [selected, setSelected] = useState<Boolean>(false);

  return (
    <>
      <div className="favBtn" onClick={() => setSelected(!selected)}>
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
