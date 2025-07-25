
import { useState, useEffect } from 'react';
import useSound from 'use-sound';

// Import lagu & cover
import song1 from '../assets/sounds/song1.mp3';
import song2 from '../assets/sounds/song3.mp3';
import song3 from '../assets/sounds/song2.mp3';

import song1Cover from '../assets/images/song1.jpg';
import song2Cover from '../assets/images/song2.jpg';
import song3Cover from '../assets/images/song3.jpg';

// Daftar lagu
const songs = [
  {
    id: 1,  
    title: "Massages in the bottle",
    artist: "Taylor Swift",
    file: song1,
    volume: 0.7,
    cover: song1Cover,
  },
  {
    id: 2,
    title: "I Don't Care",
    artist: "Ed-Sheeran , Justin beiber",
    file: song2,
    volume: 0.6,
    cover: song2Cover,
  },
  {
    id: 3,
    title: "Night Changes",
    artist: "One Direction",
    file: song3,
    volume: 0.65,
    cover: song3Cover,
  },
];

export default function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(songs[0].volume);

  const [play, { pause, stop, sound }] = useSound(songs[currentSong].file, {
    volume,
    onend: () => {
      setIsPlaying(false);
      handleNext(); // Auto-next setelah selesai
    },
  });

  // Hentikan suara saat lagu berubah
  useEffect(() => {
    if (sound) {
      sound.stop();
    }
  }, [currentSong]);

  useEffect(() => {
    if (sound) {
      sound.volume(volume);
    }
  }, [volume, sound]);

  const togglePlay = async () => {
    try {
      if (isPlaying) {
        pause();
        setIsPlaying(false);
      } else {
        await play(); // ✅ penting buat iOS
        setIsPlaying(true);
      }
    } catch (err) {
      console.warn("Pemutaran gagal di iOS:", err);
      alert("Kalau lagu belum terdengar, coba tekan tombol Play lagi. iPhone mungkin memblokir audio.");
    }
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentSong((prev) => (prev + 1) % songs.length);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 bg-gradient-to-br from-pink-900 via-pink-800 to-pink-700 rounded-3xl shadow-2xl border border-pink-400/30 relative overflow-hidden">

      {/* Background blur dari cover */}
      <img
        src={songs[currentSong].cover}
        alt="cover-bg"
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-2xl scale-110"
      />

      {/* Konten utama */}
      <div className="relative z-10 w-full max-w-sm bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-pink-100 mb-4 text-center">Our Special Songs</h1>

        <div className="flex flex-col items-center mb-6">
          <img
            src={songs[currentSong].cover}
            alt={songs[currentSong].title}
            className="w-40 h-40 rounded-2xl object-cover shadow-md border-4 border-pink-400"
          />
          <h2 className="text-xl font-semibold text-pink-100 mt-4">{songs[currentSong].title}</h2>
          <p className="text-sm text-pink-300">{songs[currentSong].artist}</p>
        </div>

        <div className="flex items-center justify-center gap-6 mb-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 bg-pink-500 hover:bg-pink-400 rounded-full flex items-center justify-center text-white text-lg shadow-md transition-all"
          >
            ◀
          </button>

          <button
            onClick={togglePlay}
            className="w-14 h-14 bg-pink-600 hover:bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transition-all"
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>

          <button
            onClick={handleNext}
            className="w-10 h-10 bg-pink-500 hover:bg-pink-400 rounded-full flex items-center justify-center text-white text-lg shadow-md transition-all"
          >
            ▶
          </button>
        </div>

        <div>
          <label className="text-pink-200 block mb-1">Volume</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-full h-2 bg-pink-300 rounded-full cursor-pointer accent-pink-500"
          />
        </div>
      </div>
    </div>
  );
}

