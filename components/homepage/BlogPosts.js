import Post from "./Post"

const BlogPosts = () => {
  return (
    <div className="space-y-10 lg:pl-16 xl:pl-24 flex flex-col">
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default BlogPosts