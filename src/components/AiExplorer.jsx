import React, { useState, useEffect } from 'react';
import { Brain, Code, Database, GitBranch, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ChevronDown, Cpu, Zap, BookOpen, Award, Users, Calendar } from 'lucide-react';

const AIMLPortfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animated background particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 2 + 1,
  }));

  const skills = [
    { name: 'Python', level: 95, icon: '🐍' },
    { name: 'Machine Learning', level: 90, icon: '🤖' },
    { name: 'Deep Learning', level: 85, icon: '🧠' },
    { name: 'TensorFlow', level: 88, icon: '📊' },
    { name: 'PyTorch', level: 82, icon: '🔥' },
    { name: 'Computer Vision', level: 80, icon: '👁️' },
    { name: 'NLP', level: 85, icon: '💬' },
    { name: 'Data Science', level: 92, icon: '📈' },
    { name: 'React.js', level: 88, icon: '⚛️' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Express.js', level: 83, icon: '🚀' },
    { name: 'MySQL', level: 80, icon: '🗄️' }
  ];

  const projects = [
    {
      title: "Neural Style Transfer",
      description: "Deep learning model that applies artistic styles to images using CNN architecture",
      tech: ["Python", "TensorFlow", "OpenCV", "NumPy"],
      image: "🎨",
      github: "#",
      demo: "#"
    },
    {
      title: "Sentiment Analysis API",
      description: "Real-time sentiment analysis using BERT and deployed with Express.js backend",
      tech: ["Python", "BERT", "Express.js", "MySQL", "React"],
      image: "💭",
      github: "#",
      demo: "#"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Full-stack application for predictive modeling with interactive visualizations",
      tech: ["React", "Node.js", "Scikit-learn", "D3.js"],
      image: "📊",
      github: "#",
      demo: "#"
    },
    {
      title: "Computer Vision Object Detection",
      description: "Real-time object detection system using YOLO and OpenCV",
      tech: ["Python", "YOLO", "OpenCV", "Flask"],
      image: "🔍",
      github: "#",
      demo: "#"
    }
  ];

  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "TechCorp Solutions",
      period: "2023 - Present",
      description: "Developed and deployed machine learning models for production systems, improving accuracy by 25%",
      achievements: ["Built recommendation systems", "Optimized ML pipelines", "Led AI research initiatives"]
    },
    {
      title: "Full Stack Developer",
      company: "Innovation Labs",
      period: "2022 - 2023",
      description: "Created full-stack applications with AI integration using React, Node.js, and Python",
      achievements: ["Integrated ML models into web apps", "Designed RESTful APIs", "Managed MySQL databases"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent)] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,200,255,0.3),transparent)] animate-pulse delay-2000"></div>
        
        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-70 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.id * 0.1}s`,
              animationDuration: `${particle.speed + 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Explorer
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              {['Hero', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI & ML
                </span>
                <br />
                <span className="text-white">Explorer</span>
              </h1>
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-cyan-400/30 rounded-full animate-spin"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-purple-400/30 rounded-full animate-bounce"></div>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Passionate about building intelligent systems that transform data into insights. 
              Specialized in machine learning, deep learning, and full-stack development.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-400 flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-400 flex items-center">
                <Code className="w-4 h-4 mr-2" />
                Full Stack
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-400/30 rounded-full text-green-400 flex items-center">
                <Database className="w-4 h-4 mr-2" />
                Data Science
              </span>
            </div>
            
            <div className="flex space-x-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                View Projects
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Download Resume
              </button>
            </div>
          </div>
          
          {/* AI Avatar Placeholder */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center border-4 border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
                {/* Replace this with your AI-styled photo */}
                <div className="w-72 h-72 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-6xl border-4 border-purple-400/30">
                  🤖
                </div>
              </div>
              <div className="absolute top-10 right-10 w-6 h-6 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-10 left-10 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-4 w-8 h-8 border-2 border-cyan-400 rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
            <p className="text-xl text-gray-300">Technologies and frameworks I work with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-black/20 backdrop-blur-lg border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Projects Showcase
            </h2>
            <p className="text-xl text-gray-300">Innovative solutions powered by artificial intelligence</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="bg-black/20 backdrop-blur-lg border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group">
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    <a href={project.demo} className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-300">Building the future with AI and technology</p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="bg-black/20 backdrop-blur-lg border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-1">{exp.title}</h3>
                    <p className="text-lg text-purple-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-400">
                      <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300">Ready to collaborate on the next AI breakthrough?</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black/20 backdrop-blur-lg border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">your.email@example.com</p>
            </div>
            <div className="bg-black/20 backdrop-blur-lg border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div className="bg-black/20 backdrop-blur-lg border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Bengaluru, India</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-cyan-500/20 bg-black/20 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 AI Explorer. Built with React, powered by passion for AI & ML.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AIMLPortfolio;