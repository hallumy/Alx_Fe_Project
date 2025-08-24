import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#2F539B] text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide">LogistiX</h1>
      <div className="space-x-6 hidden md:flex">
        <a href="#" className="hover:text-yellow-300 transition">Home</a>
        <a href="#" className="hover:text-yellow-300 transition">Dashboard</a>
        <a href="#" className="hover:text-yellow-300 transition">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
