import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false }, // Set to false as you're likely embedding it in a container
        background: {
          color: {
            value: "", // Keep background transparent
          },
        },
        fps_limit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push", // Still enable push on click
            },
            onHover: {
              enable: true,
              mode: "grab", // Set hover mode to 'grab' for spider net effect
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            grab: {
              distance: 180, // Distance for particles to connect to cursor
              links: {
                opacity: 1, // Make links fully opaque when grabbed
                color: "#ffffff", // Change link color on hover for highlight (e.g., white)
                blink: false, // Optional: make them blink
                consent: false,
                // Add more properties for links on grab if desired, e.g., width
                width: 2, // Make grabbed links a bit thicker
              },
            },
            repulse: { // Keep repulse configured if you want to switch to it later or combine modes
              distance: 150,
              duration: 0.8,
            },
            attract: { // Keep attract configured
              distance: 150,
              duration: 0.8,
              speed: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#e68e2e", // Particle color
          },
          links: {
            color: "#f5d393", // Default link color when not hovered
            distance: 150,
            enable: true,
            opacity: 0.6,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
            decay: 0,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
