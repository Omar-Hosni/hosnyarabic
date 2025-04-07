import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { CIcon } from '@coreui/icons-react';
import { cibTelegramPlane } from '@coreui/icons';
import emailjs from 'emailjs-com';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_jlardfe', // Replace with your service ID
        'template_dim4p77', // Replace with your template ID
        formData,
        'ueSepuThMTooNoUS2' // Replace with your User ID
      )
      .then(
        () => {
          setStatus('تم إرسال الرسالة بنجاح!');
          setFormData({ name: '', email: '', message: '' }); // Clear the form
        },
        () => {
          setStatus(' حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل عبر التليجرام.');
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-sky-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold text-center text-sky-800 mb-12"
        >
          تواصل معنا
        </motion.h2>
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex flex-col gap-6 mb-6 text-right">
              <div className="flex items-center gap-4 justify-end">
                <a
                  href="https://t.me/HosnyEgypt"
                  className="text-gray-700 hover:text-sky-600 flex items-center gap-2"
                >
                 <CIcon icon={cibTelegramPlane} className="w-5 h-5 text-sky-600" />
                  Telegram: @HosnyEgypt
                </a>
              </div>
              <div className="flex items-center gap-4 justify-end">
                <a
                  href="mailto:hosnysoliman1@gmail.com"
                  className="text-gray-700 hover:text-sky-600 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5 text-sky-600" />
                  Email: hosnysoliman1@gmail.com
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                placeholder="الاسم"
                value={formData.name}
                onChange={handleChange}
                className="text-right text-black px-4 py-3 rounded-lg focus:outline-none focus:border-sky-500 border-2 border-black"
              />
              <input
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
                value={formData.email}
                onChange={handleChange}
                className="text-right text-black px-4 py-3 rounded-lg focus:outline-none focus:border-sky-500 border-2 border-black"
              />
              <textarea
                name="message"
                placeholder="اكتب رسالتك"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="text-right text-black px-4 py-3 rounded-lg focus:outline-none focus:border-sky-500 border-2 border-black"
              ></textarea>
              <button
                type="submit"
                className="bg-sky-600 text-black py-2 px-6 rounded-lg hover:bg-sky-700 transition"
              >
                إرسال
              </button>
            </form>

            {/* Status Message */}
            {status && (
              <div className="mt-4 text-center text-lg text-gray-700">
                {status}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
