import React from 'react';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-50 w-full text-gray-500/80 px-6 md:px-16 lg:px-24 xl:px-32 py-10">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <img
            src={Logo}
            alt="logo"
            className="mb-4 h-8 md:h-10"
          />
          <p className="text-sm">
            We make your digital identity stand out with tailored strategies designed for success. Simplify challenges, maximize results.
          </p>
        </div>
        <div>
          <p className="text-lg text-gray-800">COMPANY</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#">About</a></li>
            
            <li><a href="/support">Careers</a></li>
            <li><a href="#">Blog</a></li>
            {/* <li><a href="#">Partners</a></li> */}
          </ul>
        </div>
        <div>
          <p className="text-lg text-gray-800">SUPPORT</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/support">Help Center</a></li>
            <li><a href="/support">Contact</a></li>
            {/* <li><a href="#">Accessibility</a></li> */}
          </ul>
        </div>
        <div className="max-w-80">
          <p className="text-lg text-gray-800">STAY UPDATED</p>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter for updates and offers.
          </p>
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none"
              placeholder="Your email"
            />
            <button className="bg-black h-9 w-9 flex items-center justify-center rounded-r">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mt-10" />
      <div className="flex flex-col md:flex-row justify-between items-center pt-5 text-sm">
        <p>© {new Date().getFullYear()} Digital. All rights reserved.</p>
        <ul className="flex gap-4 mt-3 md:mt-0">
            {/* <Link className="hover:text-gray-900 transition mb-2 md:mb-0" to="/">Home</Link> */}
          <li><a href="https://digiidbeta.vercel.app/">Beta user</a></li>
          <li><a href="coming.soon">Devlopers</a></li>
          <li><a href="coming.soon">Affiliate</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
