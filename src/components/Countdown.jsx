import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import countdownSound from '../assets/sounds/countdown.mp3';

export default function Countdown() {
  const [count, setCount] = useState(3);
  const [play, { stop }] = useSound(countdownSound, { 
    volume: 0.5,
    interrupt: true
  });

  useEffect(() => {
    if (count > 0) {
      play();
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => {
        clearTimeout(timer);
        stop();
      };
    }
  }, [count, play, stop]);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-center">
        <div className="text-9xl font-bold text-pink-300 animate-pulse">
          {count > 0 ? count : '❤️'}
        </div>
      </div>
    </div>
  );
}