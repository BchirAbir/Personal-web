import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

<<<<<<< HEAD
// Mise à jour de l'URL de l'API
const API_URL = 'https://6946cb9bca6715d122f8eca3.mockapi.io/projects';
=======
const API_URL = "https://6946cb9bca6715d122f8eca3.mockapi.io/projects";
>>>>>>> 1cc6c8ff779fa9b0ab6e80303921afb431b05a1f

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    async function load() {
      try {
        // Ajout du paramètre "id" dans l'URL
        const res = await fetch(`${API_URL}?id=${id}`);
        const data = await res.json();

        // Comparaison sécurisée (string / number)
        const foundProject = data.find(
          (p) => String(p.id) === String(id)
        );

        setProject(foundProject || null);
      } catch (err) {
        console.error(err);
=======
    async function loadProject() {
      try {
        const res = await fetch(`${API_URL}/?id=${id}`);
        const data = await res.json();
        setProject(data[0] || null);
      } catch (error) {
        console.error("Erreur lors du chargement du projet :", error);
        setProject(null);
>>>>>>> 1cc6c8ff779fa9b0ab6e80303921afb431b05a1f
      } finally {
        setLoading(false);
      }
    }

<<<<<<< HEAD
    load();
=======
    loadProject();
>>>>>>> 1cc6c8ff779fa9b0ab6e80303921afb431b05a1f
  }, [id]);

  if (loading) {
    return <p className="text-center py-10">Chargement...</p>;
  }

  if (!project) {
    return (
      <div className="text-center py-16">
        <p className="text-red-600 text-lg mb-4">Projet introuvable</p>
        <Link
          to="/projects"
          className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white"
        >
          ← Retour aux projets
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen py-32 px-6">
      <div className="max-w-3xl mx-auto">

<<<<<<< HEAD
        {/* Retour */}
=======
>>>>>>> 1cc6c8ff779fa9b0ab6e80303921afb431b05a1f
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 mb-10 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition"
        >
          ← Retour aux projets
        </Link>

<<<<<<< HEAD
        {/* Card */}
        <article className="bg-white rounded-3xl border border-indigo-100 shadow-md overflow-hidden">

          {/* Header */}
=======
        <article className="bg-white rounded-3xl border border-indigo-100 shadow-md overflow-hidden">
>>>>>>> 1cc6c8ff779fa9b0ab6e80303921afb431b05a1f
          <header className="px-10 py-12 bg-gradient-to-r from-indigo-600 to-purple-600">
            <h1 className="text-4xl font-semibold text-white leading-tight">
              {project.title}
            </h1>
          </header>

<<<<<<< HEAD
          {/* Content */}
          <div className="px-10 py-12 space-y-14">

            {/* Description */}
=======
          <div className="px-10 py-12 space-y-14">
>>>>>>> 1cc6c8ff779fa9b0ab6e80303921afb431b05a1f
            <section>
              <h2 className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-4">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.description ||
                  "Ce projet a été réalisé dans un cadre académique ou personnel, avec un accent particulier sur la qualité du code, la clarté de l’architecture et les bonnes pratiques de développement."}
              </p>
            </section>

<<<<<<< HEAD
            {/* Technologies */}
=======
>>>>>>> 1cc6c8ff779fa9b0ab6e80303921afb431b05a1f
            {project.technologies && project.technologies.length > 0 && (
              <section>
                <h2 className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-4">
                  Technologies utilisées
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm rounded-lg bg-indigo-50 text-indigo-700 font-medium border border-indigo-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}
<<<<<<< HEAD

=======
>>>>>>> 1cc6c8ff779fa9b0ab6e80303921afb431b05a1f
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProjectDetails;
