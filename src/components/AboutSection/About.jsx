import React from "react";
import Title from "../common/Title";
import Link from "next/link";
import AboutSentence from "./AboutSentence";

const About = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden px-5 md:px-10 py-20 md:py-10 lg:py-0 my-32 md:my-52 selection:text-primaryLight selection:bg-primary">
      <div className="relative w-full h-full flex items-center justify-end">
        <Title bg={"bg-primary"} text={"text-primaryDark"}>
          /About
        </Title>
      </div>
      <div className="xl:mr-[370px] cursor-default">
        <AboutSentence />
      </div>
      <div className="w-full flex items-center justify-start text-primary text-base md:text-lg lg:text-xl underline gap-x-10">
        <Link
          href={"/about"}
          className="hover:text-primaryLight transition-all"
        >
          More Details
        </Link>
        <Link href={"#"} className="hover:text-primaryLight transition-all">
          Download CV
        </Link>
      </div>
    </section>
  );
};

export default About;
