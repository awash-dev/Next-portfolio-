// pages/index.js (or any other page component)
import Head from 'next/head'; // Import Head from next/head
import Image from 'next/image'; // Import Image for images

const HomePage = () => {
  return (
    <>
      <Head>
        {/* Page Title */}
        <title>My Awesome Portfolio - Home</title>
        {/* Page Description for SEO */}
        <meta name="description" content="Welcome to my full-stack developer portfolio. Discover my projects and skills." />
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Mohammed Portfolio" />
        <meta property="og:description" content="Welcome to my full-stack developer portfolio. Discover my projects and skills." />
        <meta property="og:image" content="/avatar.png" /> {/* Path to your social media preview image */}
        <meta property="og:url" content="https://awash-port.vercel.app/ />
       
        {/* Twitter Card Meta Tags */}
      </Head>

      {/* Rest of your page content */}
      <h1>Welcome to my portfolio!</h1>
      <p>This is the main content of the home page.</p>

      {/* Example of using next/image */}
      <Image
        src="/images/my-hero-image.jpg" // Path to your image in the public folder
        alt="A description of the image"
        width={500} // Original width of the image
        height={300} // Original height of the image
        priority // Optional: loads this image sooner if it's above the fold
      />
    </>
  );
};

export default HomePage;
