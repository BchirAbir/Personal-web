import React, { useState } from "react";
import { FaBars, FaTimes, FaUser, FaCog, FaSignOutAlt, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import Photo from "../../assets/abir.png"; // Assurez-vous que le chemin de l'image est correct

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const user = {
    name: "Abir Bchir",
    email: "abirbchir001@gmail.com",
    avatar: Photo, 
    notifications: 0,
  };

  const navigation = [
    { name: "Profil", path: "/" },
    { name: "À propos", path: "/about" },
        { name: "Projects", path: "/Projects" },

    { name: "Expérience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  const userNavigation = [
    { name: "Votre profil", href: "#profile", icon: <FaUser /> },
    { name: "Paramètres", href: "#settings", icon: <FaCog /> },
    { name: "Déconnexion", href: "#logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <nav className="bg-gray-900 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
              AB
            </div>
            <span className="hidden lg:block text-white font-bold text-lg">
              Abir Bchir
            </span>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-300 hover:text-blue-400 transition text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* PROFILE DROPDOWN (DESKTOP) */}
          <div className="hidden md:flex items-center gap-4 relative">
            <button
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="flex items-center gap-3"
            >
              <img
                className="h-10 w-10 rounded-full ring-2 ring-gray-700 object-cover"
                src={user.avatar}
                alt="profile"
              />
              <span className="text-gray-200">{user.name}</span>
            </button>

            {isProfileDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsProfileDropdownOpen(false)}
                ></div>

                <div className="absolute right-0 top-12 z-20 w-56 bg-white rounded-lg shadow-2xl p-2">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100 transition text-sm"
                    >
                      <span className="text-gray-500">{item.icon}</span>
                      {item.name}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white transition"
            >
              {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 pb-4">

          {/* Navigation links */}
          <div className="space-y-2 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User section */}
          <div className="border-t border-gray-700 mt-4 px-4 pt-4">
            <div className="flex items-center gap-3">
              <img
                className="h-12 w-12 rounded-full ring-2 ring-gray-700"
                src={user.avatar}
                alt={user.name}
              />
              <div>
                <p className="text-white text-sm">{user.name}</p>
                <p className="text-gray-400 text-xs">{user.email}</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {userNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-700 px-4 py-3 rounded-lg transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
