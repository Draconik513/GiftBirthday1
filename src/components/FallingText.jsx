import { useState, useEffect } from 'react';

export default function FallingText({ colors = ['#ff00ff', '#ffffff'] }) {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTexts(prev => [
        ...prev,
        {
          id: Date.now(),
          text: 'Happy Birthday',
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 5 + Math.random() * 10,
          size: 1 + Math.random() * 2,
          opacity: 0.3 + Math.random() * 0.7,
          color: colors[Math.floor(Math.random() * colors.length)] // Alternate between neon pink and white
        }
      ]);
    }, 300);

    return () => clearInterval(interval);
  }, [colors]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTexts(prev => prev.filter(item => 
        Date.now() - item.id < item.duration * 1000
      ));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {texts.map(item => (
        <div
          key={item.id}
          className="absolute font-bold pointer-events-none"
          style={{
            left: `${item.left}%`,
            top: '-50px',
            fontSize: `${item.size}rem`,
            opacity: item.opacity,
            color: item.color,
            animation: `fall ${item.duration}s linear ${item.delay}s forwards`,
            textShadow: `0 0 10px ${item.color}, 0 0 20px ${item.color}`,
            zIndex: 0,
            willChange: 'transform'
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}