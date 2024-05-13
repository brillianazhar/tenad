import About from "@/components/AboutSection/About";
import Contact from "@/components/ContactSection/Contact";
import Hero from "@/components/HeroSection/Hero";
import MainOpening from "@/components/Opening/MainOpening";
import Project from "@/components/ProjectSection/Project";
import Techstack from "@/components/TechstackSection/Techstack";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // setTimeout(() => {
  //   setLoading((state) => !state);
  // }, 1500);

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   setTimeout(() => {
  //     document.body.style.overflow = "auto";
  //   }, 1000);
  // }, []);

  return (
    <main>
      <Head>
        <title>TENAD - Personal Portfolio</title>
      </Head>
      {/* <AnimatePresence mode="wait">
        {loading && <MainOpening />}
      </AnimatePresence> */}
      <Hero />
      <About />
      <Techstack />
      <Project />
      <Contact />
    </main>
  );
}
