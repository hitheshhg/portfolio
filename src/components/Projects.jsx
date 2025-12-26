import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    supabase.from("projects").select("*").then(({ data }) => {
      setData(data || []);
    });
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen px-12 py-32"
    >
      <h2 className="text-4xl font-bold mb-16">
        Selected <span className="text-gray-500">Work</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {data.map(p => (
          <div
            key={p.id}
            className="border border-white/10 p-8 rounded-xl hover:border-white/30 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.description}</p>
            <p className="text-xs text-gray-500 mb-6">{p.tech}</p>
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
