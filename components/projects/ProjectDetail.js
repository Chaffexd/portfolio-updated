import Image from "next/image";
import Link from "next/link";

const ProjectDetail = ({ title, excerpt, imageSource, link }) => {
  return (
    <div className="bg-zinc-400 lg:w-3/4 lg:flex-row sm:p-16 sm:w-1/2 rounded-lg flex flex-col items-center p-4 dark:bg-zinc-700 mb-8">
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
        <h1 className="dark:text-white">{title}</h1>
        <p className="text-white">{excerpt}</p>
        <p className="text-white">You can view the project <Link href={link} target="_blank"><span className="text-black hover:text-teal-500 dark:hover:text-teal-500">here.</span></Link></p>
      </div>
    </div>
  );
};

export default ProjectDetail;
