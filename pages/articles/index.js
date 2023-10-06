import ArticleLanding from "@/components/article/ArticleLanding";
import { getAllPosts, getSinglePost } from "@/helpers/post-util";

const ArticlePage = ({ posts }) => {
  async function testFn() {
    // this is what needs to be passed to singlePost 
    // console.log(posts.items[0].sys.id)
    const test = await getAllPosts();
    console.log(test)

    const single = await getSinglePost(posts.items[0].sys.id);
    console.log(single)
  }

  testFn()


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