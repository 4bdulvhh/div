import React from 'react';
import { Link } from 'react-router-dom';
import {
  NAVIGATION_LINKS,
  COURSES,
  SOCIAL_LINKS,
  CONTACT_INFO,
} from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 py-12" id="main-footer">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        {/* Sol Bölmə - Logo və Məlumat */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <Link to="/">
            <img
              src="/images/logo-1.png"
              alt="Div Academy"
              className="h-12 mb-4"
            />
          </Link>
          <p className="text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()} Div Academy<br/>
            Proqramlaşdırma kursları
          </p>
        </div>

        {/* Orta Bölmə - Menyular */}
        <div className="w-full md:w-2/4 grid grid-cols-2 gap-12 mb-8 md:mb-0">
          <div className="text-left">
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-900 font-semibold hover:text-gray-600 transition-colors duration-500 ease-in-out"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-left">
            <ul className="space-y-3">
              {COURSES.map((course) => (
                <li key={course.path}>
                  <Link
                    to={course.path}
                    className="text-gray-900 font-normal hover:text-gray-600 transition-colors duration-500 ease-in-out"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sağ Bölmə - Əlaqə və Sosial Media */}
        <div className="w-full md:w-1/4 flex flex-col items-end">
          <div className="flex space-x-4 mb-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 border border-gray-400 rounded-full text-gray-600 
                hover:bg-black hover:text-white hover:border-black transition-all duration-500 ease-in-out"
              >
                <i className={`fab fa-${social.icon} text-xl`}></i>
              </a>
            ))}
          </div>
          <p className="text-gray-900 text-lg font-bold">
            Telefon: <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;