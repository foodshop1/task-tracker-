import { useState } from 'react'
import { motion, scale } from "motion/react"
import './App.css'

function App() {
  const [count, setCount] = useState (0);
  return (
    <>
    <motion.div>
      <motion.button
      whileHover={{scale: 1.1}}
      whileTap={{scale:0.95}}
      onClick={() => setCount(count + 1)}>
        tetetest
      </motion.button>
    <h3>{count}</h3>
    </motion.div>
    </>
  )
}

export default App
