import Link from "next/link";
import RightChevron from "../icons/RightChevron";

const Post = () => {
  return (
    <article className="relative flex flex-col items-start hover:bg-zinc-50 rounded-lg p-8">
      <time className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
        <span className="absolute inset-y-0 left-0 flex items-center">
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
        </span>
        3rd October, 2023
      </time>
      <h2 className="text-base font-semibold text-zinc-800">This it a title</h2>
      <Link href={"/articles"}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
        <span className="relative z-10"></span>
      </Link>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        This is the article start
      </p>
      <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
        <span>Read article</span>
        <RightChevron />
      </div>
    </article>
  );
};

export default Post;
