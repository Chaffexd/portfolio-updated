import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-32 flex-none border-t border-zinc-100">
      <div className="mx-48 pb-16 pt-10">
        <Link href={"/about"} className="mr-8 hover:text-teal-500">
          About
        </Link>
        <Link href={"/articles"} className="mr-8 hover:text-teal-500">
          Articles
        </Link>
        <Link href={"/projects"} className="mr-8 hover:text-teal-500">
          Projects
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
