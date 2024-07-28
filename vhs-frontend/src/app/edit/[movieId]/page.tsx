"use client";
import { InputDiv } from "@/components/InputDiv";
import { NewVHSDetails, VHSDetails } from "@/model/vhs";
import { AlertMsg } from "@/modules/AlertMsg";
import { Footer } from "@/modules/Footer";
import { Header } from "@/modules/Header";
import styles from "@/styles/form.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EditMovie({ params }: { params: { movieId: number } }) {
  const [end, setEnd] = useState(false); //after submitting form show alert message
  const [typeMsg, setTypMsg] = useState("");
  const [movie, setMovie] = useState<NewVHSDetails>({
    title: "",
    description: "",
    genre: "",
    duration: 0,
    releasedAt: 0,
    rentalPrice: 0,
    rentalDuration: 0,
  });

  useEffect(() => {
    const movieWithId = async () => {
      const response = await fetch(
        `http://localhost:3000/api/vhs/${params.movieId}`,
        {
          method: "GET",
        }
      );

      const details: VHSDetails = await response.json();

      setMovie(details);
    };
    movieWithId();
  }, [params.movieId]);

  return (
    <div>
      <Header selectedNav="" />
      {end ? (
        <AlertMsg
          typeMsg={`${typeMsg}`}
          end={(end) => setEnd(end)}
          newMovie={movie}
        />
      ) : null}
      <Link href={`/details/${params.movieId}`} className={styles.closeNavBtn}>
        <div className={styles.navBtn}>
          <Image
            src={"/fi-br-cross.png"}
            alt="left icon"
            width={15}
            height={15}
          ></Image>
          <p className="boldText">Close</p>
        </div>
      </Link>
      <div className={styles.editMovieTitleDiv}>
        <p className={styles.titleSection}>Edit movie</p>
      </div>
      <div className={styles.mainDivEdit}>
        <div className={styles.form2Container}>
          <div className={styles.imageAboutDiv}>
            <div className={styles.addImageDiv}>
              <Image
                id={styles.logoImg}
                src={"/logoNoText.png"}
                alt="duck logo icon"
                width={200}
                height={200}
              ></Image>
              <p>Add movie thumbnail</p>
            </div>
            <div className={styles.inputContainer}>
              <InputDiv
                name="Title"
                newMovie={(movie) => setMovie(movie)}
                movie={movie}
              />
              <InputDiv
                name="Category"
                newMovie={(movie) => setMovie(movie)}
                movie={movie}
              />
              <InputDiv
                name="Released year"
                newMovie={(movie) => setMovie(movie)}
                movie={movie}
              />
              <InputDiv
                name="Duration"
                newMovie={(movie) => setMovie(movie)}
                movie={movie}
              />
            </div>
          </div>

          <div className={styles.inputContainer}>
            <InputDiv
              name="Description"
              newMovie={(movie) => setMovie(movie)}
              movie={movie}
            />
            <InputDiv
              name="Price"
              newMovie={(movie) => setMovie(movie)}
              movie={movie}
            />
            <InputDiv
              name="Rental duration"
              newMovie={(movie) => setMovie(movie)}
              movie={movie}
            />
          </div>
          <div className={styles.btnSaveContainer}>
            <button
              className={`${styles.btnNext} ${styles.btn}`}
              onClick={() => {
                setEnd(true);
                setTypMsg("Save");
              }}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
      <div className={styles.btnDeleteContainer}>
        <button
          className={`${styles.btnDelete} ${styles.btn}`}
          onClick={() => {
            setEnd(true);
            setTypMsg("Delete");
          }}
        >
          Delete movie
        </button>
      </div>
      <Footer />
    </div>
  );
}
