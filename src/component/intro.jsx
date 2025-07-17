  "use client";
  import Image from 'next/image';
  import { motion } from "framer-motion";
  import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
  import { WavyBackground } from "@/component/ui/wavy-background";
  import React from "react";

  function Intro({ isVisible }) {
    return (
      <div>
        <WavyBackground className="max-w-4xl mx-auto pb-40 mt-20 font-sans">
          <div className="flex justify-center p-10">
            <div className="flex flex-col items-start space-y-4 mt-[100px]">
              <motion.h1
                initial={{ x: "-100vw" }}
                animate={isVisible ? { x: "-5vw" } : {}}
                transition={{ type: "spring", stiffness: 70, damping: 5 }}
                className="text-6xl font-bold text-amber-300"
              >
                Hi there
              </motion.h1>

              <motion.h1
                initial={{ x: "-100vw" }}
                animate={isVisible ? { x: "-5vw" } : {}}
                transition={{ type: "spring", stiffness: 50, damping: 5, delay: 0.2 }}
                className="text-6xl font-bold text-amber-300"
              >
                I'm <span className="text-white">Pushkar Patil</span>
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 20, x: "-5vw" }}
                animate={isVisible ? { opacity: 1, y: 0, x: "-5vw" } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl text-amber-300"
              >
                I'm into Web Development
              </motion.h1>

              <div className="flex flex-row mt-10 text-3xl">
                {[FaInstagram, FaLinkedin, FaGithub, FaFacebook].map((Icon, index) => (
                  <motion.span key={index} whileHover={{ scale: 1.3 }} className="px-5">
                    <Icon />
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.span
              initial={{ x: "100vw" }}
              animate={isVisible ? { x: "2vw" } : {}}
              transition={{ type: "spring", stiffness: 50, damping: 5 }}
              className="mt-10"
            >
              <Image
                src="/Intro/photo.png"
                alt=""
                width={400}
                height={100}
                className="rounded-4xl"
              />
            </motion.span>
          </div>
        </WavyBackground>
      </div>
    );
  }

  export default Intro;
