import React from "react";
import Toggle from "../Toggle/ToggleIndex";

export default function Menu({ children,onOpen }) {
  return (
    <Toggle value={false} onToggle={onOpen}>
      <div className="menu" role="menu">
        {children}
      </div>
    </Toggle>
  );
}
