import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


// utils/redirectToContact.js

export const redirectToContact = (location, navigate) => {
    if (location.pathname !== '/') { 
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
};

export const redirectToTelegram = () => {
    const telegramUrl = `https://t.me/HosnyEgypt`;
    window.open(telegramUrl, "_blank"); // Opens in a new tab
  };