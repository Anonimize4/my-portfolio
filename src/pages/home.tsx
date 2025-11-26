import Header from '../components /header'
import Footer from '../components /footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="inline-block p-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-2">
                    <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      🚀 Welcome to My Digital Space
                    </span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Hi, I'm <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 drop-shadow-lg">
                  John Doe
                </span>
              </h1>
              
              <div className="mb-8">
                <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">
                  Full Stack Developer | UI/UX Designer | Problem Solver
                </p>
                <div className="flex justify-center space-x-2 mb-8">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">React</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">Cloud</span>
                </div>
              </div>
              
              <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto backdrop-blur-sm bg-white/10 rounded-lg p-6">
                Passionate about creating beautiful, functional web applications that make a difference. 
                Specializing in React, TypeScript, and modern web technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#projects" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                >
                  🎨 View My Work
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-white/30 font-semibold"
                >
                  ✉️ Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
                  About Me
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-30 scale-110"></div>
                  <div className="relative">
                    <img 
                      src="https://via.placeholder.com/400x400/6366F1/FFFFFF?text=Profile+Photo" 
                      alt="Profile" 
                      className="rounded-2xl shadow-2xl w-full max-w-md mx-auto border-4 border-white/50 backdrop-blur-sm"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg">
                      <span className="font-semibold">5+ Years Experience</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">👋 Hey there!</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      I'm a passionate full-stack developer with over 5 years of experience building web applications. 
                      My journey started with a curiosity about how things work on the internet, and it has evolved into 
                      a career focused on creating impactful digital solutions.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      I specialize in React, Node.js, and cloud technologies. I love tackling complex problems and 
                      turning ideas into reality through clean, efficient code. When I'm not coding, you can find me 
                      exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white shadow-lg">
                    <h3 className="text-xl font-bold mb-4">🎓 Education & Certifications</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="font-medium">Bachelor's in Computer Science</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="font-medium">AWS Certified Developer</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="font-medium">Google Cloud Professional</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-4">
                  Skills & Expertise
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-full shadow-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-6 text-center">
                    Frontend Development
                  </h3>
                  <ul className="space-y-3">
                    {['React & TypeScript', 'Vue.js & Angular', 'HTML5 & CSS3', 'Tailwind CSS & Bootstrap', 'Next.js & Gatsby'].map((skill, index) => (
                      <li key={index} className="flex items-center space-x-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                        <span className="font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-full shadow-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 text-center">
                    Backend Development
                  </h3>
                  <ul className="space-y-3">
                    {['Node.js & Express', 'Python & Django', 'REST APIs & GraphQL', 'PostgreSQL & MongoDB', 'Redis & caching'].map((skill, index) => (
                      <li key={index} className="flex items-center space-x-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                        <span className="font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c-.94 1.543.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c.94-1.543-.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 text-center">
                    DevOps & Tools
                  </h3>
                  <ul className="space-y-3">
                    {['AWS & Google Cloud', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Git & GitHub', 'Agile & Scrum'].map((skill, index) => (
                      <li key={index} className="flex items-center space-x-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-4">
                  Featured Projects
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/400x250/6366F1/FFFFFF?text=E-Commerce+Platform" 
                      alt="E-Commerce Platform" 
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      🛒 E-Commerce
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-3">
                      E-Commerce Platform
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Full-stack e-commerce solution with payment integration and real-time inventory management.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-sm font-medium">React</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-sm font-medium">Node.js</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-sm font-medium">MongoDB</span>
                    </div>
                    <a href="#" className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300">
                      View Project 
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/400x250/10B981/FFFFFF?text=Task+Management" 
                      alt="Task Management App" 
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      📋 Task Manager
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-3">
                      Task Management App
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Collaborative task management tool with real-time updates and team collaboration features.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium">Vue.js</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium">Firebase</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium">Tailwind</span>
                    </div>
                    <a href="#" className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300">
                      View Project 
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Analytics+Dashboard" 
                      alt="Analytics Dashboard" 
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      📊 Analytics
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-3">
                      Analytics Dashboard
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Data visualization dashboard with interactive charts and real-time business metrics.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-medium">React</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-medium">D3.js</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-medium">Python</span>
                    </div>
                    <a href="#" className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300">
                      View Project 
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600 mb-4">
                  Certifications
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-rose-600 to-purple-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">AWS Certified</h3>
                  <p className="text-gray-600 text-sm font-medium">Developer Associate</p>
                  <div className="mt-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-xs font-semibold">2023</span>
                  </div>
                </div>
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-2">Google Cloud</h3>
                  <p className="text-gray-600 text-sm font-medium">Professional Developer</p>
                  <div className="mt-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-xs font-semibold">2023</span>
                  </div>
                </div>
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">React Developer</h3>
                  <p className="text-gray-600 text-sm font-medium">Advanced Certification</p>
                  <div className="mt-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-semibold">2024</span>
                  </div>
                </div>
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-2">Docker Certified</h3>
                  <p className="text-gray-600 text-sm font-medium">Associate</p>
                  <div className="mt-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-xs font-semibold">2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 mb-4">
                  Get In Touch
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto rounded-full"></div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
                <p className="text-center text-gray-600 mb-8 text-lg">
                  I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-600">contact@example.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-gray-600">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-600">San Francisco, CA</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Send a Message</h3>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
import Header from '../components /header'
import Footer from '../components /footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="inline-block p-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-2">
                    <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      🚀 Welcome to My Digital Space
                    </span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Hi, I'm <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 drop-shadow-lg">
                  John Doe
                </span>
              </h1>
              
              <div className="mb-8">
                <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">
                  Full Stack Developer | UI/UX Designer | Problem Solver
                </p>
                <div className="flex justify-center space-x-2 mb-8">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">React</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">Cloud</span>
                </div>
              </div>
              
              <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto backdrop-blur-sm bg-white/10 rounded-lg p-6">
                Passionate about creating beautiful, functional web applications that make a difference. 
                Specializing in React, TypeScript, and modern web technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#projects" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                >
                  🎨 View My Work
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-white/30 font-semibold"
                >
                  ✉️ Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
                  About Me
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-30 scale-110"></div>
                  <div className="relative">
                    <img 
                      src="https://via.placeholder.com/400x400/6366F1/FFFFFF?text=Profile+Photo" 
                      alt="Profile" 
                      className="rounded-2xl shadow-2xl w-full max-w-md mx-auto border-4 border-white/50 backdrop-blur-sm"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg">
                      <span className="font-semibold">5+ Years Experience</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">👋 Hey there!</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      I'm a passionate full-stack developer with over 5 years of experience building web applications. 
                      My journey started with a curiosity about how things work on the internet, and it has evolved into 
                      a career focused on creating impactful digital solutions.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      I specialize in React, Node.js, and cloud technologies. I love tackling complex problems and 
                      turning ideas into reality through clean, efficient code. When I'm not coding, you can find me 
                      exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white shadow-lg">
                    <h3 className="text-xl font-bold mb-4">🎓 Education & Certifications</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="font-medium">Bachelor's in Computer Science</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="font-medium">AWS Certified Developer</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="font-medium">Google Cloud Professional</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-4">
                  Skills & Expertise
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-full shadow-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-6 text-center">
                    Frontend Development
                  </h3>
                  <ul className="space-y-3">
                    {['React & TypeScript', 'Vue.js & Angular', 'HTML5 & CSS3', 'Tailwind CSS & Bootstrap', 'Next.js & Gatsby'].map((skill, index) => (
                      <li key={index} className="flex items-center space-x-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                        <span className="font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-full shadow-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 text-center">
                    Backend Development
                  </h3>
                  <ul className="space-y-3">
                    {['Node.js & Express', 'Python & Django', 'REST APIs & GraphQL', 'PostgreSQL & MongoDB', 'Redis & caching'].map((skill, index) => (
                      <li key={index} className="flex items-center space-x-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                        <span className="font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c-.94 1.543.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c.94-1.543-.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 text-center">
                    DevOps & Tools
                  </h3>
                  <ul className="space-y-3">
                    {['AWS & Google Cloud', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Git & GitHub', 'Agile & Scrum'].map((skill, index) => (
                      <li key={index} className="flex items-center space-x-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-4">
                  Featured Projects
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/400x250/6366F1/FFFFFF?text=E-Commerce+Platform" 
                      alt="E-Commerce Platform" 
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      🛒 E-Commerce
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-3">
                      E-Commerce Platform
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Full-stack e-commerce solution with payment integration and real-time inventory management.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-sm font-medium">React</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-sm font-medium">Node.js</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-sm font-medium">MongoDB</span>
                    </div>
                    <a href="#" className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300">
                      View Project 
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/400x250/10B981/FFFFFF?text=Task+Management" 
                      alt="Task Management App" 
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      📋 Task Manager
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-3">
                      Task Management App
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Collaborative task management tool with real-time updates and team collaboration features.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium">Vue.js</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium">Firebase</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium">Tailwind</span>
                    </div>
                    <a href="#" className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300">
                      View Project 
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Analytics+Dashboard" 
                      alt="Analytics Dashboard" 
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      📊 Analytics
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-3">
                      Analytics Dashboard
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Data visualization dashboard with interactive charts and real-time business metrics.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-medium">React</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-medium">D3.js</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-medium">Python</span>
                    </div>
                    <a href="#" className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300">
                      View Project 
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Certifications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">AWS Certified</h3>
                  <p className="text-gray-600 text-sm">Developer Associate</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Google Cloud</h3>
                  <p className="text-gray-600 text-sm">Professional Developer</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">React Developer</h3>
                  <p className="text-gray-600 text-sm">Advanced Certification</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Docker Certified</h3>
                  <p className="text-gray-600 text-sm">Associate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
              <div className="bg-gray-50 rounded-lg p-8">
                <p className="text-center text-gray-600 mb-8 text-lg">
                  I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-600">contact@example.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-gray-600">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-600">San Francisco, CA</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Send a Message</h3>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default Home
