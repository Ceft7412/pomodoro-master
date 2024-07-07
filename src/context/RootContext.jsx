"use client";
import React from "react";

const RootContext = React.createContext();

const RootProvider = ({ children }) => {
  const [timer, setTimer] = React.useState(1500);


  
  const startTimer = () => {};
  return (
    <RootContext.Provider value={{ timer, setTimer: startTimer }}>
      {children}
    </RootContext.Provider>
  );
};

export { RootContext, RootProvider };
