import Image from "next/image";
import Link from "next/link";

const ProjectDetail = ({ title, excerpt, imageSource, link, repoLink }) => {
  return (
    <div className="bg-slate-100 lg:w-3/4 lg:flex-row sm:p-16 sm:w-3/4 rounded-lg flex flex-col items-center p-4 dark:bg-zinc-700 mb-8 hover:bg-zinc-200 md:w-3/4">
      <div className="lg:w-1/2">
        <Image
          src={imageSource}
          width={400}
          height={400}
          className="max-h-72 object-cover rounded-lg"
          alt="A photo"
        />
      </div>
      <div className="lg:w-1/2 p-8 text-inherit">
        <h1 className="dark:text-white text-black">{title}</h1>
        <p className="text-black dark:text-white">{excerpt}</p>
        <p className="text-black dark:text-white">
          {" "}
          <Link href={link} target="_blank">
            <span className="text-black font-bold hover:text-teal-500 dark:hover:text-teal-500 dark:text-white">
              Live Project
            </span>
          </Link>
        </p>
        <p className="text-black dark:text-white">
          <Link href={repoLink} target="_blank">
            <span className="text-black font-bold hover:text-teal-500 dark:hover:text-teal-500 dark:text-white">
              Repository
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
