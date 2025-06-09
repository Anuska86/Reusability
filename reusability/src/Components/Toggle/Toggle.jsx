import React, { useEffect } from "react";
import useEffectOnUpdate from "../../Hooks/useEffectOnUpdate";
import useToggle from "../../Hooks/useToggle";

const ToggleContext = React.createContext();

export default function Toggle({ children, onToggle = () => {} }) {
  //noop function that does nothing by default
  const [on, toggle] = useToggle();

  useEffectOnUpdate(() => {
    onToggle();
  }, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
