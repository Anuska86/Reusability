import React from "react";
import classnames from "classnames";

export default function Button({ children, size, className, ...restProps }) {
  console.log(restProps);

  let sizeClass = size ? `button-${size}` : "button-md";

  const allClasses = classnames(sizeClass, className);
  console.log(allClasses);

  return (
    <button className={allClasses} {...restProps}>
      {children}
    </button>
  );
}
