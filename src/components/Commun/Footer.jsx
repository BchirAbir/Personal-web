import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:justify-between">
        
        {/* COPYRIGHT */}
        <span className="text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Abir Bchir</span>. Tous droits réservés.
        </span>

        {/* LINKS */}
        <ul className="flex flex-wrap items-center mt-4 text-sm font-medium md:mt-0 gap-6">
          <li>
            <a href="/about" className="hover:text-blue-400 transition">À propos</a>
          </li>
          <li>
            <a href="/experience" className="hover:text-blue-400 transition">Expérience</a>
          </li>
          <li>
            <a href="/projects" className="hover:text-blue-400 transition">Projets</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
          </li>
        </ul>

      </div>
    </footer>
  );
};

export default Footer;
