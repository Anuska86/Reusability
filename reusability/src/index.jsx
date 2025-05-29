import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./Components/Button/Button.jsx";
import { FaMoneyBill } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Menu from "./Components/Menu/Menu.jsx";
import MenuButton from "./Components/Menu/MenuButton.jsx";
import MenuDropdown from "./Components/Menu/MenuDropdown.jsx";

function App() {
  return (
    <Menu>
      <MenuButton>Videogames</MenuButton>
      <MenuDropdown
        items={["Action", "Adventure", "Puzzle", "Strategy", "RPG"]}
      ></MenuDropdown>
    </Menu>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
