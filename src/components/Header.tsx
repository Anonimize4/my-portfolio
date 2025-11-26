import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <a href="#home" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Projects
            </a>
            <a 
              href="#certificates" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Certificates
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 block"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#certificates" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Certificates
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
