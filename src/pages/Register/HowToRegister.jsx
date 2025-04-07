import React from 'react';
import { redirectToTelegram } from '../../util/utilFunctions';
import {motion} from 'framer-motion';

const HowToRegister = () => {
  return (
    <section className="py-20 bg-sky-50 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6">
          
        <h2 className="text-3xl font-bold text-center text-sky-800 mb-12">
          خطوات التسجيل
        </h2>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6 text-right">
            <p className="text-lg text-gray-600">
              1. تواصل عبر تيليجرام
            </p>
            <p className="text-lg text-gray-600">
              2. حدد الدورة التي ترغب في الاشتراك بها
            </p>
            <p className="text-lg text-gray-600">
              3. سيتم تبادل تفاصيل الدفع
            </p>
            <p className="text-lg text-gray-600">
              4. ستنضم إلى المجموعة حيث يتم عقد المحتوى والدروس
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
           onClick={()=>{
            redirectToTelegram()
           }}
           className="bg-sky-800 hover:bg-sky-700 text-black border-black font-medium px-8 py-3 rounded-lg transition"
          >
            تواصل معنا عبر تيليجرام
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HowToRegister;
