import "../styles/globals.css";
import Transition from "../components/Transition";
import Layout from "../components/Layout";
// next router js
import { useRouter } from "next/router";
// framer Motion
import { AnimatePresence, motion } from "framer-motion";
// Import Head from next/head
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <> {/* Use a React Fragment instead of <html> */}
      <Head>
        {/* Global meta tags and favicon */}
        <title>Mohammed Portfolio's</title>
        <meta name="description" content="Mohammed Portfolio Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/avatar.png" />
      </Head>

      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </> // Close the React Fragment
  );
}

export default MyApp;
