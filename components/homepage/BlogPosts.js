import Post from "./Post"

const BlogPosts = ({ posts }) => {

  return (
    <div className="space-y-10 lg:pl-16 xl:pl-24 flex flex-col">
      <Post posts={posts.items[0]} />
      <Post posts={posts.items[1]} />
      <Post posts={posts.items[2]} />
    </div>
  )
}

export default BlogPosts