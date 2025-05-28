import React from "react";
import classnames from "classnames";

export default function Button({
  children,
  size,
  className,
  variant,
  ...restProps
}) {
  console.log(restProps);

  let sizeClass = size ? `button-${size}` : "";

  let variantClass = variant ? `button-${variant}` : "";

  const allClasses = classnames(sizeClass, className, variantClass);
  console.log(allClasses);

  return (
    <button className={allClasses} {...restProps}>
      {children}
    </button>
  );
}
