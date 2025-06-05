import React from "react";
import MenuButton from "./MenuButton.jsx";
import MenuDropdown from "./MenuDropdown.jsx";

const MenuContext = React.createContext();

export default function Menu({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuId = React.useId();

  function toggleMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu, menuId }}>
      <div className="menu" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

export { MenuContext };

/* {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            isOpen,
            toggleMenu,
          }); */
