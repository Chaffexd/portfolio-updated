import { Inter } from 'next/font/google'
import Hero from '@/components/homepage/Hero'
import { getAllPosts } from '@/helpers/post-util'

export default function Home({ posts }) {

  return (
    <>
      <Hero posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
};