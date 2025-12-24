import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const user = {
    name: "Abir Bchir",
    title: "Software Engineering Student | Full-Stack Developer",
    experience: "3 ans",
    experiences: [
      {
        id: 1,
        period: "Juillet 2025 - Août 2025",
        role: "Stagiaire – Automatisation & Développement",
        company: "KPIT",
        location: "Sfax, Tunisie",
        type: "Stage d'été",
        description: "Automatisation complète d’un processus de traitement de rapports de test via Excel et XML.",
        achievements: [
          "Création d’un plugin pour lire automatiquement des résultats depuis un fichier Excel",
          "Génération automatique d’un fichier XML conforme aux exigences du client",
          "Réduction significative du temps de traitement des rapports",
          "Amélioration de la fiabilité des données fournies"
        ],
        technologies: ["Python", "Excel Parsing", "XML", "Automatisation", "Outils QA"]
      },
      {
        id: 2,
        period: "2023 - 2024",
        role: "Développeuse Full-Stack (Projet Académique)",
        company: "E-FastOrder",
        location: "IIT, Sfax",
        type: "Projet académique",
        description: "Application complète de commande en ligne avec gestion des articles, panier, authentification et gestion de base de données.",
        achievements: [
          "Conception architecture MVC et base SQL",
          "Développement complet du backend avec ASP.NET Core MVC",
          "Gestion des utilisateurs, sessions, commandes et paniers",
          "Interface moderne sous Visual Studio 2022"
        ],
        technologies: ["ASP.NET Core MVC", "SQL Server", "ADO.NET", "C#", "Visual Studio 2022"]
      },
      {
        id: 3,
        period: "2023 - 2024",
        role: "Développeuse Backend (Projet Académique)",
        company: "CRUD Employee Management",
        location: "IIT, Sfax",
        type: "Projet académique",
        description: "Développement d’un système CRUD complet pour la gestion des employés.",
        achievements: [
          "Architecture Spring Boot REST",
          "Connexion MySQL et JPA",
          "Interface utilisateur via Thymeleaf",
          "Gestion validation + persistance"
        ],
        technologies: ["Spring Boot", "Java", "MySQL", "Thymeleaf"]
      },
      {
        id: 4,
        period: "2023 - 2024",
        role: "Game Developer",
        company: "Unity Projects",
        location: "IIT, Sfax",
        type: "Projet académique",
        description: "Création d’un jeu AirHockey 2D et d’un mini-jeu 3D en C#.",
        achievements: [
          "Développement gameplay interactif",
          "Scripts C# optimisés",
          "Animations et collisions",
          "Scènes 3D et UI intégrée"
        ],
        technologies: ["Unity", "C#", "2D/3D", "Game Physics"]
      }
    ]
  };

  return (
  <section className="bg-gray-50 py-24 min-h-screen">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          Expériences & Projets
        </h2>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          {user.experience} d’expérience en développement logiciel à travers des stages et projets académiques.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative">

        {/* Ligne centrale */}
        <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gray-300"></div>

        <div className="space-y-14">
          {user.experiences.map((exp, index) => (
            <div key={exp.id} className="relative grid md:grid-cols-2 gap-10">

              {/* DATE (desktop) */}
              <div className={`${index % 2 === 0 ? "md:text-right" : "md:col-start-2"}`}>
                <div className="hidden md:inline-block bg-white border border-gray-200 rounded-lg px-6 py-3 shadow-sm">
                  <div className="flex items-center justify-end gap-2 text-sm font-semibold text-indigo-600">
                    <FaCalendar />
                    {exp.period}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{exp.type}</p>
                </div>
              </div>

              {/* POINT */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4">
                <div className="w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow"></div>
              </div>

              {/* CARD */}
              <div className={`${index % 2 === 0 ? "md:col-start-2" : ""}`}>
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">

                  {/* Mobile date */}
                  <div className="md:hidden flex items-center gap-2 text-indigo-600 text-sm font-semibold mb-4">
                    <FaCalendar />
                    {exp.period}
                    <span className="ml-auto bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-4">
                    <FaBriefcase className="text-indigo-600" />
                    <span className="font-medium">{exp.company}</span>
                    <span className="text-gray-400">•</span>
                    <FaMapMarkerAlt className="text-gray-400" />
                    {exp.location}
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase">
                      Réalisations
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex gap-2 text-gray-700 text-sm">
                          <span className="text-indigo-600 font-bold">•</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
};

export default Experience;
