export default function LoveNotes() {
  return (
    <div className="px-4 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-300 drop-shadow-md mb-6 neon-text">
        My Love Letter to You
      </h1>

      <div className="bg-pink-900 bg-opacity-60 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl border border-pink-500/30 relative overflow-hidden">
        <div className="prose prose-pink prose-lg text-pink-100 max-w-none">
          <p className="text-2xl font-semibold mb-6 neon-text">My Dearest Love,</p>

          <p>
            As I sit here thinking of you on your special day, my heart overflows with emotions that words can hardly capture.
            From the moment we met, my life has been painted with colors I never knew existed. 🌈
          </p>

          <p>
            You are the most beautiful person I know – not just in appearance (though you take my breath away every time I see you),
            but in your kindness, your laughter, and the way you care for others. Your heart is pure gold. 💛
          </p>

          <p>
            I remember our first date like it was yesterday – the nervous excitement, the way your eyes sparkled when you laughed,
            and how I knew right then that you were someone special. Little did I know you would become my everything. ✨
          </p>

          <p>
            Through all our adventures – the late-night talks, the spontaneous trips, the quiet moments just holding hands –
            each memory with you is a treasure I hold close to my heart. You make every ordinary moment extraordinary. 🌟
          </p>

          <p>
            On your birthday, I want you to know that you are loved beyond measure. I pray that this year brings you all the happiness,
            success, and beautiful moments you deserve. May all your dreams come true, because seeing you happy is my greatest joy. 🎂
          </p>

          <p>
            Thank you for being you – for your patience when I'm stubborn, for your understanding when I'm stressed,
            for your love even when I don't deserve it. You make me want to be a better person every day. 🌱
          </p>

          <p>
            As we celebrate your 20th year, I look forward to all the memories we'll create together.
            I promise to cherish you, support you, and love you more with each passing day.
            No matter what life brings, I'll always be by your side. 🤝
          </p>

          <p>
            Happy birthday, my love. Today and always, may you feel how special you are – to me, and to everyone lucky enough to know you.
            You are my sunshine on cloudy days, my anchor in stormy seas, and my greatest blessing. 🌻
          </p>

          <p className="text-2xl font-semibold mt-8 neon-text">Forever Yours,</p>
          <p className="text-xl">[Your Name]</p>
        </div>

        {/* Emoji Footer */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 text-3xl sm:text-4xl px-2 py-3 border-t border-pink-400/20">
          <span className="neon-emoji">❤️</span>
          <span className="neon-emoji">🥰</span>
          <span className="neon-emoji">😘</span>
          <span className="neon-emoji">💕</span>
          <span className="neon-emoji">💖</span>
          <span className="neon-emoji">💘</span>
        </div>
      </div>
    </div>
  );
}
