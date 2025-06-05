import React from "react";
import { MenuContext } from "./Menu.jsx";

export default function MenuDropdown({ children }) {
  const { isOpen, toggleMenu } = React.useContext(MenuContext);

  return (
    <div>{isOpen ? <div className="menu-dropdown">{children}</div> : null}</div>
  );
}
