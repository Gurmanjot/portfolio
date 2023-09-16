import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        fpsLimit: 120,
        particles: {
          move: {
            bounce: true,
            direction: "none",
            enable: true,
            outModes: "out",
            random: true,
            speed: 2,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 100 },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
        themes: [
          {
            name: "light",
            default: {
              value: true,
              mode: "light",
            },
            options: {
              background: {
                color: "#6A5ACD",
              },
              particles: {
                color: {
                  value: "#FFDAB9",
                },
              },
            },
          },
          {
            name: "dark",
            default: {
              value: true,
              mode: "dark",
            },
            options: {
              background: {
                color: "#000",
              },
              particles: {
                color: {
                  value: "#fff",
                },
              },
            },
          },
        ],
        detectRetina: true,
      }}
    />
  );
};
export default App;
