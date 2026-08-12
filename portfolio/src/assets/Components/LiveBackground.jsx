import { useEffect, useRef } from "react";

const PARTICLES = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  x: `${8 + ((index * 29) % 86)}%`,
  y: `${10 + ((index * 43) % 78)}%`,
  delay: `${-((index * 1.7) % 12)}s`,
  duration: `${10 + (index % 5) * 2}s`,
}));

export const LiveBackground = () => {
  const layerRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let frame;
    const moveGlow = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        layer.style.setProperty("--pointer-x", `${event.clientX}px`);
        layer.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", moveGlow, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", moveGlow);
    };
  }, []);

  return (
    <div className="live-background" ref={layerRef} aria-hidden="true">
      <div className="live-grid" />
      <div className="live-pointer-glow" />
      <div className="aurora-scene">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="scene-horizon" />
        <div className="orbit orbit-one"><span /></div>
        <div className="orbit orbit-two"><span /></div>
      </div>
      <div className="live-orb live-orb-one" />
      <div className="live-orb live-orb-two" />
      <div className="live-particles">
        {PARTICLES.map((particle) => (
          <i
            key={particle.id}
            style={{
              "--particle-x": particle.x,
              "--particle-y": particle.y,
              "--particle-delay": particle.delay,
              "--particle-duration": particle.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
};
