import React from 'react';
import { redirectToTelegram } from '../../util/utilFunctions';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: '✉️📲',
    text: 'راسلنا مباشرة عبر تيليجرام للتسجيل في الدورة المطلوبة.',
  },
  {
    number: '02',
    icon: '📖⌨️',
    text: 'اختر الدورة التي ترغب في الاشتراك بها وتعرف على تفاصيلها.',
  },
  {
    number: '03',
    icon: '💬💳',
    text: 'سيتم تزويدك بتفاصيل الدفع كاملة داخل المحادثة.',
  },
  {
    number: '04',
    icon: '📨🔗',
    text: 'بعد إتمام الدفع بنجاح، سيتم دعوتك إلى القناة أو المجموعة الخاصة بالدورة.',
  },
];

const HowToRegister = () => {
  return (
    <section className="py-20 bg-sky-50 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6"
        dir="rtl"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sky-800 mb-4">خطوات التسجيل في دوراتنا</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            للتسجيل في دوراتنا اتبع الخطوات الآتية مع مراعاة ذكر نوع الدورة المراد التسجيل بها أثناء التواصل معنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-right">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="text-2xl font-bold text-orange-500">{step.number}</div>
              <div>
                <div className="text-2xl mb-1">{step.icon}</div>
                <p className="text-gray-800 text-md leading-loose text-justify">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={redirectToTelegram}
            className="hover:text-sky-600 transition"
          >
            تواصل معنا
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HowToRegister;
