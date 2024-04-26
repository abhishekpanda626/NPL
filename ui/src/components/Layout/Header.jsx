import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../LoginModal";

export default function Header({ routes }) {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("login-role", "admin")
  );
  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };
  const handleLogoutClick = () => {
    localStorage.removeItem("login-role");
    navigate("/");
  };
  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in...");
    localStorage.setItem("login-role", "admin");
    navigate("/admin/teams");
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-white">
            <Link to="/">NPL</Link>
          </h1>
          <div className="flex ">
            {routes?.map((route, idx) => {
              return (
                <Link
                  key={idx}
                  to={route?.path}
                  className="text-white px-4 hover:text-gray-300"
                >
                  {route?.Name}
                </Link>
              );
            })}
          </div>

          <ul>
            <li className="ml-4">
              {!isLoggedIn && (
                <button
                  onClick={handleLoginClick}
                  className="text-white hover:text-gray-300 focus:outline-none"
                >
                  Login
                </button>
              )}
              {isLoggedIn && (
                <button
                  onClick={handleLogoutClick}
                  className="text-white hover:text-gray-300 focus:outline-none"
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
      {showLogin && (
        <LoginModal
          handleLogin={handleLogin}
          handleLoginClick={handleLoginClick}
        />
      )}
    </nav>
  );
}
