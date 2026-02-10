import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-28">
      <div className="mb-16">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Contact Me
        </h2>
      </div>

      <div className="glass rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Let’s build something great together
          </h3>

          <p className="text-gray-300 max-w-xl leading-relaxed">
            I’m always open to discussing new opportunities, internships,
            collaborations, or full-time roles. Feel free to reach out through
            email or connect with me online.
          </p>

          <div className="mt-6 flex items-center gap-3 text-gray-300">
            <FaEnvelope className="text-sky-400 text-lg" />
            <span className="text-lg">nandishrao.career@gmail.com</span>
          </div>
        </div>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/nandish-rao-babb57256/"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-sky-400 hover:text-black text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://github.com/nandishrao"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-sky-400 hover:text-black text-white transition"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
