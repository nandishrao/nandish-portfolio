import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-28">
      {/* Section Heading */}
      <div className="mb-16">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
          Selected Work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Projects I’ve Built
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Project 1 */}
        <div className="glass rounded-3xl p-8 hover:scale-[1.02] transition">
          <h3 className="text-2xl font-semibold text-white mb-3">DevMate</h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            A MERN stack developer networking platform where developers can
            connect, send and accept connection requests, and chat in real time.
            Built with scalability and real-time communication in mind.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "React",
              "Redux Toolkit",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "MongoDB",
              "Socket.IO",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-6 text-gray-300">
            <a
              href="https://github.com/nandishrao/devMate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaGithub /> Code
            </a>

            <a
              href="#"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="glass rounded-3xl p-8 hover:scale-[1.02] transition">
          <h3 className="text-2xl font-semibold text-white mb-3">
            Netflix GPT
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            A Netflix-inspired streaming platform enhanced with AI-powered movie
            recommendations using Gemini AI. Integrated TMDB API for real-time
            movie data and Firebase for authentication.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "React",
              "Redux",
              "Firebase",
              "Gemini AI",
              "TMDB API",
              "OpenAI",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-6 text-gray-300">
            <a
              href="https://github.com/nandishrao/netflix-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaGithub /> Code
            </a>

            <a
              href="#"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
