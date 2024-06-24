import React, { useState } from 'react'

const SearchBoxComponents = () => {
  const [num,setNum]=useState(0)
  const [inputVal,setInputVal]=useState("")
    const handleClick=()=>{
      // alert('I have been clicked')
      setNum(num + 1) 
    }
    const handleChange=(event)=>{
      setInputVal(event.target.value)
    }
  return (
    <>
    <h1>A button to be Clicked</h1>
    <input type="text" onChange={handleChange} />
    <p>My Name is {inputVal}</p>
    <p>I am changing: {num}</p>
    <button onClick={handleClick}>ClickMe!</button>
    </>
  )
}

export default SearchBoxComponents