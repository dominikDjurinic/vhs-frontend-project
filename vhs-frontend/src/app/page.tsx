import Image from "next/image";
import styles from "../styles/home.module.css";
import Link from "next/link";
import { SearchBar } from "@/components/searchBar";

export default function Home() {
  return (
    <>
      <div className={styles.homeTitleContainer}>
        <Image
          id={styles.duckLegs2}
          src={"/legs2.png"}
          alt="duck legs"
          width={350}
          height={210}
        ></Image>
        <Image
          id={styles.homeLogo}
          src={"/title-logo.png"}
          alt="title logo duck"
          width={500}
          height={300}
        ></Image>
        <div className={styles.homeTitleText}>
          <h1>
            <span className={styles.highlighted}>Quack, Quack</span>
            <br />
            Welcome to the first{" "}
            <span className={styles.highlightedBlack}>
              ONLINE VHS RENTAL SHOP
            </span>
            !
          </h1>
          <h1></h1>
          <div className={styles.sloganContainer}>
            <p>
              Be free to explore VHS movies and cartoons. When you find your
              favourite movies, rent them at low prices. We will deliver the
              ordered movies to your home address the next day. Enjoy watching
              movies with a special VHS effect ;)
            </p>
          </div>
        </div>
      </div>
      <div className={styles.homeBtmContainer}>
        <SearchBar isSmall={false} />
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
        <Image
          id={styles.duckLegs}
          src={"/legs.png"}
          alt="duck legs"
          width={350}
          height={210}
        ></Image>
      </div>
    </>
  );
}
