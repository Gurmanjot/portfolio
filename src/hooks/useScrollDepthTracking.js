import { useEffect, useRef } from "react";
import { trackScrollDepth } from "../utils/analytics";

const useScrollDepthTracking = () => {
  const scrollDepthsTracked = useRef(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      // Track at specific milestones
      const milestones = [25, 50, 75, 90, 100];

      milestones.forEach((milestone) => {
        if (
          scrollPercentage >= milestone &&
          !scrollDepthsTracked.current.has(milestone)
        ) {
          scrollDepthsTracked.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default useScrollDepthTracking;
