import React from "react";
import Toggle from "../Toggle/ToggleIndex.jsx";

export default function MenuDropdown({ children }) {
  return (
    <Toggle.On>
      <div className="menu-dropdown" aria-controls="menuId">
        {children}
      </div>
    </Toggle.On>
  );
}
