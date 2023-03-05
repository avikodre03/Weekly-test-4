import React from 'react'
import"./Buttons.css"
const Buttons = ({result, setresult,display,setdisplay}) => {

  const handleClick=(e)=>{
    setresult(result.concat(e.target.name))
    // setdisplay(display.concat(e.target.name))
    
  }
  const Clear=()=>{
    setresult("")
    setdisplay("")
  }
  const calculate=()=>{
    // setresult(eval(result).toString());
    setdisplay(eval(result).toString())
    console.log(display);
  }
  return (
    <div className='Buttons'>
<div className='ButtonsLeft'>
    <div className="top"> 
    <button onClick={Clear} className='Ac' id='Ac'>AC</button>
    <button name="/"onClick={handleClick} className='divide'>/</button>
    </div>
   <div className="digit">
    <button name="9" onClick={handleClick}>9</button>
    <button name="8" onClick={handleClick}>8</button>
    <button name="7" onClick={handleClick}>7</button>
    <button name="6" onClick={handleClick}>6</button>
    <button name="5" onClick={handleClick}>5</button>
    <button name="4" onClick={handleClick}>4</button>
    <button name="3" onClick={handleClick}>3</button>
    <button name="2" onClick={handleClick}>2</button>
    <button name="1" onClick={handleClick}>1</button>
   </div>
   <div className="bottom">
    <button name="0" onClick={handleClick} className='zero'>0</button>
    <button name="." onClick={handleClick} className='dot'>.</button>
   </div>
</div>
<div className="ButtonRight">
  <button name="*" onClick={handleClick} className='top'> X </button>
  <button name="-" onClick={handleClick} className='top'> - </button>
  <button name="+" onClick={handleClick} className='top'> + </button>
  <button onClick={calculate} className='equal' id='result'>=</button>
</div>

    </div>
  )
}

export default Buttons