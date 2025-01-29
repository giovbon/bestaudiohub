import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero textAlign="center" title={"AUDIO MADE EASY"} text={"Making sense of audio gear, so you can focus on creating. Discover easy-to-follow reviews, guides, and tips for making the right choice."}/>
    </>
  )
}

export default App
