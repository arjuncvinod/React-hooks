import React, { useRef, useState } from 'react'

function UseRef() {
const [data,setData]=useState("Arjun")

const inputRef=useRef(null)

let changeAndFocus=()=>{
    inputRef.current.focus()
    setData(inputRef.current.value)
    inputRef.current.value=""
}
  return (
    <div>
        <h1>{data}</h1>
      <input type="text"  ref={inputRef}/>
      <button onClick={changeAndFocus}>Change Name</button>
    </div>
  )
}

export default UseRef
