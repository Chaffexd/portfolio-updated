import { formatDate } from "@/helpers/post-util";
import Link from "next/link";
import LeftChevron from "../icons/LeftChevron";
const PostDetail = ({ post }) => {
  console.log(post.items[0]);

  const { postTitle } = post.items[0].fields;
  const { body } = post.items[0].fields;

  const formattedDate = formatDate(post.items[0].fields.postDate);

  return (
    <article>
      <header className="flex flex-col">
        <button className="mt-6"><Link href={"/articles/"}><LeftChevron /></Link></button>
        <h1 className="mt-6 text-4xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {postTitle}
        </h1>
        <time className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
          {formattedDate}
        </time>
      </header>
      <div className="mt-8 prose dark:prose-invert">
        <p>{body}</p>
      </div>
    </article>
  );
};

export default PostDetail;
