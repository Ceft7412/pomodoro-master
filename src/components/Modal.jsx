import React from "react";
import { RootContext } from "@/context/RootContext";
export default function Modal() {
  const { modal } = React.useContext(RootContext);
  return (
    <>
      {modal ? (
        <div className="modal-background">
          <div className="modal">
            <span>EUT</span>
          </div>
        </div>
      ) : null}
    </>
  );
}
