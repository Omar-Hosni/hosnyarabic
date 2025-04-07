import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo3 from '../assets/logo3.png'
import { useNavigate, useLocation } from 'react-router-dom';
import { redirectToContact } from '../util/utilFunctions';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const links = [
    { label: 'بحرين', href: '/bahrain' },
    { label: 'مصر', href: '/egypt' },
    { label: 'السعودية', href: '/ksa' },
    { label: 'التواصل', href: '/contact' },
    { label: 'الكورسات', href: '/courses' },
    { label: 'خطوات التسجيل', href: '/how-to-register' },
  ];

  return (
    <header className="w-full shadow-sm fixed top-0 z-50 bg-white dark:bg-gray-900 dark:text-black">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <p
          onClick={()=>{
            window.location.replace("https://t.me/HosnyEgypt")
          }}
          className="hidden md:block bg-sky-500 hover:bg-sky-300 hover:cursor-pointer text-white px-4 py-2 rounded-lg font-medium transition"
        >
          Contact with Telegram
        </p>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-right font-medium">
          {links.map((link, idx) => (
            
            <button key={idx} onClick={()=>{
                if(idx === 3){
                    redirectToContact(location, navigate)
                }else{
                    navigate(`${link.href}`)
                }
            }} className="hover:text-sky-600 transition">
              {link.label}
            </button>
          ))}
          {/* <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-sky-100 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button> */}
        </nav>
        <img
          onClick={()=>{
            navigate('/')
          }}
          src={logo3}
          className="w-20 rounded-full hover:cursor-pointer"
        />

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {/* <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-sky-100 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button> */}
          <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-sky-100 dark:hover:bg-gray-800">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden px-6 py-4 bg-white dark:bg-gray-900 border-t">
          <div className="flex flex-col gap-4 items-end text-right font-medium">
            {links.map((link, idx) => (
              <Link
                key={idx}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="hover:text-sky-600 transition"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://t.me/HosnyEgypt"
              className="mt-4 bg-sky-500 hover:bg-sky-600 hover:cursor-pointer text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Contact with Telegram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
