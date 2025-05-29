import react from "react";
import MenuButton from "./MenuButton.jsx";
import MenuDropdown from "./MenuDropdown.jsx";

export default function Menu({ children }) {
  const [isOpen, setIsOpen] = react.useState(true);

  function toggleMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return <div className="menu">{children}</div>;
}
