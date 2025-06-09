import React from "react";
import Toggle from "../Toggle/ToggleIndex";
import useToggle from "../../Hooks/useToggle";

export default function MenuContainer() {
  const [open, toggleOpen] = useToggle();

  return (
    <div>
      <button onClick={toggleOpen}>Toggle Menu</button>
      {open && <div className="menu-content">Menu is open</div>}
    </div>
  );
}
