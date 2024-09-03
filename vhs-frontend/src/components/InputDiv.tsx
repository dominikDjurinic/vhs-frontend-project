"use client";
import styles from "@/styles/form.module.css";
import { inputNames } from "@/model/inputNames";
import { useEffect, useState } from "react";
import { VHSDetails } from "@/model/vhs";
import { useWindowSizeContext } from "@/context/WindowSizeContext";

export function InputDiv(params: {
  name: string;
  newMovie: (newMovie: VHSDetails) => void;
  movie: VHSDetails;
}) {
  const [ind, setInd] = useState<number | undefined>(0);

  useEffect(() => {
    //find input names for labels and placeholders
    const index = inputNames.findIndex(({ name }) => name === params.name);
    setInd(index);
  }, [params.name]);

  const { mobileWindowSize } = useWindowSizeContext();

  return (
    <div className={styles.inputDiv}>
      <label htmlFor={`${params.name}Input`}>
        {ind !== undefined ? inputNames[ind].name : ""}
        {mobileWindowSize ? (
          <p>{ind !== undefined ? inputNames[ind].add : null}</p>
        ) : null}
      </label>
      <div className={styles.inputWithAddition}>
        {params.name === "Description" ? (
          <textarea
            className={styles.inputBoxDescript}
            id={`${params.name}Input`}
            name={`${params.name}Input`}
            placeholder={ind !== undefined ? inputNames[ind].placeholder : ""}
            onChange={(e) => {
              params.newMovie({
                ...params.movie,
                [`${
                  ind !== undefined ? inputNames[ind].modelName : ""
                }`]: `${e.target.value}`,
              });
            }}
            value={
              params.movie[
                `${
                  ind !== undefined ? inputNames[ind].modelName : ""
                }` as keyof VHSDetails
              ]
            }
          ></textarea>
        ) : (
          <input
            className={styles.inputBox}
            id={`${params.name}Input`}
            name={`${params.name}Input`}
            placeholder={ind !== undefined ? inputNames[ind].placeholder : ""}
            onChange={(e) =>
              params.newMovie({
                ...params.movie,
                [`${
                  ind !== undefined ? inputNames[ind].modelName : ""
                }`]: `${e.target.value}`,
              })
            }
            value={
              params.movie[
                `${
                  ind !== undefined ? inputNames[ind].modelName : ""
                }` as keyof VHSDetails
              ] === 0
                ? ""
                : params.movie[
                    `${
                      ind !== undefined ? inputNames[ind].modelName : ""
                    }` as keyof VHSDetails
                  ]
            }
          ></input>
        )}

        {mobileWindowSize ? null : (
          <p>{ind !== undefined ? inputNames[ind].add : null}</p>
        )}
      </div>
    </div>
  );
}
