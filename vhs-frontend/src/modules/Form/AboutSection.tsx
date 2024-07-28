import { InputDiv } from "@/components/InputDiv";
import { NewVHSDetails } from "@/model/vhs";
import styles from "@/styles/form.module.css";
import Image from "next/image";

export function AboutSection(params: {
  newMovie: (newMovie: NewVHSDetails) => void;
  movie: NewVHSDetails;
}) {
  return (
    <div className={styles.formContainer}>
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
