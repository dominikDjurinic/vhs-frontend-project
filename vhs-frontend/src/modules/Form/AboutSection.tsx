import { InputDiv } from "@/components/InputDiv";
import { NewVHSDetails } from "@/model/vhs";
import styles from "@/styles/form.module.css";
import Image from "next/image";
import { useState } from "react";

export function AboutSection(params: {
  newMovie: (newMovie: NewVHSDetails) => void;
  movie: NewVHSDetails;
  movieImage: (movieImg: File) => void;
}) {
  const [image, setImage] = useState<string>();

  return (
    <div className={styles.formContainer}>
      <div className={styles.addImageDiv}>
        <p>Add movie thumbnail</p>
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files !== null && e.target.files[0] !== null)
              params.movieImage(e.target.files[0]);
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
