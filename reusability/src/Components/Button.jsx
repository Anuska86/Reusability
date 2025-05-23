import React from "react";

export default function Button({ children, ...restProps }) {
  console.log(restProps);

  return <button {...restProps}>{children}</button>;
}
