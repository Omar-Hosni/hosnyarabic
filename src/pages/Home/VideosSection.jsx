import React from 'react';
import { motion } from 'framer-motion';

const videos = [
  'https://www.youtube.com/embed/G1hKzCkywM8',
  'https://www.youtube.com/embed/HuFYqnbVbzY',
  'https://www.youtube.com/embed/K4TOrB7at0Y'
];

function VideosSection() {
  return (
    <section id="homepage-videos" className="py-20 bg-sky-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-center text-sky-800 mb-12"
        >
          تماذج لفيديوهات شرح
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="rounded-xl overflow-hidden shadow-md"
            >
              <iframe
                className="w-full aspect-video"
                src={src}
                title={`Video ${index + 1}`}
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideosSection;
