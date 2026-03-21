import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-28 md:py-32 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Let’s <span className="text-muted">Connect</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
        className="text-muted max-w-xl mx-auto mb-12 leading-relaxed"
      >
        I’m open to collaborations, internships, research opportunities,
        and meaningful conversations around web, UI, and creative tech.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6"
      >


        <div className="flex gap-6">
          <a
            href="https://github.com/hitheshhg"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:border-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com/in/hitheshhg"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:border-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}