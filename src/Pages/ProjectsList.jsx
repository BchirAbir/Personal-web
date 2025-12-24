import { useEffect, useState } from "react";

const API_URL = 'https://6946cb9bca6715d122f8eca3.mockapi.io/projects';

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

  if (loading) return <p className="text-center py-20 text-lg">Chargement...</p>;
  if (error) return <p className="text-center text-red-600 py-20">{error}</p>;


  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-20 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            Portfolio
          </div>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Mes Projets
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations académiques et personnelles, 
            alliant créativité et expertise technique.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100 hover:border-indigo-200 hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Badge catégorie */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-xs text-gray-400">
                  {project.year}
                </span>
              </div>

              {/* Titre */}
              <h2 className="text-xl font-semibold text-gray-900 mb-6 min-h-[3.5rem] leading-tight">
                {project.title}
              </h2>

              {/* Bouton */}
              <a
                href={`/projects/${project.id}`}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white transition-all duration-300 group-hover:from-indigo-700 group-hover:to-indigo-800 group-hover:shadow-lg group-hover:shadow-indigo-200"
              >
                Voir les détails
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* État vide */}
        {projects.length === 0 && (
          <div className="text-center mt-20 py-16">
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">
              Aucun projet disponible pour le moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}



export default ProjectsList;