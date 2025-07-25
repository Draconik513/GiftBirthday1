// import { useState, useEffect } from 'react';
// import Gallery from './Gallery';
// import LoveCalendar from './LoveCalendar';
// import LovePuzzle from './LovePuzzle';
// import LoveNotes from './LoveNotes';
// import { FaHome, FaImages, FaCalendarAlt, FaPuzzlePiece, FaHeart, FaMusic } from 'react-icons/fa';
// import bg from '../assets/bg-space.jpg';
// import ustogether from '../assets/images/couple2.jpg'

// const RelationshipTimer = () => {
//   const [duration, setDuration] = useState({
//     years: 0,
//     months: 0,
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   useEffect(() => {
//     // Set your relationship start date
//     const startDate = new Date('2022-01-01');
//     const updateTimer = () => {
//       const now = new Date();
//       const diff = now - startDate;
      
//       const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
//       const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
//       const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
//       setDuration({ years, months, days, hours, minutes, seconds });
//     };
    
//     updateTimer();
//     const interval = setInterval(updateTimer, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
//       {Object.entries(duration).map(([unit, value]) => (
//         <div key={unit} className="bg-pink-800 bg-opacity-50 p-4 rounded-lg text-center">
//           <div className="text-3xl font-bold text-pink-200">{Math.floor(value)}</div>
//           <div className="text-sm text-pink-300 uppercase">{unit}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default function MainMenu({ currentPage, setCurrentPage }) {
//   const [hoverEffect, setHoverEffect] = useState(null);
//   const [showHearts, setShowHearts] = useState([]);

//   const handleClick = (e) => {
//     const x = e.clientX;
//     const y = e.clientY;
//     setShowHearts(prev => [
//       ...prev,
//       { id: Date.now(), x, y }
//     ]);
    
//     setTimeout(() => {
//       setShowHearts(prev => prev.slice(1));
//     }, 1000);
//   };

//   const menuItems = [
//     { id: 'home', icon: <FaHome />, label: 'Home' },
//     { id: 'memories', icon: <FaImages />, label: 'Our Memories' },
//     { id: 'calendar', icon: <FaCalendarAlt />, label: 'Love Calendar' },
//     { id: 'puzzle', icon: <FaPuzzlePiece />, label: 'Love Puzzle' },
//     { id: 'notes', icon: <FaHeart />, label: 'Love Notes' },
//     { id: 'music', icon: <FaMusic />, label: 'Our Song' }
//   ];

//   return (
//     <div 
//       className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 bg-fixed"
//       style={{ backgroundImage: `url(${bg})`, backgroundSize: 'fit' }}
//       onClick={handleClick}
//     >
//       {/* Floating hearts */}
//       {showHearts.map(heart => (
//         <div
//           key={heart.id}
//           className="absolute text-pink-500 text-2xl pointer-events-none animate-floatHeart"
//           style={{
//             left: heart.x - 15,
//             top: heart.y - 15,
//             animation: `floatHeart 1s ease-out forwards`
//           }}
//         >
//           ❤️
//         </div>
//       ))}

//       {/* Main content */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row">
//           {/* Sidebar */}
//           <div className="w-full md:w-64 mb-8 md:mb-0 md:mr-8">
//             <div className="bg-pink-900 bg-opacity-50 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-pink-400 border-opacity-30">
//               <h2 className="text-2xl font-bold text-pink-200 mb-6 text-center">Our Love Journey</h2>
//               <nav>
//                 <ul className="space-y-3">
//                   {menuItems.map(item => (
//                     <li key={item.id}>
//                       <button
//                         onClick={() => setCurrentPage(item.id)}
//                         onMouseEnter={() => setHoverEffect(item.id)}
//                         onMouseLeave={() => setHoverEffect(null)}
//                         className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
//                           currentPage === item.id
//                             ? 'bg-pink-700 text-white shadow-md'
//                             : 'text-pink-200 hover:bg-pink-800 hover:bg-opacity-50'
//                         }`}
//                       >
//                         <span className="text-xl mr-3">{item.icon}</span>
//                         <span>{item.label}</span>
//                         {hoverEffect === item.id && (
//                           <span className="ml-auto text-pink-300 animate-pulse">❤️</span>
//                         )}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//             </div>
//           </div>

//           {/* Main content area */}
//           <div className="flex-1">
//             <div className="bg-pink-900 bg-opacity-50 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-pink-400 border-opacity-30 min-h-[80vh]">
//               {currentPage === 'home' && (
//                 <div className="text-center">
//                   <h1 className="text-4xl font-bold text-pink-200 mb-6">Welcome to Our Special Place</h1>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                     <div className="bg-pink-800 bg-opacity-50 rounded-xl p-6 border border-pink-400 border-opacity-30">
//                       <h2 className="text-2xl font-semibold text-pink-100 mb-4">Our Love Timeline</h2>
//                       <RelationshipTimer />
//                     </div>
//                     <div className="relative group overflow-hidden rounded-xl">
//                       <img 
//                         src={ustogether}
//                         alt="Us together" 
//                         className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-pink-900 via-transparent to-transparent opacity-70"></div>
//                       <div className="absolute bottom-0 left-0 p-4 text-white">
//                         <p className="text-xl font-semibold">Forever Yours</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div className="bg-pink-800 bg-opacity-50 p-4 rounded-xl border border-pink-400 border-opacity-30">
//                       <h3 className="text-xl font-semibold text-pink-200 mb-2">Special Dates</h3>
//                       <ul className="text-pink-300 space-y-2">
//                         <li>First Meet: Jan 1, 2022</li>
//                         <li>First Date: Jan 15, 2022</li>
//                         <li>Anniversary: Feb 14, 2022</li>
//                       </ul>
//                     </div>
//                     <div className="bg-pink-800 bg-opacity-50 p-4 rounded-xl border border-pink-400 border-opacity-30">
//                       <h3 className="text-xl font-semibold text-pink-200 mb-2">Our Places</h3>
//                       <ul className="text-pink-300 space-y-2">
//                         <li>Favorite Cafe: Starbucks</li>
//                         <li>Favorite Park: Central Park</li>
//                         <li>Favorite Restaurant: Italian Bistro</li>
//                       </ul>
//                     </div>
//                     <div className="bg-pink-800 bg-opacity-50 p-4 rounded-xl border border-pink-400 border-opacity-30">
//                       <h3 className="text-xl font-semibold text-pink-200 mb-2">Memories</h3>
//                       <ul className="text-pink-300 space-y-2">
//                         <li>Trips Together: 5</li>
//                         <li>Movies Watched: 42</li>
//                         <li>Songs Shared: 127</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {currentPage === 'memories' && <Gallery />}
//               {currentPage === 'calendar' && <LoveCalendar />}
//               {currentPage === 'puzzle' && <LovePuzzle />}
//               {currentPage === 'notes' && <LoveNotes />}
//               {currentPage === 'music' && <MusicPlayer />}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState, useEffect } from 'react';
import Gallery from './Gallery';
import LoveCalendar from './LoveCalendar';
import LovePuzzle from './LovePuzzle';
import LoveNotes from './LoveNotes';
import MusicPlayer from './MusicPlayer';
import { FaHome, FaImages, FaCalendarAlt, FaPuzzlePiece, FaHeart, FaMusic } from 'react-icons/fa';
import bg from '../assets/bg-space.jpg';
import ustogether from '../assets/images/couple2.jpg';

const RelationshipTimer = () => {
  const [duration, setDuration] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date('2022-01-01');
    const updateTimer = () => {
      const now = new Date();
      const diff = now - startDate;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setDuration({ years, months, days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {Object.entries(duration).map(([unit, value]) => (
        <div key={unit} className="bg-pink-800 bg-opacity-50 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-pink-200">{Math.floor(value)}</div>
          <div className="text-sm text-pink-300 uppercase">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default function MainMenu({ currentPage, setCurrentPage }) {
  const [hoverEffect, setHoverEffect] = useState(null);
  const [showHearts, setShowHearts] = useState([]);

  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setShowHearts(prev => [...prev, { id: Date.now(), x, y }]);

    setTimeout(() => {
      setShowHearts(prev => prev.slice(1));
    }, 1000);
  };

  const menuItems = [
    { id: 'home', icon: <FaHome />, label: 'Home' },
    { id: 'memories', icon: <FaImages />, label: 'Our Memories' },
    { id: 'calendar', icon: <FaCalendarAlt />, label: 'Love Calendar' },
    { id: 'puzzle', icon: <FaPuzzlePiece />, label: 'Love Puzzle' },
    { id: 'notes', icon: <FaHeart />, label: 'Love Notes' },
    { id: 'music', icon: <FaMusic />, label: 'Our Song' }
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 bg-fixed relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
      onClick={handleClick}
    >
      {showHearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-pink-500 text-2xl pointer-events-none animate-floatHeart"
          style={{
            left: heart.x - 15,
            top: heart.y - 15,
            animation: `floatHeart 1s ease-out forwards`
          }}
        >
          ❤️
        </div>
      ))}

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-64 mb-8 md:mb-0 md:mr-8">
            <div className="bg-pink-900 bg-opacity-50 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-pink-400 border-opacity-30">
              <h2 className="text-2xl font-bold text-pink-200 mb-6 text-center">Our Love Journey</h2>
              <nav>
                <ul className="space-y-3">
                  {menuItems.map(item => (
                    <li key={item.id}>
                      <button
                        onClick={() => setCurrentPage(item.id)}
                        onMouseEnter={() => setHoverEffect(item.id)}
                        onMouseLeave={() => setHoverEffect(null)}
                        className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                          currentPage === item.id
                            ? 'bg-pink-700 text-white shadow-md'
                            : 'text-pink-200 hover:bg-pink-800 hover:bg-opacity-50'
                        }`}
                      >
                        <span className="text-xl mr-3">{item.icon}</span>
                        <span>{item.label}</span>
                        {hoverEffect === item.id && (
                          <span className="ml-auto text-pink-300 animate-pulse">❤️</span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-pink-900 bg-opacity-50 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-pink-400 border-opacity-30 min-h-[80vh]">
              {currentPage === 'home' && (
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-pink-200 mb-6">Welcome to Our Special Place</h1>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-pink-800 bg-opacity-50 rounded-xl p-6 border border-pink-400 border-opacity-30">
                      <h2 className="text-2xl font-semibold text-pink-100 mb-4">Our Love Timeline</h2>
                      <RelationshipTimer />
                    </div>
                    <div className="relative group overflow-hidden rounded-xl">
                      <img
                        src={ustogether}
                        alt="Us together"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900 via-transparent to-transparent opacity-70"></div>
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <p className="text-xl font-semibold">Forever Yours</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-pink-800 bg-opacity-50 p-4 rounded-xl border border-pink-400 border-opacity-30">
                      <h3 className="text-xl font-semibold text-pink-200 mb-2">Special Dates</h3>
                      <ul className="text-pink-300 space-y-2">
                        <li>First Meet: Jan 1, 2022</li>
                        <li>First Date: Jan 15, 2022</li>
                        <li>Anniversary: Feb 14, 2022</li>
                      </ul>
                    </div>
                    <div className="bg-pink-800 bg-opacity-50 p-4 rounded-xl border border-pink-400 border-opacity-30">
                      <h3 className="text-xl font-semibold text-pink-200 mb-2">Our Places</h3>
                      <ul className="text-pink-300 space-y-2">
                        <li>Favorite Cafe: Starbucks</li>
                        <li>Favorite Park: Central Park</li>
                        <li>Favorite Restaurant: Italian Bistro</li>
                      </ul>
                    </div>
                    <div className="bg-pink-800 bg-opacity-50 p-4 rounded-xl border border-pink-400 border-opacity-30">
                      <h3 className="text-xl font-semibold text-pink-200 mb-2">Memories</h3>
                      <ul className="text-pink-300 space-y-2">
                        <li>Trips Together: 5</li>
                        <li>Movies Watched: 42</li>
                        <li>Songs Shared: 127</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {currentPage === 'memories' && <Gallery />}
              {currentPage === 'calendar' && <LoveCalendar />}
              {currentPage === 'puzzle' && <LovePuzzle />}
              {currentPage === 'notes' && <LoveNotes />}
              {currentPage === 'music' && <MusicPlayer />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
