export default function Internship() {
  return (
    <section id="internships" className="max-w-7xl mx-auto px-6 py-28">
      {/* Section Heading */}
      <div className="mb-16">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
          Experience
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Internships
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Internship 1 */}
        <div className="glass rounded-3xl p-8 hover:scale-[1.02] transition">
          <p className="text-sm text-sky-400 font-semibold mb-2">
            1 Month Internship · Onsite
          </p>

          <h3 className="text-2xl font-semibold text-white mb-3">
            Vtech Integrated Solution
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            Frontend Development Intern where I learned the fundamentals of
            modern frontend development and built responsive user interfaces.
          </p>

          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-200"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="glass rounded-3xl p-8 hover:scale-[1.02] transition">
          <p className="text-sm text-green-400 font-semibold mb-2">
            Current Internship · Hybrid
          </p>

          <h3 className="text-2xl font-semibold text-white mb-3">Acaders</h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            Java Full Stack Intern working on backend and frontend technologies,
            focusing on building scalable applications and understanding
            real-world system design.
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Core Java",
              "Spring Boot",
              "JDBC",
              "Servlets",
              "React",
              "SQL",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
