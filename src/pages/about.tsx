const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About Me
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 leading-relaxed">
              Add your about section content here. This is where you can share your professional background, 
              experience, and personal story.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
