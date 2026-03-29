import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import Background from "./Background";
import { useRef } from "react";

function Hero() {
  const workRef = useRef(null);
  const githubRef = useRef(null);
  const resumeRef = useRef(null);

  const handleMouseMove = (e, ref) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = (ref) => {
    ref.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <section
      id="about"
      className="relative min-h-screen pt-28 md:pt-0 flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      <Background />

      {/* 🔥 Glow Background */}
      <div className="absolute w-[600px] h-[600px] bg-sky-500 opacity-20 rounded-full blur-3xl top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-600 opacity-20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse"></div>

      {/* 🔥 Content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl z-10 gap-10 md:gap-12">
        {/* LEFT TEXT */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-sky-400">Jatin</span> 👋
          </h1>

          <h2 className="text-xl text-sky-400 mb-4">
            Full Stack Developer
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-md mb-6">
            Building scalable applications and exploring AI-driven solutions.
            Passionate about clean architecture, performance, and innovation.
          </p>

          {/* Buttons */}
         <div className="flex flex-wrap gap-3 justify-center md:justify-start">

            {/* View Work */}
            <a href="#projects">
              <button
                ref={workRef}
                onMouseMove={(e) => handleMouseMove(e, workRef)}
                onMouseLeave={() => handleMouseLeave(workRef)}
                className="bg-sky-400 text-black px-6 py-2 rounded-lg transition duration-200"
              >
                View Work
              </button>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/jatin957"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                ref={githubRef}
                onMouseMove={(e) => handleMouseMove(e, githubRef)}
                onMouseLeave={() => handleMouseLeave(githubRef)}
                className="border border-sky-400 px-6 py-2 rounded-lg transition duration-200 hover:bg-sky-400 hover:text-black"
              >
                GitHub
              </button>
            </a>

            {/* Resume */}
            <a href="/resume/Jatin Chauhan-Resume.pdf" download>
              <button
                ref={resumeRef}
                onMouseMove={(e) => handleMouseMove(e, resumeRef)}
                onMouseLeave={() => handleMouseLeave(resumeRef)}
                className="border border-green-400 text-green-400 px-6 py-2 rounded-lg transition duration-200 hover:bg-green-400 hover:text-black"
              >
                Resume
              </button>
            </a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          {/* 🔥 Glow Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-sky-400 animate-ping opacity-20"></div>

          {/* 🔥 Image */}
          <img
            src={profile}
            alt="profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-sky-400 shadow-xl"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;