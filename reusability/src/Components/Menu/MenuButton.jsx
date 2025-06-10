import React from "react";
import Button from "../Button/Button.jsx";
import { MenuContext } from "./Menu.jsx";

export default function MenuButton({ children }) {
  const {open, toggleOpen} = React.useContext(MenuContext);

  return (
    <Button
      variant="primary"
      size="lg "
      className="menu-button"
      aria-controls="menuId"
      onClick={toggleOpen}
    >
      <span className="sr-only">Toggle Menu</span>
      {children}
    </Button>
  );
}
