import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://6946cb9bca6715d122f8eca3.mockapi.io/projects";

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Impossible de charger les projets");

        const data = await res.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading)
    return <p className="text-center py-20 text-lg">Chargement...</p>;

  if (error)
    return <p className="text-center text-red-600 py-20">{error}</p>;

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <header className="mb-20 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            Portfolio
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations académiques et personnelles.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-xs text-gray-400">{project.year}</span>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-6 min-h-[3.5rem]">
                {project.title}
              </h2>

              <Link
                to={`/projects/${project.id}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Voir les détails
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center mt-20 text-gray-500">
            Aucun projet disponible.
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsList;
