import React from "react";
import MenuButton from "./MenuButton.jsx";
import MenuDropdown from "./MenuDropdown.jsx";

const MenuContext = React.createContext();

export default function Menu({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      <div className="menu">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            isOpen,
            toggleMenu,
          });
        })}
      </div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
