import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Partners from '../sections/Partners';
import ContactForm from '../ContactForm';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main className="flex-grow text-gray-900 dark:text-gray-100 pt-16">
        {children}
      </main>
      <Partners/>
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default Layout;