import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    title: 'البحرين',
    description: 'شرح وتدريس كلل مقررات الثانوية والجامعة',
    students: '300+',
    duration: '6 أسابيع',
    redirect: '/bahrain'
  },
  {
    title: 'مصر',
    description: 'شرح نحو, صرف, بلاغة, والنصوص المقررة',
    students: '500+',
    duration: '8 أسابيع',
    redirect: '/egypt'
  },
  {
    title: 'السعودية (القدرات - المقرر اللفظي)',
    description: 'أسرع وأسهل الطرق لحل الأسئلة',
    students: '200+',
    duration: '4 أسابيع',
    redirect: '/ksa'
  }
];

function CoursesSection() {
  const navigate = useNavigate()
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-center text-sky-700 mb-12"
        >
          كورسات حسني
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-sky-50 border border-sky-100 rounded-xl shadow p-6 hover:cursor-pointer hover:scale-110 transition"
              onClick={()=>{
                navigate(course.redirect)
              }}
            >
              <h3 className="text-xl font-bold text-sky-800 mb-2 text-right">{course.title}</h3>
              <p className="text-gray-600 mb-4 text-right">{course.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
