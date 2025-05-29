import React from "react";

export default function MenuDropdown({ children, isOpen }) {
  return (
    <div>{isOpen ? <div className="menu-dropdown">{children}</div> : null}</div>
  );
}
