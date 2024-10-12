import "../styles/globals.css";

import Transition from "../components/Transition";

import Layout from "../components/Layout";
// next router js
import { useRouter } from "next/router";
// framer Motion
import { AnimatePresence, motion } from "framer-motion";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
