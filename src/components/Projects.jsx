import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    supabase.from("projects").select("*").then(({ data }) => {
      setProjects(data || []);
    });
  }, []);

  return (
    <section id="projects" className="px-12 py-32">
      <h2 className="text-4xl font-bold mb-16">
        Selected <span className="text-muted">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map(p => (
          <div
            key={p.id}
            className="border border-white/10 rounded-xl p-8 hover:border-white/30 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
            <p className="text-muted mb-4">{p.description}</p>
            <p className="text-xs text-muted mb-6">{p.tech}</p>
            <div className="flex gap-6 text-sm">
              {p.github && <a href={p.github} target="_blank">GitHub</a>}
              {p.live && <a href={p.live} target="_blank">Live</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
