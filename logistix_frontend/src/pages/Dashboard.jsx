import React from "react";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-logistixBlue-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Logistix Menu</h2>
        <nav className="flex flex-col gap-4">
          <a href="/dashboard" className="hover:text-gray-200">Dashboard</a>
          <a href="/driverprofile" className="hover:text-gray-200">Driver</a>
          <a href="/vehicleprofile" className="hover:text-gray-200">Vehicle</a>
          <a href="/trips" className="hover:text-gray-200">Trips</a>
          <a href="/fuel-logs" className="hover:text-gray-200">Fuel Logs</a>
          <a href="/expenses" className="hover:text-gray-200">Expenses</a>
          <a href="/invoices" className="hover:text-gray-200">Invoices</a>
        </nav>
      </aside>

      {/* Main Dashboard Content */}
      <main className="flex-1 p-10 text-Black">
       
        <h1 className="text-3xl bg-white font-bold mb-6">Dashboard</h1>

         {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify items-center p-4 ml-8">
          <div className="bg-logistixBlue-700 rounded-xl shadow-md p-6 h-50 w-80 text-black p-4 ml-8">
            <p className="text-4xl font-bold mb-4">17%</p>
            <p className="text-lg font-semibold">Active Drivers / Vehicles</p>
          </div>
          <div className="bg-logistixBlue-700 rounded-xl shadow-md p-6 h-50 w-80 text-black">
            <p className="text-4xl font-bold mb-4">25</p>
            <p className="text-lg font-semibold">Total Trips This Month</p>
          </div>
          <div className="bg-logistixBlue-700 rounded-xl shadow-md p-6 h-50 w-80 text-black p-4 ml-8">
            <p className="text-4xl font-bold mb-4">12</p>
            <p className="text-lg font-semibold">Unpaid Invoices</p>
          </div>
          <div className="bg-logistixBlue-700 rounded-xl shadow-md p-6 h-50 w-80 text-black">
            <p className="text-4xl font-bold mb-4">$3,240</p>
            <p className="text-lg font-semibold">Fuel Cost Summary</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mt-10 bg-white rounded-lg shadow-md p-6 text-black">
          <p className="text-lg font-semibold">Chart or Graph</p>
          <div className="h-64 flex items-center justify-center text-gray-500">
            [Insert Chart Here]
          </div>
        </div>
      </main>
    </div>
    
  );
}
export default Dashboard;
