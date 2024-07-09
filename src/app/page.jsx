"use client";
import Image from "next/image";
import Menu from "@/components/Menu";
import Modal from "@/components/Modal";
import React from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { GrFormNextLink } from "react-icons/gr";
import { VscSettings } from "react-icons/vsc";
import { RootContext } from "@/context/RootContext";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Home() {
  const {
    timer,
    setTimer,
    startTimer,
    pauseTimer,
    clearTimer,
    active,
    setActive,
    modal,
    setModal,
    pause,
    font,
    setPause,
    srcBackground,
    backgroundColor,
    pomodoroTimer,
    shortBreakTimer,
    longBreakTimer,
  } = React.useContext(RootContext);
  const modalInfoRef = React.useRef(null);
  const [modalInfo, setModalInfo] = React.useState(false);
  React.useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "Your changes will be lost if you reload the page. Are you sure?";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleTimer = () => {
    if (pause === true) {
      pauseTimer();
    } else if (pause === false) {
      startTimer();
    }
    setPause(!pause);
  };

  const handleClear = () => {
    clearTimer();
    setPause(false);
  };

  const handleNext = () => {
    setActive((prevActive) => {
      setPause(false);
      // Create a new object with all states set to false
      const newStateObject = Object.keys(prevActive).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      // Get the keys of the prevActive object
      const keys = Object.keys(prevActive);

      // Find the index of the currently active state
      const currentIndex = keys.findIndex((key) => prevActive[key]);

      // Calculate the index of the next state
      const nextIndex = (currentIndex + 1) % keys.length;

      // Set the next state to true
      newStateObject[keys[nextIndex]] = true;

      // Set the timer according to the next state
      const nextState = keys[nextIndex];
      switch (nextState) {
        case "pomodoro":
          setTimer(pomodoroTimer * 60); // convert minutes to seconds
          pauseTimer();
          break;
        case "shortbreak":
          setTimer(shortBreakTimer * 60); // convert minutes to seconds
          pauseTimer();
          break;
        case "longbreak":
          setTimer(longBreakTimer * 60); // convert minutes to seconds
          pauseTimer();
          break;
        default:
          break;
      }
      return newStateObject;
    });
  };

  const handleClickInfo = (event) => {
    if (modalInfoRef.current && !modalInfoRef.current.contains(event.target)) {
      setModalInfo(false);
    }
  };
  return (
    <>
      <div className="skeleton">
        <Modal />
        <div className={`background`}>
          <div
            className={`background-container ${
              srcBackground !== "Default" ? "chosen" : ""
            }`}
          >
            {srcBackground ? (
              <img className="background-container__image" src={srcBackground} />
            ) : null}
          </div>
          <div className="background__settings-icon" onClick={() => setModal(!modal)}>
            <VscSettings fontSize={25} />
          </div>
          <div className="background__info-icon" onClick={() => setModalInfo(!modalInfo)}>
            <IoMdInformationCircleOutline fontSize={25} />
          </div>
          <div
            className={`background__info-overlay ${
              modalInfo ? "background__info-overlay-open" : ""
            }`}
            onClick={handleClickInfo}
          >
            <div
              ref={modalInfoRef}
              className={`background__info-modal ${modalInfo ? "info-open" : ""}`}
            >
              <div className="background__info-flex">
                <div className="background__info-header">
                  <span>PomodoroMaster by Ceft</span>
                  <div
                    className="background__infos-icon"
                    onClick={() => setModalInfo(false)}
                  >
                    <IoClose fontSize={20} />
                  </div>
                </div>
                <div className="background__info-body">
                  <p>
                    Feel free to reach out if you have any inquiries or would like to
                    suggest additional features. Your feedback is always welcome!
                  </p>
                  <a
                    href="https://www.linkedin.com/in/cedrick-caceres-22b8612b4/"
                    className="background__info-icon-container"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                      width="40"
                      height="40"
                      alt="Cedrick Caceres"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Menu />
          <div className="content">
            <div className="content__flex-col">
              <div className="content__timer">
                <p className={`content__time-inside ${font}`}>{timer}</p>
              </div>
              <div className="content__flex">
                <div className="content__icon content__events" onClick={handleClear}>
                  <BsArrowRepeat className="clear-icon" />
                </div>
                <div className="content__start content__events" onClick={handleTimer}>
                  <span>{pause ? "Pause" : "Start"}</span>
                </div>
                <div className="content__icon content__events" onClick={handleNext}>
                  <GrFormNextLink className="next-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
