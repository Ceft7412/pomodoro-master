"use client";
import React from "react";

const RootContext = React.createContext();

const RootProvider = ({ children }) => {
  let pomodoroTimer = 1500;
  let shortBreakTimer = 300;
  let longBreakTimer = 900;

  const [timer, setTimer] = React.useState(pomodoroTimer);
  const [pause, setPause] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [timerStarted, setTimerStarted] = React.useState(false);
  const [activeTimerType, setActiveTimerType] = React.useState("pomodoro");

  const [active, setActive] = React.useState({
    pomodoro: true,
    shortbreak: false,
    longbreak: false,
  });

  let interval = React.useRef(null);

  const startTimer = () => {
    setTimerStarted(true);
    interval.current = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval.current);
          interval.current = null;
          pauseTimer();
          if (active.pomodoro) {
            return pomodoroTimer;
          }
          if (active.shortbreak) {
            return shortBreakTimer;
          }
          if (active.longbreak) {
            return longBreakTimer;
          }
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
  };

  const pauseTimer = () => {
    setTimerStarted(false);
    if (interval.current !== null) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  const clearTimer = () => {
    clearInterval(interval.current);
    interval.current = null;
    if (active.pomodoro) setTimer(pomodoroTimer);
    if (active.shortbreak) setTimer(shortBreakTimer);
    if (active.longbreak) setTimer(longBreakTimer);
  };
  const displayTimer = () => {
    let hours = Math.floor(timer / 3600);
    let minutes = Math.floor((timer % 3600) / 60);
    let seconds = timer % 60;

    // Format time as 2-digit numbers
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Display hours if timer is greater than 59 minutes
    if (timer > 3599) {
      return `${hours}:${minutes}:${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
  };

  const handleClick = (newState) => {
    setPause(false);
    setActive((prevActive) => {
      // Create a new object with all states set to false
      const newStateObject = Object.keys(prevActive).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      // Set the newState to true
      newStateObject[newState] = true;
      setActiveTimerType(newState);

      return newStateObject;
    });
    switch (newState) {
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
  };
  return (
    <RootContext.Provider
      value={{
        active,
        pause,
        pomodoroTimer: pomodoroTimer / 60,
        shortBreakTimer: shortBreakTimer / 60,
        longBreakTimer: longBreakTimer / 60,
        modal,
        timerStarted,
        activeTimerType,
        timer: displayTimer(),
        setModal,
        setTimer,
        setPause,
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
