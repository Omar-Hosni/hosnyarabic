import React from 'react';
import { redirectToTelegram } from '../util/utilFunctions';
import { BookOpen, Clock, Star, Users, TrendingUp } from 'lucide-react';

function CourseCard({ image, name, description, price, extra, dateTime, status }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {status && status.length > 0 ? (
        <div className="relative">
          <img src={image} alt={name} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <div className="absolute inset-0 inset-y-4 bg-black/70 backdrop-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-2xl">{status}</h1>
          </div>
        </div>
      ) : (
        <img src={image} alt={name} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-sky-800 mb-3 group-hover:text-yellow-400 transition-colors duration-300">{name}</h3>
        <p className="text-gray-600 text-medium mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">{description}</p>
        
        <div className="flex gap-4 mb-4">
          <span className="px-4 py-1 text-sm text-white bg-sky-600 rounded-full">{price}</span>
          <span className="px-4 py-1 text-sm text-white bg-orange-500 rounded-full">{extra}</span>
        </div>
        
        <div className="text-sm text-gray-500">{dateTime}</div>
      </div>

      <div className="px-6 py-3 bg-gray-50 flex justify-between items-center">
        <button 
          onClick={() => redirectToTelegram()}
          className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded-lg transition duration-300"
        >
          اشترك الآن
        </button>
        <button 
          onClick={() => redirectToTelegram()}
          className="bg-sky-600 hover:bg-sky-700 text-black px-6 py-2 rounded-lg transition duration-300"
        >
          شاهد المحتوى
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
