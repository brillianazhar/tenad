import Image from "next/image";
import React, { useEffect, useState } from "react";
import { slideUp } from "./animation";
import { motion, useSpring } from "framer-motion";
import Link from "next/link";
// import thumbLpmk from "/public/image/projects/lpmk/thumbnailLPMK.webp";
// import thumbSpk from "/public/image/projects/spk/thumbnailSPK.webp";
import { scaleModal } from "./animation";
import datas from "@/data/data.json";

// const projects = [
//   {
//     name: "Lpmk",
//     year: "2023",
//     thumb: thumbLpmk,
//     color: "#DDB9B6",
//   },
//   {
//     name: "Spk",
//     year: "2023",
//     thumb: thumbSpk,
//     color: "#92D6CD",
//   },
//   {
//     name: "iAmenities",
//     year: "2024",
//     thumb: "/image/projects/iAmenities/thumbIamenities.mp4",
//     color: "#8CCE8F",
//   },
//   {
//     name: "Movis",
//     year: "2024",
//     thumb: "/image/projects/movis/thumbMovis.mp4",
//     color: "#799CD5",
//   },
// ];

const ProjectList = () => {
  const [data, setData] = useState([]);
  const [hovered, setHovered] = useState(false);
  const size = 80;

  useEffect(() => {
    setData(datas.projects);
  }, []);

  const spring = {
    stiffness: 200,
    damping: 10,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - size / 2;
    const targetY = clientY - size / 2;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  const { x, y } = mousePosition;

  const enter = () => {
    setHovered((state) => !state);
  };

  const leave = () => {
    setHovered((state) => !state);
  };

  return (
    <section
      onMouseMove={mouseMove}
      className="min-h-screen my-52 selection:text-primaryLight selection:bg-primary"
    >
      <motion.div
        variants={scaleModal}
        initial="initial"
        animate={hovered ? "open" : "close"}
        style={{ x, y }}
        transition={{ type: "tween", ease: "backOut" }}
        className={`fixed top-0 left-0 w-[${size}px] h-[${size}px] bg-black bg-opacity-25 backdrop-blur-sm rounded-full border-primary pointer-events-none z-[1]`}
      ></motion.div>
      <motion.div
        variants={scaleModal}
        initial="initial"
        animate={hovered ? "open" : "close"}
        style={{ x, y }}
        transition={{ type: "tween", ease: "backOut" }}
        className={`fixed top-0 left-0 w-[${size}px] h-[${size}px] flex justify-center items-center text-white pointer-events-none z-[2]`}
      >
        Details
      </motion.div>
      <div className="flex flex-wrap w-full items-center justify-center gap-16 lg:gap-20 xl:gap-32">
        {data.map((project, i) => {
          return (
            <div key={i} className="flex flex-col text-primaryLight gap-y-2">
              <Link
                onMouseEnter={enter}
                onMouseLeave={leave}
                href={`/projects/${project.slug}`}
                style={{ backgroundColor: project.color }}
                className="relative overflow-hidden flex flex-col items-center justify-center w-[300px] lg:w-[450px] h-[300px] lg:h-[450px] lg:px-5"
              >
                {project.thumb.type === "img" ? (
                  <Image
                    src={project.thumb.src}
                    alt="thumbnail"
                    width={400}
                    height={0}
                    className="w-auto h-auto"
                  />
                ) : (
                  <video
                    width="450"
                    loop
                    src={`${project.thumb.src}`}
                    autoPlay={true}
                    muted
                  />
                )}
                <motion.div
                  variants={slideUp}
                  initial="initial"
                  whileInView={"open"}
                  viewport={{ once: true }}
                  className="w-full h-full absolute flex justify-center items-center bg-primary"
                ></motion.div>
              </Link>
              <div className="flex items-center justify-between w-full">
                <Link href={"#"} className="text-xl font-bold hover:underline">
                  {project.name}
                </Link>
                <p>Website</p>
              </div>
              <p className="text-primary">{project.year}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectList;
