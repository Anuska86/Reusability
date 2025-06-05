import React from "react";
import Toggle from "../Toggle/ToggleIndex";

export default function Menu({ children }) {
  return (
    <div className="menu" role="menu">
      {children}
    </div>
  );
}
