export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-32 overflow-hidden"
    >
      <div className="absolute top-[-10rem] left-[-10rem] w-[30rem] h-[30rem] bg-sky-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10rem] right-[-10rem] w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-lg tracking-widest text-white font-bold mb-6">
            Hellooooooo, I’m Nandish
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
            I design & build{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              high-impact
            </span>{" "}
            web applications.
          </h1>

          <p className="mt-8 text-lg text-gray-300 max-w-xl leading-relaxed">
            MCA student and{" "}
            <span className="text-white font-medium">MERN Stack Developer</span>{" "}
            passionate about{" "}
            <span className="text-white">clean architecture</span>,{" "}
            <span className="text-white">performance optimization</span>, and
            crafting seamless digital experiences — now also gaining hands-on
            experience with{" "}
            <span className="text-sky-400 font-medium">Spring Boot</span>.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative px-8 py-3 rounded-xl font-medium text-black bg-sky-400 hover:bg-sky-300 transition"
            >
              View Projects
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 rounded-xl font-medium text-white border border-white/20 hover:border-white transition"
            >
              Contact Me
            </button>
            <a
              href="/Nandish.pdf"
              download
              className="px-8 py-3 rounded-xl font-medium text-white border border-sky-400/40 hover:border-sky-400 hover:text-sky-400 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-purple-500 blur-2xl opacity-40 group-hover:opacity-60 transition"></div>
            <img
              src="/profile.jpeg"
              alt="Nandish Rao"
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
