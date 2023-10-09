import ArticleLanding from "@/components/article/ArticleLanding";
import { getAllPosts } from "@/helpers/post-util";
import Head from "next/head";

const ArticlePage = ({ posts }) => {
  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <Head>
        <title>Articles</title>
        <meta
          name="description"
          content={"Articles written by Shane Chaffe"}
        />
      </Head>
      <ArticleLanding posts={posts} />
    </div>
  );
};

export async function getServerSideProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default ArticlePage;
