import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const LoginModal = ({ handleLogin, handleLoginClick }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white w-full max-w-md rounded-lg overflow-hidden">
        <div className="flex justify-between items-center p-4 bg-slate-800 text-white">
          <h2 className="text-xl font-semibold">Login</h2>
          <IoCloseCircleSharp
            onClick={handleLoginClick}
            className="text-2xl cursor-pointer"
          />
        </div>
        <div className="px-8 py-6">
          <h3 className="text-2xl font-semibold mb-4">Welcome Back!</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border-gray-300 border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border-gray-300 border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-slate-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-slate-600 focus:outline-none focus:bg-slate-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
