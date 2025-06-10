import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./Components/Button/Button.jsx";
import { FaMoneyBill } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ThemeButton from "./Components/Menu/ThemeButton.jsx";
import { ThemeProvider, ThemeContext } from "./Components/Menu/ThemeButton.jsx";
import Menu from "./Components/Menu/MenuIndex.jsx";
import Star from "./Components/Star.jsx";

function App() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <div className="star">
        <Star />
      </div>
      <br />

      <div className="content">
        <Menu onOpen={() => console.log("Menu opened/closed")}>
          <Menu.Button>Menu</Menu.Button>

          <Menu.Dropdown>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
            <Menu.Item>Blog</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
      <ThemeButton></ThemeButton>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
