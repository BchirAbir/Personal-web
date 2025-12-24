import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Admin</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1: Total Users */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <h3 className="text-sm font-semibold">Total Utilisateurs</h3>
          <p className="text-4xl font-extrabold mt-2">1</p>
        </div>

        {/* Card 2: Active Projects */}
        <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <h3 className="text-sm font-semibold">Projets Actifs</h3>
          <p className="text-4xl font-extrabold mt-2">4</p>
        </div>

        {/* Card 3: Messages */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <h3 className="text-sm font-semibold">Messages</h3>
          <p className="text-4xl font-extrabold mt-2">5</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
