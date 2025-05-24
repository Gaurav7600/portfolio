import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import HotelImage from './assets/hotel_management_system_photo.png';
import CourierImage from './assets/courier_system.png';
import EstateImage from './assets/real_estate.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/Gaurav7600/online-Food-order-website.git"
    },
    {
      title: "AI Task Manager",
      description: "Smart task management with AI prioritization",
      image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&q=80&w=800",
      tech: ["Python", "TensorFlow", "React"],
      link: "https://airesolution.vercel.app/"
    },
    {
      title: "StudyNotion Online E-Learning Platform",
      description: "A comprehensive online learning platform with interactive features",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "WebSocket", "Chart.js"],
      link: "https://studynotion-frontend.vercel.app/"
    },
    {
      title: "Hotel Management System in Odoo",
      description: "Developed a complete Hotel Management System in Odoo 18 with integrated modules for Room Booking, Housekeeping, Guest Management, Restaurant Billing, and Reporting and Room Pricelist Model to handle seasonal pricing and discounts dynamically",
      image: HotelImage,
      tech: ["Odoo", "Python", "XML", "PostgreSQL"],
      link:"https://github.com/Gaurav7600/odoo_hotel_management"
    },
    {
      title: "Courier Management System in Odoo",
      description: "Built Courier Management System in Odoo with roles for Admin, Employee, Delivery Agent, and Customer, and integrated a complaint dashboard and analytics reports",
      image: CourierImage,
      tech: ["Odoo", "Python", "XML", "PostgreSQL"],
      link:"https://github.com/Gaurav7600/odoo_courier_management"
    },
    {
      title: "Real Estate - Property Listing Platform",
      description: "Developed a full-featured custom module to manage real estate property listings, inquiries, and sales workflow, Created models for Properties, Property Types, Agents, Property Tags and Designed smart views and filters (Kanban, List, and Form) for managing properties by location, budget, and status.",
      image: EstateImage,
      tech: ["Odoo", "Python", "XML", "PostgreSQL"],
      link:"https://github.com/Gaurav7600/odoo_real_estate"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </span>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'}`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-medium text-gray-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hi, I'm Gaurav Thakor
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} className="text-xl md:text-2xl text-gray-400 mb-8">
            Full Stack Developer & Odoo Developer
          </motion.p>
          <div className="flex justify-center space-x-4 mb-12">
            <a href="https://github.com/Gaurav7600" target='_blank' rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/thakor-gaurav-486a2824a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=thakorgaurav760@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <a href="#projects" className="animate-bounce inline-flex items-center text-blue-400 hover:text-blue-300">
            View My Work <ChevronDown className="ml-2" />
          </a>
        </div>
      </section>

      <section id="about" className="py-20 px-4" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src="https://i.postimg.cc/MKZzJhwM/Gaurav-Thakor-CV-Photo.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                With over <strong>5 years of experience</strong> in web development, I specialize in creating <strong>beautiful, functional, and user-friendly</strong> websites. My passion lies in turning complex problems into <strong>simple, elegant, and intuitive</strong> solutions.
              </p>
              <p className="text-gray-300 text-lg">
                I am also an <strong>Odoo Developer</strong>, specializing in <strong>customizing Odoo modules</strong>, developing <strong>business automation solutions</strong>, and creating tailored ERP systems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <p className="text-gray-400">React, Vue, Angular</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h3 className="font-bold mb-2">Backend</h3>
                  <p className="text-gray-400">Node.js, Python, Odoo</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h3 className="font-bold mb-2">Odoo Development</h3>
                  <p className="text-gray-400">Odoo Custom Modules, API Integrations</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h3 className="font-bold mb-2">Tools</h3>
                  <p className="text-gray-400">Git, Docker, AWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-gray-900/50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.97 }}
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl"
                onClick={(e) => {
                  if (!project.link) e.preventDefault();
                }}
              >
                <div className="aspect-video">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4" data-aos="fade-up">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Let's Connect</h2>
          <p className="text-gray-400 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=thakorgaurav760@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-medium transition-colors">
            Get In Touch <Mail className="ml-2" size={20} />
          </a>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <p>© 2025 Gaurav Thakor. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;