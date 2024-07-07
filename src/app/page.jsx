"use client";
import Image from "next/image";
import Menu from "@/components/Menu";
import React from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { GrFormNextLink } from "react-icons/gr";

import { RootContext } from "@/context/RootContext";

export default function Home() {
  const { timer, startTimer, pauseTimer, clearTimer } = React.useContext(RootContext);

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
  return (
    <>
      <div className="skeleton">
        <div className="background">
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
                <div className="content__icon content__events">
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
