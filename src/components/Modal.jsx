import React from "react";
import { RootContext } from "@/context/RootContext";
import { HiChevronDown } from "react-icons/hi";

export default function Modal() {
  const modalState = React.useRef(null);
  const { modal, setModal } = React.useContext(RootContext);
  return (
    <>
      {modal ? (
        <div className="modal-background">
          <div className="modal">
            <div className="modal__flex">
              <div className="modal__item">
                <h1 className="modal__item-title">Background</h1>
                <div className="modal__item-input">
                  <div className="modal__item-box">
                    <span className="modal__item-text">Hey</span>
                    <div className="modal__item-icon-container">
                      <HiChevronDown className="modal__item-icon" />
                    </div>
                  </div>
                  <div className="modal__item-appear"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
