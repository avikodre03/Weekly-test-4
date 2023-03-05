import React from 'react'
import "./Display.css"
const Display = ({ result, display, setdisplay }) => {
  return (
    <div className='Display'>
      <div className="output">
        <h1>{display}</h1>
      </div>
      <input type="text" value={result} />
    </div>
  )
}

export default Display