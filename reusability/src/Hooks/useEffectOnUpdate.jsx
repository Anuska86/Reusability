import React, { useEffect } from "react";

export default function useEffectOnUpdate(effectFunction, deps) {
  const firstRender = React.useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      effectFunction();
    }
  }, deps);
}
