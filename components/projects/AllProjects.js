import ProjectDetail from "./ProjectDetail";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "Project Title",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageSource: "/images/arsenal.webp",
    link: "https://github.com/Chaffexd"
  },
  {
    id: "p2",
    title: "Project Title",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageSource: "/images/arsenal.webp",
    link: "https://github.com/Chaffexd"
  },
  {
    id: "p3",
    title: "Project Title",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageSource: "/images/arsenal.webp",
    link: "https://github.com/Chaffexd"
  },
];

const AllProjects = () => {
  return (
    <>
      <h1 className="text-black dark:text-white">Coming soon..</h1>
      {DUMMY_DATA.map((project) => (
        <ProjectDetail
            key={project.id}
            title={project.title}
            excerpt={project.excerpt}
            imageSource={project.imageSource}
            link={project.link}
        />
      ))}
    </>
  );
};

export default AllProjects;
