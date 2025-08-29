import React from "react";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-700 text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to Logistix</h1>
      <p className="text-lg mb-6">Your logistics dashboard at a glance.</p>
      <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100">
        Get Started
      </button>
    </div>
  );
}
export default Home;
