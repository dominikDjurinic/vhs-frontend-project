import { AddToCart } from "@/components/AddToCart";
import Image from "next/image";
import styles from "../../styles/cells.module.css";
import Link from "next/link";
import { FavouriteBtn } from "@/components/FavouriteBtn";
import { VHSDetails } from "@/model/vhs";

export function VHSListCell(params: { vhs: VHSDetails }) {
  return (
    <>
      <div className={styles.listCell}>
        <FavouriteBtn />
        <Image
          className="duckPlaceholder"
          src={"/logoNotext.png"}
          alt="title logo duck"
          width={200}
          height={200}
        ></Image>
        <div className={styles.listCellContainer}>
          <div className={styles.listCellInfo}>
            <p className={styles.vhsTitleList}>{params.vhs.title}</p>
            <p className={styles.priceContainer}>
              <span className={styles.vhsPrice}>{params.vhs.rentalPrice}</span>{" "}
              €/day
            </p>
            <p>
              Category: <span className="boldText">{params.vhs.genre}</span>
            </p>
            <p>
              Released:{" "}
              <span className="boldText">{params.vhs.releasedAt}</span>
            </p>
            <p>
              Available: <span className="boldText">{params.vhs.quantity}</span>
            </p>
          </div>
          <div className={styles.readCartDiv}>
            <Link href={`/details/${params.vhs.id}`}>
              <p className={styles.vhsLink}>Read details</p>
            </Link>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
}
