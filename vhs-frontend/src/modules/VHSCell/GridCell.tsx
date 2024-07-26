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
        <Image
          className="duckPlaceholder"
          src={"/logoNotext.png"}
          alt="title logo duck"
          width={200}
          height={200}
        ></Image>
        <p className={styles.vhsTitleGrid}>{params.vhs.title}</p>
        <div className={styles.gridCellCatPrice}>
          <p className={styles.vhsCategory}>{params.vhs.genre}</p>
          <p>
            <span className={styles.vhsPrice}>{params.vhs.rentalPrice}</span>{" "}
            €/day
          </p>
        </div>
        <AddToCart />
        <Link href={`/details/${params.vhs.id}`}>
          <p className={styles.vhsLink}>Read details</p>
        </Link>
      </div>
    </>
  );
}
