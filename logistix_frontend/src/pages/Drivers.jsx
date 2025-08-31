import React, { useState, useEffect } from "react";

function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [form, setForm] = useState({
    name: "",
    license_number: "",
    assigned_vehicle: "",
  });

  useEffect(() => {
    const storedDrivers = JSON.parse(localStorage.getItem("drivers")) || [];
    const storedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
    setDrivers(storedDrivers);
    setVehicles(storedVehicles);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDriver = { ...form, id: Date.now() };
    const updated = [...drivers, newDriver];
    setDrivers(updated);
    localStorage.setItem("drivers", JSON.stringify(updated));
    setForm({ name: "", license_number: "", assigned_vehicle: "" });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Drivers</h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-4 rounded-lg shadow">
        <input
          type="text"
          name="name"
          placeholder="Driver Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="license_number"
          placeholder="License Number"
          value={form.license_number}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="assigned_vehicle"
          value={form.assigned_vehicle}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Assign Vehicle</option>
          {vehicles.map((v) => (
            <option key={v.id} value={v.reg_number}>
              {v.reg_number} — {v.model}
            </option>
          ))}
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Driver
        </button>
      </form>

      <h3 className="text-xl font-semibold mt-6">Driver List</h3>
      <ul className="mt-2 space-y-2">
        {drivers.map((d) => (
          <li key={d.id} className="p-3 bg-white rounded shadow flex justify-between">
            <span>
              {d.name} — License: {d.license_number} — Vehicle:{" "}
              {d.assigned_vehicle || "None"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Drivers;
