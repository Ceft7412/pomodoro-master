"use client";
import Image from "next/image";
import Menu from "@/components/Menu";
import React from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { GrFormNextLink } from "react-icons/gr";
import { VscSettings } from "react-icons/vsc";
import { RootContext } from "@/context/RootContext";

export default function Home() {
  const { timer, startTimer, pauseTimer, clearTimer, active, setActive } =
    React.useContext(RootContext);

  const [pause, setPause] = React.useState(false);

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

      return newStateObject;
    });
  };
  return (
    <>
      <div className="skeleton">
        <div className="background">
          <div className="background__settings-icon">
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
                  <BsArrowRepeat fontSize={30} />
                </div>
                <div className="content__start content__events" onClick={handleTimer}>
                  <span>{pause ? "Pause" : "Start"}</span>
                </div>
                <div className="content__icon content__events" onClick={handleNext}>
                  <GrFormNextLink fontSize={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
