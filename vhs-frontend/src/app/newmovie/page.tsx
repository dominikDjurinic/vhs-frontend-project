"use client";
import { AlertMsg } from "@/modules/AlertMsg";
import { Footer } from "@/modules/Footer";
import { AboutSection } from "@/modules/Form/AboutSection";
import { DescriptionSection } from "@/modules/Form/DescriptionSection";
import { FinalSection } from "@/modules/Form/FinalSection";
import { RentSection } from "@/modules/Form/RentSection";
import { Header } from "@/modules/Header";
import { VHSDetailsCell } from "@/modules/VHSCell/VHSDetailsCell";
import styles from "@/styles/form.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NewMovie() {
  const sectionNames = ["About", "Description", "Rent", "Final preview"];

  const [step, setStep] = useState(0);
  const [end, setEnd] = useState(false);

  return (
    <>
      <div className="wrapper">
        <Header selectedNav="" />
        {end ? <AlertMsg typeMsg="Add" end={(end) => setEnd(end)} /> : null}
        <Link href={"/catalogue"} className={styles.closeNavBtn}>
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
        <div className={styles.newMoviTitleDiv}>
          <p className={styles.titleSection}>
            New movie - {step < 3 ? `Step ${step + 1}:` : ""}{" "}
            {sectionNames[step]}
          </p>
        </div>
        <div className={styles.formMainDiv}>
          {step === 0 ? <AboutSection /> : null}
          {step === 1 ? <DescriptionSection /> : null}
          {step === 2 ? <RentSection /> : null}
          {step === 3 ? <FinalSection /> : null}
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.btnDiv}>
            <button
              className={`${styles.btnPrev} ${styles.btn} ${
                step > 0 ? styles.visiblePrev : ""
              }`}
              onClick={() => setStep(step - 1)}
            >
              <Image
                src={"/fi-br-angle-left.png"}
                alt="left icon"
                width={15}
                height={15}
              ></Image>{" "}
              Previous
            </button>
            {step < 3 ? (
              <button
                className={`${styles.btnNext} ${styles.btn}`}
                onClick={() => setStep(step + 1)}
              >
                Next{" "}
                <Image
                  src={"/fi-br-angle-right.png"}
                  alt="right icon"
                  width={15}
                  height={15}
                ></Image>
              </button>
            ) : null}
            {step === 3 ? (
              <button
                className={`${styles.btnNext} ${styles.btn}`}
                onClick={() => setEnd(true)}
              >
                Submit
              </button>
            ) : null}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
