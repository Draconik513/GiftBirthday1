import { useState } from "react";
import coupleImg from "../assets/images/couple.jpg";

export default function PasswordLock({ onUnlock, correctPassword }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 transition-all duration-500">
      {/* Form Section */}
      <div
        className={`w-full md:w-1/2 max-w-md transition-transform duration-300 ${
          isHovered ? "scale-105" : "scale-100"
        }`}
      >
        <div className="bg-pink-800 bg-opacity-50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-pink-400 border-opacity-30">
          <h1 className="text-3xl font-bold text-pink-100 mb-6 text-center drop-shadow-sm">
            Our Secret Place
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="password"
                aria-label="Secret code input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setShowPhoto(true)}
                onBlur={() => setShowPhoto(false)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`w-full px-4 py-3 bg-pink-950 bg-opacity-70 border text-pink-100 placeholder-pink-300 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                  error
                    ? "border-red-500 focus:ring-red-400 animate-shake"
                    : "border-pink-500 focus:ring-pink-400"
                }`}
                placeholder="Enter our secret code"
              />
              {error && (
                <span className="absolute -bottom-6 left-0 text-red-400 text-sm transition-opacity duration-300">
                  Wrong code, try again 💔
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-pink-500/30 transform transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Unlock Our Love
            </button>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 max-w-md transform transition-all duration-500 ease-in-out opacity-100 scale-100">
        <div className="relative">
          <img
            src={coupleImg}
            alt="Our favorite moment"
            className="rounded-xl shadow-2xl border-4 border-pink-400 border-opacity-50 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 rounded-xl flex items-end p-4">
            <p className="text-white text-lg font-medium drop-shadow">
              Our Favorite Memory Together
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
