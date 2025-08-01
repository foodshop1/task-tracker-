import { useState } from 'react';
import { motion } from "motion/react";
import './App.css';
import Card from './Card';

//creating the type for the task
interface Task {
  id: number;
  name: string;
  description: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask();
  };

  const addTask = () => {

    if (taskName.trim() !== "" && taskDescription.trim() !== "") {
      const newTask: Task = {
        id: Date.now(),
        name: taskName.trim(),
        description: taskDescription.trim()
      };

      setTasks([...tasks, newTask]);
      setTaskName("");
      setTaskDescription("");
    }
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Smart Task Tracker</h1>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          <input
            type="text"
            placeholder="Enter your task..."
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
          />

          <input
            type="text"
            placeholder="Enter your description..."
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
          />

          <motion.button
            type="submit"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add Task ({tasks.length})
          </motion.button>
        </form>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
          {tasks.map((task) => (
            <Card
              key={task.id}
              taskName={task.name}
              taskDescription={task.description}
              onDelete={() => deleteTask(task.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
