
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">John Doe</h2>
            <p className="text-gray-400">Frontend Developer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="mb-2">© {currentYear} All Rights Reserved</p>
            <p className="text-gray-400">Made with ❤️ by John Doe</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
