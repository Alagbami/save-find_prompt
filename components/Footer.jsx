import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-4 mb-3">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; {currentYear} <span className="logo_text">LekTech IT Group</span> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;