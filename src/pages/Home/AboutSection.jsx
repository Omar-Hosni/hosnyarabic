import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users } from 'lucide-react';

function AboutSection() {
  return (
    <section className="py-20 animated-background bg-gradient-to-r from-sky-200 via-blue-200 to-cyan-100">
      <div className=" container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-center text-sky-700 mb-12"
        >
          عن المنصة
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-right text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            مع خبرة تمتد لأكثر من 27 عامًا، نعمل على تبسيط مفاهيم القدرات وتقديمها بطريقة عملية
            ومناسبة لجميع المستويات لتحقيق النجاح والتفوق.
          </p>
          <div className="mt-8 flex flex-row justify-center gap-20">
            <div className="flex items-center gap-4">
              <BookOpen className="w-8 h-8 text-sky-600" />
              <div>
                <h3 className="font-semibold text-sky-700">الخبرة</h3>
                <p>27+ سنة في التعليم</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Users className="w-8 h-8 text-sky-600" />
              <div>
                <h3 className="font-semibold text-sky-700">عدد الطلاب</h3>
                <p>1100+ طالب وطالبة</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
