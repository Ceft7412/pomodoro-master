"use client";
import React from "react";

const RootContext = React.createContext();

const RootProvider = ({ children }) => {
  const [timer, setTimer] = React.useState("25:00");

  return <RootContext.Provider value={{ timer }}>{children}</RootContext.Provider>;
};

export { RootContext, RootProvider };
