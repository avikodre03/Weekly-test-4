import React from 'react'
import { useState } from 'react';
import Buttons from './Buttons'
import Display from './Display'
import "./Calculator.css"

const Calculator = () => {
  const [result, setresult] = useState("")
  const [display, setdisplay] = useState("")
  return (
    <>
    <div className="calculator">
      <Display result={result} setresult={setresult} display={display} setdisplay={setdisplay} />
      <Buttons result={result} setresult={setresult} display={display} setdisplay={setdisplay} />
    </div>
    <em>Design and Coded by <br/>Avinash</em>
    </>
  
  )
}

export default Calculator