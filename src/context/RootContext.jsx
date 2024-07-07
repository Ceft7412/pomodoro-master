"use client";
import React from "react";

const RootContext = React.createContext();

const RootProvider = ({ children }) => {
  const choseTimer = 1500;
  const [timer, setTimer] = React.useState(choseTimer);
  const [active, setActive] = React.useState({
    pomodoro: true,
    shortbreak: false,
    longbreak: false,
  });

  let interval = React.useRef(null);

  const startTimer = () => {
    interval.current = setInterval(() => {
      setTimer((prevTime) => prevTime - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(interval.current);
      interval.current = null;
      setTimer(choseTimer);
    }
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
    setTimer(choseTimer);
  };
  const displayTimer = `${Math.floor(timer / 60) < 10 ? "0" : ""}${Math.floor(
    timer / 60
  )}:${timer % 60 < 10 ? "0" : ""}${timer % 60}`;

  const handleClick = (newState) => {
    setActive((prevActive) => {
      // Create a new object with all states set to false
      const newStateObject = Object.keys(prevActive).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      // Set the newState to true
      newStateObject[newState] = true;

      return newStateObject;
    });
  };
  return (
    <RootContext.Provider
      value={{
        active,
        timer: displayTimer,
        setActive,
        startTimer,
        pauseTimer,
        clearTimer,
        handleClick,
      }}
    >
      {children}
    </RootContext.Provider>
  );
};

export { RootContext, RootProvider };
