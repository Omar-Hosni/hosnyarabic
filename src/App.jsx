import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';  // Import React Helmet

import Navbar from './components/Navbar';
import Homepage from './pages/Home/HomePage';
import BahrainPage from './pages/Bahrain/BahrainPage';
import EgyptPage from './pages/Egypt/EgyptPage';
import KSAPage from './pages/KSA/KSAPage';
import CoursesPage from './pages/Courses/CoursesPage';
import HowToRegister from './pages/Register/HowToRegister';

function App() {
  return (
    <Router>
      <div className="font-readex bg-white min-h-screen">
        <Helmet>
          <title>Hosny Arabic Teaching</title>
          <meta name="description" content="أستاذ حسني لتدريس اللغة العربية لمقررات مصر والسعودية والبحرين" />
          <meta name="keywords" content="react, website, Arabic, education, arabic teacher, bahrain arabic, ksa arabic, egypt arabic, مقرر ثانوية عامة, ثانوية عامة, البحرين" />
        </Helmet>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/bahrain" element={<BahrainPage />} />
          <Route path="/egypt" element={<EgyptPage />} />
          <Route path="/ksa" element={<KSAPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/how-to-register" element={<HowToRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
