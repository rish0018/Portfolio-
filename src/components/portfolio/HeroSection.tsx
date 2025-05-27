
import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Data Engineer
            </span>
            <br />
            <span className="text-gray-800">& Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Passionate about building innovative solutions with machine learning, 
            web development, and data engineering. Currently pursuing my journey in tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/rish0018" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rishit-kohli-805383282/" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="mailto:kohlirishit18@gmail.com"
               className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
