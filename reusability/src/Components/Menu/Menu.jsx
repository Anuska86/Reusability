import React from "react";
import useToggle from "../../Hooks/useToggle";

const MenuContext = React.createContext();

export default function Menu({ children,onOpen }) {
  const [open, toggleOpen] = useToggle({initialValue:true, onToggle:onOpen});

  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      <div className="menu">{children}</div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
