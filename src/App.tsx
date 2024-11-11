import { useState } from 'react'
import './App.css'
import Intro from './components/Intro'
import Meteors from './components/ui/meteors'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)
  return (
    <main className="flex min-h-screen flex-col md:gap-12 gap-8 md:p-24 p-10 relative overflow-hidden lg:w-7/12 sm:w-full mx-auto">
      <div className="fixed inset-0 pointer-events-none light-mode-fade-bottom dark:fade-bottom z-10 bg-white/10 dark:bg-black/10" />
      <Intro />



    </main>
  )
}

export default App
