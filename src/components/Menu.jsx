import React from "react";
import { RootContext } from "@/context/RootContext";
export default function Menu() {
  const { active, setActive } = React.useContext(RootContext);
  return (
    <>
      <div className="menu">
        <div className="menu__flex">
          <div
            className={`menu__item ${active === "pomodoro" ? "active" : ""}`}
            onClick={setActive("pomodoro")}
          >
            <h1>Pomodoro</h1>
          </div>
          <div
            className={`menu__item ${active === "shortbreak" ? "active" : ""}`}
            onClick={setActive("shortbreak")}
          >
            <h1>Short Break</h1>
          </div>
          <div
            className={`menu__item ${active === "longbreak" ? "active" : ""}`}
            onClick={setActive("longbreak")}
          >
            <h1>Long Break</h1>
          </div>
        </div>
      </div>
    </>
  );
}
