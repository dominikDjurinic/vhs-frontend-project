"use client";
import { AddToCart } from "@/components/AddToCart";
import { FavouriteBtn } from "@/components/FavouriteBtn";
import { VHSDetails } from "@/model/vhs";
import Image from "next/image";
import styles from "@/styles/details.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getVhsById } from "@/api/getVhsById";
import { useWindowSizeContext } from "@/context/WindowSizeContext";

export function VHSDetailsCell(params: { movieId: number }) {
  const [vhs, setVhs] = useState<VHSDetails | undefined>();

  useEffect(() => {
    /**GET VHS movie by id from database**/
    getVhsById(params.movieId).then((data) => {
      setVhs(data);
    });
  }, []);

  const { mobileWindowSize } = useWindowSizeContext();

  return (
    <>
      {vhs !== undefined ? (
        <div className={styles.detailsContainer}>
          <FavouriteBtn vhs={vhs} />
          <Image
            className="duckPlaceholderDetails"
            src={
              vhs.thumbnail !== null
                ? `http://localhost:3000/${vhs.thumbnail}`
                : "/logoNotext.png"
            }
            alt="title logo duck"
            width={300}
            height={300}
          ></Image>
          <div className={styles.detailsDiv}>
            {mobileWindowSize ? (
              <p className={styles.vhsTitle}>{vhs.title}</p>
            ) : null}
            <div className={styles.detailsInfo}>
              <div>
                {mobileWindowSize ? null : (
                  <p className={styles.vhsTitle}>{vhs.title}</p>
                )}
                <p>
                  Category:{" "}
                  <span className={styles.vhsCategory}>{vhs.genre}</span>
                </p>
                <p>
                  Released: <span className="boldText">{vhs.releasedAt}.</span>
                </p>
                <p>
                  Duration: <span className="boldText">{vhs.duration}</span> min
                </p>
              </div>
              {mobileWindowSize ? null : (
                <div className={styles.detailsRentalDiv}>
                  <AddToCart />
                  <p>
                    <span className={styles.vhsPrice}>{vhs.rentalPrice}</span>{" "}
                    €/day
                  </p>
                  <p>
                    Rental duration:{" "}
                    <span className="boldText">{vhs.rentalDuration}</span> days
                  </p>
                  <p
                    className={`${
                      vhs.quantity > 0
                        ? styles.availableP
                        : styles.notAvailableP
                    }`}
                  >
                    <span className="boldText">{vhs.quantity}</span> Available
                  </p>
                </div>
              )}
            </div>
            <div className={styles.descriptionContainer}>
              <p>Description:</p>
              <div className={styles.descriptionDiv}>
                <p>{vhs.description}</p>
              </div>
            </div>
          </div>
          {mobileWindowSize ? (
            <div className={styles.detailsRentalDiv}>
              <p>
                <span className={styles.vhsPrice}>{vhs.rentalPrice}</span> €/day
              </p>
              <AddToCart />
              <p>
                Rental duration:{" "}
                <span className="boldText">{vhs.rentalDuration}</span> days
              </p>
              <p
                className={`${
                  vhs.quantity > 0 ? styles.availableP : styles.notAvailableP
                }`}
              >
                <span className="boldText">{vhs.quantity}</span> Available
              </p>
            </div>
          ) : null}
          <Link href={`/edit/${vhs.id}`} className={styles.editNavBtn}>
            <div className={styles.navBtn}>
              <Image
                src={"/fi-br-edit.png"}
                alt="edit icon"
                width={20}
                height={20}
              ></Image>
              <p>Edit movie</p>
            </div>
          </Link>
        </div>
      ) : null}
    </>
  );
}
