// import { Inter } from "next/font/google";
"use client";
import Head from "next/head";

import React from "react";
import "../resources/styles.scss";

// const inter = Inter({ subsets: ["latin"] });
import { RootProvider, RootContext } from "@/context/RootContext";
const metadata = {
  description:
    "Pomodoro master is an app that is easy to use and helps you to focus on your tasks. You can customize the app to your liking. Choose your aesthetic themes without hassle!",
};
export default function RootLayout({ children }) {
  return (
    <RootProvider>
      <html lang="en">
        <head>
          <Title />
        </head>
        <Body>{children}</Body>
      </html>
    </RootProvider>
  );
}

function Title() {
  const { timerStarted, timer, activeTimerType } = React.useContext(RootContext);
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
    React.useContext(RootContext);
  return (
    <body
      style={{ color: fontColorBackgroundImage, backgroundColor: backgroundColor }}
      className={`${srcBackground === "Default" ? "color-background" : ""}`}
    >
      {children}
    </body>
  );
}
