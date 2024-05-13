import React from "react";
import ProjectList from "@/components/ProjectsHomePage/ProjectList";
import ProjectsHomePage from "@/components/ProjectsHomePage/ProjectsHomePage";
import Opening from "@/components/Opening/Opening";
import Head from "next/head";

const Projects = () => {
  return (
    <main>
      <Head>
        <title>Projects - TENAD</title>
      </Head>
      <ProjectsHomePage />
      <ProjectList />
    </main>
  );
};

export default Projects;
