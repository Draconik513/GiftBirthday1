import { useState } from "react";

import january1 from "../assets/images/memories/january-1.jpg";
import january2 from "../assets/images/memories/january-2.jpg";
import january3 from "../assets/images/memories/january-3.jpg";
import january4 from "../assets/images/memories/january-4.jpg";
import january5 from "../assets/images/memories/january-5.jpg";

import february1 from "../assets/images/memories/february-1.jpg";
import february2 from "../assets/images/memories/february-2.jpg";
import february3 from "../assets/images/memories/february-3.jpg";
import february4 from "../assets/images/memories/february-4.jpg";
import february5 from "../assets/images/memories/february-5.jpg";

import march1 from "../assets/images/memories/march-1.jpg";
import march2 from "../assets/images/memories/march-2.jpg";
import march3 from "../assets/images/memories/march-3.jpg";
import march4 from "../assets/images/memories/march-4.jpg";
import march5 from "../assets/images/memories/march-5.jpg";

import april1 from "../assets/images/memories/april-1.jpg";
import april2 from "../assets/images/memories/april-2.jpg";
import april3 from "../assets/images/memories/april-3.jpg";
import april4 from "../assets/images/memories/april-4.jpg";
import april5 from "../assets/images/memories/april-5.jpg";

import may1 from "../assets/images/memories/may-1.jpg";
import may2 from "../assets/images/memories/may-2.jpg";
import may3 from "../assets/images/memories/may-3.jpg";
import may4 from "../assets/images/memories/may-4.jpg";
import may5 from "../assets/images/memories/may-5.jpg";

import june1 from "../assets/images/memories/june-1.jpg";
import june2 from "../assets/images/memories/june-2.jpg";
import june3 from "../assets/images/memories/june-3.jpg";
import june4 from "../assets/images/memories/june-4.jpg";
import june5 from "../assets/images/memories/june-5.jpg";

import july1 from "../assets/images/memories/july-1.jpg";
import july2 from "../assets/images/memories/july-2.jpg";
import july3 from "../assets/images/memories/july-3.jpg";
import july4 from "../assets/images/memories/july-4.jpg";
import july5 from "../assets/images/memories/july-5.jpg";

import august1 from "../assets/images/memories/august-1.jpg";
import august2 from "../assets/images/memories/august-2.jpg";
import august3 from "../assets/images/memories/august-3.jpg";
import august4 from "../assets/images/memories/august-4.jpg";
import august5 from "../assets/images/memories/august-5.jpg";

import september1 from "../assets/images/memories/september-1.jpg";
import september2 from "../assets/images/memories/september-2.jpg";
import september3 from "../assets/images/memories/september-3.jpg";
import september4 from "../assets/images/memories/september-4.jpg";
import september5 from "../assets/images/memories/september-5.jpg";

import october1 from "../assets/images/memories/october-1.jpg";
import october2 from "../assets/images/memories/october-2.jpg";
import october3 from "../assets/images/memories/october-3.jpg";
import october4 from "../assets/images/memories/october-4.jpg";
import october5 from "../assets/images/memories/october-5.jpg";

import november1 from "../assets/images/memories/november-1.jpg";
import november2 from "../assets/images/memories/november-2.jpg";
import november3 from "../assets/images/memories/november-3.jpg";
import november4 from "../assets/images/memories/november-4.jpg";
import november5 from "../assets/images/memories/november-5.jpg";

import december1 from "../assets/images/memories/december-1.jpg";
import december2 from "../assets/images/memories/december-2.jpg";
import december3 from "../assets/images/memories/december-3.jpg";
import december4 from "../assets/images/memories/december-4.jpg";
import december5 from "../assets/images/memories/december-5.jpg";

const monthPhotos = {
  January: [january1, january2, january3, january4, january5],
  Februari: [february1, february2, february3, february4, february5],
  March: [march1, march2, march3, march4, march5],
  April: [april1, april2, april3, april4, april5],
  Mei: [may1, may2, may3, may4, may5],
  June: [june1, june2, june3, june4, june5],
  Juli: [july1, july2, july3, july4, july5],
  August: [august1, august2, august3, august4, august5],
  September: [september1, september2, september3, september4, september5],
  Oktober: [october1, october2, october3, october4, october5],
  November: [november1, november2, november3, november4, november5],
  Desember: [december1, december2, december3, december4, december5]
};


export default function Gallery() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const monthsWithPhotos = Object.keys(monthPhotos)
    .filter((month) => monthPhotos[month].length > 0)
    .map((month) => ({
      name: month,
      photos: monthPhotos[month].length
    }));

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-pink-200 mb-6 text-center">
        Our Memories Through the Months
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {monthsWithPhotos.map((month) => (
          <div
            key={month.name}
            className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-200"
            onClick={() => setSelectedMonth(month.name)}
          >
            <div className="aspect-square bg-gradient-to-br from-pink-700 to-purple-700 flex flex-col items-center justify-center p-2">
              <span className="text-lg font-semibold text-pink-100 text-center">
                {month.name}
              </span>
              <span className="mt-1 bg-pink-800 text-pink-200 text-xs px-2 py-1 rounded-full">
                {month.photos} {month.photos === 1 ? "photo" : "photos"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedMonth && (
  <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
    {/* Header */}
    <div className="flex justify-between items-center p-4 border-b border-pink-800 bg-black bg-opacity-80">
      <h2 className="text-xl md:text-2xl font-bold text-pink-200">
        {selectedMonth} Memories
      </h2>
      <button
        className="text-pink-300 hover:text-white text-2xl"
        onClick={() => setSelectedMonth(null)}
      >
        ✕
      </button>
    </div>

    {/* Photos Grid - Improved spacing */}
    <div className="flex-1 overflow-y-auto p-2 sm:p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
        {monthPhotos[selectedMonth].map((photo, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedPhoto(index)}
          >
            <img
              src={photo}
              alt={`Memory ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)}

      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={() => setSelectedPhoto(null)}
          >
            ✕
          </button>

          <img
            src={monthPhotos[selectedMonth][selectedPhoto]}
            alt={`Memory from ${selectedMonth}`}
            className="w-full h-full object-contain"
          />

          <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-60 px-4 py-2 rounded text-sm z-50">
            {selectedMonth} - Photo {selectedPhoto + 1}
          </div>
        </div>
      )}
    </div>
  );
}