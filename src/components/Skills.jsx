import { motion } from "framer-motion";
import { FaReact, FaDocker, FaPython, FaGitAlt } from "react-icons/fa";
import { SiDotnet, SiMysql, SiPostgresql, SiJavascript } from "react-icons/si";

const skills = [
  {
    title: "Backend",
    items: [
      { name: ".NET", icon: <SiDotnet /> },
      { name: "C#", icon: "💻" },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "ExtJS", icon: "⚡" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQL Server", icon: "🗄️" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Linux", icon: "🐧" },
      { name: "Visual Studio", icon: "🧰" },
    ],
  },
  {
    title: "AI",
    items: [
      { name: "ChatGPT", icon: "🤖" },
      { name: "Cursor AI", icon: "⚡" },
      { name: "Claude", icon: "☁️" },
      { name: "AI Debugging", icon: "🧠" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <h2 className="text-3xl text-sky-400 text-center mb-12">
        Technical Skills
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">

        {skills.map((section, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 rounded-xl p-5 cursor-pointer overflow-hidden transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            {/* Title */}
            <h3 className="text-xl text-sky-400 mb-3">
              {section.title}
            </h3>

            {/* Items */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileHover={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-3"
            >
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Skills;