import React from 'react';

const Landing = () => {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen px-6 text-center"
      style={{ backgroundColor: '#2F539B' }}
    >
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
        Effortless <span className="text-yellow-300">LogistiX</span> Management
      </h1>
      <p className="text-white text-lg md:text-xl max-w-2xl mb-8">
        Track <span className="font-semibold text-yellow-200">vehicles</span>, <span className="font-semibold text-yellow-200">trips</span>, <span className="font-semibold text-yellow-200">fuel</span>, and <span className="font-semibold text-yellow-200">invoices</span> — all in one place.
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition">
        Get Started
      </button>
    </section>
  );
};

export default Landing;
