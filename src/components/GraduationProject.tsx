// import React from 'react';
import { 
  Crown, 
  Award, 
  Star, 
  Sparkles, 
  ArrowRight, 
  Calendar,
  Users,
  Code,
  // Database,
  Shield,
  Zap,
  // Brain,
  Target,
  CheckCircle,
  ExternalLink,
  Globe,
  // Server
} from 'lucide-react';

interface GraduationProjectProps {
  onViewDetails: () => void;
}

export function GraduationProject({ onViewDetails }: GraduationProjectProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 via-yellow-400/10 to-orange-400/10"></div>
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-amber-300 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Crown className="h-12 w-12 text-amber-600 mr-4 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Graduation Project
            </h2>
            <Crown className="h-12 w-12 text-amber-600 ml-4 animate-pulse" />
          </div>
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Star className="h-5 w-5 text-amber-500 fill-current" />
            <Star className="h-5 w-5 text-amber-500 fill-current" />
            <Star className="h-5 w-5 text-amber-500 fill-current" />
            <Star className="h-5 w-5 text-amber-500 fill-current" />
            <Star className="h-5 w-5 text-amber-500 fill-current" />
          </div>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto font-medium">
            The culmination of my computer science journey - a comprehensive project showcasing advanced technical skills
          </p>
        </div>

        {/* Main Project Card */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 rounded-2xl blur opacity-30 animate-pulse"></div>
          
          <div className="relative bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 rounded-2xl p-8 md:p-12 shadow-2xl border border-amber-200">
            {/* Project Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-amber-600 mr-3" />
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    Final Year Project
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-800 via-yellow-700 to-orange-700 bg-clip-text text-transparent mb-4">
                  Baby Tracker

                </h3>
                <p className="text-amber-700 text-lg leading-relaxed mb-6">
                    The Child Vaccination Notification System is a mobile app , web system designed to help
                    parents keep track of their children’s vaccinations. Vaccines are important to protect children
                    from dangerous diseases, but many parents forget or miss vaccination dates. This app provides
                    an easy way to manage vaccination schedules and ensure children get their vaccines on time.
                  {/* A full-stack web application featuring a sophisticated backend system built with Node.js and Express.js.  */}
                  {/* As the backend developer, I implemented secure user authentication, comprehensive CRUD operations,  */}
                  {/* real-time communication with Socket.io, and robust database management with MongoDB and Mongoose.  */}
                  {/* The system includes advanced security measures, file upload capabilities, and scalable architecture. */}
                </p>
              </div>
              
              <div className="md:ml-8 mt-4 md:mt-0">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-amber-200 shadow-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Calendar className="h-5 w-5 text-amber-600 mr-2" />
                      <span className="text-amber-700 font-medium">2024 - 2025</span>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-5 w-5 text-amber-600 mr-2" />
                      <span className="text-amber-700 font-medium">Backend Lead</span>
                    </div>
                    <div className="text-2xl font-bold text-amber-800">Grade: A+</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-3">
                  <Code className="h-6 w-6 text-amber-600 mr-3" />
                  <h4 className="font-bold text-amber-800">RESTful API & CRUD Operations</h4>
                </div>
                <p className="text-amber-700 text-sm">Designed and implemented RESTful APIs with Node.JS, Express.JS, PostgreSQL, and mongoDB, including robust error handling.</p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-3">
                  <Zap className="h-6 w-6 text-amber-600 mr-3" />
                  <h4 className="font-bold text-amber-800">Async Messaging & Worker Threads</h4>
                </div>
                <p className="text-amber-700 text-sm">Integrated RabbitMQ for asynchronous, message-driven communication between services, and utilized Node.JS worker_threads for Parallel excution of CPU-intensive background tasks.</p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-3">
                  <Shield className="h-6 w-6 text-amber-600 mr-3" />
                  <h4 className="font-bold text-amber-800">Advanced Security Implementation</h4>
                </div>
                <p className="text-amber-700 text-sm">Implemented JWT authentication, bcrypt password hashing, Helmet for secuting HTTP headers, CORS configuration, and Epress validation for input validation.</p>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
                <Sparkles className="h-6 w-6 mr-2" />
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Mongoose', 'RabbitMQ', 'Node.JS Worker Threads', 'JWT', 
                  'bcrypt', 'CORS', 'Helmet', 'Express Validator', 'Morgan', 'Multer', 'dotenv', 'Firebase', 'Cloudinary', 'Neon', 'Nhost', 'Koyeb', 'Postman'
                ].map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
                <Target className="h-6 w-6 mr-2" />
                Key Achievements
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Dedicated Vaccination App',
                  'Vaccination Alert System',
                  'Vaccines Information',
                  'Dose Information',
                  'Vaccines and Doses Management',
                  'Calculating The Doses Dates For Each Child',
                  'Doctor Appointment Booking and Tracking',
                  'Doctor Search System',
                  'Integration with Gemini Platform',
                  'Google Maps Integration',
                  'Educational Articles',
                  'Medication Database'
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-amber-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onViewDetails}
                className="group bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Crown className="h-6 w-6 mr-2 group-hover:animate-pulse" />
                View Backend Architecture
                <ArrowRight className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="https://graduation-project-frontend-two.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/80 backdrop-blur-sm text-amber-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center border-2 border-amber-300 hover:border-amber-400"
              >
                <Globe className="h-6 w-6 mr-2" />
                View Live App
                <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}