import React from "react";
import MenuButton from "./MenuButton.jsx";
import MenuDropdown from "./MenuDropdown.jsx";

export default function Menu({ children }) {
  const [isOpen, setIsOpen] = React.useState(true);

  function toggleMenu() {
    console.log("Menu toggled");
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <div className="menu">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          isOpen,
          toggleMenu,
        });
      })}
    </div>
  );
}
