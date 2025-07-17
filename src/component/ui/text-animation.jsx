"use client";

import React, { useState, useEffect } from "react";
import useInVisible from "@/component/hooks/useInVisible";

const TypeInWords = ({ text, className = "", delay = 100 }) => {
  const [ref, isVisible] = useInVisible();
  const words = text.split(" ");
  const [visibleCount, setVisibleCount] = useState(0);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);      // start rendering when visible
      setVisibleCount(0);         // restart animation
    }
  }, [isVisible]);

  useEffect(() => {
    if (shouldRender && visibleCount < words.length) {
      const timeout = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [visibleCount, shouldRender, delay, words.length]);

  return (
    <div
      ref={ref}
      className={`flex flex-wrap gap-2 ${className}`}
    >
      {shouldRender &&
        words.map((word, index) => (
          <span
            key={index}
            className={`transition-all duration-700 ease-in-out ${
              index <= visibleCount ? "opacity-100" : "opacity-0"
            }`}
          >
            {word}
          </span>
        ))}
    </div>
  );
};

export default TypeInWords;
    