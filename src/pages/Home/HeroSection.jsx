import React from 'react';
import { motion } from 'framer-motion';
import hosny1 from '../../assets/hosny1.jpg'
import hosny2 from '../../assets/hosny2.jpg'
import Flag from 'react-world-flags';

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-white via-sky-50 to-sky-100 py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
        >
          <div className="text-right">
            <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mb-4 leading-snug">
             حسني سليمان 
            </h1>
            <p className="typewriter text-gray-600 mb-6 text-lg leading-relaxed">
            مدرس عربي لمقررات مصر , السعودية والبحرين
            </p>
            <div className="flex gap-6 justify-end mb-6">
                <Flag code="EG" className="w-12 h-8 object-contain" />
                <Flag code="SA" className="w-12 h-8 object-contain" />
                <Flag code="BH" className="w-12 h-8 object-contain" />
            </div>
            <div className="flex gap-4 justify-end">
              <button className="bg-sky-600 hover:bg-sky-700 text-black font-medium px-6 py-2 rounded-lg transition">
                ابدأ الآن
              </button>
              <button 
              onClick={()=>{
                var element = document.getElementById('homepage-videos')
                console.log(element)
                element.scrollIntoView()
              }}
              className="bg-orange-500 hover:bg-orange-600 text-black font-medium px-6 py-2 rounded-lg transition">
                اعرف المزيد
              </button>
            </div>
          </div>
          <div className="relative">
            <motion.img
              src={hosny1}
              alt="Hero Illustration"
              className="w-full max-w-md mx-auto drop-shadow-xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
