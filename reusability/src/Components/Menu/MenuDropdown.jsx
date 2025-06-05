import React from "react";
import Toggle from "../Toggle/ToggleIndex.jsx";
import { ToggleContext } from "../Toggle/Toggle.jsx";

export default function MenuDropdown({ children }) {
  const { on } = React.useContext(ToggleContext);

  return on ? (
    <div className="menu-dropdown" aria-controls="menuId">
      {children}
    </div>
  ) : null;
}
