import React from "react";
import classnames from "classnames";
import { ThemeContext } from "./ThemeButton";

export default function Button({
  children,
  size,
  className,
  variant,
  ...restProps
}) {
  const { theme } = React.useContext(ThemeContext);

  let sizeClass = size ? `button-${size}` : "";

  let variantClass = variant ? `button-${variant}` : "";

  let themeCLass = theme === "dark" ? "button-dark" : "button-light";

  const allClasses = classnames(sizeClass, className, variantClass, themeCLass);
  

  return (
    <button className={allClasses} {...restProps}>
      {children}
    </button>
  );
}
