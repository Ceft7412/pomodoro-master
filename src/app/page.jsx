"use client";
import Image from "next/image";
import Menu from "@/components/Menu";
import Modal from "@/components/Modal";
import React from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { GrFormNextLink } from "react-icons/gr";
import { VscSettings } from "react-icons/vsc";
import { RootContext } from "@/context/RootContext";

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
    setPause,
    pomodoroTimer,
    shortBreakTimer,
    longBreakTimer,
  } = React.useContext(RootContext);

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
          setTimer(pomodoroTimer);
          pauseTimer();
          break;
        case "shortbreak":
          setTimer(shortBreakTimer);
          pauseTimer();
          break;
        case "longbreak":
          setTimer(longBreakTimer);
          pauseTimer();
          break;
        default:
          break;
      }
      return newStateObject;
    });
  };
  return (
    <>
      <div className="skeleton">
        <Modal />
        <div className="background">
          <div className="background__settings-icon" onClick={() => setModal(!modal)}>
            <VscSettings fontSize={25} />
          </div>

          <Menu />
          <div className="content">
            <div className="content__flex-col">
              <div className="content__timer">
                <p>{timer}</p>
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
