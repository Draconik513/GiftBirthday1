
// src/components/MusicPlayer.jsx
import { useState } from 'react';

// Data lagu & cover + Spotify URLs
import song1Cover from '../assets/images/song1.jpg';
import song2Cover from '../assets/images/song2.jpg';
import song3Cover from '../assets/images/song3.jpg';

const songs = [
  {
    id: 1,
    title: 'Massages in the bottle',
    artist: 'Taylor Swift',
    cover: song1Cover,
    spotifyUrl: 'https://open.spotify.com/track/1zIzd27gmbNrWWkMCEWmgC?si=9a27f712d39444ac', // contoh
  },
  {
    id: 2,
    title: "I Don't Care",
    artist: 'Ed Sheeran, Justin Bieber',
    cover: song2Cover,
    spotifyUrl: 'https://open.spotify.com/track/3HVWdVOQ0ZA45FuZGSfvns?si=c107f8727bd64d40',
  },
  {
    id: 3,
    title: 'Night Changes',
    artist: 'One Direction',
    cover: song3Cover,
    spotifyUrl: 'https://open.spotify.com/track/5O2P9iiztwhomNh8xkR9lJ?si=5524e3a6dc0b4244y',
  },
];

export default function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(0);

  const handleNext = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
  };

  const handlePrev = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
  };

  const openSpotify = () => {
    const url = songs[currentSong].spotifyUrl;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 bg-gradient-to-br from-pink-900 via-pink-800 to-pink-700 rounded-3xl shadow-2xl border border-pink-400/30 relative overflow-hidden">

      {/* Background blur */}
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
            onClick={openSpotify}
            className="w-14 h-14 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transition-all"
            title="Buka di Spotify"
          >
            🎧
          </button>

          <button
            onClick={handleNext}
            className="w-10 h-10 bg-pink-500 hover:bg-pink-400 rounded-full flex items-center justify-center text-white text-lg shadow-md transition-all"
          >
            ▶
          </button>
        </div>

        <p className="text-sm text-center text-pink-300 mt-2">
          Klik tombol 🎧 untuk dengarkan langsung di Spotify
        </p>
      </div>
    </div>
  );
}
