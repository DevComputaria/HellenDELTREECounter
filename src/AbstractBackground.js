import React, { useState, useEffect, useCallback } from 'react';
import './AbstractBackground.css';

const PARTICLE_COUNT = 75;
const COLOR_PALETTE = ['#7DF9FF', '#ADD8E6', '#FFFFFF', '#E0FFFF', '#B0E0E6']; // Light blues and white

const AbstractBackground = () => {
  const [particles, setParticles] = useState([]);
  // Store transforms separately to optimize re-renders if particle data itself doesn't change
  const [transforms, setTransforms] = useState(Array(PARTICLE_COUNT).fill('translate(0px, 0px)'));

  // Generate initial particles
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100, // Percentage based
        y: Math.random() * 100, // Percentage based
        size: Math.random() * 6 + 2, // 2px to 8px
        color: COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)],
        opacity: Math.random() * 0.5 + 0.3, // 0.3 to 0.8
        factorX: (Math.random() - 0.5) * 0.1 + 0.01, // Small random factor, can be negative
        factorY: (Math.random() - 0.5) * 0.1 + 0.01, // Small random factor, can be negative
      });
    }
    setParticles(newParticles);
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const newTransforms = particles.map(p => {
      const offsetX = (clientX - centerX) * p.factorX;
      const offsetY = (clientY - centerY) * p.factorY;
      return `translate(${offsetX}px, ${offsetY}px)`;
    });
    setTransforms(newTransforms);
  }, [particles]); // Recreate if particles array changes (though it shouldn't after init)

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className="abstract-background-container">
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            transform: transforms[index],
            // Consider adding a subtle CSS animation for ambient movement/opacity pulsing
          }}
        />
      ))}
    </div>
  );
};

export default AbstractBackground;
