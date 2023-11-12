import ProjectDetail from "./ProjectDetail";

const projectData = [
  {
    id: "p1",
    title: "Countries API - Find info about all countries!",
    excerpt:
      "Explore global insights effortlessly with this Next.js and React project, using Tailwind CSS. Querying a countries API, it delivers comprehensive information about nations worldwide in a sleek and dynamic interface that features a dark mode toggle for enhanced user experience.",
    imageSource: "/images/countriesapi.webp",
    link: "https://countries-app-six-eta.vercel.app/",
    repo: "https://github.com/Chaffexd/countries-app"
  },
  {
    id: "p2",
    title: "The Movie Database App",
    excerpt:
      "Unlock a personalized movie journey with this app powered by Next.js, Firebase, Auth0, and styled by Tailwind. Explore and bookmark your favorite movies effortlessly using the Movie Database API.",
    imageSource: "/images/movieapp.webp",
    link: "https://movie-app-six-orpin.vercel.app/",
    repo: "https://github.com/Chaffexd/movie-app"
  },
  {
    id: "p3",
    title: "Job Listing Site",
    excerpt:
      "Effortlessly navigate job listings with our React project, built on Vite with custom CSS. Enjoy a sleek interface and easily filter job types for a seamless job-search experience.",
    imageSource: "/images/joblistingsproject.webp",
    link: "https://job-list-site.vercel.app/",
    repo: "https://github.com/Chaffexd/job-list-site"
  },
  {
    id: "p4",
    title: "Dev Finder",
    excerpt:
      "Discover developers effortlessly with this Dev Finder app. Built on Vite, styled with Tailwind, and leveraging the GitHub API, it seamlessly fetches user information. Toggle between light and dark modes for a personalized browsing experience.",
    imageSource: "/images/devfinder.webp",
    link: "https://github-user-app-three.vercel.app/",
    repo: "https://github.com/Chaffexd/github-user-app"
  },
  {
    id: "p5",
    title: "ToDo Application",
    excerpt:
      "Elevate your task management with this Todo app, crafted with Vite and Tailwind. Enjoy seamless filtering, a sleek dark mode toggle, and the convenience of drag-and-drop task reordering. Simplify your productivity journey with this feature-packed application.",
    imageSource: "/images/todoapp.webp",
    link: "https://todo-app-mauve-five.vercel.app/",
    repo: "https://github.com/Chaffexd/todo-app"
  },
  {
    id: "p6",
    title: "Age calculator application",
    excerpt:
      "Empower your time management with this Vite React Age Calculator app. Swiftly calculate ages with precision and ease. Built for efficiency, this app provides a seamless experience for all your age-related calculations.",
    imageSource: "/images/agecalc.webp",
    link: "https://age-calculator-phi.vercel.app/",
    repo: "https://github.com/Chaffexd/age-calculator"
  }
];

const AllProjects = () => {
  return (
    <>
      {projectData.map((project) => (
        <ProjectDetail
            key={project.id}
            title={project.title}
            excerpt={project.excerpt}
            imageSource={project.imageSource}
            link={project.link}
            repoLink={project.repo}
        />
      ))}
    </>
  );
};

export default AllProjects;
