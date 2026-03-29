import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="min-h-screen flex flex-col justify-center px-6 py-16">

      <h2 className="text-3xl text-sky-400 text-center mb-12">
        Education
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {/* 🎓 MCA */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-sky-400 transition shadow-lg"
        >
          <div className="flex items-center gap-3 mb-3">
            <FaGraduationCap className="text-sky-400 text-xl" />
            <h3 className="text-lg font-semibold">
              Master of Computer Application
            </h3>
          </div>

          <p className="text-sky-400 text-sm">
            Chandigarh University
          </p>

          <p className="text-gray-400 text-sm mt-1">
            2022 - 2024
          </p>
        </motion.div>

        {/* 🎓 BCA */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-sky-400 transition shadow-lg"
        >
          <div className="flex items-center gap-3 mb-3">
            <FaGraduationCap className="text-sky-400 text-xl" />
            <h3 className="text-lg font-semibold">
              Bachelor of Computer Applications
            </h3>
          </div>

          <p className="text-sky-400 text-sm">
            Chandigarh University
          </p>

          <p className="text-gray-400 text-sm mt-1">
            2019 - 2022
          </p>
        </motion.div>

        {/* 🎓 Intermediate */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-sky-400 transition shadow-lg md:col-span-2"
        >
          <div className="flex items-center gap-3 mb-3">
            <FaGraduationCap className="text-sky-400 text-xl" />
            <h3 className="text-lg font-semibold">
              Intermediate (Non-Medical)
            </h3>
          </div>

          <p className="text-gray-400 text-sm">
            2017 - 2018
          </p>
        </motion.div>

      </div>

    </section>
  );
}

export default Education;