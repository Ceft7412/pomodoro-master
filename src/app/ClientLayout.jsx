"use client";

import { useContext } from "react";
import "../resources/styles.scss";
import { RootProvider, RootContext } from "@/context/RootContext";

export default function ClientLayout({ children }) {
  return (
    <RootProvider>
      <head>
        <Title />
      </head>
      <Body>{children}</Body>
    </RootProvider>
  );
}

function Title() {
  const { timerStarted, timer, activeTimerType } = useContext(RootContext);
  const timerType =
    activeTimerType === "pomodoro"
      ? "Pomodoro"
      : activeTimerType === "shortbreak"
      ? "Short Break"
      : "Long Break";
  return <title>{` ${timerStarted ? timer + " " + timerType : "Study With Me"}`}</title>;
}

function Body({ children }) {
  const { srcBackground, fontColorBackgroundImage, backgroundColor } =
    useContext(RootContext);
  return (
    <body
      style={{ color: fontColorBackgroundImage, backgroundColor: backgroundColor }}
      className={`${srcBackground === "Default" ? "color-background" : ""}`}
    >
      {children}
    </body>
  );
}
