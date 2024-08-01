import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (document.scrollingElement) {
        document.scrollingElement.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    handleScroll();
  }, [pathname]);

  return null;
}
