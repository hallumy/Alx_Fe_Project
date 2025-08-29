import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-logistixBlue-700">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Log in to Logistix
        </h2>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-700 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
