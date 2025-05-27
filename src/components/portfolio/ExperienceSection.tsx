import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Engineer Intern",
      company: "Ambitio",
      period: "May 2025 - July 2025",
      location: "Internship",
      description: "Gained hands-on experience in data engineering, working with data pipelines and analytics.",
      type: "internship"
    },
    {
      title: "Student Head",
      company: "IIEC VITAP",
      period: "Sep 2024 - Present",
      location: "Vijayawada West, Andhra Pradesh",
      description: "Working as a part of the team in Student Services.",
      type: "leadership"
    },
    {
      title: "Lead of Events Team",
      company: "SEDS VIT-AP",
      period: "Feb 2024 - May 2025",
      location: "Remote",
      description: "Part of the Events Team with expertise in Marketing Strategy and Team Management.",
      type: "leadership"
    },
    {
      title: "Lead of Editorial Bureau",
      company: "Model United Nations Club VIT-AP",
      period: "Jan 2024 - Apr 2025",
      location: "Hybrid",
      description: "Lead of the Editorial Bureau, focusing on Documentation and Web Content Writing.",
      type: "leadership"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                    exp.type === 'internship' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {exp.type === 'internship' ? 'Internship' : 'Leadership'}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.title}</h3>
                  <h4 className="text-lg text-blue-600 mb-2">{exp.company}</h4>
                  <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                  <p className="text-sm text-gray-500 mb-3">{exp.location}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full"></div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
