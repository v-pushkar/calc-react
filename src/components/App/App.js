
import React from "react"
import './App.scss';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

const btns = [0,1,2,3,4,5,6,7,8,9, ".","C"]
const btns_oper = ["*","/","+","-","="]

const App=()=> {

  /**
   * save inputs values in arr
   */
  const [countString, setCountString] = React.useState([])
  /**
   * save last operator
   */
  const [lastInputType, setLastInputType] = React.useState(null)

/**
 * function handler for button click
 */
const onChangeCountString = (e)=>{
  e.preventDefault() 
  const val = e.target.value
  const type = e.target.dataset.type 
  
  if(type === "operator" && lastInputType ==="operator" && val != "="){
    operatorsActions(val)

  }  else if(val === "C"){
    setCountString([""])
  }
  else if(val === "=" && lastInputType !="operator"){
    countResalt(countString)
  }
  else if(val === "=" && lastInputType ==="operator"){
    const arr = [...countString.splice(countString.length-1, 1)]
    countResalt(arr)
  }else if(val ==="0" && !countString.length){
    setCountString([0,'.'])
  }  else if(val ==="." ){
    if( !countString.some(i=>i===val)){
      setCountString([...countString,'.'])
    }else return
    
  }
  else{
    setCountString([...countString, val])
  }
  setLastInputType(type)
  
}


/**
 * Check action by operator 
 * @param {string} val 
 */
const operatorsActions = (value)=>{
  const arr = [...countString]
  const last = arr[arr.length-1]

  if(last === value & value === "*"){
    arr.splice(arr.length -1, 1)
    countResalt([...arr, value, ...arr])
  } else {
    arr[arr.length-1] = value;
    setCountString(arr)
  }
}

/**
 * Get arr or numbers and operators and return resals as strin
 * @param {arr} inputs 
 */
const countResalt = (inputs)=>{
  setCountString([eval(inputs.join(''))])
  setLastInputType(null)
}

  return (
    <div className="App">
      <div className="calculator-wrap">
        <div className="calculator">
          <header>
            <Input value={countString.join('')} onChange={onChangeCountString}  readonly={true}/>
          </header>
          <main>
            <div className="col col-left">
            {btns.map(i=>(
                <Button disabled={i === null} key={i} value={i} label={i} type={"number"} onClick={onChangeCountString}></Button>
              ))}
            </div>
            <div className="col col-right"> {btns_oper.map(i=>(
                <Button key={i} label={i} value={i} onClick={onChangeCountString} type={"operator"} disabled={!countString.length}></Button>
              ))}</div>
             
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
