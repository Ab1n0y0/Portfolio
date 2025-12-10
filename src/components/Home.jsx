import React, { useState, useEffect } from 'react';
import {
  Code, Server, Database, Github, Linkedin, Mail, Download,
  Eye, ArrowRight, GraduationCap, Brain, TrendingUp,
  Laptop, Rocket, Terminal, Globe, Layers, Settings,
  BarChart3, Cpu, FileCode, Zap, Shield, Activity,
  Star, Sparkles, ChevronDown, Menu, X, Play,
  Award, Target, Coffee, Heart
} from 'lucide-react';
import { Link } from "react-router-dom";


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Initial check for active section
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = [
    {
      category: "Frontend Magic",
      icon: <Laptop className="text-2xl" />,
      color: "from-pink-500 via-red-500 to-yellow-500",
      bgColor: "from-pink-500/20 to-yellow-500/20",
      techs: [
        { name: "React.js", icon: <Code />, level: 90 },
        { name: "JavaScript", icon: <Zap />, level: 95 },
        { name: "HTML5", icon: <Globe />, level: 90 },
        { name: "CSS3", icon: <Layers />, level: 90 },
        { name: "Tailwind", icon: <Settings />, level: 85 }
      ]
    },
    {
      category: "Backend Power",
      icon: <Server className="text-2xl" />,
      color: "from-green-400 via-blue-500 to-purple-600",
      bgColor: "from-green-400/20 to-purple-600/20",
      techs: [
        { name: "Node.js", icon: <Terminal />, level: 85 },
        { name: "Express.js", icon: <Rocket />, level: 80 },
        { name: "Spring Boot", icon: <Shield />, level: 75 },
        { name: "MySQL", icon: <Database />, level: 75 }
      ]
    },
    {
      category: "AI/ML Universe",
      icon: <Brain className="text-2xl" />,
      color: "from-purple-400 via-pink-500 to-red-500",
      bgColor: "from-purple-400/20 to-red-500/20",
      techs: [
        { name: "Python", icon: <FileCode />, level: 80 },
        { name: "TensorFlow", icon: <Cpu />, level: 75 },
        { name: "NumPy", icon: <Activity />, level: 70 },
        { name: "Power BI", icon: <BarChart3 />, level: 80 }
      ]
    }
  ];

  const projects = [
    {
      title: "Shopping Mall Management System",
      date: "Mar–Apr 2024",
      description: "Built a full-stack web app using Angular (frontend) and Node.js with Spring Boot (backend) to manage malls, stores, and products. Enabled seamless data CRUD operations through REST APIs.",
      tech: ["Angular", "Spring Boot", "Node.js", "JavaScript", "MySQL"],
      status: "Full Stack",
      icon: <Server className="w-6 h-6" />,
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "Grievances Management System",
      date: "2024",
      description: "Developed a React.js, Node.js, Express.js, and MySQL-based platform to handle complaint registration and tracking with automated status updates and admin dashboards.",
      tech: ["React.js", "Node.js", "Express.js", "MySQL"],
      status: "Full Stack",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "E-Commerce Platform",
      date: "2025 (Ongoing)",
      description: "Contributed to a client-based full-scale e-commerce app focusing on responsive UI with React and backend integration using Node.js and MySQL. Implemented user auth and product management.",
      tech: ["React.js", "Node.js", "MySQL", "Express.js", "Tailwind CSS"],
      status: "In Progress",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-yellow-400 to-orange-500",
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen filter blur-xl animate-pulse"
              style={{
                background: `radial-gradient(circle, ${['#ff006e', '#8338ec', '#3a86ff', '#06ffa5', '#ffbe0b'][i % 5]
                  }40 0%, transparent 50%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 80}px`,
                height: `${Math.random() * 300 + 80}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Cursor Trail */}
      <div
        className="fixed pointer-events-none z-50 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-difference transition-all duration-150 ease-out" /* Reduced size */
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'translate(0, 0)'
        }}
      />
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled
        ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-purple-500/20 border-b border-purple-500/20'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 w-full">

            {/* Left Logo */}
            <div className="text-2xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Abinaya⚡
            </div>

            {/* Desktop Menu and Buttons */}
            <div className="hidden md:flex items-center space-x-6 ml-auto">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-3 py-1.5 font-semibold text-white/80 hover:text-white transition-all duration-300 group ${activeSection === item.toLowerCase() ? 'text-white' : ''
                    }`}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-full' : ''
                      }`}
                  />
                </a>
              ))}


            </div>

            {/* Mobile Toggle Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="text-lg" /> : <Menu className="text-lg" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-purple-500/20">
            <div className="px-4 pt-2 pb-2 space-y-1">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-1.5 text-base font-medium text-white/80 hover:text-white hover:bg-purple-500/20 rounded-md transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}

            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 text-pink-300 px-4 py-2 rounded-full text-xs font-bold animate-bounce"> {/* Reduced padding and font size */}
              <Sparkles className="text-yellow-400 w-4 h-4" />
              Welcome to my digital universe
              <Star className="text-yellow-400 w-4 h-4" />
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl lg:text-3xl font-black leading-tight">
                <span className="block text-white">Hey, I'm</span>
                <span className="block bg-gradient-to-r from-pink-400 via-purple-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                  Abinaya
                </span>
              </h1>

              <div className="text-xl lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400"> {/* Reduced font size */}
                Full Stack Developer ✨ AI/ML Explorer 🚀 Data Analyst
              </div>
            </div>

            <p className="text lg:text text-gray-300 leading-relaxed max-w-2xl">
              I'm a passionate
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 font-bold">
                Full Stack Developer
              </span>
              {' '}with a strong foundation in both front-end and back-end technologies. As a fresher, I focus on building scalable web applications that combine clean code, modern tools, and elegant design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-xl font-bold text-base transition-all duration-300 hover:scale-110 hover:rotate-1 shadow-2xl shadow-purple-500/50 flex items-center justify-center gap-2" /* Reduced padding, roundedness, and font size */
              >
                <Sparkles className="group-hover:animate-spin w-4 h-4" />
                Let's Create Magic
                <ArrowRight className="group-hover:translate-x-2 transition-transform w-4 h-4" />
              </a>

              <a
              
                href="Abinaya_Resume...pdf"
                download
                className="group px-6 py-3 border-2 border-cyan-400/50 hover:border-cyan-400 bg-cyan-400/10 hover:bg-cyan-400/20 rounded-xl font-bold text-base transition-all duration-300 hover:scale-110 flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/20"
              >
                <Download className="group-hover:animate-bounce w-4 h-4" />
                Download Resume
              </a>

            </div>

            <div className="flex justify-center lg:justify-start gap-4 pt-6">
              {[
                {
                  icon: <Github className="w-5 h-5" />,
                  href: "https://github.com/Ab1n0y0",
                  label: "GitHub",
                  color: "from-gray-700 to-black"
                },
                {
                  icon: <Linkedin className="w-5 h-5" />,
                  href: "https://www.linkedin.com/in/abinaya-p-a8b485225",
                  label: "LinkedIn",
                  color: "from-blue-500 to-blue-700"
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  href: "mailto:abinayap295@gmail.com",
                  label: "Email",
                  color: "from-pink-600 to-purple-600"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-125 hover:rotate-12 group`}
                  target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                >
                  <span className="text-white group-hover:animate-pulse">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
          {/* Profile Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Main Profile Card */}
              <div className="relative w-80 h-80 lg:w-[24rem] lg:h-[24rem] rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all duration-700 hover:scale-105 hover:rotate-3 shadow-2xl shadow-purple-500/30">
                {/* This div now takes up the full space of the profile card */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden"> {/* Added absolute positioning and overflow hidden */}
                  <img src="/Profile_Image.png" alt="Abinaya P" className="w-full h-full object-cover" />

                </div>

                {/* Text overlay - you can keep or remove this as needed */}
                <div className="relative z-10 text-center space-y-1 bg-black/30 p-4 rounded-b-2xl w-full flex flex-col justify-end h-full"> {/* Added overlay for text, positioned at bottom */}
                  <p className="text-gray-100 font-semibold text-lg drop-shadow-lg">Abinaya P</p> {/* Increased font size slightly for visibility */}
                  <p className="text-sm text-gray-200 drop-shadow-lg">Full-Stack Developer | AI/ML Enthusiast</p>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center animate-bounce shadow-xl"> {/* Reduced size and roundedness */}
                <Code className="text-2xl text-white" /> {/* Reduced icon size */}
              </div>

              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center animate-pulse shadow-xl"> {/* Reduced size and roundedness */}
                <Terminal className="text-xl text-white" /> {/* Reduced icon size */}
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce"> {/* Reduced bottom margin */}
          <ChevronDown className="text-2xl text-white/60" /> {/* Reduced icon size */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative"> {/* Reduced padding */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"> {/* Reduced margin */}
            <h2 className="text-4xl lg:text-6xl font-black mb-6"> {/* Reduced font size */}
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mx-auto rounded-full mb-6"></div> {/* Reduced size */}
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"> {/* Reduced font size */}
              Passionate about turning ideas into reality through code and creativity
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center"> {/* Reduced gap */}
            <div className="space-y-6"> {/* Reduced space */}
              <div className="prose prose-md text-gray-300 space-y-4"> {/* Reduced prose size and space */}
                <p className="text-lg leading-relaxed">
                  I'm a passionate React.js Developer and AI/ML enthusiast, a proud graduate of the
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold"> B.Tech in Artificial Intelligence & Data Science</span>
                  {' '}program from M.A.M College of Engineering, Class of 2025, with an impressive 8.0 GPA.
                </p>


                <p className="text-lg leading-relaxed"> {/* Reduced font size */}
                  My journey revolves around building
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 font-bold"> game-changing applications</span>
                  {' '}that seamlessly blend cutting-edge technology with exceptional user experiences.
                  I believe in creating digital solutions that don't just work—they inspire.
                </p>
              </div>
            </div>


            <div className="grid grid-cols-2 gap-4"> {/* Reduced gap */}
              {[
                { icon: <Code className="text-3xl" />, title: "Full-Stack Mastery", desc: "React, Node.js, Express", color: "from-blue-500 to-purple-600" },
                { icon: <Brain className="text-3xl" />, title: "AI/ML Innovation", desc: "Python, TensorFlow, CNN", color: "from-purple-500 to-pink-600" },
                { icon: <Database className="text-3xl" />, title: "Database Wizardry", desc: "MySQL, Data Architecture", color: "from-green-500 to-emerald-600" },
                { icon: <TrendingUp className="text-3xl" />, title: "Analytics Pro", desc: "Power BI, Data Visualization", color: "from-yellow-500 to-orange-600" },
                { icon: <GraduationCap className="text-3xl" />, title: "Education Excellence", desc: "B.Tech AI & Data Science,⭐ GPA: 8.0", color: " from-pink-500/20 to-purple-500/20" },
                { icon: <Rocket className="text-3xl" />, title: "Specialty Focus", desc: "Full-Stack Magic,🚀 AI/ML Integration", color: " from-cyan-500/20 to-blue-500/20 backdrop-blur-xl" }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-gradient-to-br ${item.color}/20 backdrop-blur-xl rounded-xl border border-white/20 hover:scale-110 hover:rotate-3 transition-all duration-500 shadow-2xl`} /* Reduced padding and roundedness */
                >
                  <div className="text-white mb-3 group-hover:animate-pulse">{item.icon}</div> {/* Reduced margin */}
                  <h4 className="font-bold text-base mb-2 text-white">{item.title}</h4> {/* Reduced font size and margin */}
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative"> {/* Reduced padding */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"> {/* Reduced margin */}
            <h2 className="text-4xl lg:text-6xl font-black mb-6"> {/* Reduced font size */}
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">Superpowers</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 mx-auto rounded-full mb-6"></div> {/* Reduced size */}
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"> {/* Reduced font size */}
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6"> {/* Reduced gap */}
            {skills.map((skillCategory, index) => (
              <div key={index} className="group">
                <div className={`relative p-6 bg-gradient-to-br ${skillCategory.bgColor} backdrop-blur-xl rounded-2xl border border-white/20 hover:scale-105 transition-all duration-700 shadow-2xl hover:shadow-3xl`}> {/* Reduced padding and roundedness */}
                  {/* Glowing Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${skillCategory.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div> {/* Reduced roundedness */}

                  <div className="relative">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${skillCategory.color} rounded-xl flex items-center justify-center text-white shadow-2xl group-hover:animate-pulse`}> {/* Reduced size and roundedness */}
                      {skillCategory.icon}
                    </div>

                    <h3 className="text-xl font-black text-center mb-8 text-white"> {/* Reduced font size and margin */}
                      {skillCategory.category}
                    </h3>

                    <div className="space-y-4"> {/* Reduced space */}
                      {skillCategory.techs.map((tech, techIndex) => (
                        <div key={techIndex} className="group/tech">
                          <div className="flex items-center gap-3 mb-2"> {/* Reduced gap and margin */}
                            <div className="text-xl text-white/80 group-hover/tech:text-white transition-colors"> {/* Reduced font size */}
                              {tech.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-1.5"> {/* Reduced margin */}
                                <span className="text-white font-semibold text-sm">{tech.name}</span> {/* Reduced font size */}
                                <span className="text-xs font-bold text-yellow-400">{tech.level}%</span> {/* Reduced font size */}
                              </div>
                              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden"> {/* Reduced height */}
                                <div
                                  className={`bg-gradient-to-r ${skillCategory.color} h-2 rounded-full transition-all duration-1000 ease-out shadow-lg`} /* Reduced height */
                                  style={{ width: `${tech.level}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative"> {/* Reduced padding */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"> {/* Reduced margin */}
            <h2 className="text-4xl lg:text-6xl font-black mb-6"> {/* Reduced font size */}
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Projects</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div> {/* Reduced size */}
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"> {/* Reduced font size */}
              Showcasing my latest creations and digital innovations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6"> {/* Reduced gap */}
            {projects.map((project, index) => (
              <div key={index} className="group relative h-full">
                <div className="relative h-full p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-2xl hover:shadow-3xl"> {/* Reduced padding and roundedness */}
                  {/* Glowing effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div> {/* Reduced roundedness */}

                  <div className="relative h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4"> {/* Reduced margin */}
                      <div className={`w-14 h-14 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center shadow-xl group-hover:animate-pulse`}> {/* Reduced size and roundedness */}
                        {project.icon}
                      </div>
                      <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 text-yellow-300 rounded-xl text-xs font-bold"> {/* Reduced padding, roundedness, and font size */}
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-black mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 transition-all duration-300"> {/* Reduced font size and margin */}
                      {project.title}
                    </h3>

                    <p className="text-sm text-purple-300 font-semibold mb-3">{project.date}</p> {/* Reduced font size and margin */}

                    <p className="text-gray-300 mb-4 leading-relaxed flex-grow text-sm"> {/* Reduced margin and font size */}
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6"> {/* Reduced gap and margin */}
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2.5 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 rounded-full text-xs font-semibold"> {/* Reduced padding and font size */}
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-3 border-t border-white/20"> {/* Reduced gap and padding */}
                      <button className="group/btn flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors text-xs font-bold"> {/* Reduced gap and font size */}
                        <Github className="group-hover/btn:animate-spin w-3.5 h-3.5" /> {/* Reduced icon size */}
                        View Code
                      </button>
                      <button className="group/btn flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors text-xs font-bold"> {/* Reduced gap and font size */}
                        <Play className="group-hover/btn:animate-bounce w-3.5 h-3.5" /> {/* Reduced icon size */}
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative"> {/* Reduced padding */}
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16"> {/* Reduced margin */}
            <h2 className="text-4xl lg:text-6xl font-black mb-6"> {/* Reduced font size */}
              Let's Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">Together</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mx-auto rounded-full mb-6"></div> {/* Reduced size */}
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"> {/* Reduced font size */}
              Ready to bring your vision to life? Let's collaborate and build something extraordinary together!
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 mb-10 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6 mb-8">

              {/* Email */}
              <a
                href="mailto:abinayap295@gmail.com"
                className="group text-center block hover:scale-105 transition-all duration-300"
                aria-label="Email"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-xl group-hover:animate-bounce">
                  <Mail className="text-2xl text-white" />
                </div>
                <h4 className="font-black text-lg mb-2 text-white">Email Magic</h4>
                <p className="text-gray-300 font-semibold text-sm">abinayap295@gmail.com</p>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abinaya-p-a8b485225"
                className="group text-center block hover:scale-105 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-xl group-hover:animate-bounce">
                  <Linkedin className="text-2xl text-white" />
                </div>
                <h4 className="font-black text-lg mb-2 text-white">Professional Network</h4>
                <p className="text-gray-300 font-semibold text-sm">Let's connect & collaborate</p>
              </a>

              {/* GitHub */}
              <a

                href="https://github.com/Ab1n0y0"
                className="group text-center block hover:scale-105 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center shadow-xl group-hover:animate-bounce">
                  <Github className="text-2xl text-white" />
                </div>
                <h4 className="font-black text-lg mb-2 text-white">Code Repository</h4>
                <p className="text-gray-300 font-semibold text-sm">Explore my projects & contributions</p>
              </a>

            </div>
          </div>


          <a
            href="mailto:abinayap295@gmail.com"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 px-8 py-4 rounded-xl font-black text-lg transition-all duration-300 hover:scale-110 hover:rotate-1 shadow-2xl shadow-purple-500/50" /* Reduced padding, roundedness, and font size */
          >
            <Sparkles className="group-hover:animate-spin w-4 h-4" /> {/* Reduced icon size */}
            Start Our Journey Together
            <ArrowRight className="group-hover:translate-x-2 transition-transform w-4 h-4" /> {/* Reduced icon size */}
          </a>
           {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-purple-500/20">
            <div className="px-4 pt-2 pb-2 space-y-1">
              {/* ... existing navigation items ... */}
              {/* Data Analyst and AI & ML Engineer buttons for mobile menu */}
              <Link
                to="/data-analyst"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 px-8 py-4 rounded-xl font-black text-lg transition-all duration-300 hover:scale-110 hover:rotate-1 shadow-2xl shadow-purple-500/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Data Analyst
              </Link>
              <Link
                to="/aiml"
                className="block px-3 py-1.5 text-base font-medium text-white hover:text-white hover:bg-purple-500/20 rounded-md transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                AI & ML Engineer
              </Link>
            </div>
          </div>
        )}
        {/* Added Data Analyst and AI & ML Engineer buttons here, below the primary action buttons */}
        <div className="flex sm:flex-row gap-4 justify-center pt-4">
         <div><Link
            to="/data-analyst"
            className="px-10 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <BarChart3 className="w-8 h-4" /> Data Analyst
          </Link>
          </div>
          <div>
          <Link
            to="/aiml"
            className="px-10 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <Brain className="w-8 h-4" /> AI & ML Engineer
          </Link>
          </div>
        </div>
      </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-gradient-to-r from-slate-900 to-purple-900 border-t border-purple-500/30 relative overflow-hidden"> {/* Reduced padding */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex justify-center items-center gap-2 mb-3"> {/* Reduced gap and margin */}
            <Coffee className="text-yellow-400 w-4 h-4" /> {/* Reduced icon size */}
            <span className="text-gray-300 font-semibold text-sm"> {/* Reduced font size */}
              © 2025 Abinaya P. Crafted with
            </span>
            <Heart className="text-red-400 animate-pulse w-4 h-4" /> {/* Reduced icon size */}
            <span className="text-gray-300 font-semibold text-sm"> {/* Reduced font size */}
              and lots of React.js magic ✨
            </span>
          </div>
          <p className="text-xs text-gray-400"> {/* Reduced font size */}==
            "Code is poetry written in logic" 🚀
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Portfolio;