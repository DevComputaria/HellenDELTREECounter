import React, { useState, useEffect } from 'react';
import './AbstractBackground.css';

const AbstractBackground = () => {
  const [shapes, setShapes] = useState([
    { id: 1, type: 'circle', x: 50, y: 100, size: 30, factor: 0.02 },
    { id: 2, type: 'square', x: 150, y: 200, size: 40, factor: 0.03 },
    { id: 3, type: 'circle', x: 250, y: 50, size: 20, factor: 0.01 },
  ]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setShapes(prevShapes =>
      prevShapes.map(shape => ({
        ...shape,
        // Calculate new positions with a subtle parallax effect
        // Ensuring the movement is relative to the center of the screen for better effect
        x: shape.x + (clientX - window.innerWidth / 2) * shape.factor,
        y: shape.y + (clientY - window.innerHeight / 2) * shape.factor,
      }))
    );
  };

  useEffect(() => {
    // The shapes will drift from their initial positions based on mouse movement.
    // If a reset to initial positions on unmount or under certain conditions
    // were desired, the initial positions would need to be stored and used here.
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div className="abstract-background-container">
      {shapes.map(shape => (
        <div
          key={shape.id}
          className={`abstract-shape ${shape.type}`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.x}px`,
            top: `${shape.y}px`,
            // Add other dynamic styles if needed
          }}
        />
      ))}
    </div>
  );
};

export default AbstractBackground;
