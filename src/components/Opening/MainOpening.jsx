import React from "react";
import { motion } from "framer-motion";
import { slideLeft } from "./animation";

const MainOpening = ({ children }) => {
  return (
    <main className="relative overflow-hidden">
      <motion.div
        variants={slideLeft}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ originX: 0, originY: 1 }}
        className="fixed flex justify-end items-end w-full h-full bg-primary z-[99]"
      ></motion.div>
      {children}
    </main>
  );
};

export default MainOpening;
