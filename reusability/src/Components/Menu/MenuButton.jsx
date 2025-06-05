import React from "react";
import Button from "../Button/Button.jsx";
import Toggle from "../Toggle/ToggleIndex.jsx";
import { ToggleContext } from "../Toggle/Toggle.jsx";

export default function MenuButton({ children }) {
  const { on, toggle } = React.useContext(ToggleContext);

  return (
    <Toggle.Button>
      <Button
        variant="primary"
        size="lg "
        className="menu-button"
        onClick={toggle}
        aria-controls="menuId"
        aria-expanded={on}
      >
        <span className="sr-only">Toggle Menu</span>
        {children}
      </Button>
    </Toggle.Button>
  );
}
