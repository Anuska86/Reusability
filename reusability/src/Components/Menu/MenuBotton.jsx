import react from "react";
import Button from "../Button/Button.jsx";

export default function MenuButton({ onClick, buttonText }) {
  return <Button onClick={onClick}>{buttonText}</Button>;
}
