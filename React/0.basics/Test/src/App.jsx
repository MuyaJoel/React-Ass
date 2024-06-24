import React from 'react'
import SearchBoxComponents from './components/searchBox/searchBox.components'
import ProfileComponent from './components/cards/profile.componets'
import './App.css'

function App() {
  // const  [count, setCount] = useState(0)

  return (
    <>
    <h1>Cats</h1>
    <ProfileComponent/>
    <hr />
    <SearchBoxComponents />
     </>
  )
}

export default App
