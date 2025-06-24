import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import Welcome from './components/Welcome.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <main className="App">
      {gameStarted ? <Card /> : <Welcome onBegin={() => setGameStarted(()=> !gameStarted)}/>}
    </main>
  )
}

export default App
