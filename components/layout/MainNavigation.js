import Link from "next/link";

const MainNavigation = () => {
  return (
    <header>
      <nav className="flex justify-between mt-6 mx-48 items-center">
        <div>
          <Link href={"/"}>Home/Image</Link>
        </div>
        <div>
          <div className="w-60 flex justify-between border border-slate-200 rounded-3xl px-6 py-2">
            <Link href={"/about"} className="hover:text-teal-500">About</Link>
            <Link href={"/articles"} className="hover:text-teal-500">Articles</Link>
            <Link href={"/projects"} className="hover:text-teal-500">Projects</Link>
          </div>
        </div>
        <div>
          <p>Light/Dark toggle</p>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
