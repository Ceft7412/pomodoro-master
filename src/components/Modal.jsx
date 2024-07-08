import React from "react";
import { RootContext } from "@/context/RootContext";
import { HiChevronDown } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Modal() {
  const modalState = React.useRef(null);

  const boxRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const boxRef2 = React.useRef(null);
  const containerRef2 = React.useRef(null);

  const { modal, setModal, pomodoroTimer, shortBreakTimer, longBreakTimer } =
    React.useContext(RootContext);
  const [box, setBox] = React.useState();
  const [appear, setAppear] = React.useState(false);
  const handleClick = (event) => {
    if (modalState.current && !modalState.current.contains(event.target)) {
      setModal(false);
    }
  };

  const handleModalClick = (event) => {
    if (
      modalState.current &&
      modalState.current.contains(event.target) &&
      !containerRef.current.contains(event.target) &&
      !boxRef.current.contains(event.target) &&
      !containerRef2.current.contains(event.target) &&
      !boxRef2.current.contains(event.target)
    ) {
      setAppear(false);
    }
  };
  const handleBoxAppear = (box) => {
    if (box === 1) {
      setBox(1);
      setAppear(!appear);
    } else if (box === 2) {
      setBox(2);
      setAppear(!appear);
    } else if (box === 3) {
      setBox(3);
      setAppear(!appear);
    }
  };
  return (
    <>
      <div
        className={`modal-background ${modal ? "modal-background-open" : ""}`}
        onClick={handleClick}
      >
        <div
          className={`modal ${modal ? "modal-open" : ""}`}
          ref={modalState}
          onClick={handleModalClick}
        >
          <div className="modal__flex">
            {/* Item timer */}
            <div className="modal__header">
              <span className="modal__header-title">Settings</span>
              <div
                className="modal__header-icon-container"
                onClick={() => setModal(!modal)}
              >
                <IoClose className="modal__header-icon" />
              </div>
            </div>
            <div className="modal__body">
              <div className="modal__item">
                <h1 className="modal__item-title">Timer</h1>
                <div className="modal__item-inputs">
                  <div className="modal__item-inputs-box-container">
                    <span className="modal__item-inputs-box-title">Pomodoro</span>
                    <div className="modal__item-inputs-box">
                      <input
                        type="number"
                        className="modal__item-single-input"
                        value={pomodoroTimer}
                      />
                    </div>
                    <span className="modal__item-inputs-box-minutes">minutes</span>
                  </div>
                  <div className="modal__item-inputs-box-container">
                    <span className="modal__item-inputs-box-title">Short-break</span>
                    <div className="modal__item-inputs-box">
                      <input type="number" className="modal__item-single-input" />
                    </div>
                    <span className="modal__item-inputs-box-minutes">minutes</span>
                  </div>
                  <div className="modal__item-inputs-box-container">
                    <span className="modal__item-inputs-box-title">Long-break</span>
                    <div className="modal__item-inputs-box">
                      <input type="number" className="modal__item-single-input" />
                    </div>
                    <span className="modal__item-inputs-box-minutes">minutes</span>
                  </div>
                </div>
              </div>

              {/* Item background */}
              <div className="modal__item">
                <h1 className="modal__item-title">Background</h1>
                <div className="modal__item-input">
                  <div
                    className="modal__item-box"
                    onClick={() => handleBoxAppear(1)}
                    ref={containerRef}
                  >
                    <span className="modal__item-text">Background Image</span>
                    <div className="modal__item-icon-container">
                      <HiChevronDown className="modal__item-icon" />
                    </div>
                  </div>
                  <div
                    className={`modal__item-appear ${
                      box === 1 && appear === true ? "modal__item-appear-open" : ""
                    }`}
                    ref={boxRef}
                  ></div>
                </div>
              </div>

              {/* Item font family */}
              <div className="modal__item">
                <h1 className="modal__item-title">Font</h1>
                <div className="modal__item-input">
                  <div
                    className="modal__item-box"
                    onClick={() => handleBoxAppear(2)}
                    ref={containerRef2}
                  >
                    <span className="modal__item-text">Font</span>
                    <div className="modal__item-icon-container">
                      <HiChevronDown className="modal__item-icon" />
                    </div>
                  </div>
                  <div
                    className={`modal__item-appear ${
                      box === 2 && appear === true ? "modal__item-appear-open" : ""
                    }`}
                    ref={boxRef2}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
