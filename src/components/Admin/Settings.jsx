import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminSettings() {
  const navigate = useNavigate();

  const [adminEmail, setAdminEmail] = useState("admin@gmail.com");
  const [theme, setTheme] = useState("light");

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Paramètres enregistrés avec succès ✅");
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">

      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-900 mb-10">
        Paramètres
      </h1>

      {/* Card */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10 space-y-12">

        {/* Profile */}
        <section>
          <h2 className="text-lg font-medium text-gray-900 mb-6">
            Profil administrateur
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email administrateur
              </label>
              <input
                type="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
              />
            </div>
          </div>
        </section>

        {/* Appearance */}
        <section>
          <h2 className="text-lg font-medium text-gray-900 mb-6">
            Apparence
          </h2>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="light"
                checked={theme === "light"}
                onChange={() => setTheme("light")}
              />
              <span className="text-gray-700">Clair</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="dark"
                checked={theme === "dark"}
                onChange={() => setTheme("dark")}
              />
              <span className="text-gray-700">Sombre</span>
            </label>
          </div>
        </section>

        {/* Actions */}
        <section className="flex justify-between items-center pt-6 border-t border-gray-200">

          <button
            onClick={handleSave}
            className="px-6 py-3 bg-rose-500 text-white rounded-xl font-medium hover:bg-rose-600 transition"
          >
            Enregistrer les modifications
          </button>

          <button
            onClick={handleLogout}
            className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition"
          >
            Se déconnecter
          </button>
        </section>
      </div>
    </div>
  );
}
