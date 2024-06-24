import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListComponents from './components/list.components'
import initialProduct from './database/data.mjs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ListComponents list={initialProduct}/>
    </>
  )
}

export default App
