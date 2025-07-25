import { useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';
import birthdaySound from '../assets/sounds/birthday.mp3';
import countdownSound from '../assets/sounds/countdown.mp3';

export default function Countdown() {
  const [count, setCount] = useState(3);
  const [isBirthdayPlayed, setIsBirthdayPlayed] = useState(false);
  const countdownAudioRef = useRef(null);
  const [playBirthday] = useSound(birthdaySound, { volume: 0.5 });

  useEffect(() => {
    // Inisialisasi audio hanya sekali
    countdownAudioRef.current = new Audio(countdownSound);
    countdownAudioRef.current.volume = 0.7;
  }, []);

  useEffect(() => {
    let timer;

    if (count > 0) {
      // Reset dan mainkan ulang audio countdown
      if (countdownAudioRef.current) {
        countdownAudioRef.current.pause();
        countdownAudioRef.current.currentTime = 0;
        countdownAudioRef.current.play();
      }

      timer = setTimeout(() => setCount(count - 1), 1000);
    } else if (count === 0 && !isBirthdayPlayed) {
      // Stop suara countdown biar gak dobel
      if (countdownAudioRef.current) {
        countdownAudioRef.current.pause();
        countdownAudioRef.current.currentTime = 0;
      }

      // Mainkan birthday.mp3 sekali
      playBirthday();
      setIsBirthdayPlayed(true);
    }

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-9xl font-bold text-pink-300 animate-pulse">
          {count > 0 ? count : '🎉'}
        </div>
      </div>
    </div>
  );
}
