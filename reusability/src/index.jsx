import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./Components/Button/Button.jsx";
import { FaMoneyBill } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Menu from "./Components/Menu/Menu.jsx";
import MenuButton from "./Components/Menu/MenuButton.jsx";
import MenuDropdown from "./Components/Menu/MenuDropdown.jsx";
import MenuItem from "./Components/Menu/MenuItem.jsx";
import ThemeButton from "./Components/Menu/ThemeButton.jsx";
import { ThemeProvider, ThemeContext } from "./Components/Menu/ThemeButton.jsx";

function App() {
  const videogames = ["Action", "Adventure", "Puzzle", "Strategy", "RPG"];
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <div className="content">
        <Menu>
          <MenuButton>Videogames</MenuButton>
          <MenuDropdown>
            {videogames.map((game, index) => (
              <MenuItem key={index}>
                <Button variant="secondary" size="sm">
                  {game}
                </Button>
              </MenuItem>
            ))}
          </MenuDropdown>
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
