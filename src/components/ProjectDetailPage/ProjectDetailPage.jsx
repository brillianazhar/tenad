import Link from "next/link";
import React, { useEffect, useState } from "react";
import FramerMagnetic from "../common/FramerMagnetic";
import Title from "../common/Title";
import data from "@/data/data.json";
import { useRouter } from "next/router";
import { register } from "swiper/element/bundle";
import { motion } from "framer-motion";
import { slideUp, drawUp, popUp } from "./animation";

register();

const ProjectDetailPage = () => {
  const [project, setProject] = useState([]);
  const { query } = useRouter();
  const slug = query.slug;

  useEffect(() => {
    const getProject = () => {
      const projects = data.projects.filter(
        (project) => project.slug === slug
      )[0];
      setProject(projects);
    };
    if (slug) {
      return getProject();
    }
  }, [slug]);

  return (
    <>
      <main className="hidden h-screen w-full overflow-hidden lg:flex selection:text-primaryLight selection:bg-primary">
        <div className="h-full w-1/5">
          <div className="h-2/3 bg-primaryDark flex justify-start items-end overflow-hidden">
            <motion.div
              variants={slideUp}
              initial="initial"
              whileInView="open"
              viewport={{ once: true }}
              className="p-5"
            >
              <p className="text-primaryLight font-bold text-3xl xl:text-5xl">
                {project.name?.toUpperCase()}
              </p>
              <p className="text-xl text-primary">{project.year}</p>
            </motion.div>
          </div>
          <div className="h-1/2 bg-primaryLight"></div>
        </div>
        <div className="relative h-full w-3/5">
          <div className="absolute w-full h-full flex flex-col justify-between items-center py-80 2xl:py-24 lg:gap-y-20 2xl:gap-y-5">
            <div className="lg:w-[600px] xl:w-[800px] 2xl:w-[900px]">
              <swiper-container
                slides-per-view="1"
                // loop="true"
                style={{ "--swiper-pagination-color": `${project.color}` }}
                pagination="true"
                pagination-dynamic-bullets="true"
                grab-cursor="true"
              >
                <motion.div
                  variants={drawUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="absolute w-full h-full bg-primary z-10"
                ></motion.div>
                {project.imgSrc?.map((src, i) => {
                  return (
                    <swiper-slide key={i}>
                      <img src={src} alt="" />
                    </swiper-slide>
                  );
                })}
              </swiper-container>
            </div>
            <div className="text-primaryDark flex justify-center items-center">
              <motion.p
                variants={popUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-center text-lg"
              >
                {project.desc}
              </motion.p>
            </div>
          </div>
          <div className="h-2/3 bg-primaryDark"></div>
          <div className="h-1/3 bg-primaryLight"></div>
        </div>
        <div className="h-full w-1/5">
          <div className="h-2/3 bg-primaryDark"></div>
          <div
            className={`h-1/3 bg-primaryLight flex justify-center items-center ${
              project.src ? "" : "pointer-events-none"
            }`}
          >
            <Link target="_blank" href={`${project.src}`}>
              <FramerMagnetic size={150} stiffness={10}>
                <Title
                  h="h-[150px]"
                  w="w-[150px]"
                  bg="bg-primaryDark"
                  text="text-primaryLight"
                >
                  {project.src ? "Live Site" : "No Live Site"}
                </Title>
              </FramerMagnetic>
            </Link>
          </div>
        </div>
      </main>
      <main className="lg:hidden flex min-h-screen flex-col justify-between items-end px-5 pb-5 py-20">
        <div className="w-full overflow-hidden flex justify-between items-center">
          <motion.div
            variants={slideUp}
            initial="initial"
            whileInView="open"
            viewport={{ once: true }}
            className="flex items-end justify-between w-full"
          >
            <p className="text-primaryLight font-bold text-3xl">
              {project.name?.toUpperCase()}
            </p>
            <p className="text-lg text-primary">{project.year}</p>
          </motion.div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-y-5">
          <div className="w-full">
            <swiper-container
              slides-per-view="1"
              // loop="true"
              style={{ "--swiper-pagination-color": `${project.color}` }}
              pagination="true"
              pagination-dynamic-bullets="true"
              grab-cursor="true"
            >
              <motion.div
                variants={drawUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="absolute w-full h-full bg-primary z-10"
              ></motion.div>
              {project.imgSrc?.map((src, i) => {
                return (
                  <swiper-slide key={i}>
                    <img src={src} alt="" />
                  </swiper-slide>
                );
              })}
            </swiper-container>
          </div>
          <div className="text-primaryLight flex justify-center items-center">
            <motion.p
              variants={popUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center text-xs"
            >
              {project.desc}
            </motion.p>
          </div>
        </div>
        <div
          className={`justify-center items-center ${
            project.src ? "" : "pointer-events-none"
          }`}
        >
          <Link target="_blank" href={`${project.src}`}>
            <FramerMagnetic size={150} stiffness={10}>
              <Title
                h="h-[100px]"
                w="w-[100px]"
                bg="bg-primary"
                text="text-primaryLight"
              >
                {project.src ? "Live Site" : "No Live Site"}
              </Title>
            </FramerMagnetic>
          </Link>
        </div>
      </main>
    </>
  );
};

export default ProjectDetailPage;
