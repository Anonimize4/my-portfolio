import Header from './components/Header'
import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Certificates from './pages/certificates'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Certificates />
      </main>
    </div>
  )
}

export default App
