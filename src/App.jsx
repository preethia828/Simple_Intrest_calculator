import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intrest from './components/Intrest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intrest/>
    </>
  )
}

export default App
