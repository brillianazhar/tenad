import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "./animation";

const Opening = ({ children }) => {
  return (
    <main className="relative overflow-hidden">
      <motion.div
        variants={slideUp}
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

export default Opening;
