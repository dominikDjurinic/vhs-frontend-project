import { AddToCart } from "@/components/AddToCart";
import { VHSDetails } from "@/model/vhs";
import Image from "next/image";
import styles from "@/styles/details.module.css";
import { useWindowSizeContext } from "@/context/WindowSizeContext";

export function FinalSection(params: {
  movie: VHSDetails;
  movieImg: File | undefined;
}) {
  const { mobileWindowSize } = useWindowSizeContext();

  return (
    <>
      <div className={styles.detailsContainer}>
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
          {mobileWindowSize ? (
            <p className={styles.vhsTitle}>{params.movie.title}</p>
          ) : null}
          <div className={styles.detailsInfo}>
            <div>
              {mobileWindowSize ? null : (
                <p className={styles.vhsTitle}>
                  {params.movie.title === "" ? "-" : params.movie.title}
                </p>
              )}
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
            {mobileWindowSize ? null : (
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
                  <span className="boldText">
                    {params.movie.rentalDuration}
                  </span>{" "}
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
            )}
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
        {mobileWindowSize ? (
          <div className={styles.detailsRentalDiv}>
            <p>
              <span className={styles.vhsPrice}>
                {params.movie.rentalPrice}
              </span>{" "}
              €/day
            </p>
            <AddToCart />
            <p>
              Rental duration:{" "}
              <span className="boldText">{params.movie.rentalDuration}</span>{" "}
              days
            </p>
            <p
              className={`${1 > 0 ? styles.availableP : styles.notAvailableP}`}
            >
              <span className="boldText">?</span> Available
            </p>
          </div>
        ) : null}
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
