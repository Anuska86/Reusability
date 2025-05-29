import react from "react";
import Button from "../Button/Button.jsx";

export default function MenuButton({ onClick, children }) {
  return (
    <Button variant="primary" size="lg " onClick={onClick}>
      {children}
    </Button>
  );
}
