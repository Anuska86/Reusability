import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./Components/Button/Button.jsx";
import { FaMoneyBill } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ThemeButton from "./Components/Menu/ThemeButton.jsx";
import { ThemeProvider, ThemeContext } from "./Components/Menu/ThemeButton.jsx";
import Menu from "./Components/Menu/MenuIndex.jsx";

function App() {
  const videogames = ["Action", "Adventure", "Puzzle", "Strategy", "RPG"];
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <div className="content">
        <Menu>
          <Menu.Button>Videogames</Menu.Button>
          <Menu.Dropdown>
            {videogames.map((game, index) => (
              <Menu.Item key={index}>
                <Button variant="secondary" size="sm">
                  {game}
                </Button>
              </Menu.Item>
            ))}
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
