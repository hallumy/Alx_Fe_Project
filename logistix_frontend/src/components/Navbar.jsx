import {React, useState} from "react";
import { Link , useLocation, useNavigate} from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const isHomePage = location.pathname === "/"; 

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#2F539B] text-white">
      <h1 className="text-3xl font-bold">
        <Link to="/">LogistiX</Link>
      </h1>
      {isHomePage ? (
        <div className="flex gap-6">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg hover:bg-white hover:text-[#347C2C] transition"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-lg hover:bg-white hover:text-[#347C2C] transition"
          >
            Dashboard
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg hover:bg-white hover:text-[#347C2C] transition"
          >
            Login
          </Link>
          
        </div>
      ) : (
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg hover:bg-white hover:text-[#347C2C] transition"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-lg hover:bg-white hover:text-[#347C2C] transition"
          >
            Dashboard
          </Link>
           <div className="relative">
            <button onClick={() => setOpen(!open)}>
              <img
                src="/src/user.png"
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </button>
            
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )
    }

    </nav>
  );
}

export default Navbar;
