import React from "react";

function TripForm() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Create a New Trip
      </h3>
      <form className="space-y-4">
        <select className="w-full border p-2 rounded" defaultValue="">
          <option value="" disabled>
            Select Driver
          </option>
        </select>
        <select className="w-full border p-2 rounded" defaultValue="">
          <option value="" disabled>
            Select Vehicle
          </option>
        </select>
        <select className="w-full border p-2 rounded" defaultValue="">
          <option value="" disabled>
            Product
          </option>
        </select>
        <select className="w-full border p-2 rounded" defaultValue="">
          <option value="" disabled>
            Route
          </option>
        </select>
        <input type="text" placeholder="Weight" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Distance" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Fuel Used" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Delivery Note No" className="w-full border p-2 rounded" />
        <button
          type="submit"
          className="w-full bg-[#347C2C] text-black py-2 rounded-lg font-semibold hover:bg-green-700 hover:text-white transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default TripForm