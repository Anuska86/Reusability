import React from "react";

export default function useToggle(initialValue = false) {
  const [on, setOn] = React.useState(initialValue);

  function toggle() {
    setOn((prevOn) => !prevOn);
    console.log("Toggled!");
  }

  return [on, toggle];
}
