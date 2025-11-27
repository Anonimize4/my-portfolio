import Header from '../components/header'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob top-10 left-10"></div>
            <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000 top-1/2 right-10"></div>
            <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-4000 bottom-10 left-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                Hi, I'm <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 drop-shadow-lg">
                  John Doe
                </span>
              </h1>
              
              <div className="mb-8 animate-fade-in-up animation-delay-200">
                <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">
                  Full Stack Developer | UI/UX Designer | Problem Solver
                </p>
              </div>
              
              <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 animate-fade-in-up animation-delay-400">
                Passionate developer with 5+ years of experience building scalable web applications. I specialize in React, Node.js, and creating intuitive user experiences that solve real-world problems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
                <a 
                  href="#projects" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold hover:shadow-purple-500/25"
                >
                  🎨 View My Work
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-white/30 font-semibold hover:shadow-white/25"
                >
                  ✉️ Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-br from-darkblue via-blue-900 to-indigo-900 relative">
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
                  <div className="rounded-2xl shadow-2xl w-full max-w-md mx-auto border-4 border-white/50 backdrop-blur-sm bg-gray-200 h-96 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Professional Photo</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">👋 My Journey</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      I'm a passionate full-stack developer with over 5 years of experience crafting digital solutions. My journey began with a curiosity about how things work on the web, which evolved into a career focused on building scalable, user-centric applications.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      I specialize in React ecosystems, Node.js backends, and modern cloud architectures. What drives me is solving complex problems and creating seamless experiences that make a real difference in users' lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-darkblue to-blue-900 relative">
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
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-6 text-center">
                    Frontend Skills
                  </h3>
                  <ul className="space-y-3">
                    {['React.js', 'TypeScript', 'Tailwind CSS'].map((skill, index) => (
                      <li key={index} className="flex items-center space-x-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                        <span className="font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 text-center">
                    Backend Skills
                  </h3>
                  <ul className="space-y-3">
                    {['Node.js', 'Express', 'MongoDB'].map((skill, index) => (
                      <li key={index} className="flex items-center space-x-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                        <span className="font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 text-center">
                    Tools & DevOps
                  </h3>
                  <ul className="space-y-3">
                    {['Git', 'Docker', 'AWS'].map((skill, index) => (
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
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-darkblue relative">
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
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-3">
                      E-Commerce Platform
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Full-stack e-commerce solution with real-time inventory management, payment processing, and responsive design.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-sm font-medium">React</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-sm font-medium">Stripe</span>
                    </div>
                  </div>
                </div>
                
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-3">
                      Task Management App
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Collaborative project management tool with real-time updates, drag-and-drop interface, and team analytics.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium">Vue.js</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium">Firebase</span>
                    </div>
                  </div>
                </div>
                
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-3">
                      AI Chat Assistant
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Intelligent chatbot with natural language processing, context awareness, and multi-language support.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-medium">Python</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-medium">OpenAI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-20 bg-gradient-to-br from-blue-900 via-darkblue to-slate-900 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-4">
                  Certificates & Achievements
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-2">
                      AWS Certified Developer
                    </h3>
                    <p className="text-gray-600 mb-2">Amazon Web Services</p>
                    <p className="text-sm text-gray-500">Issued: March 2024</p>
                  </div>
                </div>

                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold
