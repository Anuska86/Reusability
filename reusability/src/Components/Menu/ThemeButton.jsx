import React from "react";
import { createContext, useContext, useState } from "react";
import Button from "../Button/Button.jsx";

const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="theme-provider">{children}</div> {children}
    </ThemeContext.Provider>
  );
}

export default function ThemeButton({ children }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Button variant="primary" size="lg" onClick={toggleTheme}>
      {children}{" "}
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </Button>
  );
}

export { ThemeContext };
