import ContactForm from "./ContactForm";
import { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaLinkedin, FaTwitter, FaBars, FaArrowUp, FaBriefcase, FaLaptopCode, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiBootstrap, SiGit } from 'react-icons/si';
import project1 from "./assets/img/ll.png";
import project2 from "./assets/img/lll.png";
import project3 from "./assets/img/llll.png";
import profilepic from "./assets/img/profilepic.png"

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // Skills data with blue color scheme
  const skills = [
    { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "React.js", icon: <SiReact />, color: "text-blue-400" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-600" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "MySQL", icon: <SiMysql />, color: "text-blue-600" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-800" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
    { name: "API Integration", icon: <SiGit />, color: "text-blue-500" },
    { name: "Git", icon: <SiGit />, color: "text-orange-600" }
  ];

  const projects = [
    {
      title: "Online Counseling Platform",
      description: "Developed a full-stack telehealth solution with video conferencing (Google Meet API), secure payments (Stripe), and appointment scheduling. Features HIPAA-compliant data storage and role-based access for counselors and clients.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Google Meet API"],
      demoLink: "https://frontend-capstone-sage.vercel.app/",
      codeLink: "https://github.com/abarna-RP/frontend-capstone",
      img: project1
    },
    {
      title: "Movie Search Application",
      description: "Built a responsive movie discovery app using TMDB API with real-time search, pagination, and favorites functionality. Implemented with React hooks and Tailwind CSS for responsive design.",
      technologies: ["React", "Tailwind CSS", "TMDB API"],
      demoLink: "https://proj7-lemon.vercel.app/",
      codeLink: "https://github.com/abarna-RP/proj7",
      img: project2
    },
    {
      title: "Financial Tracker",
      description: "Created an income/expense calculator with data visualization. Features include transaction history, category breakdowns, and local storage persistence.",
      technologies: ["React", "Tailwind CSS", "Chart.js"],
      demoLink: "https://fancy-boba-fa344d.netlify.app/",
      codeLink: "https://github.com/abarna-RP/calculator-task",
      img: project3
    }
  ];

  const education = [
    {
      institution: "E.G.S Pillay Engineering College",
      degree: "Bachelor of Engineering in Civil Engineering",
      period: "2013 - 2017",
      achievements: [
        "Graduated with First Class Honors",
        "Specialized in Structural Engineering",
        "Coursework in Applied Mathematics and Computer Applications"
      ]
    }
  ];

  return (
    <div className="bg-blue-50 text-gray-800 font-['Poppins']">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">
                Abarnasri Prabakaran
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="text-gray-700 hover:text-blue-600 transition">Skills</a>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-gray-700 hover:text-blue-600 transition">Projects</a>
              <a href="#education" onClick={(e) => handleNavClick(e, 'education')} className="text-gray-700 hover:text-blue-600 transition">Education</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-gray-700 hover:text-blue-600 transition">Contact</a>
              <a href="#contact" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">Hire Me</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
                <FaBars className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden bg-white pb-4 px-4 shadow-lg ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="block py-2 text-gray-700 hover:text-blue-600 transition">Home</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="block py-2 text-gray-700 hover:text-blue-600 transition">Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="block py-2 text-gray-700 hover:text-blue-600 transition">Projects</a>
          <a href="#education" onClick={(e) => handleNavClick(e, 'education')} className="block py-2 text-gray-700 hover:text-blue-600 transition">Education</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block py-2 text-gray-700 hover:text-blue-600 transition">Contact</a>
          <a href="#contact" className="block mt-2 px-4 py-2 rounded-md bg-blue-600 text-white text-center">Hire Me</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-blue-600">Abarnasri Prabakaran</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Full Stack Developer</h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              I build responsive web applications with modern technologies. Passionate about creating efficient solutions with clean code and intuitive user interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                Get In Touch
              </a>
              <a href="#projects" className="px-6 py-3 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
                View My Work
              </a>
              <a
                href="https://drive.google.com/file/d/1tcsPM4c6JVjVxeyh-C2GCLItGo2XwLQp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition flex items-center gap-2"
              >
                <FaDownload />
                View Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src={profilepic}
                alt="Abarnasri Prabakaran" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">Technical Skills</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Technologies I've worked with and actively developing in
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform hover:scale-105"
              >
                <div className={`text-4xl mb-3 ${skill.color}`}>
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg text-center">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">Featured Projects</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Selected work demonstrating my full-stack capabilities
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.demoLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition flex items-center justify-center gap-2"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition flex items-center justify-center gap-2"
                    >
                      <FaGithub size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/abarna-RP" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition gap-2"
            >
              <FaGithub />
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">Education</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            My academic background and professional development
          </p>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 w-1 h-full bg-blue-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-8 md:space-y-16">
              {education.map((edu, index) => (
                <div key={index} className="relative md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                    <h3 className="font-bold text-xl">{edu.degree}</h3>
                    <p className="text-blue-600">{edu.institution}</p>
                    <p className="text-gray-500">{edu.period}</p>
                  </div>
                  <div className="hidden md:block w-12 h-12 rounded-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white">
                    <FaBriefcase />
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="relative md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right order-1">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Completed Full Stack Development Course at GUVI (300+ hours)</li>
                      <li>Participated in multiple hackathons and coding challenges</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-12 h-12 rounded-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white">
                  <FaLaptopCode />
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="font-bold text-xl">Certifications</h3>
                  <p className="text-blue-600">Professional Development</p>
                  <p className="text-gray-500">2024 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-blue-100">
            Currently available for full-time opportunities and freelance projects
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-blue-200">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:abarnapraba167@gmail.com" className="text-blue-100 hover:underline">
                      abarnapraba167@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-blue-200">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+919363654452" className="text-blue-100 hover:underline">
                      +91 9363654452
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-blue-200">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-blue-100">Chennai, India | Remote</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/abarna-RP" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/abarnasri-prabakaran-36913a253" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href="https://x.com/AbarnasriP94132" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold text-blue-300">
                Abarnasri Prabakaran
              </span>
              <p className="text-blue-300 mt-1">Full Stack Developer</p>
            </div>
            <div className="flex space-x-6">
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-blue-300 hover:text-white transition">Home</a>
              <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="text-blue-300 hover:text-white transition">Skills</a>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-blue-300 hover:text-white transition">Projects</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-blue-300 hover:text-white transition">Contact</a>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-300">
            <p>&copy; {new Date().getFullYear()} Abarnasri Prabakaran. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 shadow-lg text-white flex items-center justify-center hover:bg-blue-700 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default App;