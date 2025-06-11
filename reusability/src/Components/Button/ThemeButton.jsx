import React from "react";
import { createContext, useContext, useState } from "react";
import Button from "../Button/Button.jsx";

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div className="theme-provider">{children}</div>
    </ThemeContext.Provider>
  );
}

export default function ThemeButton({ children }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Button className="theme-button" variant="primary" onClick={toggleTheme}>
      {children}{" "}
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </Button>
  );
}

export { ThemeContext };
