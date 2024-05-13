import AboutHomePage from "@/components/AboutHomePage/AboutHomePage";
import Opening from "@/components/Opening/Opening";
import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <main>
      <Head>
        <title>About - TENAD</title>
      </Head>
      <AboutHomePage />
    </main>
  );
};

export default About;
