import Image from 'next/image'; // Import Image for images

const HomePage = () => {
  return (
    <>
      <head>
                    <title>Mohammed portfolio</title>
                    <meta name="description" content="Amibera Dashboard Loading..." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/avatar.png" />
                </head>

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
