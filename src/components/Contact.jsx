export default function Contact() {
  return (
    <section
      id="contact"
      className="px-12 py-32 text-center"
    >
      <h2 className="text-4xl font-bold mb-6">
        Let’s <span className="text-muted">Connect</span>
      </h2>

      <p className="text-muted max-w-xl mx-auto mb-12">
        I’m open to collaborations, internships, research opportunities,
        and meaningful conversations around web, UI, and creative tech.
      </p>

      <a
        href="mailto:gurudattajr@gmail.com"
        className="inline-block border border-white/20 px-8 py-3 rounded-full hover:border-white transition"
      >
        Contact Me
      </a>
    </section>
  );
}
