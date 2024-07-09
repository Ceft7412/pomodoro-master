import React from "react";
import { RootContext } from "@/context/RootContext";
import { HiChevronDown } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

// resources jsons
import backgrounds from "@/resources/json/backgrounds.json";
import fonts from "@/resources/json/fonts.json";

export default function Modal() {
  const modalState = React.useRef(null);

  const boxRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const boxRef2 = React.useRef(null);
  const containerRef2 = React.useRef(null);
  const [boxFont, setBoxFont] = React.useState("Default");
  const [boxBackground, setBoxBackground] = React.useState("Default");
  const fonts = [
    {
      text: "Default",
      class: "inter",
    },
    {
      text: "Arial",
      class: "arial",
    },
    {
      text: "Courier Prime",
      class: "courier-prime",
    },
    {
      text: "Figtree",
      class: "figtree",
    },
    {
      text: "Roboto",
      class: "roboto",
    },
    {
      text: "VT323",
      class: "vt323",
    },
    {
      text: "Kode Mono",
      class: "kode-mono",
    },
    {
      text: "Digital 7",
      class: "digital-7",
    },
  ];

  const {
    modal,
    setModal,
    pomodoroTimer,
    shortBreakTimer,
    longBreakTimer,
    setPomodoroTimer,
    setShortBreakTimer,
    setLongBreakTimer,
    setFontColorBackgroundImage,
    font,
    setFont,
    srcBackground,
    setBackgroundColor,
    setSrcBackground,
  } = React.useContext(RootContext);

  const [box, setBox] = React.useState();
  const [appear, setAppear] = React.useState(false);

  const handleBackgroundChange = (src, nameBg, txtColor, backgroundColor) => {
    setSrcBackground(src);
    setFontColorBackgroundImage(txtColor);
    setBackgroundColor(backgroundColor);
    setBoxBackground(nameBg);
    setAppear(false);
  };
  const handleFontChange = (className, text) => {
    setFont(className);
    setBoxFont(text);
    setAppear(false);
  };
  const handlePomodoroChange = (event) => {
    setPomodoroTimer(event.target.value * 60);
  };

  const handleShortBreakChange = (event) => {
    setShortBreakTimer(event.target.value * 60);
  };

  const handleLongBreakChange = (event) => {
    setLongBreakTimer(event.target.value * 60);
  };

  const handleClick = (event) => {
    if (modalState.current && !modalState.current.contains(event.target)) {
      setModal(false);
      setAppear(false);
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
                        min="1"
                        onChange={handlePomodoroChange}
                      />
                    </div>
                    <span className="modal__item-inputs-box-minutes">minutes</span>
                  </div>
                  <div className="modal__item-inputs-box-container">
                    <span className="modal__item-inputs-box-title">Short-break</span>
                    <div className="modal__item-inputs-box">
                      <input
                        type="number"
                        className="modal__item-single-input"
                        value={shortBreakTimer}
                        min="1"
                        onChange={handleShortBreakChange}
                      />
                    </div>
                    <span className="modal__item-inputs-box-minutes">minutes</span>
                  </div>
                  <div className="modal__item-inputs-box-container">
                    <span className="modal__item-inputs-box-title">Long-break</span>
                    <div className="modal__item-inputs-box">
                      <input
                        type="number"
                        className="modal__item-single-input"
                        value={longBreakTimer}
                        min="1"
                        onChange={handleLongBreakChange}
                      />
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
                    <span className="modal__item-text">{boxBackground}</span>
                    <div className="modal__item-icon-container">
                      <HiChevronDown className="modal__item-icon" />
                    </div>
                  </div>
                  <div
                    className={`modal__item-appear ${
                      box === 1 && appear === true ? "modal__item-appear-open" : ""
                    }`}
                    ref={boxRef}
                  >
                    {backgrounds.map((bckgrnd, index) => (
                      <span
                        key={index}
                        className={`modal__item-font ${
                          bckgrnd.src === srcBackground ? "active" : ""
                        }`}
                        onClick={() =>
                          handleBackgroundChange(
                            bckgrnd.src,
                            bckgrnd.name,
                            bckgrnd.fontColor,
                            bckgrnd.backgroundColor
                          )
                        }
                      >
                        {bckgrnd.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Item font family */}
              <div className="modal__item">
                <h1 className="modal__item-title">Timer Font</h1>
                <div className="modal__item-input">
                  <div
                    className="modal__item-box"
                    onClick={() => handleBoxAppear(2)}
                    ref={containerRef2}
                  >
                    <span className="modal__item-text">{boxFont}</span>
                    <div className="modal__item-icon-container">
                      <HiChevronDown className="modal__item-icon" />
                    </div>
                  </div>
                  <div
                    className={`modal__item-appear ${
                      box === 2 && appear === true ? "modal__item-appear-open" : ""
                    }`}
                    ref={boxRef2}
                  >
                    {fonts.map((fnt, index) => (
                      <span
                        key={index}
                        className={`modal__item-font ${fnt === font ? "active" : ""}`}
                        onClick={() => handleFontChange(fnt.class, fnt.text)}
                      >
                        {fnt.text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
