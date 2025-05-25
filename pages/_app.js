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
    <html lang="en">
            <head>
                <title>Amibera Dashboard</title>
                <meta name="description" content="Amibera Dashboard Application" />
                <meta name="keywords" content="dashboard, amibera, furniture" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link rel="icon" href="/icons.jpg" />
            </head>
            <body >
       <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
            </body>
        </html>

   
  );
}

export default MyApp;
