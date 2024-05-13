import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideUp } from "./animation";

const descText =
  "A recent graduate from Dian Nuswantoro University, specializing in Informatics Engineering, passionate in Frontend Web Development. My education equipped me with the fundamentals of HTML, PHP, and JavaScript. Currently, I am focused on furthering my skills in ReactJS. I have a keen interest in design due to my hobby of drawing. I hope this skill will be beneficial for me, especially in UI/UX design and Frontend Web Development.";

const AboutDesc = () => {
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div>
      <div
        ref={description}
        className="text-lg md:text-xl lg:text-4xl leading-relaxed xl:w-3/4 text-primaryLight my-24"
      >
        <p className="flex flex-wrap gap-x-[8px] leading-[1.5] 2xl:leading-[1.8]">
          {descText.split(" ").map((word, index) => {
            return (
              <span
                key={index}
                className="relative overflow-hidden inline-flex"
              >
                <motion.span
                  variants={slideUp}
                  initial="initial"
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  viewport={{ once: true }}
                  // animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default AboutDesc;
