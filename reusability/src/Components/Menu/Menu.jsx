import react from "react";
import MenuButton from "./MenuBotton.jsx";
import MenuDropdown from "./MenuDropdown.jsx";

export default function Menu({ buttonText = "Menu", items }) {
  const [isOpen, setIsOpen] = react.useState(true);

  function toggleMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <div className="menu">
      <MenuButton onClick={toggleMenu} buttonText={buttonText}>
        {buttonText}
      </MenuButton>
      {isOpen && <MenuDropdown items={items} />}
    </div>
  );
}


