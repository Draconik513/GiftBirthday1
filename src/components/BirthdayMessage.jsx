import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import birthdaySound from '../assets/sounds/birthday.mp3';
import FallingText from './FallingText';
import Confetti from 'react-confetti';

const FloatingText = ({ text, delay = 0 }) => {
  const [first, second] = text.split(' ');
  return (
    <div 
      className="absolute inset-0 flex items-center justify-center"
      style={{
        animation: `fadeOut 1.5s ease-out ${delay}s forwards`,
        zIndex: 10
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-pink-400 neon-text text-center">
        <span className="block md:inline">{first}</span>
        <span className="block md:inline md:ml-2">{second}</span>
      </h1>
    </div>  
  );
};

export default function BirthdayMessage({ onComplete }) {
  const [step, setStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [play] = useSound(birthdaySound, { volume: 0.7 });
  const name = "Tri Pratiwi Muchlis";
  const birthDate = "11 Mei 2006";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step === 0) {
        play();
        setTimeout(() => {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 10000);
        }, 1);
      }
      if (step < 4) {
        setStep(step + 1);
      }
      if (step === 4) {
        setTimeout(() => {
          onComplete();
        }, 15000);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [step, play, onComplete]);

  return (
  <div className="fixed inset-0 bg-black overflow-hidden w-screen h-screen">
    {/* Confetti */}
    {showConfetti && (
      <Confetti 
        width={window.innerWidth}
        height={window.innerHeight}
        // ... (config lainnya tetap sama)
      />
    )}
    
    {/* Background Falling Text */}
    <div className="fixed inset-0 z-0 overflow-hidden">
      <FallingText colors={['#ff00ff', '#ffffff']} />
    </div>

    {/* Konten Utama */}
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 overflow-y-auto">
        {step === 0 && (
          <>
            <FloatingText text="Happy Birthday" delay={0} />
            <FloatingText text="Happy Birthday" delay={1.5} />
          </>
        )}

        {step >= 1 && (
          <div className={`relative z-20 text-center ${step === 1 ? 'animate-bounceIn' : ''}`}>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-pink-400 mb-6 neon-text">
              {name}
            </h2>
          </div>
        )}

        {step >= 2 && (
          <div className={`relative z-20 text-center ${step === 2 ? 'animate-fadeInUp' : ''}`}>
            <p className="text-xl md:text-3xl text-white mb-8">
              {birthDate}
            </p>
          </div>
        )}

        {step >= 3 && (
          <div className={`relative z-20 text-center ${step === 3 ? 'animate-pulse' : ''}`}>
            <div className="text-3xl md:text-6xl font-bold text-pink-400 mb-8 neon-text">
              Happy 20!
            </div>
          </div>
        )}

        {step >= 4 && (
          <div className={`relative z-20 w-full max-w-2xl mx-auto p-4 md:p-6 mb-8 bg-black bg-opacity-70 backdrop-blur-sm rounded-xl border border-pink-400 border-opacity-50 ${
            step === 4 ? 'animate-fadeIn' : ''
          }`}>
            <p className="text-base md:text-xl text-white leading-relaxed">
              To the most amazing woman in my life, may your birthday be as beautiful as you are. 
              Every moment with you feels like a dream come true. I pray for your happiness, health, 
              and success in everything you do. You deserve all the love in the universe. 
              I love you more than words can express. love uu sayang❤️
            </p>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeOut {
          0% { opacity: 1; transform: scale(1); }
          70% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0; transform: scale(0.9); }
        }
        
        .neon-text {
          text-shadow: 
            0 0 5px #ff00ff,
            0 0 10px #ff00ff,
            0 0 20px #ff00ff,
            0 0 40px #ff00ff;
          animation: neon-flicker 1.5s infinite alternate;
        }
        
        @keyframes neon-flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            text-shadow:
              0 0 5px #ff00ff,
              0 0 10px #ff00ff,
              0 0 20px #ff00ff,
              0 0 40px #ff00ff;
          }
          20%, 24%, 55% {
            text-shadow: none;
          }
        }
      `}</style>
    </div>
  );
}



// import { useState, useEffect } from 'react';
// import useSound from 'use-sound';
// import birthdaySound from '../assets/sounds/birthday.mp3';
// import FallingText from './FallingText';

// const FallingLetter = ({ letter, index, color }) => {
//   const left = 10 + (index * 8) + (Math.random() * 5);
//   const delay = index * 0.2;
//   const duration = 1 + (Math.random() * 0.5);
  
//   return (
//     <span
//       className={`absolute text-6xl font-bold ${color} opacity-0`}
//       style={{
//         left: `${left}%`,
//         top: '-100px',
//         animation: `fall ${duration}s ease-out ${delay}s forwards, fadeIn 0.5s ease-out ${delay}s forwards`,
//         textShadow: '0 0 10px currentColor, 0 0 20px currentColor',
//         zIndex: 10
//       }}
//     >
//       {letter}
//     </span>
//   );
// };

// export default function BirthdayMessage({ onComplete }) {
//   const [step, setStep] = useState(0);
//   const [play] = useSound(birthdaySound, { volume: 0.7 });
//   const name = "Your Girlfriend's Name";
//   const birthDate = "January 1, 2003";

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (step === 0) {
//         play();
//       }
//       if (step < 4) {
//         setStep(step + 1);
//       }
//       if (step === 4) {
//         // Wait 10 seconds before proceeding to main menu
//         setTimeout(() => {
//           onComplete();
//         }, 10000);
//       }
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, [step, play, onComplete]);

//   return (
//     <div className="relative overflow-hidden min-h-screen flex items-center justify-center bg-black">
//       {/* Background falling text with neon pink and white colors */}
//       <FallingText colors={['#ff00ff', '#ffffff']} />
      
//       {/* Falling "Happy Birthday" letters */}
//       {step === 0 && "Happy Birthday".split('').map((letter, i) => (
//         <FallingLetter 
//           key={i} 
//           letter={letter} 
//           index={i}
//           color={i % 2 === 0 ? 'text-pink-400' : 'text-white'}
//         />
//       ))}

//       {/* Name */}
//       {step >= 1 && (
//         <div className={`relative z-20 text-center px-4 ${step === 1 ? 'animate-bounceIn' : ''}`}>
//           <h2 className="text-5xl md:text-7xl font-bold text-pink-400 mb-6 neon-text-pink">
//             {name}
//           </h2>
//         </div>
//       )}

//       {/* Birth Date */}
//       {step >= 2 && (
//         <div className={`relative z-20 text-center px-4 ${step === 2 ? 'animate-fadeInUp' : ''}`}>
//           <p className="text-3xl text-white mb-8 neon-text-white">
//             {birthDate}
//           </p>
//         </div>
//       )}

//       {/* Age */}
//       {step >= 3 && (
//         <div className={`relative z-20 text-center px-4 ${step === 3 ? 'animate-pulse' : ''}`}>
//           <div className="text-6xl font-bold text-pink-400 mb-8 neon-text-pink">
//             Happy 20!
//           </div>
//         </div>
//       )}

//       {/* Message */}
//       {step >= 4 && (
//         <div className={`relative z-20 max-w-2xl mx-auto p-6 bg-black bg-opacity-70 backdrop-blur-sm rounded-xl border border-pink-400 border-opacity-50 ${
//           step === 4 ? 'animate-fadeIn' : ''
//         }`}>
//           <p className="text-xl text-white">
//             To the most amazing woman in my life, may your birthday be as beautiful as you are. 
//             Every moment with you feels like a dream come true. I pray for your happiness, health, 
//             and success in everything you do. You deserve all the love in the universe. 
//             I love you more than words can express. ❤️
//           </p>
//         </div>
//       )}
//     </div>
//  );
// }