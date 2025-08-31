import { Link, Outlet } from "react-router-dom";

function SidebarLayout() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-logistixBlue text-white p-6">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/trips" className="hover:text-gray-300">Trips</Link>
          <Link to="/vehicles" className="hover:text-gray-300">Trips</Link>
          <Link to="/invoices" className="hover:text-gray-300">Invoices</Link>
          <Link to="/drivers" className="hover:text-gray-300">Trips</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <Outlet /> {/* This is where the child page loads */}
      </main>
    </div>
  );
}
export default SidebarLayout;