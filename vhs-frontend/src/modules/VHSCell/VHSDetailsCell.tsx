import { AddToCart } from "@/components/AddToCart";
import { FavouriteBtn } from "@/components/FavouriteBtn";
import { VHSDetails } from "@/model/vhs";
import Image from "next/image";
import styles from "@/styles/details.module.css";
import Link from "next/link";

export async function VHSDetailsCell(params: { movieId: number }) {
  /**GET VHS movie details by id from database**/
  const response = await fetch(
    `http://localhost:3000/api/vhs/${params.movieId}`,
    {
      method: "GET",
    }
  );

  const details: VHSDetails = await response.json();

  const vhs: VHSDetails = details;

  return (
    <>
      <div className={styles.detailsContainer}>
        <FavouriteBtn />
        <Image
          src={"/logoNoText.png"}
          alt="duck logo icon"
          width={250}
          height={200}
        ></Image>
        <div className={styles.detailsDiv}>
          <div className={styles.detailsInfo}>
            <div>
              <p className={styles.vhsTitle}>{vhs.title}</p>

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
            <div className={styles.detailsRentalDiv}>
              <AddToCart />
              <p>
                <span className={styles.vhsPrice}>{vhs.rentalPrice}</span> €/day
              </p>
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
          </div>
          <div className={styles.descriptionContainer}>
            <p>Description:</p>
            <div className={styles.descriptionDiv}>
              <p>{vhs.description}</p>
            </div>
          </div>
        </div>
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
    </>
  );
}
