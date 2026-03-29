import { motion } from "framer-motion";

function Experience() {
  return (
   <section id="experience" className="py-16 px-6">
      <h2 className="text-3xl text-sky-400 text-center mb-12">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto relative border-l-2 border-sky-400 pl-6 space-y-10 mt-6">

        {/* 🔥 OATI */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Dot */}
          <div className="absolute -left-[10px] top-2 w-3 h-3 bg-sky-400 rounded-full border-2 border-slate-900"></div>

          <h3 className="text-xl font-semibold">
            Associate Software Developer
          </h3>

          <p className="text-sky-400 text-sm mb-2">
            OATI (Open Access Technology India)
          </p>

          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Developed and maintained enterprise Web CTRM applications using ASP.NET MVC and SQL Server</li>
            <li>• Built and optimized REST APIs and backend logic for data-driven workflows</li>
            <li>• Designed and improved SQL queries and stored procedures</li>
            <li>• Resolved production issues related to APIs, data mapping, and database operations</li>
            <li>• Collaborated with QA and teams in Agile environment</li>
          </ul>
        </motion.div>

        {/* 🔥 Homework App */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Dot */}
          <div className="absolute -left-[10px] top-2 w-3 h-3 bg-sky-400 rounded-full border-2 border-slate-900"></div>

          <h3 className="text-xl font-semibold">
            Backend Developer Intern
          </h3>

          <p className="text-sky-400 text-sm mb-2">
            The Homework App • 6 Months Internship
          </p>

          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Developed backend services using Python and Django</li>
            <li>• Built REST APIs with validation and error handling</li>
            <li>• Used Django ORM for database operations and optimization</li>
            <li>• Debugged backend issues and improved system performance</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;