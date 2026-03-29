import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";

function Contact() {

    const [sent, setSent] = useState(false);
    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center px-6 py-16 bg-slate-900">

            <h2 className="text-3xl text-sky-400 text-center mb-10">
                Contact Me
            </h2>

            <div className="max-w-4xl mx-auto w-full grid md:grid-cols-2 gap-10">

                {/* 🔥 LEFT SIDE - INFO */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <p className="text-gray-300">
                        I'm open to opportunities, collaborations, or just a friendly chat.
                        Feel free to reach out 👇
                    </p>

                    <div className="space-y-4">

                        <p className="flex items-center gap-3">
                            <FaEnvelope className="text-sky-400" />
                            jatinc957@gmail.com
                        </p>

                        <a
                            href="https://github.com/jatin957"
                            target="_blank"
                            className="flex items-center gap-3 hover:text-sky-400 transition"
                        >
                            <FaGithub />
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/jatin957"
                            target="_blank"
                            className="flex items-center gap-3 hover:text-sky-400 transition"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>

                    </div>
                </motion.div>

                {/* 🔥 RIGHT SIDE - FORM */}
                <motion.form
                    action="https://formspree.io/f/mojpeeoj"   // 🔥 PUT YOUR FORM LINK HERE
                    method="POST"
                     onSubmit={(e) => {
                        setTimeout(() => e.target.reset(), 100); 
                        setSent(true); 
                    }}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-slate-800 p-6 rounded-xl space-y-4 shadow-lg"
                >
                    <input
                        type="text"
                        name="Name"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-sky-400"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-sky-400"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-sky-400"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-sky-400 text-black py-2 rounded-lg hover:bg-sky-500 transition"
                    >
                        Send Message
                    </button>
                     {sent && (
                        <p className="text-green-400 text-center mt-2">
                            Message sent successfully ✅
                        </p>
                    )}
                </motion.form>

            </div>
        </section>
    );
}

export default Contact;