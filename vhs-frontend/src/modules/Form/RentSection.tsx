import { InputDiv } from "@/components/InputDiv";
import styles from "@/styles/form.module.css";
import Image from "next/image";

export function RentSection() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <InputDiv name="Price" />
        <InputDiv name="Rental duration" />
      </div>
    </div>
  );
}
