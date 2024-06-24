import { useState } from 'react'
import UseEffectsComponents from './components/useEffects.components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseEffectsComponents/>
    </>
  )
}

export default App
