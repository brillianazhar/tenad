import React, { useState } from "react";
import Image from "next/image";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { scrollOpacity, popUp } from "./animation";
import { IoIosArrowRoundDown } from "react-icons/io";

const ProjectsHomePage = () => {
  const { scrollY } = useScroll();
  const [opacity, setOpacity] = useState(1);

  useMotionValueEvent(scrollY, "change", (num) => {
    num > 0 ? setOpacity(0) : setOpacity(1);
  });

  return (
    <section className="cursor-default selection:text-primaryLight selection:bg-primary">
      <div className="w-full h-screen flex flex-col">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="flex flex-col justify-center items-center">
            <div className="overflow-hidden">
              <motion.div
                variants={popUp}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="relative flex items-center justify-center text-primaryLight text-3xl md:text-8xl lg:text-9xl font-bold gap-x-1 lg:gap-x-3"
              >
                <p>TAKE A L</p>
                <Image
                  src="/image/gif/eyeAnimation.gif"
                  alt="animation"
                  width={500}
                  height={500}
                  className="w-[100px] md:w-[200px] lg:w-[300px]"
                  unoptimized
                />
                <p>K</p>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                variants={popUp}
                initial="initial"
                whileInView={"animate2"}
                viewport={{ once: true }}
                className="relative"
              >
                <p className="text-primaryLight text-center lg:text-left text-6xl lg:text-7xl">
                  AT MY <span className="text-primary">PROJECTS</span>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          variants={scrollOpacity}
          initial="initial"
          animate={opacity === 0 ? "close" : "open"}
          className="w-full flex justify-center items-center"
        >
          <p className="text-primaryLight text-xs md:text-sm lg:text-base text-center font-bold py-5">
            Scroll to explore
          </p>
          <IoIosArrowRoundDown className="w-8 h-8 text-primaryLight" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHomePage;
