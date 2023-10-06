import ArticleLanding from "@/components/article/ArticleLanding";
import { getAllPosts } from "@/helpers/post-util";

const ArticlePage = ({ posts }) => {

  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <ArticleLanding posts={posts} />
    </div>
  );
};

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts
    },
    revalidate: 1800
  }

};

export default ArticlePage;