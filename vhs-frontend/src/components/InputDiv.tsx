"use client";
import styles from "@/styles/form.module.css";
import { inputNames } from "@/model/inputNames";
import { useEffect, useState } from "react";

export function InputDiv(params: { name: string }) {
  const [ind, setInd] = useState<number | undefined>(undefined);

  useEffect(() => {
    const index = inputNames.findIndex(({ name }) => name === params.name);
    setInd(index);
  }, [params.name]);

  return (
    <div className={styles.inputDiv}>
      <label htmlFor={`${params.name}Input`}>
        {ind !== undefined ? inputNames[ind].name : ""}
      </label>
      <div className={styles.inputWithAddition}>
        {params.name === "Description" ? (
          <textarea
            className={styles.inputBoxDescript}
            id={`${params.name}Input`}
            name={`${params.name}Input`}
            placeholder={ind !== undefined ? inputNames[ind].placeholder : ""}
          ></textarea>
        ) : (
          <input
            className={styles.inputBox}
            id={`${params.name}Input`}
            name={`${params.name}Input`}
            placeholder={ind !== undefined ? inputNames[ind].placeholder : ""}
          ></input>
        )}

        <p>{ind !== undefined ? inputNames[ind].add : null}</p>
      </div>
    </div>
  );
}
