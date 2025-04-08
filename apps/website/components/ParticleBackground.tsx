"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { particleConfig } from "@/config/content";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

interface ParticleBackgroundProps {
  // Optional props that allow overriding the global configuration
  id?: string;
  className?: string;
  particleColor?: string;
  lineColor?: string;
  backgroundColor?: string;
  interactive?: boolean;
  enabled?: boolean;
  zIndex?: number;
  particleCount?: number;
  moveSpeed?: number;
  lineDistance?: number;
  hoverDistance?: number;
}

const ParticleBackground = (props: ParticleBackgroundProps) => {
  const [init, setInit] = useState(false);
  
  // Use configuration values, allowing props to override
  const config = {
    id: props.id || particleConfig.id,
    className: props.className || "",
    particleColor: props.particleColor || particleConfig.particleColor,
    lineColor: props.lineColor || particleConfig.lineColor,
    backgroundColor: props.backgroundColor || particleConfig.backgroundColor,
    interactive:
      props.interactive !== undefined ? props.interactive : particleConfig.interactive,
    enabled:
      props.enabled !== undefined ? props.enabled : particleConfig.enabled,
    zIndex: props.zIndex !== undefined ? props.zIndex : particleConfig.zIndex,
    particleCount: props.particleCount || particleConfig.particleCount,
    moveSpeed: props.moveSpeed || particleConfig.moveSpeed,
    lineDistance: props.lineDistance || particleConfig.lineLinked.distance,
    hoverDistance: props.hoverDistance || particleConfig.hoverDistance,
  };
  
  // Initialize the tsParticles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  
  const particlesLoaded = useCallback(async (container: any) => {
    // You can use this callback to interact with the particles container if needed
  }, []);

  const options = useMemo(() => {
    return {
      background: {
        color: {
          value: config.backgroundColor,
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: config.interactive,
            mode: particleConfig.clickMode as any,
          },
          onHover: {
            enable: config.interactive,
            mode: particleConfig.hoverMode as any,
          },
          resize: {
            enable: true,
            delay: 0,
          },
        },
        modes: {
          push: {
            quantity: particleConfig.clickParticles,
          },
          grab: {
            distance: config.hoverDistance,
            links: {
              opacity: 1,
            },
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: config.particleColor,
        },
        links: {
          color: config.lineColor,
          distance: config.lineDistance,
          enable: particleConfig.lineLinked.enable,
          opacity: particleConfig.lineLinked.opacity,
          width: particleConfig.lineLinked.width,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "out" as const,
          },
          random: particleConfig.moveRandom,
          speed: config.moveSpeed,
          straight: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: config.particleCount,
        },
        opacity: {
          value: particleConfig.particleOpacity.value,
          random: particleConfig.particleOpacity.random,
          animation: {
            enable: particleConfig.particleOpacity.anim.enable,
            speed: particleConfig.particleOpacity.anim.speed,
            minimumValue: particleConfig.particleOpacity.min,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: particleConfig.particleSize.value,
          random: particleConfig.particleSize.random,
          animation: {
            enable: particleConfig.particleSize.anim.enable,
            speed: particleConfig.particleSize.anim.speed,
            minimumValue: particleConfig.particleSize.min,
            sync: false,
          },
        },
      },
      detectRetina: true,
    };
  }, [config]);

  // Don't render if not enabled or not initialized
  if (!config.enabled || !init) {
    return null;
  }

  return (
    <Particles
      id={config.id}
      className={config.className}
      style={{
        position: "fixed",
        zIndex: config.zIndex, 
        pointerEvents: config.interactive ? "auto" : "none", // Enable or disable interaction with particles
      }}
      options={options as any}
      particlesLoaded={particlesLoaded}
    />
  );
};

export default ParticleBackground;
