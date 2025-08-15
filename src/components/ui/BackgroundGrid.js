import React from "react";
import clsx from "clsx";

const BackgroundGrid = ({ className = "", children }) => {
  return (
    <div className={clsx("relative", className)}>
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:140px_140px] [--grid-color:148,163,184] dark:[--grid-color:255,255,255] opacity-40 dark:opacity-10" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundGrid;
