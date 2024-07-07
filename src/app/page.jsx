"use client";
import Image from "next/image";
import Menu from "@/components/Menu";
import React from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { GrFormNextLink } from "react-icons/gr";

import { RootContext, RootProvider } from "@/context/RootContext";

export default function Home() {
  const { timer, startTimer, pauseTimer } = React.useContext(RootContext);

  const 

  return (
    <>
      <div className="skeleton">
        <div className="background">
          <Menu />
          <div className="content">
            <div className="content__flex-col">
              <p className="content__timer">{timer}</p>
              <div className="content__flex">
                <div className="content__icon">
                  <BsArrowRepeat fontSize={30} />
                </div>
                <div className="content__start">
                  <span onClick={startTimer}>Start</span>
                  <span onClick={pauseTimer}>Pause</span>
                </div>
                <div className="content__icon">
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
