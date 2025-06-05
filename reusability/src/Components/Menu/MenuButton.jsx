import React from "react";
import Button from "../Button/Button.jsx";
import { MenuContext } from "./Menu.jsx";
import Toggle from "../Toggle/ToggleIndex.jsx";

export default function MenuButton({ children }) {
  return (
    <Toggle.Button>
      <Button variant="primary" size="lg " className="menu-button">
        <span className="sr-only">Toggle Menu</span>
        {children}
      </Button>
    </Toggle.Button>
  );
}
