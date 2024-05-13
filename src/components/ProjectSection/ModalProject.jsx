import Image from "next/image";
import React from "react";
import { scaleModal } from "./animation";
import { motion } from "framer-motion";

const ModalProject = ({ modal, projects, mousePosition }) => {
  const { x, y } = mousePosition;
  return (
    <>
      <motion.div
        variants={scaleModal}
        initial="initial"
        animate={modal.active ? "open" : "close"}
        style={{ x, y }}
        className="fixed left-0 top-0 w-[350px] h-[350px] flex justify-center items-center overflow-hidden pointer-events-none"
      >
        <div
          style={{ top: `${modal.index * -100}%` }}
          className="modalSlider w-full h-full absolute"
        >
          {projects.map((project, i) => {
            return (
              <div
                key={i}
                style={{ backgroundColor: `${project.color}` }}
                className="relative h-full flex justify-center items-center"
              >
                <Image
                  src={project.src}
                  alt="project"
                  width={400}
                  height={0}
                  placeholder="blur"
                />
              </div>
            );
          })}
        </div>
        <div className="absolute flex justify-center items-center rounded-full p-1 w-14 h-14 bg-primaryDark text-primaryLight">
          Detail
        </div>
      </motion.div>
    </>
  );
};

export default ModalProject;
