import { InputDiv } from "@/components/InputDiv";
import { VHSDetails } from "@/model/vhs";
import styles from "@/styles/form.module.css";
import Image from "next/image";
import { useState } from "react";

export function AboutSection(params: {
  newMovie: (newMovie: VHSDetails) => void;
  movie: VHSDetails;
  movieImage: (movieImg: File) => void;
}) {
  const [image, setImage] = useState<File>();

  return (
    <div className={styles.formContainer}>
      <div className={styles.addImageDiv}>
        <Image
          className="duckPlaceholderDetails"
          src={
            image !== undefined ? URL.createObjectURL(image) : "/logoNoText.png"
          }
          alt="preview image"
          width={150}
          height={150}
        ></Image>
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files !== null && e.target.files[0] !== null) {
              params.movieImage(e.target.files[0]);
              setImage(e.target.files[0]);
            }
          }}
        ></input>
      </div>

      <div className={styles.inputContainer}>
        <InputDiv
          name="Title"
          newMovie={params.newMovie}
          movie={params.movie}
        />
        <InputDiv
          name="Category"
          newMovie={params.newMovie}
          movie={params.movie}
        />
        <InputDiv
          name="Released year"
          newMovie={params.newMovie}
          movie={params.movie}
        />
        <InputDiv
          name="Duration"
          newMovie={params.newMovie}
          movie={params.movie}
        />
      </div>
    </div>
  );
}
