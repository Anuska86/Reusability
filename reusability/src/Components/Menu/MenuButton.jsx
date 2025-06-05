import React from "react";
import Button from "../Button/Button.jsx";
import { MenuContext } from "./Menu.jsx";

export default function MenuButton({ children }) {
  const { isOpen, toggleMenu, menuId } = React.useContext(MenuContext);

  return (
    <Button
      variant="primary"
      size="lg "
      onClick={toggleMenu}
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-controls={menuId}
      className="menu-button"
    >
      <span className="sr-only">Toggle Menu</span>
      {children}
    </Button>
  );
}
