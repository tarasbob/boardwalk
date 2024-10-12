import { useEffect } from "react";

const useParallaxEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      const layer1 = document.querySelector(".layer1");
      const layer2 = document.querySelector(".layer2");

      if (layer1) {
        const translateY1 = scrollPosition * 0.5; // Moves at half the scroll speed
        layer1.style.transform = `translateY(${translateY1}px)`;
      }

      if (layer2) {
        const translateY2 = scrollPosition * 0.3; // Moves at 30% of the scroll speed
        layer2.style.transform = `translateY(${translateY2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useParallaxEffect;
