import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-800">
      <h2 className="text-3xl text-sky-400 text-center mb-10">Projects</h2>

      <div className="max-w-6xl mx-auto space-y-12">

        {/* Professional Experience */}
        <div>
          <h3 className="text-2xl mb-6">💼 Professional Experience</h3>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Web CTRM */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-700 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-2">Web CTRM Application</h4>

              <p className="text-sm text-sky-400 mb-2">
                ASP.NET MVC • C# • SQL Server • ExtJS
              </p>

              <p className="text-gray-300 text-sm mb-3">
                Enterprise-level energy trading application used for managing complex business workflows.
              </p>

              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Developed backend logic and optimized SQL stored procedures</li>
                <li>• Resolved production issues related to APIs and database workflows</li>
                <li>• Implemented UI components and filters using ExtJS</li>
                <li>• Worked across full stack (frontend, backend, database)</li>
                <li>• Improved performance of queries and data handling</li>
              </ul>
            </motion.div>

            {/* Homework App */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-700 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-2">The Homework App</h4>

              <p className="text-sm text-sky-400 mb-2">
                Python • Django • REST APIs
              </p>

              <p className="text-gray-300 text-sm mb-3">
                Backend system for handling student data, assignments, and API-based workflows.
              </p>

              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Developed REST APIs with validation and error handling</li>
                <li>• Used Django ORM for optimized database operations</li>
                <li>• Implemented business logic and request handling</li>
                <li>• Debugged backend issues and improved system performance</li>
                <li>• Ensured data consistency and efficient query execution</li>
              </ul>
            </motion.div>

          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-2xl mb-6">🚀 Personal Projects</h3>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Your Buddy */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-700 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-2">Your Buddy - Voice Assistant</h4>

              <p className="text-sm text-sky-400 mb-2">
                Python • Speech Recognition • Automation
              </p>

              <p className="text-gray-300 text-sm mb-3">
                Voice-controlled assistant that automates daily tasks and system operations.
              </p>

              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Implemented speech-to-text and text-to-speech functionality</li>
                <li>• Integrated APIs for weather, search, and automation tasks</li>
                <li>• Built system-level controls (open apps, play media)</li>
                <li>• Designed modular architecture for scalability</li>
              </ul>
            </motion.div>

            {/* Portfolio */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-700 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-2">Portfolio Website</h4>

              <p className="text-sm text-sky-400 mb-2">
                React • Tailwind CSS • Framer Motion • Docker • Tsparticles
              </p>

              <p className="text-gray-300 text-sm mb-3">
                Modern responsive portfolio showcasing projects, skills, and experience.
              </p>

              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Built using React with component-based architecture</li>
                <li>• Styled using Tailwind CSS for responsive design</li>
                <li>• Added animations using Framer Motion</li>
                <li>• Dockerized application for deployment</li>
                <li>• Optimized UI for performance and accessibility</li>
              </ul>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;