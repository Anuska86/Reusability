import React from "react";

export default function Button({ children,size, ...restProps }) {
  console.log(restProps);

let sizeClass = "";
if (size === "sm") {
  sizeClass = "button-small";
} else if (size === "lg") {
  sizeClass = "button-large";
}

  return (
    <button
      className={sizeClass}
      {...restProps}
    >
      {children}
    </button>
  );
}
