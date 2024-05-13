import React from "react";
import AboutDesc from "./AboutDesc";
import AboutBio from "./AboutBio";
import { motion } from "framer-motion";
import { popUp, slideUp } from "./animation";

const AboutHomePage = () => {
  return (
    <section className="min-h-screen pt-40 px-5 lg:px-10 overflow-hidden selection:text-primaryLight selection:bg-primary">
      <motion.div
        variants={popUp}
        initial="initial"
        whileInView="animate"
        className="w-full flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 lg:justify-between lg:items-center text-primaryLight"
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-start justify-center">
          <p className="text-xs lg:text-base text-primary">
            Undergraduate from
          </p>
          <p className="text-base lg:text-xl font-bold">
            Dian Nuswantoro University
          </p>
        </div>
        <div className="hidden w-[1px] h-20 bg-primary lg:flex items-end justify-center"></div>
        <div className="flex flex-col items-start lg:items-center justify-center">
          <p className="text-xs lg:text-base text-primary">{`Bachelor's degree`}</p>
          <p className="text-base lg:text-xl font-bold">
            Informatic Engineering
          </p>
        </div>
        <div className="hidden w-[1px] h-20 bg-primary lg:flex items-end justify-center"></div>
        <div className="flex flex-col items-start lg:items-end justify-center">
          <p className="text-xs lg:text-base text-primary">Interest</p>
          <p className="text-base lg:text-xl font-bold">
            Frontend Web Developer
          </p>
          <p className="text-base lg:text-xl font-bold">Design</p>
        </div>
      </motion.div>
      <AboutDesc />
      <AboutBio />
    </section>
  );
};

export default AboutHomePage;
