import React from 'react';
import CourseCard from '../../components/CourseCard';
import arab101 from '../../assets/arab101.jpg'
import arab102 from '../../assets/arab102.png'
import arab201 from '../../assets/arab201.png'
import arab202 from '../../assets/arab202.jpg'
import arab301 from '../../assets/arab301.jpg'
import arab302 from '../../assets/arab302.png'
import {motion} from 'framer-motion'

function BahrainPage() {
    const courses = [
        {
          image: arab101, // Replace with the actual import of 'arab101' image
          name: "عرب 101",
          description: "دورة شاملة لتعليم قواعد اللغة العربية، تهدف إلى تنمية مهارات الطلاب اللغوية في النحو والصرف والإملاء.",
          price: '5 BD لكل حصة',
          dateTime: 'متاحة طوال العام',
        },
        {
          image: arab102, // Replace with the actual import of 'arab102' image
          name: "عرب 102",
          description: "دورة متقدمة في القواعد العربية مع التركيز على النحو المتقدم، الصرف، واستخدام المفردات بشكل دقيق.",
          price: '5 BD لكل حصة',
          dateTime: 'متاحة طوال العام',
        },
        {
          image: arab201, // Replace with the actual import of 'arab201' image
          name: "عرب 201",
          description: "دورة تركز على تحليل النصوص الأدبية، مع دراسة الأساليب البلاغية والتوسع في مفردات اللغة العربية.",
          price: '5 BD لكل حصة',
          dateTime: 'متاحة طوال العام',
        },
        {
          image: arab202, // Replace with the actual import of 'arab202' image
          name: "عرب 202",
          description: "دورة في قواعد النحو المتقدمة مع دراسات تحليلية للنصوص الأدبية المعاصرة.",
          price: '5 BD لكل حصة',
          dateTime: 'متاحة طوال العام',
        },
        {
          image: arab301, // Replace with the actual import of 'arab301' image
          name: "عرب 301",
          description: "دورة متقدمة تهدف إلى تحسين مهارات الكتابة الأكاديمية والنقد الأدبي في اللغة العربية.",
          price: '5 BD لكل حصة',
          dateTime: 'متاحة طوال العام',
        },
        {
          image: arab302, // Replace with the actual import of 'arab302' image
          name: "عرب 302",
          description: "دورة متخصصة في القواعد المتقدمة للغة العربية، مع دراسة معمقة للبلاغة والصرف.",
          price: '5 BD لكل حصة',
          dateTime: 'متاحة طوال العام',
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

       {/* Services Section */}
        <h2 className="text-3xl font-bold text-center text-sky-800 mb-12">خدماتنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-sky-800 mb-4">التدريس الخاص أو الجماعي</h3>
            <p className="text-gray-600 text-sm">توفير دروس خصوصية أو تدريس جماعي حسب احتياجات الطالب.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-sky-800 mb-4">التدريس الجامعي لجميع مواد اللغة العربية</h3>
            <p className="text-gray-600 text-sm">تدريس شامل لجميع مواد اللغة العربية في المراحل الجامعية.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-sky-800 mb-4">استشارات في البحث والمراجع للرسائل والنشر</h3>
            <p className="text-gray-600 text-sm">تقديم استشارات علمية في مجال البحث والرسائل الأكاديمية.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-sky-800 mb-4">مراجعة وتحضير لامتحانات الثانوية العامة والجامعية</h3>
            <p className="text-gray-600 text-sm">مراجعة شاملة وتحضير للامتحانات الخاصة بالثانوية العامة أو الجامعية.</p>
          </div>
        </div>

        {/* Courses Section */}
        <h2 className="text-3xl font-bold text-center text-sky-800 mb-12">دورات الكورسات</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <CourseCard
            key={idx}
            image={course.image}
            name={course.name}
            description={course.description}
            price={course.price}
            dateTime={course.dateTime}
          />
        ))}
      </div>
      </motion.div>
    </section>
  );
}

export default BahrainPage;
