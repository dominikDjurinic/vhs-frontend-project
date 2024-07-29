"use client";
import { addNewMovie } from "@/api/addNewMovie";
import { deleteVhs } from "@/api/deleteVhs";
import { editMovie } from "@/api/editMovie";
import { alertMsgsText } from "@/model/alertMsgs";
import { NewVHSDetails } from "@/model/vhs";
import { useEffect, useState } from "react";

export function AlertMsg(params: {
  typeMsg: string;
  end: (end: boolean) => void;
  newMovie: NewVHSDetails;
  movieId?: number;
  quantity?: number;
}) {
  const [index, setIndex] = useState<number | undefined>(undefined); //index of correct alert message

  useEffect(() => {
    let ind = alertMsgsText.findIndex(({ btn }) => btn === params.typeMsg); //finding correct alert message
    setIndex(ind);
  }, [params.typeMsg]);

  const chooseMethod = () => {
    if (params.typeMsg === "Add") {
      addNewMovie(params.newMovie);
    } else if (params.typeMsg === "Delete") {
      if (params.movieId !== undefined) deleteVhs(params.movieId);
    } else {
      if (params.movieId !== undefined && params.quantity !== undefined)
        editMovie(params.newMovie, params.movieId, params.quantity);
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
              onClick={chooseMethod}
            >
              {index !== undefined ? alertMsgsText[index].btn : null}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
