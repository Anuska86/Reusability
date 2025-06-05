import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./Components/Button/Button.jsx";
import { FaMoneyBill } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ThemeButton from "./Components/Menu/ThemeButton.jsx";
import { ThemeProvider, ThemeContext } from "./Components/Menu/ThemeButton.jsx";
import Menu from "./Components/Menu/MenuIndex.jsx";
import Toggle from "./Components/Toggle/ToggleIndex.jsx";
import { BsStar, BsStarFill } from "react-icons/bs";

function App() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <div className="star">
        <Toggle>
          <Toggle.Button>
            <Toggle.On>
              <BsStarFill className="star filled" />
            </Toggle.On>
            <Toggle.Off>
              <BsStar className="star" />
            </Toggle.Off>
          </Toggle.Button>
        </Toggle>
      </div>
      <br />

      <div className="content">
        <Toggle>
          <Menu>
            <Toggle.Button>
              <Menu.Button>Menu</Menu.Button>
            </Toggle.Button>
            <Toggle.On>
              <Menu.Dropdown>
                <Menu.Item>Home</Menu.Item>
                <Menu.Item>About</Menu.Item>
                <Menu.Item>Contact</Menu.Item>
                <Menu.Item>Blog</Menu.Item>
              </Menu.Dropdown>
            </Toggle.On>
          </Menu>
        </Toggle>
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
