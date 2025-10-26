"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sun,
  Moon,
  Download,
  Facebook,
  Instagram,
} from "lucide-react";
import {
  Code2,
  Server,
  Database,
  GitBranch,
  Layout,
  Figma,
} from "lucide-react";
export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const toggleDark = () => setDark(!dark);
  const { scrollYProgress } = useScroll();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "https://my-portfolio-backend-rnsi.onrender.com/my-portfolio",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(data.message || "Failed to send message.");
      }
    } catch (err) {
      alert("Server error. Try again later." + err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setShowScrollTop(true);
      else setShowScrollTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const theme = {
    bg: dark ? "bg-[#0f0f0f]" : "bg-white",
    text: dark ? "text-white" : "text-gray-900",
    card: dark ? "bg-[#1a1a1a]" : "bg-gray-100",
    btn: dark
      ? "bg-blue-600 hover:bg-blue-700"
      : "bg-blue-500 hover:bg-blue-600",
    accent: dark
      ? "text-blue-400 hover:text-blue-300"
      : "text-blue-500 hover:text-blue-600",
    line: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
    skillBg: dark
      ? "border-gray-700 hover:border-blue-400"
      : "border-gray-300 hover:border-blue-500",
    secondaryText: dark ? "text-gray-400" : "text-gray-600",
  };

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
  const projects = [
    {
      title: "01. Task Tracker Web Application",
      desc: "A full-stack task management web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This project allows users to create, edit, delete, and organize personal or team tasks in a user-friendly dashboard.",
      github: "https://github.com/shubhamrajpandey/Task-Tracker.git",
    },
    {
      title: "02. HCKCORE (Next.js App)",
      desc: "A student portal with authentication, event management, and admin dashboard using Next.js, TypeScript, and MongoDB.",
      github: "https://github.com/shubhamrajpandey/HeraldHub",
    },
    {
      title: "03. E-Commerce Website (Shopper)",
      desc: "A modern PHP-based eCommerce website integrated with MySQL database, featuring dynamic product management, category filtering, wishlist functionality, responsive design, and secure checkout system with Swiper-powered image sliders.",
      github: "https://github.com/shubhamrajpandey/Shopper.git",
    },
    {
      title: "04. Java-Based Quiz Management System",
      desc: "Desktop Quiz App using Java Swing and MySQL with randomized questions, score tracking, and topic categorization.",
      github: "https://github.com/shubhamrajpandey/Quiz-management-system-java",
    },
    {
      title: "05. Java-Based Banking Management System",
      desc: "Developed a console-based Banking System using Core Java, focusing on basic banking operations such as account creation, deposit, withdrawal, balance inquiry, and transaction history.",
      github: "https://github.com/shubhamrajpandey/BankingApplication",
    },
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

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
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-blue-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center text-lg"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      {/* Background Animation */}
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
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-8 md:pt-20 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto space-y-12 md:space-y-20 pb-8">
        {/* ABOUT */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-left w-full">
            <div className="w-16 h-3 md:w-20 md:h-4 mb-3 md:mb-4 rounded-full bg-linear-to-r from-gray-200 via-white to-gray-400 animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
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
            <p
              className={`${
                dark ? "text-gray-400" : "text-gray-600"
              } text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 md:mb-6`}
            >
              Web Developer (Frontend & Backend) | Design & User Experience
            </p>

            <div
              className={`rounded-xl md:rounded-2xl ${theme.card} p-4 sm:p-5 md:p-6 text-xs sm:text-sm leading-relaxed ${theme.secondaryText}`}
            >
              <p>
                {
                  " I’m a passionate Computer Science student and Web Developer who loves building clean, responsive, and user-friendly websites. With a growing interest in UI/UX design and full-stack development, I’m currently learning backend technologies to create complete and seamless digital experiences."
                }
              </p>
              <p className="mt-3 italic text-blue-400">
                {
                  '"You don\'t have to be great to start. But you have to start to be great." – Zig Ziglar'
                }
              </p>
            </div>

            {/* Social Icons */}
            {/* Social Icons */}
            <div className="mt-6 flex flex-wrap justify-center sm:justify-between gap-4">
              <div className="flex gap-4">
                <a
                  href="https://github.com/shubhamrajpandey"
                  target="_blank"
                  rel="noreferrer"
                  className={theme.accent}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/shubhamrajpandey"
                  target="_blank"
                  rel="noreferrer"
                  className={theme.accent}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.facebook.com/shubham.pandey.170873/"
                  target="_blank"
                  rel="noreferrer"
                  className={theme.accent}
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/_shubham.pandey_/"
                  target="_blank"
                  rel="noreferrer"
                  className={theme.accent}
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="mailto:shubhamrajpandey875@gmail.com"
                  className={theme.accent}
                >
                  <Mail size={20} />
                </a>
              </div>
              <a
                href="/Shubham_Raj_Pandey_Resume.pdf"
                download="Shubham_Raj_Pandey_Resume.pdf"
                className={`flex items-center gap-2 ${theme.btn} px-4 py-2 rounded-lg text-xs uppercase tracking-wide`}
              >
                <Download size={14} />
                Resume
              </a>
            </div>
          </div>
        </motion.section>

        {/* EDUCATION */}
        <section id="education">
          <h3 className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-blue-500 mb-4 md:mb-5">
            EDUCATION
          </h3>
          <div
            className={`${theme.card} rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8`}
          >
            <h4 className="text-base sm:text-lg md:text-xl font-medium">
              Herald College Kathmandu
            </h4>
            <p
              className={`${theme.secondaryText} text-xs sm:text-sm md:text-base mt-1`}
            >
              BSc (Hons) Computer Science — 2023–2027
            </p>
            <p
              className={`mt-2 ${theme.secondaryText} text-xs sm:text-sm md:text-base`}
            >
              Affiliated with the University of Wolverhampton
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <h3 className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-blue-500 mb-4 md:mb-5">
            EXPERIENCE
          </h3>
          <div
            className={`${theme.card} rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8`}
          >
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-medium">
                Development Platform HCK (Learner)
              </h4>
              <p
                className={`${theme.secondaryText} text-xs sm:text-sm md:text-base mt-1`}
              >
                Frontend Developer — Jun 2025 – Present
              </p>
              <p
                className={`mt-3 ${theme.secondaryText} text-xs sm:text-sm md:text-base leading-relaxed`}
              >
                Contributing as a Frontend Developer at Herald College Kathmandu
                development platform (HCK), collaborating with a team to build
                full-stack web apps using Next.js, Tailwind, and TypeScript.
              </p>
              <p className={`mt-2 italic text-blue-400 text-xs sm:text-sm`}>
                Skills: Next.js · TypeScript · Figma
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-medium">
                Sajilo Shikshya
              </h4>
              <p
                className={`${theme.secondaryText} text-xs sm:text-sm md:text-base mt-1`}
              >
                SQL Data Intern — Jun 2024 – Oct 2024
              </p>
              <p
                className={`mt-3 ${theme.secondaryText} text-xs sm:text-sm md:text-base leading-relaxed`}
              >
                Assisted in admin data management using SQL queries, ensuring
                accurate backend operations and optimized data handling.
              </p>
              <p className={`mt-2 italic text-blue-400 text-xs sm:text-sm`}>
                Skills: SQL · Communication · Teamwork
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h3 className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-blue-500 mb-4 md:mb-5">
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
          <h3 className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-blue-500 mb-4">
            PROJECTS
          </h3>
          <div className="space-y-4 md:space-y-6">
            {displayedProjects.map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className={`${theme.card} rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6`}
              >
                <h4 className="font-medium text-base sm:text-lg mb-2">
                  {proj.title}
                </h4>
                <p
                  className={`${theme.secondaryText} text-xs sm:text-sm mb-3 leading-relaxed`}
                >
                  {proj.desc}
                </p>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm text-blue-500 hover:underline break-all"
                >
                  {"🔗 View on GitHub"}
                </a>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className={`${theme.btn} px-6 py-2.5 rounded-lg text-xs sm:text-sm uppercase tracking-wide transition`}
            >
              {showAllProjects ? "Show Less" : "View More Projects"}
            </button>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <h3 className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-blue-500 mb-4">
            CONTACT
          </h3>
          <div
            className={`${theme.card} rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8`}
          >
            <div
              className={`${theme.secondaryText} space-y-3 md:space-y-4 text-xs sm:text-sm`}
            >
              <h4 className="text-base sm:text-lg font-medium mb-3 md:mb-4">
                Get in Touch
              </h4>
              <p className="flex items-center gap-2 md:gap-3 break-all">
                <Mail size={16} className="shrink-0" />{" "}
                {"shubhamrajpandey875@gmail.com"}
              </p>
              <p className="flex items-center gap-2 md:gap-3">
                <Phone size={16} className="shrink-0" /> {"+977-9765304321"}
              </p>
              <p className="flex items-center gap-2 md:gap-3">
                <MapPin size={16} className="shrink-0" /> {"Kathmandu, Nepal"}
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <div>
                <label className="text-[10px] sm:text-xs text-gray-500">
                  Name
                </label>
                <input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2.5 md:p-3 mt-1 rounded-lg bg-transparent border border-gray-300 focus:outline-none text-xs sm:text-sm"
                />
              </div>
              <div>
                <label className="text-[10px] sm:text-xs text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2.5 md:p-3 mt-1 rounded-lg bg-transparent border border-gray-300 focus:outline-none text-xs sm:text-sm"
                />
              </div>
              <div>
                <label className="text-[10px] sm:text-xs text-gray-500">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Type your message..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2.5 md:p-3 mt-1 rounded-lg bg-transparent border border-gray-300 focus:outline-none text-xs sm:text-sm resize-none"
                />
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className={`w-full ${theme.btn} py-2 md:py-2.5 rounded-lg text-xs sm:text-sm transition`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className={`relative z-10 text-center py-4 md:py-6 border-t mt-12 md:mt-16 ${
          dark ? "border-[#1f1f1f]" : "border-gray-300 text-gray-600"
        } text-xs sm:text-sm px-4`}
      >
        © 2025 Shubham Raj Pandey — All Rights Reserved.
      </footer>
    </div>
  );
}
