import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-2">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 md:gap-6 px-4 py-2 md:py-3 
bg-white/5 backdrop-blur-lg border border-white/10 
rounded-full shadow-lg hover:shadow-sky-400/20
overflow-x-auto scrollbar-hide max-w-full"
      >

        {/* 🔥 Logo ONLY */}
        <motion.div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-9 h-9 bg-gradient-to-r from-sky-400 to-blue-500 
        text-black flex items-center justify-center rounded-full font-bold cursor-pointer"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          JC
        </motion.div>

        {/* 🔥 Menu */}
        <div className="flex items-center gap-3 md:gap-4 text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
          {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => {
            const id = item.toLowerCase();

            return (
              <a
                key={item}
                href={`#${id}`}
                className={`relative group transition ${active === id ? "text-sky-400" : "text-gray-300"
                  }`}
              >
                {item}

                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-sky-400 transition-all duration-300 ${active === id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </a>
            );
          })}

        </div>

        {/* 🔥 Social Icons */}
        <div className="flex gap-3 text-gray-300 text-lg">

          <a href="https://github.com/jatin957" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-sky-400 hover:scale-110 transition cursor-pointer" />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-sky-400 hover:scale-110 transition cursor-pointer" />
          </a>

        </div>

      </motion.nav>
    </div>
  );
}

export default Navbar;