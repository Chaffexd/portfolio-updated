import { formatDate } from "@/helpers/post-util";
import Link from "next/link";
import LeftChevron from "../icons/LeftChevron";

import Markdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("jsx", jsx);

const PostDetail = ({ post }) => {
  const { postTitle } = post.items[0].fields;
  const { body } = post.items[0].fields;

  const formattedDate = formatDate(post.items[0].fields.postDate);

  const customRenderers = {
    code(code) {
      const { className, children } = code;
      let language = "javascript";

      if (className && className.startsWith("language-")) {
        language = className.slice(9);
      }

      console.log(language)
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article>
      <header className="flex flex-col">
        <button className="mt-6 dark:text-white">
          <Link href={"/articles/"} aria-label="Articles">
            <LeftChevron />
          </Link>
        </button>
        <h1 className="mt-6 text-4xl font-bold text-zinc-800 dark:text-white sm:text-5xl">
          {postTitle}
        </h1>
        <time className="order-first flex items-center text-base text-zinc-400 dark:text-white">
          {formattedDate}
        </time>
      </header>
      <div className="mt-8 dark:text-zinc-100">
        <Markdown components={customRenderers} >
          {body}
        </Markdown>
      </div>
    </article>
  );
};

export default PostDetail;
