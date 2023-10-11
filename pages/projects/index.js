import AllProjects from "@/components/projects/AllProjects";
import Head from "next/head";

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content={"Shane Chaffe's Projects"}
        />
      </Head>
      <div className="flex justify-center flex-col items-center mt-20">
        <AllProjects />
      </div>
    </>
  );
};

export default ProjectsPage;
