// "use client";
// import React, { useEffect, useRef, useState, memo } from "react";
// import { motion } from "motion/react";
// import { twMerge } from "tailwind-merge";
// import { cn } from "@/lib/utils";

// export const TextRevealCard = ({
//   text,
//   revealText,
//   children,
//   className
// }) => {
//   const [widthPercentage, setWidthPercentage] = useState(0);
//   const cardRef = useRef(null);
//   const [left, setLeft] = useState(0);
//   const [localWidth, setLocalWidth] = useState(0);
//   const [isMouseOver, setIsMouseOver] = useState(false);

//   useEffect(() => {
//     if (cardRef.current) {
//       const { left, width: localWidth } =
//         cardRef.current.getBoundingClientRect();
//       setLeft(left);
//       setLocalWidth(localWidth);
//     }
//   }, []);

//   function mouseMoveHandler(event) {
//     event.preventDefault();

//     const { clientX } = event;
//     if (cardRef.current) {
//       const relativeX = clientX - left;
//       setWidthPercentage((relativeX / localWidth) * 100);
//     }
//   }

//   function mouseLeaveHandler() {
//     setIsMouseOver(false);
//     setWidthPercentage(0);
//   }
//   function mouseEnterHandler() {
//     setIsMouseOver(true);
//   }
//   function touchMoveHandler(event) {
//     event.preventDefault();
//     const clientX = event.touches[0].clientX;
//     if (cardRef.current) {
//       const relativeX = clientX - left;
//       setWidthPercentage((relativeX / localWidth) * 100);
//     }
//   }

//   const rotateDeg = (widthPercentage - 50) * 0.1;
//   return (
//     <div
//       onMouseEnter={mouseEnterHandler}
//       onMouseLeave={mouseLeaveHandler}
//       onMouseMove={mouseMoveHandler}
//       onTouchStart={mouseEnterHandler}
//       onTouchEnd={mouseLeaveHandler}
//       onTouchMove={touchMoveHandler}
//       ref={cardRef}
//       className={cn(
//         "bg-[#1d1c0] w-[40rem] rounded-lg p-8 relative overflow-hidden",
//         className
//       )}>
//       {children}
//       <div className="h-30 rounded-4xl relative flex items-center overflow-hidden">
//         <motion.div
//           style={{
//             width: "100%",
//           }}
//           animate={
//             isMouseOver
//               ? {
//                   opacity: widthPercentage > 0 ? 1 : 0,
//                   clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
//                 }
//               : {
//                   clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
//                 }
//           }
//           transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
//           className="w-70 absolute  bg-[#1d1c0] z-20  will-change-transform">
//           <p
//             style={{
//               textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
//             }}
//             className="text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
//             {revealText}
//           </p>
//         </motion.div>
//         <motion.div
//           animate={{
//             left: `${widthPercentage}%`,
//             rotate: `${rotateDeg}deg`,
//             opacity: widthPercentage > 0 ? 1 : 0,
//           }}
//           transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
//           className="h-40 w-[8px] bg-gradient-to-b from-transparent bg-[#161618] to-transparent absolute z-50 will-change-transform rounded-2xl"></motion.div>

//         <div
//           className=" overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
//           <p
//             className="text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-[#323238]">
//             {text}
//           </p>
//           <MemoizedStars />
//         </div>
//       </div>
//     </div>
//   );
// };

// export const TextRevealCardTitle = ({
//   children,
//   className
// }) => {
//   return (
//     <h2 className={twMerge("text-white text-lg mb-2", className)}>
//       {children}
//     </h2>
//   );
// };

// export const TextRevealCardDescription = ({
//   children,
//   className
// }) => {
//   return (<p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>);
// };

// const Stars = () => {
//   const randomMove = () => Math.random() * 4 - 2;
//   const randomOpacity = () => Math.random();
//   const random = () => Math.random();
//   return (
//     <div className="absolute inset-0">
//       {[...Array(80)].map((_, i) => (
//         <motion.span
//           key={`star-${i}`}
//           animate={{
//             top: `calc(${random() * 100}% + ${randomMove()}px)`,
//             left: `calc(${random() * 100}% + ${randomMove()}px)`,
//             opacity: randomOpacity(),
//             scale: [1, 1.2, 0],
//           }}
//           transition={{
//             duration: random() * 10 + 20,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           style={{
//             position: "absolute",
//             top: `${random() * 100}%`,
//             left: `${random() * 100}%`,
//             width: `px`,
//             height: `px`,
//             backgroundColor: "white",
//             borderRadius: "50%",
//             zIndex: 1,
//           }}
//           className="inline-block"></motion.span>
//       ))}
//     </div>
//   );
// };

// export const MemoizedStars = memo(Stars);
"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } =
        cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event) {
    event.preventDefault();
    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }

  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  function touchMoveHandler(event) {
    event.preventDefault();
    const clientX = event.touches[0].clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        "bg-[#1d1c0] w-[40rem] rounded-lg p-8 relative overflow-hidden",
        className
      )}
    >
      {children}
      <div className="h-40 rounded-4xl relative flex flex-col items-start justify-start overflow-hidden">
        {/* Reveal Text Layer */}
        <motion.div
          style={{ width: "100%" }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="w-70 absolute bg-[#1d1c0] z-20 will-change-transform text-left"
        >
          <p
            style={{ textShadow: "4px 4px 15px rgba(0,0,0,0.5)" }}
            className="text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 text-left"
          >
            {revealText}
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="h-30 w-[8px] bg-gradient-to-b from-transparent bg-[#161618] to-transparent absolute z-50 will-change-transform rounded-2xl"
        ></motion.div>

        {/* Default Text Layer */}
        <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] text-left">
          <p className="text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-[#323238] text-left">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({ children, className }) => {
  return (
    <h2 className={twMerge("text-white text-lg mb-2", className)}>{children}</h2>
  );
};

export const TextRevealCardDescription = ({ children, className }) => {
  return (
    <p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>
  );
};

// const Stars = () => {
//   const randomMove = () => Math.random() * 4 - 2;
//   const randomOpacity = () => Math.random();
//   const random = () => Math.random();
//   return (
//     <div className="absolute inset-0">
//       {[...Array(80)].map((_, i) => (
//         <motion.span
//           key={`star-${i}`}
//           animate={{
//             top: `calc(${random() * 100}% + ${randomMove()}px)`,
//             left: `calc(${random() * 100}% + ${randomMove()}px)`,
//             opacity: randomOpacity(),
//             scale: [1, 1.2, 0],
//           }}
//           transition={{
//             duration: random() * 10 + 20,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           style={{
//             position: "absolute",
//             top: `${random() * 100}%`,
//             left: `${random() * 100}%`,
//             width: `2px`,
//             height: `2px`,
//             backgroundColor: "white",
//             borderRadius: "50%",
//             zIndex: 1,
//           }}
//           className="inline-block"
//         ></motion.span>
//       ))}
//     </div>
//   );
// };

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const randomRange = (min, max) => Math.random() * (max - min) + min;

  return (
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => {
        const initialTop = `${randomRange(-20, 120)}%`;
        const initialLeft = `${randomRange(-20, 120)}%`;
        return (
          <motion.span
            key={`star-${i}`}
            initial={{
              top: initialTop,
              left: initialLeft,
              opacity: 0,
              scale: 1,
            }}
            animate={{
              top: `${randomRange(-20, 120)}%`,
              left: `${randomRange(-20, 120)}%`,
              opacity: randomOpacity(),
              scale: [1, 1.5, 0],
            }}
            transition={{
              duration: randomRange(20, 30),
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              width: "2px",
              height: "2px",
              backgroundColor: "white",
              borderRadius: "50%",
              zIndex: 1,
            }}
            className="inline-block"
          ></motion.span>
        );
      })}
    </div>
  );
};



export const MemoizedStars = memo(Stars);

