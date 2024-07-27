import { alertMsgsText } from "@/model/alertMsgs";
import { useEffect, useState } from "react";

export function AlertMsg(params: {
  typeMsg: string;
  end: (end: boolean) => void;
}) {
  const [index, setIndex] = useState<number | undefined>(undefined);
  //const [opened, setOpened] = useState<boolean>(true);

  useEffect(() => {
    let ind = alertMsgsText.findIndex(({ btn }) => btn === params.typeMsg);
    setIndex(ind);
  }, [params.typeMsg]);

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
            <button className={`btn btn${params.typeMsg}`}>
              {index !== undefined ? alertMsgsText[index].btn : null}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
