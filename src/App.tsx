import { useState, useEffect } from 'react';
import { GraduationProject } from './components/GraduationProject';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { 
  Code, 
  Database, 
  Server, 
  // Cloud, 
  // Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  ChevronDown,
  Monitor,
  Zap,
  Shield,
  Users,
  Calendar,
  MapPin,
  GraduationCap,
  Award,
  FileText,
  BarChart3,
  Lock,
  Cpu,
  LayoutDashboard, 
  HardDrive, Network, 
  Brain, 
  MemoryStick,
  Settings, 
  Bot, 
  Sigma, 
  Trophy,
  BadgeCheck,
  Verified,
  CheckCircle,
  Check
} from 'lucide-react';
import { link, title } from 'framer-motion/client';
// import { SiMicrosoft } from "react-icons/si";
import { BsMicrosoft, BsGoogle } from 'react-icons/bs';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProjectDetail, setShowProjectDetail] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleViewDetails = () => {
    setShowProjectDetail(true);
    // Scroll to top when showing project details
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    setShowProjectDetail(false);
    // Scroll to top when returning to portfolio
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = [
    { name: 'Node.js', icon: Server, level: 95 },
    { name: 'Express.js', icon: Zap, level: 90 },
    { name: 'JavaScript', icon: Code, level: 95 },
    { name: 'Python', icon: Code, level: 80 },
    { name: 'Java', icon: Code, level: 85 },
    { name: 'C++', icon: Code, level: 85 },
    { name: 'SQL Databases', icon: Database, level: 88 },
    { name: 'NoSQL Databases', icon: Database, level: 85 },
    { name: 'Git/GitHub', icon: Github, level: 90 },
    { name: 'HTML/CSS', icon: Monitor, level: 90 },
    { name: 'System Design', icon: Shield, level: 85 },
    { name: 'Computer Architecture and Organization', icon: Cpu, level: 75 },
    { name: 'Operating Systems', icon: HardDrive, level: 75 },
    { name: 'Computer Networks', icon: Network, level: 75 },
    { name: 'Algorithms & Data Structures', icon: Brain, level: 90 },
    { name: 'Digital Logic Design', icon: LayoutDashboard, level: 75 },
    { name: 'Memory Management', icon: MemoryStick, level: 90 },
    { name: 'Human-Computer Interaction', icon: Users, level: 70 },
    { name: 'Software Engineering', icon: Settings, level: 85 },
    { name: 'Artificial Intelligence', icon: Bot, level: 70 }, 
    { name: 'Machine Learning', icon: Cpu, level: 70 },
    { name: 'Data Analytics', icon: BarChart3, level: 60 },
    { name: 'Cybersecurity', icon: Lock, level: 68 },
    { name: 'Computation Theory', icon: Sigma, level: 60 } 
  ];

  const projects = [
    {
      title: 'SweetTalkr - Real-Time Chat Application',
      description: 'A scalable, full-stack MVP chat app enabling secure, real-time messaging, and message receipts, built with Node.js/Express backend and Vite frontend, deployed via Docker for seamless cross-platform use.',
      tech: [
      'Node.js',
      'Express.js',
      'Socket.IO',
      'PostgreSQL',
      'pg',
      'JSON Web Token',
      'bcryptjs',
      'Vite',
      'Docker',
      'Docker Compose',
      'Nginx',
      'uuid',
      'cors',
      'dotenv',
      'helmet',
      'express-async-errors',
      'express-rate-limit',
      'express-validator',
      'http-status-codes'
      ],
      features: [
      'Real-Time Text Messaging with Socket.IO',
      'Chats and User Management',
      'Message Receipts (Delivered/Read Statuses)',
      'JWT-Based Authentication and Password Hashing',
      'Custom Error Handling and Security Middleware',
      'PostgreSQL Integration with Scalable Schema',
      'Containerized Deployment for Easy Setup',
      'MVP with Planned Expansions (Voice/Video Calls)'
      ],
      github: 'https://github.com/baherelshaikh/sweettakr',
      demo: '#'
      },
    {
    title: 'Secure RESTful API Backend',
    description:
      'Robust and secure backend system with full CRUD functionality, JWT-based authentication, error handling, and MongoDB integration for managing users, products, reviews, and orders.',
    tech: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'bcrypt',
      'Helmet',
      'Express Validator',
      'CORS',
      'Morgan'
    ],
    features: [
      'User Authentication with JWT',
      'Full CRUD for Users, Products, Reviews, and Orders',
      'Security: Rate Limiting, Helmet, Data Sanitization',
      'Custom Error Handling Middleware',
      'MongoDB Integration with Mongoose',
      'Static File Serving and CORS Support',
      'HTTP Request Logging with Morgan'
    ],
    github: 'https://github.com/baherelshaikh/E-commerce-Back-end',
    demo: '#'
  },
    //  {
    //     title: 'Job Listings API',
    //     description:
    //       'RESTful API for managing job listings with authentication, CRUD operations, and integrated Swagger UI for interactive API documentation and testing.',
    //     tech: [
    //       'Node.js',
    //       'Express.js',
    //       'MongoDB',
    //       'Mongoose',
    //       'JWT',
    //       'bcrypt',
    //       'Helmet',
    //       'Express Validator',
    //       'Express Rate Limit',
    //       'Swagger UI'
    //     ],
    //     features: [
    //       'User Authentication with JWT',
    //       'CRUD Operations for Job Listings',
    //       'Security Middleware (Rate Limiting, Helmet, Validation)',
    //       'Error Handling Middleware',
    //       'Swagger UI for API Documentation and Testing'
    //     ],
    //     github: 'https://github.com/baherelshaikh/Jobs-API', 
    //     demo: '#'
    // },
     {
      title: 'Product Management API',
      description:
        'RESTful API for store product management with advanced filtering, sorting, and pagination. Includes custom error handling and middleware for robust request management.',
      tech: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'dotenv',
        'express-async-errors'
      ],
      features: [
        'CRUD Operations for Products',
        'Advanced Filtering, Sorting, and Pagination',
        'Static Product List Endpoint',
        'Custom 404 and Error Handling Middleware'
      ],
      github: 'https://github.com/baherelshaikh/store-API',
      demo: '#'
     }
  ];

  const experience = [
    {
      title: 'DEPI Technical Project Supervisor',
      company: 'ITC (Information Technology Collage)',
      period: '2024 - Present',
      location: 'Tanta, Egypt',
      achievements: [
        'Support DEPI students across all types of technical projects and programming challenges',
        'Provide expert troubleshooting and debugging assistance for complex software issues',
        'Guide students through best practices in software development and system design',
        'Mentor teams on modern development workflows using Git/GitHub and collaborative tools',
        'Leverage broad programming experience to solve diverse technical problems across multiple languages'
      ]
    },
    {
      title: 'Back-End Engineer',
      company: 'Legend Power',
      period: '2023 - 2024',
      location: 'Remote (Based in KSA)',
      achievements: [
        'Develop and maintain scalable backend systems using Node.js and Express.js',
        'Design and implement secure RESTful APIs with proper authentication and authorization',
        'Optimize database performance for both SQL and NoSQL systems',
        'Implement cybersecurity best practices to ensure application security',
        'Collaborate with cross-functional teams to deliver reliable, high-performance solutions'
      ]
    },
    {
      title: 'Backend Engineer',
      company: 'Freelance & Contract Work',
      period: '2022 - Present',
      location: 'Egypt',
      achievements: [
        'Built Backend applications using modern web technologies and frameworks',
        'Developed secure applications with focus on cybersecurity principles',
        'Adapted quickly to new technologies and frameworks across multiple projects',
        'Delivered projects using agile methodologies and version control best practices'
      ]
    }
  ];

  const education = {
    degree: 'Bachelor of Computer Science',
    institution: 'Tanta University',
    status: 'Graduate – Class of 2025',
    period: '2021 - 2025',
    location: 'Tanta, Egypt', 
    highlights: [
    'Comprehensive curriculum covering Software Engineering, Algorithms, Data Structures, and System Design.',
    'Strong foundation in Object-Oriented Programming (OOP) and problem-solving using languages like Java, C++, or Python.',
    'Exposure to Database Management Systems (DBMS), including SQL (MySQL, PostgreSQL) and NoSQL concepts.',
    'Hands-on experience in Web Development (frontend/backend) and Software Development Life Cycle (SDLC).',
    'Understanding of Operating Systems, Computer Networks, and Cybersecurity fundamentals.',
    'Practical coursework in Artificial Intelligence (AI), Machine Learning (ML), and Data Analysis.',
    'Collaborative projects following Agile methodologies, improving teamwork and project management skills.',
    'Participation in coding competitions, hackathons, or technical workshops to enhance real-world skills.'
  ]
  };

  const certifications = [
    {
      title: "Performance Optimization and Scalability",
      issuer: "Microsoft",
      link: "https://coursera.org/share/8b8bfa67be564fa8a9bb9541d2d18be5",
      icon: BsMicrosoft
    }, 
    {
      title: "Security and Authentication",
      issuer: "Microsoft",
      link: "https://coursera.org/share/55cdd3187a6c03f3449011704211f19c",
      icon: BsMicrosoft
    }, 
    {
      title: "Database Integration and Management",
      issuer: "Microsoft",
      link: "https://coursera.org/share/88c03d5c6d2091af71ea858a9b8ff250",
      icon: BsMicrosoft
    }, 
    {
      title: "Back-End Development with .NET",
      issuer: "Microsoft",
      link: "https://coursera.org/share/89a4573210f3929a2b80b1af4c1f7bd4",
      icon: BsMicrosoft
    }, 
    {
      title: "Introduction to Programming With C#",
      issuer: "Microsoft",
      link: "https://coursera.org/share/a0c54eb6ff536135173c755f112b27af",
      icon: BsMicrosoft
    }, 
    {
      title: "Foundations of Coding Back-End",
      issuer: "Microsoft",
      link: "https://coursera.org/share/73664264074b8b81c1f9ecb0442ca8e9",
      icon: BsMicrosoft
    },
    {
      title: 'Manage Security Risks',
      issuer: 'Google',
      link: 'https://www.coursera.org/account/accomplishments/verify/A4JG6PFUP8JB?utm_product=course',
      icon: BsGoogle
    },
    {
      title: 'Foundations of Cybersecurity',
      issuer: 'Google',
      link: 'https://www.coursera.org/account/accomplishments/verify/KKLKGFKMSKJA?utm_product=course',
      icon: BsGoogle
    },
    {
      title: 'DEPI Business English Certificate',
      issuer: 'DEPI Program',
      link: 'https://drive.google.com/file/d/1-dlHJ3w6Sa6gYFvCRDgbnfq08pxWuYyb/view?usp=drive_link',
      icon: FileText
    },
    {
      title: 'DEPI Data Analyst Specialist Certificate',
      issuer: 'DEPI Program',
      link: 'https://drive.google.com/file/d/1BeAZxfoY4g6nu9X-TtANJ8PkniJcULMQ/view?usp=sharing',
      icon: BarChart3
    },
    {
      title: 'DEPI Team Leader Certificate',
      issuer: 'DEPI Program',
      link: 'https://drive.google.com/file/d/1_AxH780VmGPNZupwXr3XJJs93RVa1MJt/view?usp=sharing',
      icon: Trophy 
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (showProjectDetail) {
    return <ProjectDetailPage onBack={handleBackToPortfolio} />;
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* <Code className="h-8 w-8 text-blue-600" /> */}
              <img className="h-8 w-8 text-blue-400 "
                src="/src/public/icons/favicon.ico"
                alt="Logo"
              />
              <span className="ml-2 text-xl font-bold text-slate-800">Baher El-shaikh</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {['About', 'Skills', 'Graduation Project', 'Projects', 'Experience', 'Education', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {item === 'Graduation Project' ? (
                    <span className="text-yellow-600 font-semibold">
                      🎓 {item}
                    </span>
                  ) : (
                    item
                  )}
                </button>
              ))}
            </div>


            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-600 hover:text-blue-600"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                <span className={`block w-5 h-0.5 bg-current mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-current mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Skills','Graduation Project', 'Projects', 'Experience', 'Education', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md"
                >
                  {item === 'Graduation Project' ? (
                    <span className="text-yellow-600 font-semibold">
                      🎓 {item}
                    </span>
                  ) : (
                    item
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="https://res.cloudinary.com/dnksxzwqx/image/upload/v1751641507/WhatsApp_Image_2025-07-04_at_6.04.28_PM_eazy27.jpg"
                alt="Baher El-shaikh - Professional headshot"
                className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl ring-4 ring-blue-600/10 object-cover"
              />
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
                Baher El-shaikh
              </h1>
              <div className="space-y-2 mb-8">
                <p className="text-xl md:text-2xl text-blue-600 font-semibold">
                  DEPI Technical Project Supervisor @ ITC
                </p>
                <p className="text-lg md:text-xl text-slate-600">
                  Back-End Engineer @ Legend Power
                </p>
                <p className="text-lg text-slate-500">
                  B.Sc. in Computer Science – Tanta University
                </p>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-4 sm:px-0 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-10 leading-loose tracking-wide transition-all duration-300 ease-in-out hover:text-gray-800">
                I focus on blending innovation with precision to build practical solutions. Through hands-on projects and problem-solving, I’ve gained practical experience that helps teams deliver reliable systems and drive real progress. I aim to turn potential into measurable success.              </p>
            </div>
            
            <div className="flex justify-center space-x-4 mb-12">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-slate-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-blue-600"
              >
                View Projects
              </a>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://github.com/baherelshaikh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/bahergamalelshaikh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:bahergamalelshaikh@gmail.com" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16 animate-bounce">
          <ChevronDown className="h-6 w-6 text-slate-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A dedicated software engineer with expertise in backend development, technical mentoring, and Software development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I’m a Back-End Engineer and Technical Project Supervisor at ITC, where I support DEPI (Digital Egypt Pioneers Initiative) students across various projects by helping them debug issues, improve their code, and grow their technical skills.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I specialize in building secure and scalable systems using Node.js, Express, and both SQL and NoSQL databases. I’m also skilled in JavaScript, Java, C++, HTML, and CSS, with a strong foundation in object-oriented programming, data structures, and system design..
              </p>
              <p className="text-slate-600 leading-relaxed">
                My background in data analysis and cybersecurity allows me to create reliable, secure, and insightful applications. I'm confident using Git and GitHub, and I enjoy working in collaborative team environments. I’m driven by solving real-world problems, sharing knowledge, and continuously learning as technology evolves.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Server className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800">Backend Development</h4>
                    <p className="text-sm text-slate-600">Building scalable APIs with Node.js, Express, and modern database systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800">Technical Project Supervision</h4>
                    <p className="text-sm text-slate-600">Supporting DEPI students across all project types and troubleshooting complex bugs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3"> 
                  <Lock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800">Security & Analysis</h4>
                    <p className="text-sm text-slate-600">Implementing cybersecurity best practices and data analysis solutions on my apps.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800">Mentoring & Guidance</h4>
                    <p className="text-sm text-slate-600">Guiding technical work and sharing programming expertise across multiple languages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Technical expertise developed through professional experience, academic study, and continuous learning
            </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-50 border border-slate-100 hover:border-blue-200"
            >
              <skill.icon className="h-6 w-6 text-blue-700 mr-3" />
              <span className="text-lg font-medium text-slate-900">{skill.name}</span>
            </motion.span>
          ))}
        </div>
      </div>
    </section>

      {/* Graduation Projects Section */}
      <section id="graduation project">
        <GraduationProject onViewDetails={handleViewDetails} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A showcase of projects demonstrating my expertise in backend development and technical problem-solving
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-700 mb-2">Key Features:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        className="flex items-center text-sm text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    )}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              My journey in software engineering, technical supervision, and backend development
            </p>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{job.title}</h3>
                    <p className="text-blue-600 font-medium">{job.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <div className="flex items-center text-slate-600 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{job.period}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-slate-700 mb-3">Key Responsibilities & Achievements:</h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-slate-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Education</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Academic foundation supporting my professional development in computer science
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-8 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{education.degree}</h3>
                      <p className="text-blue-600 font-medium">{education.institution}</p>
                      <p className="text-slate-600 text-sm">{education.status}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <div className="flex items-center text-slate-600 mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{education.period}</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{education.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-slate-700 mb-3">Academic Highlights:</h4>
                    <ul className="space-y-2">
                      {education.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-slate-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Certifications</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional certifications demonstrating expertise in various technical domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <cert.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{cert.title}</h3>
                    <div className="flex items-center">
                      <p className="text-slate-600 mb-4">{cert.issuer}</p>
                      {cert.icon === BsMicrosoft || cert.icon === BsGoogle ? (
                        <BadgeCheck className="h-4 w-4 bg-blue-500 text-white rounded-full mb-4 ml-1" />
                      ) : ("")}
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Let's Connect</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              I'm always interested in new opportunities, collaborations, and connecting with fellow developers. 
              Let's discuss how we can work together to solve real-world problems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <a href="mailto:bahergamalelshaikh@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                    bahergamalelshaikh@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 text-blue-600 mr-3" />
                  <a href="https://github.com/baherelshaikh" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
                    github.com/baherelshaikh
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-blue-600 mr-3" />
                  <a href="https://www.linkedin.com/in/bahergamalelshaikh" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
                    linkedin.com/bahergamalelshaikh
                    </a>
                  {/* <span className="text-slate-600">linkedin.com/in/bahergamalelshaikh</span> */}
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-slate-800 mb-4">Open to:</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Full-time backend engineering opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Teaching or instructing roles
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Technical project supervision roles
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Freelance and consulting projects
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Mentoring and knowledge sharing opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Collaborative development projects
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                {isSent ? 'Message Sent!' : 'Send a Message'}
              </h3>

              {isSent ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center space-y-6"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ repeat: 2, duration: 0.5 }}
                  >
                    <div className="text-6xl">✔️</div>
                  </motion.div>
                  <p className="text-slate-700">Thanks for your message! I'll get back to you soon.</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSent(false)}
                    className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <form 
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSending(true);
                    setError(null);
                    
                    try {
                      await emailjs.sendForm(
                        'service_s3g3rdc',   // Replace with your EmailJS service ID
                        'template_i8nrclo',  // Replace with your EmailJS template ID
                        e.currentTarget,
                        'FPDB-4RT3P9txHwjZ'    // Replace with your EmailJS public key
                      );
                      
                      setIsSent(true);
                      (e.target as HTMLFormElement).reset();
                    } catch (err) {
                      setError('Failed to send message. Please try again.'+ err);
                    } finally {
                      setIsSending(false);
                    }
                  }}
                >
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input
                      name="name"
                      type="text"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Name"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your@email.com"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell me about your project or opportunity..."
                      required
                    />
                  </motion.div>

                  <input type="hidden" name="to_email" value="bahergamalelshaikh@gmail.com" />
                  
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm p-2 bg-red-50 rounded-lg"
                    >
                      {error}
                    </motion.div>
                  )}
                  
                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={!isSending ? { scale: 1.02 } : {}}
                    whileTap={!isSending ? { scale: 0.98 } : {}}
                    className={`w-full py-2 px-4 rounded-lg transition-colors ${
                      isSending ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                    } text-white`}
                  >
                    {isSending ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        style={{ display: 'inline-block' }}
                      >
                        ⏳
                      </motion.span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center mb-4">
            {/* <Code className="h-6 w-6 text-blue-400 mr-2" /> */}
            <img className="h-8 w-8 text-blue-400 mr-2"
                src="/src/public/icons/favicon.ico"
                alt="Logo"
              />
            <span className="text-lg font-medium">Baher El-shaikh</span>
          </div>
          <p className="text-slate-400 mb-6">
            Building secure, scalable solutions and empowering the next generation of developers
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/baherelshaikh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/bahergamalelshaikh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:bahergamalelshaikh@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            © 2024 Baher El-shaikh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;