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
            value: "", // Keep background transparent to see your existing website background
          },
        },
        fps_limit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true, // Enable click to see an effect, perhaps a "push"
              mode: "push",
            },
            onHover: {
              enable: true,
              // Try 'repulse' for a swirling/wind-like push effect,
              // or 'attract' to draw them in.
              // 'bubble' can also create interesting size/opacity changes.
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4, // Number of particles to add on click
            },
            repulse: {
              distance: 150, // How far particles are pushed away
              duration: 0.8, // How long the effect lasts
            },
            attract: {
              distance: 150,
              duration: 0.8,
              speed: 1, // How fast particles are pulled
            },
            // 'grab' mode (already present) is good for the "spider net" lines
            grab: {
              distance: 200, // Distance for lines to appear
              links: {
                opacity: 1, // Make links more visible when grabbed
              },
            },
          },
        },
        particles: {
          color: {
            value: "#e68e2e", // Particle color (your accent color)
          },
          links: {
            color: "#f5d393", // Link color (a lighter accent)
            distance: 150, // Max distance for particles to link
            enable: true, // Essential for the "spider net" effect
            opacity: 0.6, // Opacity of the links
            width: 1, // Width of the links
          },
          collisions: {
            enable: true, // Particles bounce off each other
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce", // Particles bounce off canvas edges
            },
            random: false,
            speed: 1, // General movement speed
            straight: false,
            // Add properties for more dynamic movement
            attract: {
              enable: false, // This is for constant attraction, usually off
              rotateX: 600,
              rotateY: 1200,
            },
            decay: 0,
            // trail: {
            //   enable: true, // Can create a "wind" like tail effect
            //   length: 5,
            //   fill: {
            //     color: {
            //       value: "#000000" // Color of the trail
            //     }
            //   }
            // },
            gravity: {
              enable: false,
              maxSpeed: 50,
            },
            path: {
              clamp: true,
              delay: {
                value: 0,
              },
              enable: false,
            },
            // spin: { // Could create a spinning effect if enabled
            //   acceleration: 0,
            //   enable: false,
            // },
            // If you want a more "swarm" or "wind" like flow,
            // consider enabling flow or path effects, or adjusting attract/repulse settings.
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80, // Number of particles
          },
          opacity: {
            value: 0.5, // Particle opacity
          },
          shape: {
            type: "circle", // Particles are circles
          },
          size: {
            value: { min: 1, max: 5 }, // Random size for particles
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
