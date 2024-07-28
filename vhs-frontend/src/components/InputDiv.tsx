"use client";
import styles from "@/styles/form.module.css";
import { inputNames } from "@/model/inputNames";
import { useEffect, useState } from "react";
import { NewVHSDetails } from "@/model/vhs";

export function InputDiv(params: {
  name: string;
  newMovie: (newMovie: NewVHSDetails) => void;
  movie: NewVHSDetails;
}) {
  const [ind, setInd] = useState<number | undefined>(undefined);
  //const [modelName, setModelName] = useState<string>(""); //input name - property of NewVHSDetails object

  useEffect(() => {
    //finding input names
    const index = inputNames.findIndex(({ name }) => name === params.name);
    setInd(index);
    //setModelName(inputNames[index].modelName);
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
                }` as keyof NewVHSDetails
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
                }` as keyof NewVHSDetails
              ] === 0
                ? ""
                : params.movie[
                    `${
                      ind !== undefined ? inputNames[ind].modelName : ""
                    }` as keyof NewVHSDetails
                  ]
            }
          ></input>
        )}

        <p>{ind !== undefined ? inputNames[ind].add : null}</p>
      </div>
    </div>
  );
}
