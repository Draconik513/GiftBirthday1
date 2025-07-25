import { useState } from 'react';
import confetti from 'canvas-confetti';
import complete from '../assets/images/completed.jpg';
import puzzle1 from '../assets/images/puzzle/puzzle-1.jpg';
import puzzle2 from '../assets/images/puzzle/puzzle-2.jpg';
import puzzle3 from '../assets/images/puzzle/puzzle-3.jpg';
import puzzle4 from '../assets/images/puzzle/puzzle-4.jpg';
import puzzle5 from '../assets/images/puzzle/puzzle-5.jpg';
import puzzle6 from '../assets/images/puzzle/puzzle-6.jpg';
import puzzle7 from '../assets/images/puzzle/puzzle-7.jpg';
import puzzle8 from '../assets/images/puzzle/puzzle-8.jpg';
import puzzle9 from '../assets/images/puzzle/puzzle-9.jpg';
import puzzle10 from '../assets/images/puzzle/puzzle-10.jpg';
import puzzle11 from '../assets/images/puzzle/puzzle-11.jpg';
import puzzle12 from '../assets/images/puzzle/puzzle-12.jpg';

const heartPieces = [
  { id: 1, correctPosition: 1, image: puzzle1 },
  { id: 2, correctPosition: 2, image: puzzle2 },
  { id: 3, correctPosition: 3, image: puzzle3 },
  { id: 4, correctPosition: 4, image: puzzle4 },
  { id: 5, correctPosition: 5, image: puzzle5 },
  { id: 6, correctPosition: 6, image: puzzle6 },
  { id: 7, correctPosition: 7, image: puzzle7 },
  { id: 8, correctPosition: 8, image: puzzle8 },
  { id: 9, correctPosition: 9, image: puzzle9 },
  { id: 10, correctPosition: 10, image: puzzle10 },
  { id: 11, correctPosition: 11, image: puzzle11 },
  { id: 12, correctPosition: 12, image: puzzle12 },
];

export default function LovePuzzle() {
  const [pieces, setPieces] = useState(
    heartPieces
      .map(p => ({ ...p }))
      .sort(() => Math.random() - 0.5)
      .map((p, i) => ({ ...p, position: i + 1 }))
  );
  const [completed, setCompleted] = useState(false);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDrop = (e, targetPosition) => {
    e.preventDefault();
    const sourceId = parseInt(e.dataTransfer.getData('text/plain'));
    const sourcePiece = pieces.find(p => p.id === sourceId);
    const targetPiece = pieces.find(p => p.position === targetPosition);

    if (!sourcePiece) return;

    const updatedPieces = pieces.map(piece => {
      if (piece.id === sourcePiece.id) {
        return { ...piece, position: targetPosition };
      }
      if (targetPiece && piece.id === targetPiece.id) {
        return { ...piece, position: sourcePiece.position };
      }
      return piece;
    });

    setPieces(updatedPieces);
    const isComplete = updatedPieces.every(p => p.position === p.correctPosition);
    setCompleted(isComplete);

    if (isComplete) {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        
        confetti(Object.assign({}, defaults, {
          particleCount: 50,
          origin: { x: Math.random(), y: Math.random() - 0.2 }
        }));
      }, 250);
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-200 mb-6 text-center">Our Love Puzzle</h1>

      <div className="flex flex-col lg:flex-row gap-4 items-start justify-center">
        {/* Puzzle Grid - Optimized spacing */}
        <div className="w-full lg:w-auto">
          <div className="grid grid-cols-3 gap-1 sm:gap-2 bg-pink-900/40 p-2 sm:p-3 rounded-xl">
            {[...Array(12)].map((_, i) => {
              const position = i + 1;
              const piece = pieces.find(p => p.position === position);

              return (
                <div
                  key={position}
                  className="aspect-square bg-pink-800/60 border border-pink-600/50 rounded-lg overflow-hidden"
                  onDrop={(e) => handleDrop(e, position)}
                  onDragOver={(e) => e.preventDefault()}
                >
                  {piece && (
                    <img
                      src={piece.image}
                      alt={`Puzzle piece ${piece.id}`}
                      draggable
                      onDragStart={(e) => handleDragStart(e, piece.id)}
                      className="w-full h-full object-cover hover:brightness-110 transition"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Instructions Panel - More compact */}
        <div className="w-full lg:w-96 bg-pink-900/40 p-4 rounded-xl border border-pink-400/30">
          <h2 className="text-xl sm:text-2xl font-semibold text-pink-200 mb-3">
            Complete Our Love Puzzle
          </h2>
          <p className="text-pink-300 mb-4 text-sm sm:text-base">
            Drag and drop the puzzle pieces to form a heart shape. 
            When you complete it, you'll see a special surprise!
          </p>

          {completed && (
            <div className="mt-4 p-3 bg-pink-700 rounded-lg animate-pulse">
              <p className="text-white text-center font-medium">
                ❤️ You completed our love puzzle! Just like in real life, every piece fits perfectly with you. I love you! ❤️
              </p>
            </div>
          )}

          <div className="mt-4 flex justify-center">
            <img
              src={complete}
              alt="Our perfect picture"
              className="w-full max-w-xs rounded-lg border border-pink-500/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}