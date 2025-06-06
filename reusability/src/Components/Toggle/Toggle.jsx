import React, { useEffect } from "react";

const ToggleContext = React.createContext();

export default function Toggle({ children, onToggle = () => {} }) {
  //noop function that does nothing by default
  const [on, setOn] = React.useState(false);
  const firstRender = React.useRef(true);

  function toggle() {
    setOn((prevOn) => !prevOn);
    console.log("Toggled!");
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      onToggle();
    }
  }, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
