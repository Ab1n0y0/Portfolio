import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Database,
  Brain,
  TrendingUp,
  Code,
  Award,
  Briefcase,
  GraduationCap,
  ChevronRight,
  ExternalLink,
  Download,
  Star,
  Target,
  Zap
} from 'lucide-react';

const DataAnalystPortfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Sample data for charts
  const skillsData = [
    { name: 'Python', value: 95 },
    { name: 'SQL', value: 90 },
    { name: 'Machine Learning', value: 88 },
    { name: 'Power BI', value: 85 },
    { name: 'Data Visualization', value: 92 },
    { name: 'Statistics', value: 87 }
  ];

  const projectMetrics = [
    { name: 'Customer Churn', accuracy: 94, impact: 'High' },
    { name: 'Fraud Detection', accuracy: 88, impact: 'Critical' },
    { name: 'Medical Diagnosis', accuracy: 93, impact: 'High' },
    { name: 'Image Classification', accuracy: 93, impact: 'Medium' }
  ];

  const techStack = [
    { category: 'Languages', items: ['Python', 'SQL', 'R', 'JavaScript'] },
    { category: 'ML Libraries', items: ['TensorFlow', 'Scikit-Learn', 'Pandas', 'NumPy'] },
    { category: 'Visualization', items: ['Power BI', 'Matplotlib', 'Tableau', 'D3.js'] },
    { category: 'Big Data', items: ['Hadoop', 'AWS', 'Azure', 'ETL'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Abinaya P
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <User size={60} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Abinaya P
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-6">
              Data Scientist | Machine Learning Engineer | AI Specialist
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transforming complex data into actionable insights through advanced analytics, 
              machine learning, and AI-powered solutions. Specialized in predictive modeling, 
              deep learning, and business intelligence.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
              <Mail size={18} className="text-blue-400" />
              <span className="text-sm">abinayap295@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
              <Phone size={18} className="text-blue-400" />
              <span className="text-sm">+91 9840686360</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
              <MapPin size={18} className="text-blue-400" />
              <span className="text-sm">Perambalur, Tamil Nadu</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <Download size={18} />
              <span>Download Resume</span>
            </button>
            <button className="border border-blue-500 hover:bg-blue-500/20 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Data Scientist and AI/ML Engineer with expertise in developing 
                intelligent solutions that drive business value. With hands-on experience in 
                machine learning algorithms, deep learning, and big data analytics, I specialize 
                in transforming raw data into strategic insights.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                My journey includes working on cutting-edge projects ranging from medical image 
                analysis to customer churn prediction, leveraging advanced AI techniques to solve 
                complex real-world problems.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-2">8.0</div>
                  <div className="text-sm text-gray-400">GPA Score</div>
                </div>
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <div className="text-3xl font-bold text-green-400 mb-2">94%</div>
                  <div className="text-sm text-gray-400">Model Accuracy</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Core Competencies</h3>
              {skillsData.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-blue-400">{skill.value}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {/* VDart Inc */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2">Data Analytics Intern</h3>
                  <p className="text-xl text-gray-300">VDart Inc.</p>
                  <p className="text-gray-400">July - August 2024</p>
                </div>
                <Briefcase className="text-blue-400" size={32} />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                  <p className="text-gray-300">Spearheaded data analytics projects including customer churn prediction and YouTube content optimization using Random Forest and Logistic Regression algorithms</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                  <p className="text-gray-300">Extracted and analyzed YouTube channel data using YouTube Data API, creating interactive Power BI dashboards with automated refresh capabilities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                  <p className="text-gray-300">Deployed scalable cloud-based solutions using AWS services (EC2, S3, Lambda), enhancing infrastructure efficiency by 25%</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                  <p className="text-gray-300">Conducted ETL processes with Python and SQL to transform large datasets, improving process efficiency and reducing costs</p>
                </div>
              </div>
            </div>

            {/* Infilabs */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2">AI & ML Intern</h3>
                  <p className="text-xl text-gray-300">Infilabs</p>
                  <p className="text-gray-400">June - July 2023</p>
                </div>
                <Brain className="text-blue-400" size={32} />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                  <p className="text-gray-300">Developed CNN-based disease diagnosis systems using Grad-CAM for medical image analysis, improving accuracy in detecting abnormalities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                  <p className="text-gray-300">Preprocessed and normalized medical image datasets ensuring high data quality for model training</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                  <p className="text-gray-300">Collaborated with multidisciplinary teams on disease diagnosis, drug discovery, and healthcare analytics projects</p>
                </div>
              </div>
            </div>

            {/* TATA Groups */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2">Data Science Virtual Intern</h3>
                  <p className="text-xl text-gray-300">TATA Groups</p>
                  <p className="text-gray-400">July 2023</p>
                </div>
                <Database className="text-blue-400" size={32} />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                  <p className="text-gray-300">Implemented data virtualization solutions, integrating data from multiple sources for unified enterprise data view</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                  <p className="text-gray-300">Managed and optimized virtual data layers ensuring efficient data retrieval and high performance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                  <p className="text-gray-300">Ensured data governance and security compliance, collaborating on quality standards and policies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Customer Churn Prediction */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="text-blue-400" size={32} />
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">94% Accuracy</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Customer Churn Prediction</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Developed machine learning models using Random Forest and Logistic Regression to predict customer churn with IBM Telecommunication dataset. Implemented data preprocessing, feature engineering, and provided actionable retention strategies.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">Scikit-Learn</span>
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">Random Forest</span>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                <ExternalLink size={16} />
                <span>View Project</span>
              </button>
            </div>

            {/* Medical Image Analysis */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <Brain className="text-purple-400" size={32} />
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">AI Powered</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">HealthTech: AI Medical Solutions</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Developed CNN models for medical imaging analysis using transfer learning and Grad-CAM visualizations. Enhanced disease diagnosis accuracy for X-rays, MRIs, and CT scans through advanced AI techniques.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">TensorFlow</span>
                <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs">CNN</span>
                <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs">Grad-CAM</span>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                <ExternalLink size={16} />
                <span>View Project</span>
              </button>
            </div>

            {/* YouTube Analytics */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <Database className="text-red-400" size={32} />
                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">Real-time</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-red-400">YouTube Data Analytics</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Extracted and analyzed YouTube channel data using YouTube Data API. Created interactive Power BI dashboards with automated refresh capabilities for real-time content performance tracking.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs">YouTube API</span>
                <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs">Power BI</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">Python</span>
              </div>
              <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                <ExternalLink size={16} />
                <span>View Project</span>
              </button>
            </div>

            {/* Fraud Detection */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <Target className="text-yellow-400" size={32} />
                <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">88% Precision</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">Fraud Transaction Detection</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Built ML models for detecting fraudulent transactions using Logistic Regression and Isolation Forest. Achieved 17.3% improvement in precision and reduced false positives significantly.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs">Logistic Regression</span>
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">Isolation Forest</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">Anomaly Detection</span>
              </div>
              <button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                <ExternalLink size={16} />
                <span>View Project</span>
              </button>
            </div>

            {/* Image Classification */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <Zap className="text-green-400" size={32} />
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">93% Accuracy</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">CIFAR-10 Image Classification</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Implemented deep learning CNN models for image classification using CIFAR-10 dataset. Achieved 93% accuracy with advanced preprocessing, data augmentation, and visualization techniques.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">CNN</span>
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">VGG</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">TensorFlow</span>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                <ExternalLink size={16} />
                <span>View Project</span>
              </button>
            </div>

            {/* Diabetes Prediction */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <Star className="text-cyan-400" size={32} />
                <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs">85% Accuracy</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Diabetes Prediction Model</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Developed predictive models for diabetes diagnosis using SVM algorithms. Identified key factors like BMI and glucose levels, creating user-friendly interfaces for healthcare professionals.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">SVM</span>
                <span className="bg-pink-500/20 text-pink-300 px-2 py-1 rounded text-xs">Healthcare</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">Predictive Analytics</span>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                <ExternalLink size={16} />
                <span>View Project</span>
              </button>
            </div>
          </div>

          {/* Project Metrics Chart */}
          <div className="mt-16 bg-slate-800/50 rounded-xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-400">Project Performance Metrics</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectMetrics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #3B82F6',
                      borderRadius: '8px',
                      color: '#F3F4F6'
                    }} 
                  />
                  <Bar dataKey="accuracy" fill="url(#colorGradient)" />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {techStack.map((category, index) => (
              <div key={category.category} className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={item} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Visualization */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Skill Proficiency</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={skillsData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis type="number" domain={[0, 100]} stroke="#9CA3AF" />
                    <YAxis dataKey="name" type="category" stroke="#9CA3AF" width={100} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #3B82F6',
                        borderRadius: '8px',
                        color: '#F3F4F6'
                      }} 
                    />
                    <Bar dataKey="value" fill="url(#skillGradient)" />
                    <defs>
                      <linearGradient id="skillGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.8}/>
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Certification & Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-slate-700/50 rounded-lg">
                  <Award className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">AWS Solutions Architecture</h4>
                    <p className="text-gray-400 text-sm">Virtual Experience Program - Forage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-slate-700/50 rounded-lg">
                  <Award className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Power BI Certification</h4>
                    <p className="text-gray-400 text-sm">PWC Virtual Experience - Forage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-slate-700/50 rounded-lg">
                  <Award className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Full Stack Development</h4>
                    <p className="text-gray-400 text-sm">TNSIF C2TC Program</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-slate-700/50 rounded-lg">
                  <Award className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Best PPT Presentation</h4>
                    <p className="text-gray-400 text-sm">M.A.M College of Engineering</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-slate-700/50 rounded-lg">
                  <Award className="text-red-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">Data Science Workshop</h4>
                    <p className="text-gray-400 text-sm">Machine Learning Using R Language</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-blue-500/20">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <GraduationCap className="text-blue-400" size={40} />
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-400">Bachelor of Technology</h3>
                    <p className="text-xl text-gray-300">Artificial Intelligence & Data Science</p>
                    <p className="text-gray-400">M.A.M College of Engineering, Trichy</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-400">8.0/10</div>
                  <div className="text-gray-400">GPA</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Duration</h4>
                  <p className="text-gray-300">July 2021 - April 2025</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Subjects</h4>
                  <div className="text-gray-300 text-sm space-y-1">
                    <p>• Machine Learning & Deep Learning</p>
                    <p>• Data Structures & Algorithms</p>
                    <p>• Statistics & Probability</p>
                    <p>• Neural Networks & AI</p>
                    <p>• Big Data Analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in data science and AI. Let's connect and explore how 
                we can work together to solve complex problems with data-driven solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-xl border border-blue-500/20">
                  <Mail className="text-blue-400" size={32} />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-400">abinayap295@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-xl border border-blue-500/20">
                  <Phone className="text-green-400" size={32} />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-400">+91 9840686360</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-xl border border-blue-500/20">
                  <MapPin className="text-red-400" size={32} />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-gray-400">Perambalur, Tamil Nadu, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-xl border border-blue-500/20">
                  <Linkedin className="text-blue-500" size={32} />
                  <div>
                    <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                    <p className="text-gray-400">linkedin.com/in/abinaya-p-a8b485225</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Send Message</h3>
                <form className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-slate-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full bg-slate-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Subject"
                      className="w-full bg-slate-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      rows="5" 
                      placeholder="Your Message"
                      className="w-full bg-slate-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail size={18} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Abinaya P
            </div>
            <p className="text-gray-400 mb-6">
              Data Scientist | AI/ML Engineer | Transforming Data into Insights
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={24} />
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </button>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-500 text-sm">
                © 2024 Abinaya P. All rights reserved. Built with passion for data science and innovation.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DataAnalystPortfolio;