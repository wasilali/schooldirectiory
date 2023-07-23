import { useState, useEffect } from "react";
import NorthIcon from "@mui/icons-material/North";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300 hover:opacity-100 focus:outline-none z-40 bg-[#009688] rounded-full p-2 `}
      onClick={scrollToTop}
    >
      <NorthIcon style={{ color: "white" }} />
    </button>
  );
};

export default ScrollToTopButton;
