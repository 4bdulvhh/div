import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Linkedin, Sun, Moon } from 'lucide-react';

const navigation = {
  akademiya: [
    { name: 'Akademiya haqqında', href: '/about' },
    { name: 'Missiya və vizyon', href: '/mission' },
    { name: 'Vakansiyalar', href: '/vacancies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sosial məsuliyyət', href: '/social' },
  ],
  tedris: [
    { name: 'Fullstack', href: 'courses/fullstack-programming' },
    { name: 'Digital Marketing', href: '/courses/digital-marketing' },
    { name: 'Data Science', href: '/courses/data-science' },
    { name: 'Product Owner', href: '/courses/product-owner' },
    { name: 'IT Project Management', href: '/courses/project-management' },
  ],
  karyeraMerkezi: [
    { name: 'Mərkəz haqqında', href: '/career-support' },
    { name: 'Gələcək maaşını hesabla', href: '/salary' },
  ],
};

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(savedTheme === 'dark' || (!savedTheme && systemPrefersDark));
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  const handleDropdownHover = (key) => {
    setActiveDropdown(key);
  };

  const handleMobileDropdown = (key) => {
    setIsMobileDropdownOpen(isMobileDropdownOpen === key ? null : key);
  };

  return (
    <header className="bg-white shadow-sm fixed  w-full top-0 z-50">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex mx-auto max-w-7xl items-center justify-between p-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-xl font-bold">Div</span>
              <span className="text-xl">Academy</span>
            </div>
          </Link>

          <div className="flex gap-6">
            {Object.entries(navigation).map(([key, items]) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => handleDropdownHover(key)}
                onMouseLeave={() => handleDropdownHover(null)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-[#98C13D] py-2">
                  {key === 'akademiya' ? 'Akademiya' :
                   key === 'tedris' ? 'Tədris' :
                   'Karyera mərkəzi'}
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div 
                  className={`absolute left-0 w-64 bg-white rounded-md shadow-lg py-2 transition-all duration-200
                    ${activeDropdown === key ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                >
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#98C13D]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <Link to="/corporate" className="text-gray-700 hover:text-[#98C13D] py-2">
              Korporativ
            </Link>
            
            <Link to="/contact" className="text-gray-700 hover:text-[#98C13D] py-2">
              Əlaqə
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
         
          </div>

          <div className="flex items-center gap-2">
  {[
    { Icon: Facebook, href: 'https://facebook.com' },
    { Icon: Instagram, href: 'https://instagram.com' },
    { Icon: Linkedin, href: 'https://linkedin.com' }
  ].map(({ Icon, href }) => (
    <a
      key={href}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-500 text-white hover:bg-[#98C13D] transition-colors"
    >
      <Icon className="h-5 w-5" />
    </a>
  ))}
</div>

          <Link
            to="/register"
            className="px-6 py-2 text-white bg-[#98C13D] hover:bg-[#98C13D]/90 rounded-md"
          >
            Müraciət et
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden ">
        <div className="flex  items-center justify-between p-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-500"
          >
            <Menu className="h-6 w-6" />
          </button>

          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-xl font-bold">Div</span>
              <span className="text-xl">Academy</span>
            </div>
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 text-white bg-[#98C13D] hover:bg-[#98C13D]/90 rounded-md text-sm"
          >
            Müraciət et
          </Link>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-y-0 left-0 w-full bg-white transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <span className="text-xl font-bold">Div</span>
                <span className="text-xl">Academy</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              {Object.entries(navigation).map(([key, items]) => (
                <div key={key}>
                  <button
                    onClick={() => handleMobileDropdown(key)}
                    className="flex items-center justify-between w-full text-gray-700 py-2 border-b border-gray-100"
                  >
                    <span className="text-base">
                      {key === 'akademiya' ? 'Akademiya' :
                       key === 'tedris' ? 'Tədris' :
                       'Karyera mərkəzi'}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMobileDropdownOpen === key ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div 
                    className={`overflow-hidden transition-all duration-200 ${
                      isMobileDropdownOpen === key ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block py-2 pl-4 text-gray-600 hover:text-[#98C13D]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <Link 
                to="/corporate" 
                className="block py-2 text-gray-700 hover:text-[#98C13D] border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Korporativ
              </Link>
              
              <Link 
                to="/contact" 
                className="block py-2 text-gray-700 hover:text-[#98C13D] border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Əlaqə
              </Link>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2">
                </div>

                <div className="flex items-center gap-4">
                  {[
                    { Icon: Facebook, href: 'https://facebook.com' },
                    { Icon: Instagram, href: 'https://instagram.com' },
                    { Icon: Linkedin, href: 'https://linkedin.com' }
                  ].map(({ Icon, href }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                    >
                      <Icon className="h-4 w-4 text-gray-600" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;