import React, { useMemo } from "react";

/**
 * InfiniteMovingItems
 * Simple horizontally looping row. Duplicates children for seamless effect.
 */
const InfiniteMovingItems = ({
  items = [],
  speed = "normal",
  className = "",
}) => {
  const speedClass =
    {
      slow: "animate-[marquee_50s_linear_infinite]",
      normal: "animate-[marquee_30s_linear_infinite]",
      fast: "animate-[marquee_15s_linear_infinite]",
    }[speed] || "animate-[marquee_30s_linear_infinite]";

  const doubled = useMemo(() => [...items, ...items], [items]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`flex w-max ${speedClass}`}>
        {doubled.map((item, idx) => (
          <div
            key={idx}
            className="px-6 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2 whitespace-nowrap"
          >
            {item.icon && (
              <span className="text-purple-500 dark:text-purple-400 text-lg">
                {item.icon}
              </span>
            )}
            <span>{item.label || item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMovingItems;
