import Head from "next/head";
import ProjectPage from "../components/projects-page/project-page";

function Projects() {
  return (
    <>
      <Head>
        <title>RK projects</title>
      </Head>
      <ProjectPage />
    </>
  );
}

export default Projects;
