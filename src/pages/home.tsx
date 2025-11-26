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
                  Your Name
                </span>
              </h1>
              
              <div className="mb-8">
                <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">
                  Your Title | Your Expertise | Your Passion
                </p>
                <div className="flex justify-center space-x-2 mb-8">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">Skill 1</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">Skill 2</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">Skill 3</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">Skill 4</span>
                </div>
              </div>
              
              <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto backdrop-blur-sm bg-white/10 rounded-lg p-6">
                Add your personal introduction here. Describe your passion, expertise, and what makes you unique in your field.
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
                    <div className="rounded-2xl shadow-2xl w-full max-w-md mx-auto border-4 border-white/50 backdrop-blur-sm bg-gray-200 h-96 flex items-center justify-center">
                      <span className="text-gray-500 text-lg">Your Photo</span>
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg">
                      <span className="font-semibold">Your Experience</span>
                    </div>
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
                  
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white shadow-lg">
                    <h3 className="text-xl font-bold mb-4">🎓 Education & Background</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="font-medium">Your Education</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="font-medium">Your Certifications</span>
                      </div>
