const Projects = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Projects
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Project 1
                </h3>
                <p className="text-gray-600 mb-4">
                  Describe your first project here.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Tech 1</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Tech 2</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Project 2
                </h3>
                <p className="text-gray-600 mb-4">
                  Describe your second Project here.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Tech 1</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Tech 2</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Project 3
                </h3>
                <p className="text-gray-600 mb-4">
                  Describe your third project here.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Tech 1</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Tech 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
