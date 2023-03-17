import { useEffect, useState } from "react";
import { Context } from "./Context";

const ProviderData = ({ children }) => {
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
  return (
    <Context.Provider
      value={{
        showMobileMenu,
        setShowMobileMenu,
        windowSize,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ProviderData };
