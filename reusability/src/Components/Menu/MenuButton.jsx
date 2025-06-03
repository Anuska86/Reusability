import React from "react";
import Button from "../Button/Button.jsx";
import { MenuContext } from "./Menu.jsx";

export default function MenuButton({ children, toggleMenu,isOpen }) {
  return (
    <Button variant="primary" size="lg " onClick={toggleMenu}>
      {children}
    </Button>
  );
}
