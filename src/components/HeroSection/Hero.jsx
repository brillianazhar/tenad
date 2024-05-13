import Image from "next/image";
import React, { useRef } from "react";
import { Manrope } from "next/font/google";
import { ReactTyped } from "react-typed";
import { motion, useScroll, useTransform } from "framer-motion";
import { imgPop, main, second, typing } from "./animation";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const left = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <section
      ref={container}
      className={`w-full h-screen overflow-hidden ${manrope.className}`}
    >
      <div className="relative text-primaryLight w-full flex flex-col justify-end h-full items-center">
        <div className="font-bold text-lg md:text-xl lg:text-3xl z-[4] top-72 bg-primaryDark w-[450px] p-1 ml-60 md:ml-36 lg:ml-24 overflow-hidden pointer-events-none">
          <motion.div
            variants={typing}
            initial="hidden"
            animate="animate"
            custom={0}
          >
            <ReactTyped
              strings={["FRONTEND WEB DEVELOPER."]}
              typeSpeed={70}
              backSpeed={10}
              loop
            />
          </motion.div>
        </div>
        <motion.div
          variants={imgPop}
          initial="hidden"
          whileInView="animate"
          custom={0}
          viewport={{ once: true }}
          className="w-[500px] h-[235px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[500px] flex justify-end mb-20 md:mb-0"
        >
          <div className="w-[350px] h-full bg-primary z-[1]"></div>
        </motion.div>
        <motion.div
          variants={imgPop}
          initial="hidden"
          whileInView="animate"
          custom={0}
          viewport={{ once: true }}
          className="absolute w-[276px] h-[384px] md:w-[340px] md:h-[473px] lg:w-[450px] lg:h-[625.2px] z-[3] object-cover mb-20 md:mb-0"
        >
          <Image
            src={"/image/portrait.png"}
            alt="portraitImage"
            fill
            sizes="(max-width: 1000px)"
            priority={true}
            fetchPriority="high"
          />
        </motion.div>
      </div>
      <div className="relative text-primaryLight pointer-events-none">
        <motion.p
          variants={main}
          initial="hidden"
          animate="animate"
          custom={0}
          style={{ x: left }}
          className="absolute text-[75px] md:text-[95px] lg:text-[125px] font-bold text-nowrap left-0 bottom-0 z-[0] mb-20 md:mb-0"
        >
          BRILLIAN AZHAR DANETTA BRILLIAN AZHAR DANETTA
        </motion.p>
        <motion.p
          variants={main}
          initial="hidden"
          animate="animate"
          custom={0}
          style={{ x: left }}
          className="absolute text-[75px] md:text-[95px] lg:text-[125px] font-bold text-nowrap left-0 bottom-0 text-transparent stroke z-[4] mb-20 md:mb-0"
        >
          BRILLIAN AZHAR DANETTA BRILLIAN AZHAR DANETTA
        </motion.p>
        <motion.p
          variants={second}
          initial="hidden"
          animate="animate"
          custom={0}
          className="absolute right-0 bottom-0 p-1 text-xs md:text-sm lg:text-base z-[1] mb-14 md:mb-0"
        >
          / danet / <span className="text-[8px] md:text-xs">reverse</span>.tenad
          / 10ad
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
