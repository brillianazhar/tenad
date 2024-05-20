import Image from "next/image";
import React from "react";
import FramerMagnetic from "../common/FramerMagnetic";
import Title from "../common/Title";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideUp, drawDown } from "./animation";

const AboutBio = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-y-10 lg:gap-y-0 my-32 lg:my-52">
        <Link
          href={
            "https://drive.google.com/file/d/1EDxyGejgwcvoBwfirI3p1kxSGo4dhX5h/view?usp=sharing"
          }
        >
          <FramerMagnetic size={160} stiffness={10}>
            <Title w="w-40" h="h-40" bg="bg-primary" text="text-primaryLight">
              Download CV
            </Title>
          </FramerMagnetic>
        </Link>
        <div className="flex gap-x-3 md:gap-x-5 lg:gap-x-10 justify-center items-center">
          <motion.div
            initial="initial"
            whileInView="open"
            viewport={{ once: true }}
            className="flex flex-col justify-center h-80 text-primaryLight text-right gap-y-2 lg:gap-y-5"
          >
            <div className="overflow-hidden">
              <motion.p
                variants={slideUp}
                custom={0}
                className="text-xs md:text-lg lg:text-2xl font-bold"
              >
                Brillian Azhar Danetta
              </motion.p>
            </div>
            <div className="text-[10px] md:text-sm lg:text-base overflow-hidden">
              <motion.p variants={slideUp} custom={2}>
                {new Date().getFullYear() - 2001} yo
              </motion.p>
            </div>
            <div className="text-[10px] md:text-sm lg:text-base overflow-hidden">
              <motion.p variants={slideUp} custom={4}>
                brilianazhardanet@gmail.com
              </motion.p>
            </div>
            <div className="text-[10px] md:text-sm lg:text-base overflow-hidden">
              <motion.p variants={slideUp} custom={6}>
                +6285 842 626 890
              </motion.p>
            </div>
            <div className="text-[10px] md:text-sm lg:text-base overflow-hidden">
              <motion.p variants={slideUp} custom={8}>
                Purbalingga, Central Java
              </motion.p>
            </div>
          </motion.div>
          <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-80 lg:h-80 bg-primary flex items-center justify-center overflow-hidden">
            <motion.div
              variants={drawDown}
              initial="initial"
              whileInView="animate"
              className="absolute w-full h-full bg-primary"
              viewport={{ once: true }}
            ></motion.div>
            <Image
              src={"/image/portrait.svg"}
              alt="portrait"
              width={500}
              height={500}
              className="w-20 md:w-28 lg:w-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBio;
