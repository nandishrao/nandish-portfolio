import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <h1
            className="text-white font-bold text-lg tracking-wide cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Nandish Rao A
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-gray-300 text-sm">
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </li>
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection("internships")}
            >
              Internships
            </li>
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block px-5 py-2 rounded-lg text-sm font-medium text-black bg-sky-400 hover:bg-sky-300 transition"
          >
            Let’s Talk
          </button>

          {/* Mobile Burger */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/60 backdrop-blur-xl border-b border-white/10">
          <ul className="flex flex-col gap-6 px-6 py-8 text-gray-300 text-sm">
            <li
              onClick={() => scrollToSection("home")}
              className="hover:text-white"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("projects")}
              className="hover:text-white"
            >
              Projects
            </li>
            <li
              onClick={() => scrollToSection("internships")}
              className="hover:text-white"
            >
              Internships
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="hover:text-white"
            >
              Contact
            </li>

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-4 px-5 py-2 rounded-lg text-sm font-medium text-black bg-sky-400 hover:bg-sky-300 transition"
            >
              Let’s Talk
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
