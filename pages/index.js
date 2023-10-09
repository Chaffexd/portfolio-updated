import { Inter } from "next/font/google";
import Hero from "@/components/homepage/Hero";
import { getAllPosts } from "@/helpers/post-util";
import Head from "next/head";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Shane Chaffe - Software Developer</title>
        <meta name="description" content={"Shane Chaffe's Portfolio - Software Engineer"} />
      </Head>
      <Hero posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
