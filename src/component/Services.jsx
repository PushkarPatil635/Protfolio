"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center text-amber-300 pt-20 ">
      <motion.h2
        ref={ref}
        initial={{ x: "-100vw" }}
        animate={isVisible ? { x: 0 } : { x: "50vw" }}
        transition={{ type: "spring", stiffness: 70, damping: 7 }}
        className="text-4xl"
      >
        Services
      </motion.h2>
    </div>
  );
};

export default Services;
