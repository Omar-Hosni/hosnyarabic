import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/bahrain" element={<BahrainPage />} />
          <Route path="/egypt" element={<EgyptPage />} />
          <Route path="/ksa" element={<KSAPage />} />
          <Route path="/courses" element={<CoursesPage/>} />
          <Route path="/how-to-register" element={<HowToRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
