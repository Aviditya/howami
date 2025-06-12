import { useState } from 'react'
import './App.css'
import { inject } from "@vercel/analytics"

function getRandomSolidColor() {
  const colors = [
    '#e74c3c', // red
    '#3498db', // blue
    '#2ecc71', // green
    '#f1c40f', // yellow
    '#9b59b6', // purple
    '#e67e22', // orange
    '#1abc9c', // teal
    '#34495e', // dark blue
    '#ff69b4', // pink
    '#2d3436'  // dark gray
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function App() {
  const [fontColor, setFontColor] = useState('#222')

  const handleClick = () => {
    setFontColor(getRandomSolidColor())
  }

  return (
    <div className="center-container" style={{ background: '#fff' }}>
      <h1
        onClick={handleClick}
        style={{ cursor: 'pointer', color: fontColor, textShadow: '2px 2px 8px #fff, 0 0 2px #fff' }}
      >
        You are Awesome!
      </h1>
    </div>
  )
}

export default App
