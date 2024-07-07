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
  return (
    <RootContext.Provider value={{ timer, setTimer: startTimer }}>
      {children}
    </RootContext.Provider>
  );
};

export { RootContext, RootProvider };
