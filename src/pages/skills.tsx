const Skills = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Skills
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Frontend Skills</h2>
              <ul className="space-y-2">
                <li className="text-gray-700">Your Frontend Skill 1</li>
                <li className="text-gray-700">Your Frontend Skill 2</li>
                <li className="text-gray-700">Your Frontend Skill 3</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Backend Skills</h2>
              <ul className="space-y-2">
                <li className="text-gray-700">Your Backend Skill 1</li>
                <li className="text-gray-700">Your Backend Skill 2</li>
                <li className="text-gray-700">Your Backend Skill 3</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Tools & DevOps</h2>
              <ul className="space-y-2">
                <li className="text-gray-700">Your Tool 1</li>
                <li className="text-gray-700">Your Tool 2</li>
                <li className="text-gray-700">Your Tool 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
