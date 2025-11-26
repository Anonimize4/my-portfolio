import Header from './components/Header'
import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Certificates from './pages/certificates'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-white/90 mb-8">
              A clean, professional portfolio template ready for your customization
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
