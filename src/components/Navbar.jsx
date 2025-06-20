import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Logo from '../assets/logo.png'; // apna actual logo path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false); // 👈 helper to close menu

  return (
    <header className="w-full px-6 md:px-16 lg:px-24 xl:px-32 py-6 flex justify-between items-center shadow-md bg-white z-50">
      <Link to="/" onClick={handleLinkClick}>
        <img className="h-10" src={Logo} alt="Logo" />
      </Link>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-600 text-2xl focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <nav className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-[72px] left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0 shadow md:shadow-none md:items-center md:space-x-8 text-gray-600 text-base`}>
        <Link onClick={handleLinkClick} className="hover:text-gray-900 transition mb-2 md:mb-0" to="/">Home</Link>
        <Link onClick={handleLinkClick} className="hover:text-gray-900 transition mb-2 md:mb-0" to="/pricing">Pricing</Link>
        <Link onClick={handleLinkClick} className="hover:text-gray-900 transition mb-2 md:mb-0" to="/features">Features</Link>
        <Link onClick={handleLinkClick} className="hover:text-gray-900 transition" to="/support">Support</Link>
      </nav>
    </header>
  );
};

export default Navbar;
