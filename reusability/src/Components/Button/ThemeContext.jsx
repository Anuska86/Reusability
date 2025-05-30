import React from "react";
import { createContext } from "react";

const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ theme: "light" }}>
      <div className="theme-provider">{children}</div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
