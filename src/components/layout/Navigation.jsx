import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../utils/constants';

const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white px-6 py-4 flex items-center justify-between border-b">
      <div className="flex items-center space-x-8">
        <Link to="/">
          <img src="/logo.png" alt="Div Academy" className="h-8" />
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <div className="relative group">
            <button className="text-gray-700 hover:text-gray-900">Akademiya</button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block">
              {NAVIGATION_LINKS.slice(0, 3).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <button className="text-gray-700 hover:text-gray-900">Tədris</button>
          <button className="text-gray-700 hover:text-gray-900">Karyera mərkəzi</button>
          <button className="text-gray-700 hover:text-gray-900">Korporativ</button>
          <button className="text-gray-700 hover:text-gray-900">Əlaqə</button>
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">İşıqları söndür</span>
          <div 
            className="w-12 h-6 bg-gray-200 rounded-full flex items-center p-1 cursor-pointer"
            onClick={toggleDarkMode}
          >
            <div 
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                isDarkMode ? 'translate-x-6' : ''
              }`}
            ></div>
          </div>
        </div>
        <Link 
          to="/apply"
          className="px-6 py-2 bg-[#95c11f] text-white rounded hover:bg-[#86ad1b] transition-colors"
        >
          Müraciət et
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;