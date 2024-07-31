import { AddToCart } from "@/components/AddToCart";
import { FavouriteBtn } from "@/components/FavouriteBtn";
import { NewVHSDetails, VHSDetails } from "@/model/vhs";
import Image from "next/image";
import styles from "@/styles/details.module.css";
import Link from "next/link";

export function FinalSection(params: {
  movie: NewVHSDetails;
  movieImg: File | undefined;
}) {
  return (
    <>
      <div className={styles.detailsContainer}>
        <FavouriteBtn />
        <Image
          className="duckPlaceholder"
          src={
            params.movieImg !== undefined && params.movieImg !== null
              ? URL.createObjectURL(params.movieImg)
              : "/logoNotext.png"
          }
          alt="title logo duck"
          width={200}
          height={200}
        ></Image>
        <div className={styles.detailsDiv}>
          <div className={styles.detailsInfo}>
            <div>
              <p className={styles.vhsTitle}>
                {params.movie.title === "" ? "-" : params.movie.title}
              </p>

              <p>
                Category:{" "}
                <span className={styles.vhsCategory}>
                  {params.movie.genre === "" ? "-" : params.movie.genre}
                </span>
              </p>
              <p>
                Released:{" "}
                <span className="boldText">{params.movie.releasedAt}</span>
              </p>
              <p>
                Duration:{" "}
                <span className="boldText">{params.movie.duration}</span> min
              </p>
            </div>
            <div className={styles.detailsRentalDiv}>
              <AddToCart />
              <p>
                <span className={styles.vhsPrice}>
                  {params.movie.rentalPrice}
                </span>{" "}
                €/day
              </p>
              <p>
                Rental duration:{" "}
                <span className="boldText">{params.movie.rentalDuration}</span>{" "}
                days
              </p>
              <p
                className={`${
                  1 > 0 ? styles.availableP : styles.notAvailableP
                }`}
              >
                <span className="boldText">?</span> Available
              </p>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <p>Description:</p>
            <div className={styles.descriptionDiv}>
              <p>
                {params.movie.description === ""
                  ? "-"
                  : params.movie.description}
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.navBtn} ${styles.editNavBtn}`}>
          <Image
            src={"/fi-br-edit.png"}
            alt="edit icon"
            width={20}
            height={20}
          ></Image>
          <p>Edit movie</p>
        </div>
      </div>
    </>
  );
}
