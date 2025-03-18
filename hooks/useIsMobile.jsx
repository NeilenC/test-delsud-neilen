import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 770) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= breakpoint);
      };
      handleResize();

      window.addEventListener("resize", handleResize);

      // Limpia el listener al desmontar el componente
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;