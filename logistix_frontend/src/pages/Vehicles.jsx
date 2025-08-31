import React, { useState, useEffect } from "react";

const TONNAGE_CHOICES = [
  { value: 1, label: "1 ton" },
  { value: 2, label: "2 tons" },
  { value: 3, label: "3 tons" },
  { value: 4, label: "4 tons" },
  { value: 5, label: "5 tons" },
  { value: 6, label: "6 tons" },
  { value: 7, label: "7 tons" },
  { value: 8, label: "8 tons" },
  { value: 9, label: "9 tons" },
  { value: 10, label: "10 tons" },
  { value: 12, label: "12 tons" },
  { value: 15, label: "15 tons" },
  { value: 20, label: "20 tons" },
  { value: 28, label: "28 tons" },
  { value: 30, label: "30 tons" },
];

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [form, setForm] = useState({
    reg_number: "",
    model: "",
    fuel_type: "",
    efficiency: "",
    last_service_date: "",
    tonnage: 1,
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("vehicles")) || [];
    setVehicles(stored);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVehicle = { ...form, id: Date.now() };
    const updated = [...vehicles, newVehicle];
    setVehicles(updated);
    localStorage.setItem("vehicles", JSON.stringify(updated));
    setForm({
      reg_number: "",
      model: "",
      fuel_type: "",
      efficiency: "",
      last_service_date: "",
      tonnage: 1,
    });
  };

  const saveVehicles = (newList) => {
    setVehicles(newList);
    localStorage.setItem("vehicles", JSON.stringify(newList));
  };

  const handleDelete = (id) => {
    saveVehicles(vehicles.filter((v) => v.id !== id));
  };

  const handleUpdate = (id) => {
    const updatedModel = prompt("Enter new model:");
    if (!updatedModel) return;
    const updated = vehicles.map((v) =>
      v.id === id ? { ...v, model: updatedModel } : v
    );
    saveVehicles(updated);
  };


  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Vehicles</h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-4 rounded-lg shadow">
        <input
          type="text"
          name="reg_number"
          placeholder="Registration Number"
          value={form.reg_number}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={form.model}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="fuel_type"
          placeholder="Fuel Type"
          value={form.fuel_type}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          step="0.01"
          name="efficiency"
          placeholder="Efficiency (km/litre)"
          value={form.efficiency}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="last_service_date"
          value={form.last_service_date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <select
          name="tonnage"
          value={form.tonnage}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          {TONNAGE_CHOICES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Vehicle
        </button>
      </form>

      <h3 className="text-xl font-semibold mt-6">Vehicle List</h3>
      <ul className="mt-2 space-y-2">
        {vehicles.map((v) => (
          <li key={v.id} className="p-3 bg-white rounded shadow flex justify-between">
            <span>{v.reg_number} — {v.model} — {v.tonnage} tons</span>
            <div className="space-x-2">
              <button
                onClick={() => handleUpdate(v.id)}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(v.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                Delete
                </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vehicles;
