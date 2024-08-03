"use client";
import Image from "next/image";
import styles from "../styles/header.module.css";
import { SearchBar } from "@/components/searchBar";
import { headerNavigation } from "@/model/headerNavigation";
import Link from "next/link";
import { useWindowSizeContext } from "@/context/WindowSizeContext";
import { useEffect, useState } from "react";
import { MenuPopUp } from "@/components/MenuPopUp";
import { SearchPopUp } from "@/components/SearchPopUp";

export function Header(params: { selectedNav: string }) {
  const { mobileWindowSize } = useWindowSizeContext();
  const [searchClicked, setSearchClicked] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.searchLogo}>
          <Link href={"/catalogue"} scroll={false}>
            <Image
              id={styles.homeLogo}
              src={"/title-logo.png"}
              alt="title logo duck"
              width={350}
              height={210}
            ></Image>
          </Link>
          {mobileWindowSize ? null : <SearchBar isSmall={true} />}
        </div>
        <div className={styles.navDiv}>
          {mobileWindowSize ? (
            <>
              <Image
                src={`${
                  searchClicked ? "/searchLight.png" : "/fi-br-search.png"
                }`}
                alt="search logo"
                width={18}
                height={18}
                onClick={() => {
                  setSearchClicked(!searchClicked);
                  setMenuClicked(false);
                }}
              ></Image>
              <Image
                src={`${menuClicked ? "/menuLight.png" : "/menu.png"}`}
                alt="search logo"
                width={18}
                height={18}
                onClick={() => {
                  setMenuClicked(!menuClicked);
                  setSearchClicked(false);
                }}
              ></Image>
            </>
          ) : (
            <>
              {headerNavigation.map((nav) => (
                <Link
                  href={`/${nav.name.toLowerCase()}`}
                  key={nav.name}
                  scroll={false}
                >
                  <div
                    className={`${styles.navPlusLogo} ${
                      params.selectedNav === nav.name
                        ? styles.selectedNavLine
                        : ""
                    }`}
                  >
                    {nav.image !== "" ? (
                      <Image
                        src={nav.image}
                        width={nav.name === "Cart" ? 20 : 24}
                        height={nav.name === "Cart" ? 20 : 24}
                        alt="nav logo"
                      ></Image>
                    ) : null}
                    <p
                      className={`${
                        params.selectedNav === nav.name
                          ? styles.selectedNav
                          : ""
                      }`}
                    >
                      {nav.name}
                    </p>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
      {mobileWindowSize ? (
        <>
          <MenuPopUp
            menuClicked={menuClicked}
            selectedNav={params.selectedNav}
            setMenuClicked={(click) => setMenuClicked(click)}
          />
          <SearchPopUp searchClicked={searchClicked} />
        </>
      ) : null}
    </>
  );
}
