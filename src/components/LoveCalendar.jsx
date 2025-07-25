import januaryImg from '../assets/images/calendar/january.jpg';
import februaryImg from '../assets/images/calendar/february.jpg';
import marchImg from '../assets/images/calendar/march.jpg';
import aprilImg from '../assets/images/calendar/april.jpg';
import mayImg from '../assets/images/calendar/may.jpg';
import juneImg from '../assets/images/calendar/june.jpg';
import julyImg from '../assets/images/calendar/july.jpg';
import augustImg from '../assets/images/calendar/august.jpg';
import septemberImg from '../assets/images/calendar/september.jpg';
import octoberImg from '../assets/images/calendar/october.jpg';
import novemberImg from '../assets/images/calendar/november.jpg';
import decemberImg from '../assets/images/calendar/december.jpg';

export default function LoveCalendar() {
  const favoritePhotos = [
    {
      month: "January",
      image: januaryImg,
      description: "Waktu kita nonton film bareng untuk pertama kali."
    },
    {
      month: "February",
      image: februaryImg,
      description: "Momen romantis pas Valentine kita."
    },
    {
      month: "March",
      image: marchImg,
      description: "Kita jalan-jalan ke pantai bareng!"
    },
    {
      month: "April",
      image: aprilImg,
      description: "Ngopi bareng sambil ngobrol panjang lebar."
    },
    {
      month: "May",
      image: mayImg,
      description: "Foto waktu ulang tahun kamu ❤️"
    },
    {
      month: "June",
      image: juneImg,
      description: "Sunset bareng di atas bukit 🌅"
    },
    {
      month: "July",
      image: julyImg,
      description: "Main hujan-hujanan bareng ☔"
    },
    {
      month: "August",
      image: augustImg,
      description: "Waktu kita ikut lomba 17an bareng 😄"
    },
    {
      month: "September",
      image: septemberImg,
      description: "Foto waktu kita belajar bareng di taman."
    },
    {
      month: "October",
      image: octoberImg,
      description: "Pas Halloween dan kamu lucu banget kostumnya!"
    },
    {
      month: "November",
      image: novemberImg,
      description: "Waktu piknik di bawah pohon rindang 🍂"
    },
    {
      month: "December",
      image: decemberImg,
      description: "Natal pertama kita bareng 🎄"
    }
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold text-pink-200 mb-8 text-center">Our Love Calendar</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoritePhotos.map((photo, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-pink-500/30 transition-all duration-300">
            <div className="aspect-[4/3] relative">
              <img 
                src={photo.image} 
                alt={photo.month} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {photo.description}
                </p>
              </div>
              <div className="absolute top-0 left-0 bg-pink-700 text-pink-100 px-3 py-1 rounded-br-lg text-sm">
                {photo.month}
              </div>  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
