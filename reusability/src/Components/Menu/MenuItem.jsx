import React from "react";

export default function MenuItem({ children,toggleMenu, isOpen }) {
  return (
    
    <div className="menu-item">
      {children}
    </div>
  );
}
