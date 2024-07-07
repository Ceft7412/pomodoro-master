import React from "react";
import { RootContext } from "@/context/RootContext";
export default function Menu() {
  const { active, setActive } = React.useContext(RootContext);
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
    <>
      <div className="menu">
        <div className="menu__flex">
          <div
            className={`menu__item ${active.pomodoro ? "active" : ""}`}
            onClick={() => handleClick("pomodoro")}
          >
            <h1>Pomodoro</h1>
          </div>
          <div
            className={`menu__item ${active.shortbreak ? "active" : ""}`}
            onClick={() => handleClick("shortbreak")}
          >
            <h1>Short Break</h1>
          </div>
          <div
            className={`menu__item ${active.longbreak ? "active" : ""}`}
            onClick={() => handleClick("longbreak")}
          >
            <h1>Long Break</h1>
          </div>
        </div>
      </div>
    </>
  );
}
