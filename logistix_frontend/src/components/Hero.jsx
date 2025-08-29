import React from "react";

function Hero() {
  return (
    <section className=" relative h-screen flex flex-col justify-center bg-logistixBlue-700 items-center text-center text-white py-16">
      <h2 className="text-2xl md:text-4xl font-bold">
        Effortless Logistics Management
      </h2>
      <p className="mt-6 text-lg">
        Track vehicles, trips, fuel, and invoices in one place
      </p>
      <button className=" absolute bottom-[100px] mt-6 bg-[#347C2C] text-black px-6 py-3 rounded-xl text-xl font-semibold hover:bg-green-700 hover:text-white transition">
        Get Started
      </button>
    </section>
  );
}

export default Hero;
