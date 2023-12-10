import React, { useState } from 'react'

function UseState() {

    const [counter,setCounter]=useState(0)
    let increment = ()=>{
        setCounter(counter+1)
    }
  return (
    <div id='usestate'>
      <h1>{counter}</h1> <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseState
