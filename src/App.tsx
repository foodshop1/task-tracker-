import { useState } from 'react'
import { motion } from "motion/react"
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0);
  
  // Sample task data
  const tasks = [
    { id: 1, name: "Complete React Project", description: "Finish the smart task tracker application" },
    { id: 2, name: "Learn Tailwind CSS", description: "Master responsive design with Tailwind" },
    { id: 3, name: "Study TypeScript", description: "Improve type safety in the codebase" },
    { id: 4, name: "Deploy to Vercel", description: "Get the app live on the internet" },
    { id: 5, name: "Add Animations", description: "Implement smooth transitions and effects" },
    { id: 6, name: "Write Tests", description: "Ensure code quality with unit tests" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Smart Task Tracker</h1>
        
        {/* Button Section - Above Grid */}
        <div className="text-center mb-8">
          <input type="text" placeholder="Task Name" className="mr-1 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg" />
          <motion.button
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            onClick={() => setCount(count + 1)}>
            Add Task ({count})
          </motion.button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <Card
              key={task.id}
              taskName={task.name}
              taskDescription={task.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
