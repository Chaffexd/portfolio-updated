import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress 
        color="#14b8a6"
        startPosition={0.2}
        stopDelayMs={100}
        showOnShallow={false}
      />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
