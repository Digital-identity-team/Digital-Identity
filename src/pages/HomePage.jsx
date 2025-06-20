import React from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16 grow">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-xs text-gray-500 flex items-center justify-center md:justify-start gap-1 mb-2">
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path
              fill="#6B7280"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 0a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2H4v1a1 1 0 0 1-2 0V4H1a1 1 0 1 1 0-2h1V1a1 1 0 0 1 1-1ZM3 10a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2H4v1a1 1 0 1 1-2 0v-1H1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1ZM10 0a1 1 0 0 1 .967.744l1.179 4.455L15.5 7.134a1 1 0 0 1 0 1.732l-3.354 1.935-1.179 4.455a1 1 0 0 1-1.934 0L7.854 10.8 4.5 8.866a1 1 0 0 1 0-1.732l3.354-1.935L9.034.744A1 1 0 0 1 10 0Z"
            />
          </svg>
          AN AGENCY FOR YOUR HIGH GROWTH.
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          We make your
          <br />
          Digital{' '}
          <span className="inline-block bg-orange-400 text-white px-3 -mb-1 border-b-2 border-indigo-700">
            Identity
          </span>
        </h1>
        <p className="text-gray-600 text-sm mb-6">
          Unlock potential with tailored strategies designed for success.
          <br />Simplify challenges, maximize results.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center md:justify-start">
           <Link to="/Support" className="bg-blue-600 text-white text-sm px-5 py-2.5 rounded shadow hover:bg-blue-700 transition">
                Get Started
            </Link> 
          <Link to="/features" className="text-sm flex items-center gap-1 hover:underline">
            <span>Learn more</span>
            <svg width="15" height="11" fill="none" viewBox="0 0 15 11">
            <path
                d="M1 5.5h13.09M8.948 1l5.143 4.5L8.948 10"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
</Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/rightSideImage.svg"
          alt="Hero Visual"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </main>
  );
};

export default HomePage;
