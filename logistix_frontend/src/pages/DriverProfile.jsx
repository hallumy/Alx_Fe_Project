import React from "react";

function DriverProfile() {

  const driver = {
    name: "John",
    namelast: "Doe",
    license: "B123456",
    status: "Active",
    phone: "+254 700 123 456",
    email: "john.doe@example.com",
    vehicle: "KDA 123A",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-xl shadow-md p-6 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">Driver Profile</h1>
        
        <p><span className="font-semibold">First Name:</span> {driver.name}</p>
        <p><span className="font-semibold">Last Name:</span> {driver.namelast}</p>
        <p><span className="font-semibold">License:</span> {driver.license}</p>
        <p><span className="font-semibold">Status:</span> {driver.status}</p>
        <p><span className="font-semibold">Phone:</span> {driver.phone}</p>
        <p><span className="font-semibold">Email:</span> {driver.email}</p>
        <p><span className="font-semibold">Assigned Vehicle:</span> {driver.vehicle}</p>
      </div>
    </div>
  );
}

export default DriverProfile;
