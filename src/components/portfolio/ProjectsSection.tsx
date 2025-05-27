import React from 'react';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Chrome Games",
      description: "A new outlook to the classic flappy bird and dinasuar game using tensorflow integration to handle everything without keyboard",
      techStack: ["HTML", "CSS", "JavaScript", "Tensorflow"],
      githubUrl: "https://github.com/rish0018/Chrome-Games",
      category: "Web Development"
    },
    {
      title: "ML Projects",
      description: "Includes over 30+ Projects",
      techStack: ["Python", "Pandas", "Scikit-learn", "Flask", "Machine Learning"],
      githubUrl: "https://github.com/rish0018/AI_ML-projects",
      category: "Machine Learning"
    },
    {
      title: "Web-Apps",
      description: "Interactive apps to showcase skills in frontend development",
      techStack: ["JavaScript", "HTML", "CSS", "Local Storage", "Responsive Design"],
      githubUrl: "https://github.com/yourusername/task-dashboard",
      category: "Web Development"
    },
    {
      title: "Chatbot with OpenAI",
      description: "Intelligent chatbot powered by OpenAI APIs and LangChain for natural language processing and conversation management.",
      techStack: ["Python", "OpenAI API", "LangChain", "Streamlit", "NLP"],
      githubUrl: "https://github.com/rish0018/Chatbot_Langchaint",
      category: "AI/ML"
    },
    {
      title: "Data Analysis Dashboard",
      description: "Codes made with Playwright, Selenium and BeautifulSoup",
      techStack: ["Python", "Pandas", "Matplotlib", "Plotly", "Streamlit"],
      githubUrl: "https://github.com/yourusername/data-dashboard",
      category: "Data Engineering"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with modern design and smooth animations.",
      techStack: ["React","MERN", "Responsive Design", "Animations"],
      githubUrl: "https://github.com/rish0018/Portfolio-",
      demoUrl: "https://your-portfolio.com",
      category: "Web Development"
    },
    {
      title: "DSA",
      description: "Data Structure and Algorithms using Java",
      techStack: ["JAVA","DSA"],
      githubUrl: "https://github.com/rish0018/Basic-DSA-Codes",
      category: ""
    }
  ];

  const categories = ["All", "Web Development", "Machine Learning", "AI/ML", "Data Engineering"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <span className="text-gray-600 text-sm">{project.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
