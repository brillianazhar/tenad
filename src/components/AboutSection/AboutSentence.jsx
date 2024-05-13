import React, { useRef } from "react";
import { slideUp } from "./animation";
import { motion, useInView } from "framer-motion";

const AboutSentence = () => {
  const aboutText =
    "Interested in Frontend Web Development and UI/UX. Have a strong foundation in HTML, CSS, PHP, and Javascript, and currently learning ReactJs.";
  const highlightText = "Frontend Web Development UI/UX.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div className="w-full  flex justify-center items-center">
      <div
        ref={description}
        className="text-primaryLight text-2xl md:text-4xl lg:text-6xl w-full "
      >
        <p className="flex flex-wrap gap-x-[8px] leading-[1.5]">
          {aboutText.split(" ").map((word, index) => {
            if (highlightText.includes(word)) {
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
                    className="text-primary"
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            }
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

export default AboutSentence;
