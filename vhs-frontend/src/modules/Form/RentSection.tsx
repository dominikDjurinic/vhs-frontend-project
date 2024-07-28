import { InputDiv } from "@/components/InputDiv";
import { NewVHSDetails } from "@/model/vhs";
import styles from "@/styles/form.module.css";
import Image from "next/image";

export function RentSection(params: {
  newMovie: (newMovie: NewVHSDetails) => void;
  movie: NewVHSDetails;
}) {
  return (
    <div className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <InputDiv
          name="Price"
          newMovie={params.newMovie}
          movie={params.movie}
        />
        <InputDiv
          name="Rental duration"
          newMovie={params.newMovie}
          movie={params.movie}
        />
      </div>
    </div>
  );
}
