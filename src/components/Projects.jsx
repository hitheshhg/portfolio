import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setProjects(data);
    }
    setLoading(false);
  }

  return (
    <section className="px-10 py-24">
      <h2 className="text-4xl font-bold mb-12">
        Selected <span className="text-gray-500">Projects</span>
      </h2>

      {loading && (
        <p className="text-gray-400">Loading projects...</p>
      )}

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-white/10 p-6 rounded-xl hover:border-white/30 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <p className="text-sm text-gray-500 mb-6">
              {project.tech}
            </p>

            <div className="flex gap-6 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="hover:text-white underline"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="hover:text-white underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
