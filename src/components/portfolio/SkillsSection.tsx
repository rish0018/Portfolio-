
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      skills: ["C", "C++", "Java", "Python", "HTML", "CSS", "JavaScript", "Object-Oriented Programming", "Data Structures & Algorithms", "RESTful APIs"]
    },
    {
      title: "AI/ML & Advanced Technologies",
      skills: ["Machine Learning", "Deep Learning", "Artificial Intelligence", "Prompt Engineering", "Chatbot Development", "MATLAB", "OpenAI APIs", "LangChain"]
    },
    {
      title: "Software Engineering & DevOps",
      skills: ["SDLC", "Agile Methodologies", "DevOps", "Continuous Integration", "Git/GitHub", "Code Refactoring"]
    },
    {
      title: "Tools & Platforms",
      skills: ["MATLAB", "IBM AI Engineering Tools", "AWS ML Services", "Visual Studio Code", "IntelliJ", "Eclipse"]
    },
    {
      title: "Content & Marketing",
      skills: ["SEO", "Social Media Marketing", "Content Writing", "Technical Documentation", "Marketing Strategy", "Campaign Management"]
    },
    {
      title: "Leadership & Management",
      skills: ["Project Management", "Event Planning", "Team Leadership", "Cross-functional Collaboration", "Event Management"]
    }
  ];

  const certifications = [
    "IBM AI Engineering Certification",
    "MATLAB Certified",
    "AWS ML",
    "Accenture North America Coding Simulation",
    "MERN Stack ~ Blackbucks",
    "Quantum Computing ~VIT-AP"
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border hover:border-blue-500 hover:text-blue-600 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
