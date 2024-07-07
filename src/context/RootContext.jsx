"use client";
import React from "react";

const RootContext = React.createContext();

const RootProvider = ({ children }) => {
  const choseTimer = 1500;
  const [timer, setTimer] = React.useState(choseTimer);

  let interval = React.useRef(null);

  const startTimer = () => {
    if (interval.current !== null) {
      clearInterval(interval.current);
    }

    interval.current = setInterval(() => {
      setTimer((prevTime) => prevTime - 1);
    }, 1000);
  };

  const pauseTimer = () => {
    if (interval.current !== null) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  const clearTimer = () => {
    clearInterval(interval.current);
    interval.current = null;
    setTimer(1500);
  };
  const displayTimer = `${Math.floor(timer / 60) < 10 ? "0" : ""}${Math.floor(
    timer / 60
  )}:${timer % 60 < 10 ? "0" : ""}${timer % 60}`;
  return (
    <RootContext.Provider value={{ timer: displayTimer, startTimer, pauseTimer }}>
      {children}
    </RootContext.Provider>
  );
};

export { RootContext, RootProvider };
