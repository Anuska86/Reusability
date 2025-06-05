import React from "react";
import { MenuContext } from "./Menu.jsx";

export default function MenuDropdown({ children }) {
  const { isOpen, toggleMenu, menuId } = React.useContext(MenuContext);

  return (
    <div>
      {isOpen ? (
        <div className="menu-dropdown" aria-controls="menuId">
          {children}
        </div>
      ) : null}
    </div>
  );
}
