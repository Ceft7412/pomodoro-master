import React from "react";
import { RootContext } from "@/context/RootContext";
import { HiChevronDown } from "react-icons/hi";

export default function Modal() {
  const modalState = React.useRef(null);
  const { modal, setModal } = React.useContext(RootContext);
  const [box, setBox] = React.useState();
  const handleClick = (event) => {
    if (modalState.current && !modalState.current.contains(event.target)) {
      setModal(false);
    }
  };

  const handleBoxAppear = (box) => {
    if (box === 1) {
      setBox(1);
    } else if (box === 2) {
      setBox(2);
    } else if (box === 3) {
      setBox(3);
    }
  };
  return (
    <>
      <div
        className={`modal-background ${modal ? "modal-background-open" : ""}`}
        onClick={handleClick}
      >
        <div className={`modal ${modal ? "modal-open" : ""}`} ref={modalState}>
          <div className="modal__flex">
            <div className="modal__item">
              <h1 className="modal__item-title">Background</h1>
              <div className="modal__item-input">
                <div className="modal__item-box" onClick={() => handleBoxAppear(1)}>
                  <span className="modal__item-text">Hey</span>
                  <div className="modal__item-icon-container">
                    <HiChevronDown className="modal__item-icon" />
                  </div>
                </div>
                <div
                  className={`modal__item-appear ${
                    box === 1 ? "modal__item-appear-open" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
