

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
              I'm a driven developer and data engineer with hands-on experience in machine learning, web development, and data processing. 
              While pursuing my degree in Computer Science with a specialization in AI & ML, I actively lead and contribute to technical and leadership roles across multiple clubs and real-world projects. From building smart assistive tech like Eyevoce to working on AI-based legal systems,
              I’m passionate about creating solutions that blend innovation with impact.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My journey’s been a ride — from interning as a Data Engineer at Ambitio to leading multiple student orgs and building everything from slick web apps to smart ML models. 
              I’m all about learning on the go and using the latest tech to solve real-world stuff that actually matters.
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
                <img
                  src="/picture.jpg"
                  alt="Rishit's Profile"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
                />
                <p className="text-gray-600">Aspiring Engineer & Innovator</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
