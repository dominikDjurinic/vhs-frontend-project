import { AddToCart } from "@/components/AddToCart";
import Image from "next/image";
import styles from "../../styles/cells.module.css";
import Link from "next/link";
import { FavouriteBtn } from "@/components/FavouriteBtn";
import { VHSDetails } from "@/model/vhs";

export function VHSGridCell(params: { vhs: VHSDetails }) {
  return (
    <>
      <div className={styles.gridCell}>
        <FavouriteBtn />
        <Link href={`/details/${params.vhs.id}`}>
          <Image
            className="duckPlaceholder"
            src={
              params.vhs.thumbnail !== null
                ? `http://localhost:3000/${params.vhs.thumbnail}`
                : "/logoNotext.png"
            }
            alt="title logo duck"
            width={200}
            height={200}
          ></Image>
        </Link>
        <Link href={`/details/${params.vhs.id}`}>
          <p className={styles.vhsTitleGrid}>{params.vhs.title}</p>
        </Link>
        <div className={styles.gridCellCatPrice}>
          <p className={styles.vhsCategory}>{params.vhs.genre}</p>
          <p>
            <span className={styles.vhsPrice}>{params.vhs.rentalPrice}</span>{" "}
            €/day
          </p>
        </div>
        <AddToCart />
        <p
          className={`${
            params.vhs.quantity > 0 ? styles.availableP : styles.notAvailableP
          }`}
        >
          <span className="boldText">{params.vhs.quantity}</span> Available
        </p>
        <Link href={`/details/${params.vhs.id}`}>
          <p className={styles.vhsLink}>Read details</p>
        </Link>
      </div>
    </>
  );
}
