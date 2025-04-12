import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet'; // Import React Helmet
import hosny1 from '../../assets/hosny1.jpg';
import hosny4 from '../../assets/hosny4.jpg';
import hosny6 from '../../assets/hosny6.png'
import Flag from 'react-world-flags';
import { redirectToHowToRegister } from '../../util/utilFunctions';
import { useNavigate } from 'react-router-dom';
import hero_wallpaper from "../../assets/herowallpaper.png";
import hero_wallpaper2 from '../../assets/herowallpaper2.png';


function HeroSection() {
  const navigate = useNavigate();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "حسني سليمان",
    "url": "https://hosnyarabicteaching.com/",  // Replace with the actual URL
    "image": hosny6,  // Link to the image of حسني سليمان
    "description": "أستاذ لغة عربية لمقررات مصر, السعودية والبحرين.",
    "sameAs": [
      "https://www.x.com/Hosny76_EGYPT", // Replace with actual social media URLs if applicable
      "https://bh.linkedin.com/in/hosny-soliman-4782901ab"
    ]
  };

  return (
    <section
      className="relative py-10 overflow-hidden mt-20 "
      style={{ backgroundImage: `url(${hero_wallpaper})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Helmet>
        <title>حسني سليمان - أستاذ لغة عربية</title> {/* Custom title for this page */}
        <meta name="description" content="أستاذ لغة عربية لمقررات مصر, السعودية, والبحرين. تعلم الآن مع حسني سليمان." /> {/* Custom description */}
        <meta property="og:image" content={hosny1} /> {/* Open Graph Image */}
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
        >
        <div className="relative container container-contain">
            <motion.img
              src={hosny6}
              alt="Hero Illustration"
              className="w-full max-w-md mx-auto drop-shadow-xl scale-85 rounded-xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>
          <div className="container" dir='rtl'>
            <p  className="spacing-between-words d-thuluth-font tracking-normal legend-header text-4xl md:text-8xl font-bold text-sky-200 mb-4 leading-snug">
              حُسني سُليمان
            </p>
            <p className="text-gray-200 mb-6 text-medium leading-relaxed">
              <span className="block md:inline">
                أستاذ اللغة العربية 📚 - كل مقررات المراحل الثانوية والإعدادية 🎓
              </span>
              <span className="block md:inline">
                في مصر 🇪🇬 & السعودية 🇸🇦 & البحرين 🇧🇭
              </span>
            </p>
            <div className="flex gap-6 justify-end mb-6">
              <Flag code="EG" className="w-12 h-8 object-contain" />
              <Flag code="SA" className="w-12 h-8 object-contain" />
              <Flag code="BH" className="w-12 h-8 object-contain" />
            </div>
            <div className="flex gap-4 justify-end">
              <button
                onClick={() => {
                  redirectToHowToRegister(navigate);
                }}
                className="bg-sky-600 hover:bg-sky-700 text-black font-medium px-6 py-2 rounded-lg transition"
              >
                ابدأ الآن
              </button>
              <button
                onClick={() => {
                  var element = document.getElementById('homepage-videos');
                  element.scrollIntoView();
                }}
                className="bg-orange-500 hover:bg-orange-600 text-black font-medium px-6 py-2 rounded-lg transition"
              >
                اعرف المزيد
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
