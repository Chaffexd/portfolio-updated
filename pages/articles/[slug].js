import PostDetail from "@/components/article/PostDetail";
import { getAllPosts, getSinglePost } from "@/helpers/post-util";

const PostDetailPage = ({ post }) => {
  const test = getAllPosts();
  console.log(test);

  return (
    <div className="mx-auto w-full max-w-7xl lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <PostDetail post={post} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;

export async function getStaticPaths() {
  const allPosts = await getAllPosts();
  const paths = allPosts.items.map((post) => ({
    params: { slug: post.fields.slug, id: post.fields.id },
  }));

  return {
    paths,
    fallback: false, // Set to false to return a 404 for non-existing slugs
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const postData = await getSinglePost(id);

  return {
    props: {
      post: postData,
    },
    revalidate: 1800,
  };
}
