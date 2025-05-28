import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./Components/Button/Button.jsx";
import { FaMoneyBill } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Menu from "./Components/Menu/Menu.jsx";

function App() {
  return (
    <>
      <Menu
        buttonText="Videogames"
        items={["The Legend of Zelda: Ocarina of Time ", "The Witcher 3: Wild Hunt", "Resident Evil Remake", "Super Smash Bros"," Final Fantasy VII"]}
      ></Menu>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
