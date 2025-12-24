import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaPlay, FaGithub, FaLinkedin } from "react-icons/fa";
import abirPhoto from "../../assets/abir.png";

const Hero = () => {
  const user = {
    name: "Abir Bchir",
    title: "Full-Stack Developer | Software Engineering Student",
    description:
      "Étudiante en 3ᵉ année Génie Logiciel & SI, passionnée par le développement web, l’automatisation et la création de solutions innovantes. Je conçois des applications performantes en ASP.NET, Spring Boot, React.js, PHP, et Flutter.",
    avatar: abirPhoto,
    stats: { projects: 8, clients: 100, support: "Disponible" },
    socials: {
      github: "https://github.com/abirbchir",
      linkedin: "https://linkedin.com/in/abir-bchir",
    },
    email: "abirbchir001@gmail.com",
    location: "Sfax, Tunisie",
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between gap-12">
        
        {/* Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Bonjour, je suis <span className="text-yellow-300">{user.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90">{user.title}</h2>
          <p className="text-lg text-white/80 max-w-lg">{user.description}</p>
          
          <div className="flex gap-4">
            {/* Voir Projets */}
            <Link
              to="/projects"
              className="px-6 py-3 bg-yellow-400 rounded-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2"
            >
              <FaRocket /> Voir mes projets
            </Link>

            {/* Me Contacter */}
            <Link
              to="/contact"
              className="px-6 py-3 border border-white rounded-lg hover:bg-white/20 transition flex items-center gap-2"
            >
              <FaPlay /> Me contacter
            </Link>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex gap-4 mt-4">
            <a
              href={user.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full hover:bg-white/40 transition"
            >
              <FaGithub className="text-xl text-white" />
            </a>
            <a
              href={user.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full hover:bg-white/40 transition"
            >
              <FaLinkedin className="text-xl text-white" />
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-6">
            <div className="text-center">
              <p className="text-3xl font-bold">{user.stats.projects}+</p>
              <p className="text-white/80 text-sm">Projets réalisés</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{user.stats.clients}%</p>
              <p className="text-white/80 text-sm">Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{user.stats.support}</p>
              <p className="text-white/80 text-sm">Disponibilité</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-3xl -z-10"></div>
          <img
            src={user.avatar}
            alt={user.name}
            className="w-64 h-64 rounded-full object-cover shadow-2xl hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
