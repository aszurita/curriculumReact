import React, { useEffect, useRef, useContext, Suspense } from 'react';
import './ParticleBackground.css';
import { ThemeContext } from "../Shared/ThemeContext";


const AboutMe = React.lazy(() => import('./components/aboutme'));

const ParticlesComponent = () => {
  const statsRef = useRef(null);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Error cargando el script: ${src}`));
        document.body.appendChild(script);
      });
    };

    const loadParticles = loadScript('./assets/js/particles.js');
    const loadStats = loadScript('./assets/js/stats.js');

    loadParticles.then(() => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 150, density: { enable: true, value_area: 800 } },
            color: { value: "#808080" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 5, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#808080",
              opacity: 0.4,
              width: 1
            },
            move: { enable: true, speed: 6 }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 }
            }
          },
          retina_detect: true
        });
      }
    });

    loadStats.then(() => {
      if (window.Stats) {
        const stats = new window.Stats();
        stats.setMode(0);
        statsRef.current = stats;

        const update = () => {
          stats.begin();
          stats.end();
          requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      }
    }).catch((error) => {
      console.error('Error al cargar stats.js:', error);
    });

    return () => {
      if (statsRef.current) {
        document.body.removeChild(statsRef.current.domElement);
      }
    };
  }, []);

  return (
    <div id="particles-js" className={`relative ${darkMode ? 'bg-black text-white' : 'bg-transparent'}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutMe />
      </Suspense>
    </div>
  );
};

export default ParticlesComponent;
