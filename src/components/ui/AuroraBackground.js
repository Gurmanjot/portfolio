import React from "react";
import clsx from "clsx";

/**
 * AuroraBackground
 * Animated gradient blobs behind content. Keep light for performance.
 */
const AuroraBackground = ({ className = "", children }) => {
  return (
    <div className={clsx("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,white,transparent)]">
        <div className="absolute -top-1/2 -left-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-pink-500 opacity-30 dark:opacity-20 blur-3xl animate-aurora" />
        <div className="absolute -bottom-1/2 -right-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 opacity-25 dark:opacity-15 blur-3xl animate-aurora" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AuroraBackground;
