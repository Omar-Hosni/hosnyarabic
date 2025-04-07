import React from 'react';
import CourseCard from '../../components/CourseCard';
import coursesbahrain from '../../assets/coursesbahrain.png'
import coursesksa from '../../assets/coursesksa.png'
import coursesegypt from '../../assets/coursesegypt.png'

import {motion} from 'framer-motion'

function CoursesPage() {
    const courses = [
        {
          image: coursesbahrain, // Replace with the actual import of 'arab101' image
          name: "مقرر الثانوية العامة في البحرين",
          description: "دورة شاملة لتعليم قواعد اللغة العربية، تهدف إلى تنمية مهارات الطلاب اللغوية في النحو والصرف والإملاء - مقررات 101,102,201,202,301,302.",
          price:"5DB لكل حصة",
          extra:"15BD لكل المذكرات ونماذج الحل",
          dateTime: 'متاحة طوال العام',
        },
        {
            image: coursesksa, // Replace with the actual import of 'arab101' image
            name: "مقرر الثانوية العامة في السعودية",
            description: "المصرر التحصيلي والقدرات اللفظية",
            price:"150 SAR للحصة",
            extra:"200 SAR للنماذج",
            dateTime: 'متاحة طوال العام',
            status:'...جاري الإنشاء'
        },
        {
            image: coursesegypt, // Replace with the actual import of 'arab101' image
            name: "مقرر الثانوية العامة في مصر",
            description: "النحو والصرف, البلاغة, النصوص, التعبير, وكل ما يخص المنهج المصري",
            price:"300 EGP لكل حصة",
            extra:"1000 EGP للمذكرات",
            dateTime: 'متاحة طوال العام',
            status:'...جاري الإنشاء'
        },
      ];
      

  return (
    <section className="py-20 bg-sky-50 mt-20">
      <motion.div 
      className="container mx-auto px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-sky-800 mb-12">دورات الكورسات</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <CourseCard
              key={idx}
              image={course.image}
              name={course.name}
              description={course.description}
              price={course.price}
              extra={course.extra}
              dateTime={course.dateTime}
              status={course.status}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default CoursesPage;
