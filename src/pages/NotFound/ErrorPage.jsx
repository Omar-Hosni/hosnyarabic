// src/pages/NotFound.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-sky-50 flex items-center justify-center text-center px-6" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-2xl p-10 max-w-xl w-full"
      >
        <h1 className="text-5xl font-bold text-sky-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">الصفحة غير موجودة</h2>
        <p className="text-gray-600 mb-8">
          عذرًا، الصفحة التي تحاول الوصول إليها غير متاحة أو تم نقلها.
        </p>
        <button
          onClick={() => navigate('/')}
          className="hover:text-sky-600 transition"
        >
          العودة إلى الصفحة الرئيسية
        </button>
      </motion.div>
    </section>
  );
}

export default ErrorPage;
