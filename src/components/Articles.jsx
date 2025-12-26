import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        supabase.from("articles").select("*").order("published_at", { ascending: false })
            .then(({ data }) => setArticles(data || []));
    }, []);

    return (
        <section id="articles" className="px-12 py-32">
            <h2 className="text-4xl font-bold mb-16">
                Writing <span className="text-muted">Articles</span>
            </h2>

            <div className="space-y-10 max-w-3xl">
                {articles.map(a => (
                    <div key={a.id} className="border-b border-white/10 pb-6">
                        <h3 className="text-2xl font-semibold mb-2">{a.title}</h3>
                        <p className="text-muted mb-3">{a.summary}</p>
                        {a.link && (
                            <a
                                href={a.link}
                                target="_blank"
                                className="text-sm underline"
                            >
                                Read article →
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
