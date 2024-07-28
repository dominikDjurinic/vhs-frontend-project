"use client";
import { alertMsgsText } from "@/model/alertMsgs";
import { NewVHSDetails } from "@/model/vhs";
import { useEffect, useState } from "react";

export function AlertMsg(params: {
  typeMsg: string;
  end: (end: boolean) => void;
  newMovie?: NewVHSDetails;
}) {
  const [index, setIndex] = useState<number | undefined>(undefined); //index of correct alert message

  useEffect(() => {
    let ind = alertMsgsText.findIndex(({ btn }) => btn === params.typeMsg); //finding correct alert message
    setIndex(ind);
  }, [params.typeMsg]);

  const chooseMethod = () => {
    if (params.typeMsg === "Add") {
      addNewMovie();
    }
  };

  const addNewMovie = async () => {
    const response = await fetch(`http://localhost:3000/api/vhs`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8080",
      },
      body: JSON.stringify(params.newMovie),
    });

    const resp = await response.json();
    alert(JSON.stringify(resp));
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
