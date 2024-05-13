import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { back, text } from "./animation";

const ProjectList = ({ item, index, setModal }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="border-b-2 border-primary relative w-full flex group"
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
    >
      <motion.div
        variants={text}
        className="basis-1/12 text-primary flex justify-start items-end"
      >
        <p className="text-sm md:text-lg lg:text-2xl">{item.year}</p>
      </motion.div>
      <motion.div
        variants={text}
        className="basis-10/12 text-primaryLight flex justify-start items-end"
      >
        <p className="font-bold text-4xl md:text-5xl lg:text-8xl pl-2 md:pl-0">
          {item.name}
        </p>
      </motion.div>
      <motion.div
        variants={text}
        className="basis-1/12 text-primary flex justify-end items-end"
      >
        <MdArrowOutward className="text-sm md:text-lg lg:text-4xl " />
      </motion.div>
      <motion.div
        variants={back}
        className="w-full h-full origin-bottom absolute bg-primary z-[-1]"
      ></motion.div>
    </motion.div>
  );
};

export default ProjectList;
