import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CoursesSmallCard from '../../components/CoursesSmallCard';
import aroodlogo from '../../assets/aroodbackground.png'
import researchlogo from '../../assets/researchlogo.png'
import CourseCard from '../../components/CourseCard';

const courses = [
  {
    title: 'البحرين',
    description: 'شروح لدروس النحو والصرف والبلاغة والنصوص المقررة لكل المراحل الثانوية والإعدادية',
    students: '300+',
    duration: '6 أسابيع',
    redirect: '/bahrain'
  },
  {
    title: 'مصر',
    description: 'شروح لدروس النحو والصرف والبلاغة والنصوص المقررة لكل المراحل الثانوية والإعدادية',
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

const advancedCourses = [
  {
    image: aroodlogo, // Replace with the actual import of 'arab101' image
    name: "علم العَرُوض",
    description: "هو علم يُعرف به صحيح أوزان الشعر العربيّ من فاسدها وما يعتريها من الزحافات والعلل.. وهو ميزان الشعر العربيّ، به يعرف مكسوره من موزونه. تمامًا كما أن النحو معيارُ الكلام، وبه يعرف مُعربُه من ملحونِه.",
    price:"5DB لكل حصة",
    extra:"25BD لكل المذكرات ونماذج الحل",
    dateTime: 'متاحة طوال العام',
  },
  {
    image: researchlogo, // Replace with the actual import of 'arab101' image
    name: "قسم الأبحاث الأكاديمية",
    description: "استشارات في البحث والمراجع للرسائل والنشر",
    price:"5DB لكل حصة",
    extra:"25BD لكل المذكرات ونماذج الحل",
    dateTime: 'متاحة طوال العام',
  }
]

function CoursesSection() {
  const navigate = useNavigate()
  return (

    <section className="w-full py-10 animated-background bg-gradient-to-r from-sky-200 via-blue-200 to-cyan-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-center text-sky-700 mb-12"
        >
          كورسات أستاذ حسني
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CoursesSmallCard course={course} index={index}/>
          ))}
        </div>
      </div>


      <div className="flex flex-col container mx-auto px-6 py-10 max-w-6xl">
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold text-center text-sky-700 mb-12"
          >
            دورات متقدّمة متخصصة للمراحل الجامعية
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scale-90">
          {advancedCourses.map((course, index) => (
            <CourseCard
              key={index}
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
      </div>
    </section>
  );
}

export default CoursesSection;
