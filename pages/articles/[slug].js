import PostDetail from "@/components/article/PostDetail";
import Head from "next/head";
import { getAllPosts, getSinglePost } from "@/helpers/post-util";

const PostDetailPage = ({ post }) => {
  return (
    <div className="mx-auto w-full max-w-7xl lg:px-8 mt-20">
      <div className="mx-12 max-w-1xl lg:max-w-5xl">
        <div className="xl:relative">
          <Head>
            <title>{post.items[0].fields.postTitle}</title>
            <meta
              name="description"
              content={post.items[0].fields.postSummary}
            />
          </Head>
          <PostDetail post={post} />
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;

export async function getStaticPaths() {
  const allPosts = await getAllPosts();
  const paths = allPosts.items.map((post) => ({
    params: { slug: post.fields.slug },
  }));

  return {
    paths,
    fallback: false, // Set to false to return a 404 for non-existing slugs
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const postData = await getSinglePost(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 1800,
  };
}
