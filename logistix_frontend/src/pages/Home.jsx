import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-[#2F539B] text-white p-8">
      <Hero />
    </div>
  );
}
export default Home;
