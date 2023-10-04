import Image from "next/image";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className="flex justify-center mx-48">
      <nav className="flex mt-6 items-center justify-between min-w-full">
        <div>
          <Link href={"/"} className="hover:text-teal-500">Home</Link>
        </div>
        <div>
          <div className="w-60 flex justify-between border border-slate-200 rounded-3xl px-6 py-2">
            <Link href={"/about"} className="hover:text-teal-500">About</Link>
            <Link href={"/articles"} className="hover:text-teal-500">Articles</Link>
            <Link href={"/projects"} className="hover:text-teal-500">Projects</Link>
          </div>
        </div>
        <div>
          <p>Toggle</p>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
