"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sun,
  Moon,
  Download,
  Code2,
  Server,
  Database,
  GitBranch,
  Layout,
  Figma,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Home() {
  const [dark, setDark] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const toggleDark = () => setDark(!dark);

  const theme = dark
    ? {
        bg: "bg-[#0b0b0b]",
        text: "text-gray-200",
        card: "bg-[#111111]/80 border border-[#1f1f1f] shadow-[0_0_10px_rgba(255,255,255,0.03)]",
        accent: "text-gray-400 hover:text-gray-100",
        btn: "bg-[#1f1f1f] hover:bg-[#2a2a2a] text-gray-200",
        line: "rgba(255,255,255,0.12)",
        skillBg:
          "bg-[#1a1a1a] border-[#2b2b2b] text-gray-300 hover:border-gray-400",
        secondaryText: "text-gray-400",
      }
    : {
        bg: "bg-[#f9f9f9]",
        text: "text-gray-900",
        card: "bg-white border border-gray-200 shadow-md",
        accent: "text-gray-600 hover:text-black",
        btn: "bg-gray-900 hover:bg-black text-white",
        line: "rgba(0,0,0,0.08)",
        skillBg:
          "bg-gray-100 border-gray-300 text-gray-800 hover:border-gray-500",
        secondaryText: "text-gray-600",
      };

  const projects = [
    {
      title: "01. Task Tracker Web Application",
      desc: "A full-stack task management web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This project allows users to create, edit, delete, and organize personal or team tasks in a user-friendly dashboard.",
      github: "https://github.com/shubhamrajpandey/Task-Tracker.git",
    },
    {
      title: "02. E-Commerce Website (Shopper)",
      desc: "A modern PHP-based eCommerce website integrated with MySQL database, featuring dynamic product management, category filtering, wishlist functionality, responsive design, and secure checkout system with Swiper-powered image sliders.",
      github: "https://github.com/shubhamrajpandey/Shopper.git",
    },
    {
      title: "03. Java-Based Quiz Management System",
      desc: "Desktop Quiz App using Java Swing and MySQL with randomized questions, score tracking, and topic categorization.",
      github: "https://github.com/shubhamrajpandey/Quiz-management-system-java",
    },
    {
      title: "04. Java-Based Banking Management System",
      desc: "Developed a console-based Banking System using Core Java, focusing on basic banking operations such as account creation, deposit, withdrawal, balance inquiry, and transaction history.",
      github: "https://github.com/shubhamrajpandey/BankingApplication",
    },
  ];

  const skills = [
    { name: "JavaScript", icon: <Code2 size={16} /> },
    { name: "TypeScript", icon: <Code2 size={16} /> },
    { name: "React", icon: <Layout size={16} /> },
    { name: "Express", icon: <Server size={16} /> },
    { name: "Node.js", icon: <Server size={16} /> },
    { name: "Next.js", icon: <Layout size={16} /> },
    { name: "Tailwind CSS", icon: <Layout size={16} /> },
    { name: "MongoDB", icon: <Database size={16} /> },
    { name: "Git", icon: <GitBranch size={16} /> },
    { name: "Figma", icon: <Figma size={16} /> },
  ];

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setShowScrollTop(true);
      else setShowScrollTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${theme.bg} ${theme.text} min-h-screen font-[Poppins] relative overflow-x-hidden transition-colors duration-700`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] bg-blue-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => scroll.scrollToTop({ smooth: true })}
            className="fixed bottom-6 right-6 z-50 bg-blue-500 text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `repeating-linear-gradient(120deg, transparent 0%, ${theme.line} 1px, transparent 3%)`,
            backgroundSize: "180px 180px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "180px 180px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `repeating-linear-gradient(-120deg, transparent 0%, ${theme.line} 1px, transparent 3%)`,
            backgroundSize: "200px 200px",
          }}
          animate={{ backgroundPosition: ["0px 0%", "-200px 200px"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${
              dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)"
            }, transparent 70%)`,
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-20 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto space-y-20">
        {/* ABOUT */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-left w-full">
            {/* Glowing line */}
            <div
              className="
              w-20 h-4 mb-4 
              rounded-full 
              bg-linear-to-r from-gray-200 via-white to-gray-400 
              animate-pulse 
              shadow-[0_0_15px_rgba(255,255,255,0.6)]"
            />

            {/* Name & Dark toggle */}
            <div className="flex gap-6 sm:flex-row sm:justify-between sm:items-center mb-2">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-2 sm:mb-0">
                Shubham Raj Pandey
              </h2>
              <button
                onClick={toggleDark}
                className={`w-9 h-9 rounded-full flex items-center justify-center border ${
                  dark ? "border-[#2b2b2b]" : "border-gray-300"
                } transition mt-2 sm:mt-0`}
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>

            {/* Role */}
            <p
              className={`${
                dark ? "text-gray-400" : "text-gray-600"
              } text-xs uppercase tracking-[0.3em] mb-6`}
            >
              Web Developer (Frontend & Backend) | Design & User Experience
            </p>

            {/* About Card */}
            <div
              className={`rounded-2xl ${theme.card} p-6 max-w-full sm:max-w-4xl mx-auto text-sm leading-relaxed ${theme.secondaryText}`}
            >
              <p>
                I am dedicated and passionate computer science student with a
                strong foundation of programming language, algorithms. I am
                actively seeking internship and project opportunities to enhance
                my learning and knowledge. I am committed to advancing my
                ability in various areas of computer science.
              </p>
              <p className="mt-3 italic text-blue-400">
                {
                  "You don't have to be great to start. But you have to start to be great."
                }{" "}
                – Zig Ziglar
              </p>
            </div>

            {/* SOCIAL + RESUME */}
            <div className="mt-8 flex flex-col items-center sm:flex-row sm:justify-between sm:items-center gap-4">
              {/* Social Icons */}
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                <a
                  href="https://github.com/shubhamrajpandey"
                  target="_blank"
                  rel="noreferrer"
                  className={`${theme.accent} transition`}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shubhamrajpandey"
                  target="_blank"
                  rel="noreferrer"
                  className={`${theme.accent} transition`}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.facebook.com/yourprofile"
                  target="_blank"
                  rel="noreferrer"
                  className={`${theme.accent} transition`}
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noreferrer"
                  className={`${theme.accent} transition`}
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="mailto:shubhamrajpandey@gmail.com"
                  className={`${theme.accent} transition`}
                >
                  <Mail size={20} />
                </a>
              </div>

              {/* Resume Button */}
              <div className="mt-4 sm:mt-0">
                <button
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  className={`flex items-center gap-2 ${theme.btn} px-4 py-2 rounded-lg text-xs uppercase tracking-wide transition`}
                >
                  <Download size={14} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* EDUCATION */}
        <section id="education" className="px-4 sm:px-0">
          <h3 className="text-xs tracking-[0.3em] text-gray-500 mb-4 text-center sm:text-left">
            EDUCATION
          </h3>
          <div
            className={`${theme.card} rounded-2xl p-6 space-y-4 max-w-full sm:max-w-4xl mx-auto`}
          >
            <div>
              <h4 className="text-lg font-medium">Herald College Kathmandu</h4>
              <p className={`${theme.secondaryText} text-sm`}>
                BSc (Hons) Computer Science — 2023–2027
              </p>
              <p className={`text-sm mt-2 ${theme.secondaryText}`}>
                Affiliated with the University of Wolverhampton (UK).
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="px-4 sm:px-0 mt-8">
          <h3 className="text-xs tracking-[0.35em] text-gray-500 mb-4 text-center sm:text-left">
            EXPERIENCE
          </h3>
          <div
            className={`rounded-2xl ${theme.card} p-6 space-y-6 max-w-full sm:max-w-4xl mx-auto`}
          >
            {/* Herald College */}
            <div>
              <h4 className="text-lg font-medium">
                Development Platform HCK (Learner)
              </h4>
              <p className={`${theme.secondaryText} text-sm`}>
                Frontend Developer at Development Platform HCK — Jun 2025 –
                Present
              </p>
              <p
                className={`mt-3 text-sm ${theme.secondaryText} leading-relaxed`}
              >
                {
                  "Contributing as a Frontend Developer at Herald College Kathmandu's development platform (HCK), where I collaborate with a team to build full-stack web applications using Next.js, Tailwind CSS, TypeScript, and modern frontend tools. Actively involved in designing responsive UIs, integrating APIs, and maintaining clean, scalable code for real-world projects."
                }
              </p>
              <p
                className={`mt-2 text-sm italic font-semibold ${theme.accent}`}
              >
                Skills: Nextjs · Typescript · Figma
              </p>
            </div>

            {/* Sajilo Shikshya */}
            <div>
              <h4 className="text-lg font-medium">Sajilo Shikshya</h4>
              <p className={`${theme.secondaryText} text-sm`}>
                SQL Data Intern — Jun 2024 – Oct 2024
              </p>
              <p
                className={`mt-3 text-sm ${theme.secondaryText} leading-relaxed`}
              >
                {
                  "As an SQL Data Intern, I contributed to the company's administrative operations by executing SQL queries to input and manage data through the admin panel. My role involved ensuring accurate and efficient data entry, contributing to smooth backend operations and reliable data systems."
                }
              </p>
              <p
                className={`mt-2 text-sm italic font-semibold ${theme.accent}`}
              >
                Skills: Databases · Communication · Teamwork
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h3 className="text-xs tracking-[0.3em] text-gray-500 mb-3">
            SKILLS & TOOLS
          </h3>
          <div
            className={`rounded-2xl ${theme.card} p-6 sm:p-8 flex flex-wrap gap-3 justify-center`}
          >
            {skills.map((skill, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border transition ${theme.skillBg}`}
              >
                {skill.icon}
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h3 className="text-xs tracking-[0.3em] text-gray-500 mb-4">
            PROJECTS
          </h3>
          <div className="space-y-6">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className={`rounded-2xl ${theme.card} p-4 sm:p-6`}
              >
                <h4 className="font-medium text-lg mb-2">{proj.title}</h4>
                <p className={`text-sm ${theme.secondaryText} mb-3`}>
                  {proj.desc}
                </p>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-500 hover:underline"
                >
                  🔗 View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <h3 className="text-xs tracking-[0.3em] text-gray-500 mb-4">
            CONTACT
          </h3>
          <div
            className={`rounded-2xl ${theme.card} p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8`}
          >
            {/* Contact Info */}
            <div className={`space-y-4 text-sm ${theme.secondaryText}`}>
              <h4 className="text-lg font-medium mb-4 text-gray-300">
                Get in Touch
              </h4>
              <p className="flex items-center gap-3">
                <Mail size={16} /> shubhamrajpandey875@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} /> +977-9765304321
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={16} /> Kathmandu, Nepal
              </p>
            </div>

            {/* Contact Form */}
            <form
              className="space-y-4"
              action="https://formspree.io/f/yourFormID"
              method="POST"
            >
              <div>
                <label className="text-xs text-gray-500">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full p-3 mt-1 rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:border-gray-500 text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-3 mt-1 rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:border-gray-500 text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500">Message</label>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  rows={4}
                  required
                  className="w-full p-3 mt-1 rounded-lg bg-transparent border border-gray-300 focus:outline-none focus:border-gray-500 text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full ${theme.btn} py-2 rounded-lg text-sm transition`}
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className={`relative z-10 text-center py-6 border-t mt-16 ${
          dark ? "border-[#1f1f1f]" : "border-gray-300 text-gray-600"
        } text-sm`}
      >
        © 2025 Shubham Raj Pandey — All Rights Reserved.
      </footer>
    </div>
  );
}
