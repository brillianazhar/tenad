import ProjectDetailPage from "@/components/ProjectDetailPage/ProjectDetailPage";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const DetailProject = () => {
  const { query } = useRouter();
  return (
    <main>
      <Head>
        <title>{query.slug?.toUpperCase()} - Projects</title>
      </Head>
      <ProjectDetailPage />
    </main>
  );
};

export default DetailProject;
