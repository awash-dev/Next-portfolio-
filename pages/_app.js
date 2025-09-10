// pages/_app.js
import "../styles/globals.css";
import Transition from "../components/Transition";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        {/* Global meta tags */}
        <title>Mohammed Portfolio - AwashDev | AmibarDev</title>
        <meta
          name="description"
          content="Portfolio of Mohammed (AwashDev & AmibarDev). Full-stack developer specializing in React, Next.js, Firebase, and cloud solutions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/avatar.png" />

        {/* SEO keywords */}
        <meta
          name="keywords"
          content="AwashDev, AmibarDev, Mohammed Hussen, Full Stack Developer, React Developer, Next.js, Firebase, Portfolio"
        />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content="Mohammed Portfolio - AwashDev | AmibarDev" />
        <meta
          property="og:description"
          content="Explore Mohammed's projects and experience as AwashDev & AmibarDev. Specializing in modern web & mobile development."
        />
        <meta property="og:image" content="/avatar.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mohammed Portfolio - AwashDev | AmibarDev" />
        <meta
          name="twitter:description"
          content="Explore Mohammed's projects and experience as AwashDev & AmibarDev. Specializing in React, Next.js, and Firebase."
        />
        <meta name="twitter:image" content="/avatar.png" />
      </Head>

      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
