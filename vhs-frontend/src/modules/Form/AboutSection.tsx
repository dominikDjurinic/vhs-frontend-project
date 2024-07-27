import { InputDiv } from "@/components/InputDiv";
import styles from "@/styles/form.module.css";
import Image from "next/image";

export function AboutSection() {
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
        <InputDiv name="Title" />
        <InputDiv name="Category" />
        <InputDiv name="Released year" />
        <InputDiv name="Duration" />
      </div>
    </div>
  );
}
