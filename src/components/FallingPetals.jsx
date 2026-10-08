import React, { useMemo } from 'react';

const FallingPetals = ({ count = 24 }) => {
  const petals = useMemo(() => {
    const items = [];
    const colors = [
      '#f59e0b', // Marigold Yellow
      '#d97706', // Deep Gold
      '#dc2626', // Crimson Rose
      '#ef4444', // Fresh Pink Red
      '#fbbf24', // Amber
      '#f43f5e', // Rose
    ];

    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 14 + 10,
        duration: Math.random() * 7 + 5,
        delay: Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotate: Math.random() * 360,
      });
    }
    return items;
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.3}px`,
            backgroundColor: p.color,
            borderRadius: '50% 0 50% 50%',
            opacity: 0.85,
            boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingPetals;
