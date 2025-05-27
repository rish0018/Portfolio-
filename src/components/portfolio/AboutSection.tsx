
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Building the Future with Data & Code
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate developer and data engineer with hands-on experience in machine learning, 
              web development, and data processing. Currently pursuing my degree while actively 
              contributing to various projects and organizations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My journey includes a Data Engineer Internship at Ambitio, leadership roles in multiple 
              student organizations, and developing projects spanning from web applications to 
              machine learning models. I believe in continuous learning and applying cutting-edge 
              technologies to solve real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-gray-600">Leadership Roles</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">YN</span>
                </div>
                <p className="text-gray-600">Your Professional Photo Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
