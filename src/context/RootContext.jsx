"use client";
import React from "react";

const RootContext = React.createContext();

const RootProvider = ({ children }) => {
  const [timer, setTimer] = React.useState(1500);
  let interval = null;

  const startTimer = () => {
    if (interval !== null) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      setTimer((prevTime) => (prevTime = 1));
    }, 1000);
  };

  const pauseTimer = () => {
    if (interval !== null) {
      clearInterval(interval);
      interval = null;
    }
  };
  const displayTimer = `${Math.floor(timer / 60)}:${timer % 60 < 10 ? "0" : ""}${
    timer % 60
  }`;
  return (
    <RootContext.Provider value={{ timer: displayTimer, startTimer, pauseTimer }}>
      {children}
    </RootContext.Provider>
  );
};

export { RootContext, RootProvider };
