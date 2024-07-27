import { AddToCart } from "@/components/AddToCart";
import { FavouriteBtn } from "@/components/FavouriteBtn";
import { VHSDetails } from "@/model/vhs";
import Image from "next/image";
import styles from "@/styles/details.module.css";
import Link from "next/link";

export function FinalSection() {
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
              <p className={styles.vhsTitle}></p>

              <p>
                Category: <span className={styles.vhsCategory}></span>
              </p>
              <p>
                Released: <span className="boldText"></span>
              </p>
              <p>
                Duration: <span className="boldText"></span> min
              </p>
            </div>
            <div className={styles.detailsRentalDiv}>
              <AddToCart />
              <p>
                <span className={styles.vhsPrice}></span> €/day
              </p>
              <p>
                Rental duration: <span className="boldText"></span> days
              </p>
              <p
                className={`${
                  1 > 0 ? styles.availableP : styles.notAvailableP
                }`}
              >
                <span className="boldText"></span> Available
              </p>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <p>Description:</p>
            <div className={styles.descriptionDiv}>
              <p></p>
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
