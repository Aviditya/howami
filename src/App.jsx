import { useState } from 'react'
import './App.css'
import { inject } from "@vercel/analytics"

function getRandomSoftColor() {
  const hue = Math.floor(Math.random() * 360)
  const pastel = `hsl(${hue}, 70%, 85%)`
  return pastel
}

function App() {
  const [bgColor, setBgColor] = useState('#f5f5f5')

  const handleClick = () => {
    setBgColor(getRandomSoftColor())
  }

  return (
    <div className="center-container" style={{ background: bgColor }}>
      <h1
        onClick={handleClick}
        style={{ cursor: 'pointer', color: '#fff' }}
      >
        You are Awesome!
      </h1>
    </div>
  )
}

export default App
