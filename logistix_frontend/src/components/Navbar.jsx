import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#2F539B] text-white">
      <h1 className="text-3xl font-bold">
        <Link to="/">LogistiX</Link>
      </h1>
      <div className="flex gap-6">
        <Link
          to="/trips"
          className="px-4 py-2 border rounded-lg hover:bg-white hover:text-[#2F539B] transition"
        >
          View Dashboard
        </Link>
        <Link
          to="/invoices"
          className="px-4 py-2 border rounded-lg hover:bg-white hover:text-[#2F539B] transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
