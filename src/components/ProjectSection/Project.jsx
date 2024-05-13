import React, { useRef, useState } from "react";
import Title from "../common/Title";
import Link from "next/link";
import { useSpring } from "framer-motion";
import ProjectList from "./ProjectList";
import ModalProject from "./ModalProject";
import imgLpmk from "/public/image/projects/lpmk/thumbnailLPMK.webp";
import imgSpk from "/public/image/projects/spk/thumbnailSPK.webp";
import imgIamenities from "/public/image/projects/iAmenities/thumbnailIAMENITIES.webp";
import imgMovis from "/public/image/projects/movis/thumbnailMOVIS.webp";

const projects = [
  {
    name: "LPMK",
    year: "2023",
    src: imgLpmk,
    to: "/projects/lpmk",
    color: "#DDB9B6",
  },
  {
    name: "SPK INTAN AMENITIES",
    year: "2023",
    src: imgSpk,
    to: "/projects/spk",
    color: "#92D6CD",
  },
  {
    name: "iAMENITIES",
    year: "2024",
    src: imgIamenities,
    to: "/projects/iamenities",
    color: "#8CCE8F",
  },
  {
    name: "MOVIS",
    year: "2024",
    src: imgMovis,
    to: "/projects/movis",
    color: "#799CD5",
  },
];

const Project = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const container = useRef(null);

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    // const top = container.current.getBoundingClientRect().top;
    // const left = container.current.getBoundingClientRect().left;
    const targetX = clientX - 350 / 2;
    const targetY = clientY - 350 / 2;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  return (
    <section
      ref={container}
      onMouseMove={mouseMove}
      className="relative min-h-screen w-full flex flex-col justify-between px-5 lg:px-10 my-52 overflow-hidden selection:text-primaryLight selection:bg-primary"
    >
      <div className="w-full flex items-center justify-end">
        <Title bg={"bg-primary"} text={"text-primaryDark"}>
          /Projects
        </Title>
      </div>
      <div className="w-full flex flex-col gap-y-5 md:gap-y-10 lg:gap-y-0">
        {projects.map((item, i) => {
          return (
            <Link key={i} href={`${item.to}`}>
              <ProjectList item={item} index={i} setModal={setModal} />
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center items-center pb-10 md:pb-8 lg:pb-0">
        <Link
          href={"/projects"}
          className="text-primary text-base lg:text-lg font-bold hover:underline"
        >
          More
        </Link>
      </div>
      <div className="absolute">
        <ModalProject
          mousePosition={mousePosition}
          modal={modal}
          projects={projects}
        />
      </div>
    </section>
  );
};

export default Project;
