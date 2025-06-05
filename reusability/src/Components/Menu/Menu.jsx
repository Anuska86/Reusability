import React from "react";
import Toggle from "../Toggle/ToggleIndex";

const MenuContext = React.createContext();

export default function Menu({ children }) {
  return (
    <Toggle>
      <div className="menu" role="menu">
        {children}
      </div>
    </Toggle>
  );
}

export { MenuContext };
