// src/context/MusicContext.js
import { createContext, useState, useRef, useEffect } from 'react';
import song1 from '../assets/sounds/song1.mp3';
import song2 from '../assets/sounds/song3.mp3';
import song3 from '../assets/sounds/song2.mp3';

import song1Cover from '../assets/images/song1.jpg';
import song2Cover from '../assets/images/song2.jpg';
import song3Cover from '../assets/images/song3.jpg';

export const MusicContext = createContext();

const songs = [
  { id: 1, title: 'Massages in the bottle', artist: 'Taylor Swift', file: song1, volume: 0.7, cover: song1Cover },
  { id: 2, title: "I Don't Care", artist: 'Ed Sheeran, Justin Bieber', file: song2, volume: 0.6, cover: song2Cover },
  { id: 3, title: 'Night Changes', artist: 'One Direction', file: song3, volume: 0.65, cover: song3Cover },
];

export function MusicProvider({ children }) {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(songs[0].volume);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [currentSong]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.warn('Gagal play:', err);
    }
  };

  const handleNext = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
  };

  const handlePrev = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
  };

  return (
    <MusicContext.Provider
      value={{
        songs,
        currentSong,
        isPlaying,
        volume,
        setVolume,
        setCurrentSong,
        togglePlay,
        handleNext,
        handlePrev,
      }}
    >
      {children}
      <audio
        ref={audioRef}
        onEnded={handleNext}
      >
        <source src={songs[currentSong].file} type="audio/mp3" />
      </audio>
    </MusicContext.Provider>
  );
}

