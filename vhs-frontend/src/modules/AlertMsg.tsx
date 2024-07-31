"use client";
import { addNewMovie } from "@/api/addNewMovie";
import { deleteVhs } from "@/api/deleteVhs";
import { editMovie } from "@/api/editMovie";
import { alertMsgsText } from "@/model/alertMsgs";
import { inputNames } from "@/model/inputNames";
import { NewVHSDetails } from "@/model/vhs";
import { useEffect, useState } from "react";

export function AlertMsg(params: {
  typeMsg: string;
  end: (end: boolean) => void;
  newMovie: NewVHSDetails;
  movieId?: number;
  movieImage: File | undefined;
}) {
  const [index, setIndex] = useState<number | undefined>(undefined); //index of correct alert message
  const formData = new FormData();

  useEffect(() => {
    let ind = alertMsgsText.findIndex(({ btn }) => btn === params.typeMsg); //finding correct alert message
    setIndex(ind);
  }, [params.typeMsg]);

  const prepareData = () => {
    //setting data into FormData format
    if (params.newMovie !== undefined) {
      for (let i = 0; i < 7; i++) {
        formData.append(
          inputNames[i].modelName,
          params.newMovie[
            `${inputNames[i].modelName}` as keyof NewVHSDetails
          ].toString()
        );
      }
    }

    if (params.movieImage !== undefined) {
      formData.append("thumbnail", params.movieImage);
    }

    chooseMethod();
  };

  const chooseMethod = () => {
    if (params.typeMsg === "Add") {
      addNewMovie(formData);
    } else if (params.typeMsg === "Delete") {
      if (params.movieId !== undefined) deleteVhs(params.movieId);
    } else {
      if (params.movieId !== undefined) editMovie(formData, params.movieId);
    }
  };

  return (
    <>
      <div className="backDark"></div>
      <div className="alertBox">
        <div className="msgBox">
          <p>{index !== undefined ? alertMsgsText[index].text : null}</p>
          <div className="msgBtns">
            <button className="btn" onClick={() => params.end(false)}>
              Cancle
            </button>
            <button
              className={`btn btn${params.typeMsg}`}
              onClick={prepareData}
            >
              {index !== undefined ? alertMsgsText[index].btn : null}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
