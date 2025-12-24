import React from 'react';
import { 
  FaCode, FaRocket, FaUsers, FaLightbulb, 
  FaCheckCircle, FaAward, FaGraduationCap 
} from 'react-icons/fa';
import abirPhoto from "../../assets/abir.png"; // remplacer par ta vraie photo
import { Link } from "react-router-dom";

const About = () => {
  const user = {
    name: "Abir Bchir",
    title: "Software Engineering Student | Full-Stack Developer",
    tagline: "Créatrice de solutions digitales modernes et intelligentes",
    mainDescription:
      "Étudiante en 3ᵉ année Génie Logiciel & Systèmes d’Information à l'IIT, passionnée par le développement web, l’automatisation et la création de solutions logicielles performantes. J’ai développé plusieurs projets complets en ASP.NET Core MVC, Spring Boot, PHP, Unity et React.js. J’aime transformer les idées en produits fonctionnels, robustes et bien structurés.",
    mission:
      "Concevoir des applications modernes, intuitives et performantes, tout en automatisant les processus pour améliorer la fiabilité, la productivité et l’expérience utilisateur.",
    stats: {
      projects: 8,
      clients: 100,
      satisfaction: 98,
      yearsExp: 3
    },
    image: abirPhoto,
    features: [
      { icon: <FaCode className="text-3xl" />, title: "Code propre & structuré", description: "J'écris du code lisible, maintenable et performant, conforme aux bonnes pratiques du génie logiciel." },
      { icon: <FaRocket className="text-3xl" />, title: "Méthodologie Agile", description: "J’applique une approche itérative avec livraisons rapides, tests continus et amélioration permanente." },
      { icon: <FaUsers className="text-3xl" />, title: "Travail d’équipe", description: "Excellente communication, participation à des projets académiques collaboratifs et clubs étudiants." },
      { icon: <FaLightbulb className="text-3xl" />, title: "Innovation & créativité", description: "Conception de solutions automatisées et projets variés en IA, robotique, jeux vidéo et outils digitaux." }
    ],
    expertise: [
      "Développement web full-stack : ASP.NET Core MVC, SQL Server, ADO.NET",
      "Backend Java : API REST, Spring Boot, Spring Data JPA, MySQL",
      "Développement PHP : applications dynamiques avec authentification",
      "Développement 2D/3D sur Unity avec C#",
      "Automatisation : traitement Excel → XML, outils internes (projet KPIT)",
      "Bases solides en React.js, HTML, CSS, JavaScript"
    ],
    values: [
      { title: "Organisation", description: "Une gestion structurée du travail : planification, priorités, rigueur." },
      { title: "Esprit d'analyse", description: "Capacité à décomposer un problème et proposer des solutions optimisées." },
      { title: "Excellence", description: "Je vise toujours à produire un travail soigné, fiable et professionnel." }
    ],
    education: [
      { icon: <FaGraduationCap />, degree: "Licence en Génie Logiciel & Systèmes d’Information", school: "Institut International Technologie (IIT) – Sfax", year: "2023 - Présent" },
      { icon: <FaAward />, degree: "Baccalauréat Sciences Expérimentales", school: "Lycée Secondaire", year: "2023" }
    ]
  };

  return (
    <section className="bg-gray-50">

      {/* HERO ABOUT */}
      <div className="py-24 sm:py-32 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-base font-semibold text-purple-600">{user.tagline}</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">À propos de moi</p>
          <p className="mt-6 text-lg leading-8 text-gray-700">{user.mainDescription}</p>
        </div>

        {/* Stats */}
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(user.stats).map(([key, value], idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition text-center">
              <p className="text-3xl font-bold text-purple-600">{value}{key === "yearsExp" ? "+" : key === "clients" || key === "satisfaction" ? "%" : ""}</p>
              <p className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES & IMAGE */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:flex lg:items-center lg:gap-12">
          
          {/* Left Features */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-base font-semibold text-purple-600">Pourquoi me choisir ?</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Un profil polyvalent & motivé</p>
            <p className="mt-4 text-gray-700">{user.mission}</p>

            <dl className="mt-8 space-y-6">
              {user.features.map((feature, idx) => (
                <div key={idx} className="relative pl-16 p-4 rounded-lg hover:bg-white/20 transition group">
                  <dt className="font-semibold text-gray-900">{feature.title}</dt>
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 text-white group-hover:bg-purple-700">
                    {feature.icon}
                  </div>
                  <dd className="mt-1 text-gray-700">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute w-64 h-64 bg-pink-400/20 rounded-full blur-3xl -z-10"></div>
              <img src={user.image} alt="Abir" className="w-64 h-64 rounded-full object-cover shadow-2xl hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* EXPERTISE */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-base font-semibold text-purple-600 text-center">Mon Expertise</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 text-center mb-12">Compétences Techniques</p>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {user.expertise.map((skill, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl shadow hover:shadow-lg transition">
                <FaCheckCircle className="text-green-500 text-xl mt-1" />
                <p className="text-gray-700 text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VALUES */}
      <div className="py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-base font-semibold text-purple-600">Mes Valeurs</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 mb-12">Ce qui guide mon travail</p>
          <div className="grid md:grid-cols-3 gap-8">
            {user.values.map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{val.title}</h3>
                <p className="text-gray-600">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-base font-semibold text-purple-200">Formation Académique</h2>
          <p className="mt-2 text-3xl font-bold">Mon Parcours</p>

          <div className="mt-12 space-y-6 max-w-3xl mx-auto">
            {user.education.map((edu, idx) => (
              <div key={idx} className="flex items-start gap-6 bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white rounded-full text-2xl">{edu.icon}</div>
                <div className="text-left">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-purple-200">{edu.school}</p>
                  <p className="text-purple-300 text-sm">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
