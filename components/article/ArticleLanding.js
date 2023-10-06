import Post from "../homepage/Post";

const ArticleLanding = ({ posts }) => {
  const blogPosts = posts.items;

  return (
    <div className="mx-auto w-full max-w-7xl lg:px-8">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <header className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Writings on Software, development, and the support industry.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              These are my thoughts on my programming, support, and other things
              and suit me.
            </p>
          </header>
          <div className="mt-16 sm:mt-20">
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
              <div className="flex max-w-3xl flex-col space-y-16">
                {blogPosts.map((post) => (
                    <Post key={post.sys.id} posts={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleLanding;
