import React from "react";

export default function MenuDropdown({ children, isOpen, toggleMenu }) {
  return (
    <div>
      {isOpen ? (
        <div className="menu-dropdown">
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              toggleMenu,
              isOpen,
            });
          })}
        </div>
      ) : null}
    </div>
  );
}
