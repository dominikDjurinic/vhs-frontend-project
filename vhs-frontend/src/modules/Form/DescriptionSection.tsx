import { InputDiv } from "@/components/InputDiv";
import styles from "@/styles/form.module.css";
import Image from "next/image";

export function DescriptionSection() {
  return (
    <div className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <InputDiv name="Description" />
      </div>
    </div>
  );
}
