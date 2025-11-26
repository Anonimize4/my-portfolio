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
                  Your Name
                </span>
              </h1>
              
              <div className="mb-8 animate-fade-in-up animation-delay-200">
                <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">
                  Your Title | Your Expertise | Your Passion
                </p>
              </div>
              
              <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20 animate-fade-in-up animation-delay-400">
                Add your personal introduction here. Describe your passion, expertise, and what makes you unique in your field.
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
                  <div className="rounded-2xl shadow-2xl w-full max-w-md mx-auto border-4 border-white/50 backdrop-blur-sm bg-gray-200 h-96 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Your Photo</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">👋 About Yourself</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Write your professional background and story here. Share your journey, experience, and what drives you.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Add more details about your expertise, passions, and what you bring to table. Make it personal and engaging.
                    </p>
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
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-6 text-center">
                    Frontend Skills
                  </h3>
                  <ul className="space-y-3">
                    {['Your Frontend Skill 1', 'Your Frontend Skill 2', 'Your Frontend Skill 3'].map((skill, index) => (
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
                    {['Your Backend Skill 1', 'Your Backend Skill 2', 'Your Backend Skill 3'].map((skill, index) => (
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
                    {['Your Tool 1', 'Your Tool 2', 'Your Tool 3'].map((skill, index) => (
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
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 mb-3">
                      Your Project 1
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Describe your first project here and what technologies you used.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-sm font-medium">Tech 1</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-sm font-medium">Tech 2</span>
                    </div>
                  </div>
                </div>
                
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-3">
                      Your Project 2
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Describe your second project here and what technologies you used.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium">Tech 1</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-medium">Tech 2</span>
                    </div>
                  </div>
                </div>
                
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-3">
                      Your Project 3
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Describe your third project here and what technologies you used.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-medium">Tech 1</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-medium">Tech 2</span>
                    </div>
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
                        <span className="text-gray-600">your.email@example.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-gray-600">+1 (555) 123-4567</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Send a Message</h3>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-semibold"
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
