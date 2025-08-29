import React from "react";

function VehicleProfile() {
 
  const vehicle = {
    plate: "KDA 123A",
    model: "Toyota Hiace",
    year: 2020,
    status: "Active",
    assignedDriver: "John Doe",
    lastService: "July 2025",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-xl shadow-md p-6 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">Vehicle Profile</h1>
        
        <p><span className="font-semibold">Vehicle Number:</span> {vehicle.plate}</p>
        <p><span className="font-semibold">Model:</span> {vehicle.model}</p>
        <p><span className="font-semibold">Year:</span> {vehicle.year}</p>
        <p><span className="font-semibold">Status:</span> {vehicle.status}</p>
        <p><span className="font-semibold">Assigned Driver:</span> {vehicle.assignedDriver}</p>
        <p><span className="font-semibold">Last Service:</span> {vehicle.lastService}</p>
      </div>
    </div>
  );
}

export default VehicleProfile;
