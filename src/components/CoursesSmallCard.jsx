import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CoursesSmallCard = ({ course, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-sky-50 border border-sky-100 rounded-xl shadow p-6 hover:cursor-pointer hover:scale-110 transition"
      onClick={() => {
        navigate(course.redirect);
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
  );
};

export default CoursesSmallCard;
