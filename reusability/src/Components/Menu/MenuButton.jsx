import React from "react";
import Button from "../Button/Button.jsx";
import Toggle from "../Toggle/ToggleIndex.jsx";
export default function MenuButton({ children }) {
  return (
    <Toggle.Button>
      <Button
        variant="primary"
        size="lg "
        className="menu-button"
        aria-controls="menuId"
      >
        <span className="sr-only">Toggle Menu</span>
        {children}
      </Button>
    </Toggle.Button>
  );
}
