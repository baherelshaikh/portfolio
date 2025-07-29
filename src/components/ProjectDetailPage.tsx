// import React from 'react';
import { 
  ArrowLeft, 
  Crown, 
  Star, 
  Calendar, 
  // Users, 
  Target, 
  Code, 
  Database, 
  Shield, 
  Zap, 
  Brain, 
  CheckCircle, 
  ExternalLink, 
  Github, 
  Award, 
  Sparkles,
  // Monitor,
  Server,
  // Lock,
  Blocks,
  // Globe,
  // Smartphone,
  Cloud,
  Settings,
  FileText,
  Download,
  Layers,
  RefreshCcw
} from 'lucide-react';

interface ProjectDetailPageProps {
  onBack: () => void;
}

export function ProjectDetailPage({ onBack }: ProjectDetailPageProps) {
  const projectFeatures = [
    {
      icon: Shield,
      title: 'Security Architecture',
      description: 'Robust multi-layered security designed to ensure data protection, privacy, and system integrity',
      details: [
        'JWT Authentication with Refresh Token Rotation',
        'Advanced RBAC with hierarchical permissions',
        'Bcrypt password hashing with adaptive cost parameters',
        'Distributed rate limiting with Redis clustering',
        'Input Validation & Sanitization',
        'Error Handling & Data Exposure Prevention',
        'Comprehensive security audit logging and monitoring'
      ]
    },
    {
      icon: Database,
      title: 'Scalable Database Strategy',
      description: 'Multi-database architecture combining relational and NoSQL databases, optimized for consistency, performance, and maintainability.',
      details: [
        'PostgreSQL for structured transactional data',
        'MongoDB (ODM) for flexible document-based data',
        'Separation of concerns between relational and document storage',
        'Advanced indexing strategies and query optimization',
        'Connection pooling with pg and automatic retry strategies',
        'Daily backups and database failover handling',
        'PostgreSQL Driver (pg) and Mongoose ODM for clean, maintainable access layers'
      ]
    },
    {
      icon: Zap,
      title: 'Real-time Communication and Notification System',
      description: 'Efficient real-time notification system for reliable user engagement and timely updates.',
      details: [
        'RabbitMQ for reliable message queuing between services',
        'Firebase Cloud Messaging (FCM) for push notifications to mobile devices',
        'Node.js Event-Driven Architecture for efficient async processing',
        'Worker Threads for offloading heavy tasks like file uploads (images)',
        'Cron Jobs for scheduled notifications',
        'Decoupled architecture with RabbitMQ to ensure reliable and scalable delivery of notifications'
      ]
    },
    {
      icon: Server,
      title: 'Scalable Modular Architecture',
      description: 'Monolithic architecture with clean separation of concerns and scalability in mind.',
      details: [
        'Well-defined Controller, Service, and Repository layers',
        'Clear separation between business logic, API handling, and database access',
        'Supports both SQL (PostgreSQL) and NoSQL (MongoDB)',
        'Integration with RabbitMQ for background processing',
        'Node-cron for scheduled tasks like notifications',
        'Structured for future migration to microservices if required'
      ]
    },
    {
      icon: Layers,
      title: 'Layered System Design',
      description: 'Each layer handles its own responsibility to ensure maintainability and scalability.',
      details: [
        'Controller Layer: Handles HTTP requests, input validation, and response formatting',
        'Service Layer: Encapsulates business logic, security checks, and coordinates data flow',
        'Repository Layer: Manages PostgreSQL and MongoDB interactions using drivers and ODM',
        'Centralized Error Handling with custom exceptions',
        'Cross-cutting concerns like security, validation, and logging implemented at the service level'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Infrastructure',
      description: 'Distributed and reliable infrastructure leveraging modern cloud platforms to ensure scalability, availability, and performance.',
      details: [
        'Railway and Koyeb for backend service deployment and scalability',
        'Primary Database managed by Nhost (PostgreSQL) for transactional data and real-time GraphQL operations',
        'Backup Database on Neon PostgreSQL for high availability and disaster recovery',
        'MongoDB Atlas as a NoSQL database for flexibility in document storage and specialized analytics',
        'Cloudinary integration for optimized media storage, transformations, and delivery',
        'Environment-based configurations using dotenv for secure and flexible deployments',
        'Monitoring and observability through Railway and Koyeb dashboards for performance tracking'
      ]
    },
    {
      icon: Blocks,
      title: 'Object-Oriented Architecture & Design Patterns',
      description: 'Clean, maintainable, and extensible backend structure following OOP principles and widely recognized design patterns.',
      details: [
        'Layered architecture: Controller, Service, Repository separation',
        'Encapsulation for modular and testable services',
        'Abstraction through interfaces and service factories',
        'Singleton pattern for Database and Queue managers',
        'Factory pattern for dynamic service resolution',
        'Dependency injection principles for scalability and testability',
        'Clear Domain-Driven Design (DDD) principles for business logic isolation'
      ]
    },
    {
      icon: RefreshCcw,
      title: 'Resilience & Recovery',
      description: 'Ensures the system can handle failures gracefully and maintain stability during disruptions',
      details: [
        'Automatic Database Reconnection on Failure',
        'Primary & Backup PostgreSQL Dual Persistence',
        'Retry Logic for Critical Database Operations',
        'Graceful Shutdown Handling'
      ]
    }
  ];
  const technicalSpecs = [
  { category: 'Backend Core', technologies: ['Node.js', 'Express.js'] },
  { category: 'Architecture & Patterns', technologies: ['Modular Monolith', 'OOP', 'Singleton', 'Factory', 'Dependency Injection'] },
  { category: 'Databases', technologies: ['PostgreSQL', 'MongoDB', 'Dual Persistence', 'Database Replication'] },
  { category: 'Message Queues', technologies: ['RabbitMQ'] },
  { category: 'Security', technologies: ['JWT', 'Rate Limiting', 'Helmet.js', 'Input Validation'] },
  { category: 'Cloud & Deployment', technologies: ['Railway', 'Koyeb', 'Nhost', 'Neon', 'MongoDB Cluster', 'Blue-Green Deployment'] },
  { category: 'Infrastructure & Networking', technologies: ['Express-based API Gateway', 'Load Balancer'] },
  { category: 'DevOps & Testing', technologies: ['CI/CD (GitHub Actions)', 'Postman', 'Dotenv for Config'] }
];

  const projectMetrics = [
    { label: 'Backend Code', value: '5,500+', icon: Code },
    { label: 'API Endpoints', value: '75+', icon: Server },
    { label: 'Database Tables', value: '10', icon: Database },
    { label: 'Test Coverage', value: '98%', icon: CheckCircle },
    { label: 'Concurrent Users', value: '50K+', icon: Zap },
    { label: 'Security Rating', value: 'A+', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center text-white/90 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </button>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-4">
                <Crown className="h-10 w-10 mr-4 animate-pulse" />
                <h1 className="text-4xl md:text-5xl font-bold">Graduation Project</h1>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Scalable Backend Infrastructure</h2>
              <p className="text-xl text-white/90 max-w-3xl">
                This project delivers a scalable backend using a modular, layered architecture with Node.js, PostgreSQL, MongoDB, 
                and RabbitMQ, designed for real-time performance and fault tolerance. It ensures high maintainability and separation of concerns. The system uses dual databases (Nhost & Neon), 
                DB replication, and a resilient deployment setup across Railway, Koyeb, and Nhost with blue-green deployment. 
                Strong security, and production-ready infrastructure reinforce reliability.
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Star className="h-8 w-8 fill-current" />
              <Star className="h-8 w-8 fill-current" />
              <Star className="h-8 w-8 fill-current" />
              <Star className="h-8 w-8 fill-current" />
              <Star className="h-8 w-8 fill-current" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Overview */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-xl border border-amber-200">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-800 mb-2">Duration</h3>
              <p className="text-amber-700">8 Months (2024-2025)</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-800 mb-2">Grade</h3>
              <p className="text-amber-700 text-2xl font-bold">A+ (Backend Excellence)</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-800 mb-2">Role</h3>
              <p className="text-amber-700">Lead Backend Engineer</p>
            </div>
          </div>
        </div>

        {/* Project Metrics */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {projectMetrics.map((metric, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <metric.icon className="h-8 w-8 text-amber-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-amber-800 mb-1">{metric.value}</div>
              <div className="text-sm text-amber-700">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-xl border border-amber-200">
          <h3 className="text-2xl font-bold text-amber-800 mb-8 flex items-center">
            <Settings className="h-8 w-8 mr-3" />
            Technical Specifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h4 className="text-lg font-bold text-amber-800 mb-4">{spec.category}</h4>
                <div className="space-y-2">
                  {spec.technologies.map((tech, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                      <span className="text-amber-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Features */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-amber-800 mb-8 text-center flex items-center justify-center">
            <Sparkles className="h-8 w-8 mr-3" />
            Detailed Features & Implementation
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projectFeatures.map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-full mr-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-amber-800">{feature.title}</h4>
                </div>
                <p className="text-amber-700 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-3">
                  {feature.details.map((detail, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Architecture */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-xl border border-amber-200">
          <h3 className="text-2xl font-bold text-amber-800 mb-8 flex items-center">
            <Brain className="h-8 w-8 mr-3" />
            Backend System Architecture
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Server className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-lg font-bold text-amber-800 mb-2">API Gateway</h4>
              <p className="text-amber-700 text-sm">Express-based gateway handling routing, Load balancing, JWT auth, and rate limiting</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Code className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-lg font-bold text-amber-800 mb-2">Application Core</h4>
              <p className="text-amber-700 text-sm">Modular monolith architecture using OOP and design patterns for scalabilityt</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Database className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-lg font-bold text-amber-800 mb-2">Data Layer</h4>
              <p className="text-amber-700 text-sm">PostgreSQL with backup replication, dual persistence, and RabbitMQ for async tasks</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="mailto:bahergamalelshaikh@gmail.com"
            className="group bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
          >
            <Github className="h-6 w-6 mr-2" />
            Source Code Available Upon Request
          </a>
          <a
            href="https://drive.google.com/file/d/1DnSAwbnBmMAAh3JfyP4iQlnFJDoRr-BL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/80 backdrop-blur-sm text-amber-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center border-2 border-amber-300 hover:border-amber-400"          >
            <FileText className="h-6 w-6 mr-2" />
            View Documentation
            <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}