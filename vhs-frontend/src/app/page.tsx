import Image from "next/image";
import styles from "../styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={`${styles.homeTitleBack} ${styles.homeContainer}`}>
        <Image
          id={styles.homeLogo}
          src={"/title-logo.png"}
          alt="title logo duck"
          width={350}
          height={210}
        ></Image>
        <h1>
          Welcome to the{" "}
          <span className={styles.highlighted}>
            first online VHS rental shop
          </span>{" "}
          !
        </h1>
        <div className={styles.sloganContainer}>
          <p>
            Be free to explore VHS movies and cartoons. When you find your
            favourites movies, rent them at low prices.
          </p>
        </div>
      </div>
      <div className={`${styles.homeBtmBack} ${styles.homeContainer}`}>
        <div className={styles.searchBar}>
          <input placeholder="Search by movie title ..."></input>
          <Image
            src={"/fi-br-search.png"}
            alt="right icon"
            width={20}
            height={20}
          />
        </div>
        <div className={styles.textMsg}>
          <p>Don&apos;t know which movie to watch?</p>
          <p>
            Check out our catalogue with the variety of VHS movies we offer.
          </p>
        </div>
        <Link href={"/catalogue"}>
          <button className={styles.btnCatalogue}>
            Explore catalogue{" "}
            <Image
              src={"/fi-br-angle-right.png"}
              alt="right icon"
              width={20}
              height={20}
            />
          </button>
        </Link>
      </div>
    </>
  );
}
