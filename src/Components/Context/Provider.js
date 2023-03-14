import { useEffect, useState } from "react";
import { Context } from "./Context";

export const Provider = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export { Provider };
