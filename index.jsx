import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Grace O.",
    feedback: "This class made HTML so simple to understand. I even built my first website after it!",
  },
  {
    name: "Chuka I.",
    feedback: "I loved the way the lessons were structured. Clear, practical, and fun!",
  },
  {
    name: "Aisha B.",
    feedback: "Joining this class was the best decision I made this year. Highly recommend it!",
  },
];

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with HTML, CSS, and JavaScript.",
    link: "#",
  },
  {
    title: "To-Do App",
    description: "A dynamic to-do list using React with localStorage.",
    link: "#",
  },
  {
    title: "Landing Page",
    description: "A responsive landing page layout with animations.",
    link: "#",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const bgClass = darkMode
    ? "bg-[#1f2937] text-white"
    : "bg-[#fefefe] text-gray-900";
  const accentColor = darkMode ? "text-teal-400" : "text-indigo-600";
  const buttonColor = darkMode ? "bg-indigo-500 hover:bg-indigo-600" : "bg-teal-500 hover:bg-teal-600";
  const cardBg = darkMode ? "bg-[#2d3748] text-white" : "bg-white text-gray-900";

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${bgClass}`}>
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        <h1 className={`text-2xl font-bold ${accentColor}`}>GeeLabs</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`${buttonColor} text-white px-4 py-2 rounded-full shadow hover:scale-105 transition`}
        >
          {darkMode ? "Light Theme" : "Dark Theme"}
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4" data-aos="fade-up">
        <h2 className={`text-4xl md:text-6xl font-bold mb-4 ${accentColor}`}>Learn HTML With Me</h2>
        <p className="text-lg md:text-xl max-w-xl mx-auto">Join my free HTML class and start building your own web pages today. No experience needed!</p>
        <a href="#signup" className={`mt-8 inline-block ${buttonColor} text-white py-3 px-6 rounded-2xl shadow-lg transition`}>Join the Free Class</a>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 text-center" data-aos="fade-right">
        <h2 className={`text-3xl font-semibold mb-4 ${accentColor}`}>Who Am I?</h2>
        <p className="max-w-2xl mx-auto text-lg">
          I'm the founder of <strong>GeeLabs</strong>, a passionate developer-driven brand dedicated to empowering beginners through hands-on coding education.
        </p>
      </section>

      {/* Project Showcase */}
      <section className="py-16 px-4" data-aos="fade-left">
        <h2 className={`text-3xl font-semibold text-center ${accentColor} mb-10`}>Projects Showcase</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className={`${cardBg} p-6 rounded-xl shadow-xl`}>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-400 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-opacity-10" data-aos="fade-up">
        <h2 className={`text-3xl font-semibold text-center ${accentColor} mb-10`}>What Students Are Saying</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className={`${cardBg} p-6 rounded-2xl shadow-lg`}>
              <p className="text-md italic">"{t.feedback}"</p>
              <p className={`mt-4 text-sm ${accentColor} font-semibold`}>- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-16 px-4 text-center" data-aos="zoom-in">
        <h2 className={`text-3xl font-semibold mb-4 ${accentColor}`}>Ready to Get Started?</h2>
        <p className="mb-8 max-w-xl mx-auto">Fill out the form below and you'll get an invite to the next free class!</p>
        <form action="https://formsubmit.co/your@email.com" method="POST" className={`${cardBg} max-w-md mx-auto p-8 rounded-2xl shadow-xl`}>
          <input type="text" name="name" required placeholder="Your Name" className="w-full mb-4 px-4 py-3 rounded-lg text-black" />
          <input type="email" name="email" required placeholder="Your Email" className="w-full mb-4 px-4 py-3 rounded-lg text-black" />
          <textarea name="message" placeholder="Why do you want to learn HTML?" className="w-full mb-4 px-4 py-3 rounded-lg text-black"></textarea>
          <button type="submit" className={`${buttonColor} w-full text-white py-3 px-6 rounded-lg transition`}>Join Now</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} GeeLabs. Made with 💙 in React.
      </footer>
    </div>
  );
}

export default App;
