
import React from "react"
import './App.scss';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import counter from "./../../utils/counter"

const btns = ["","","",9,8,7,6,5,4,3,2,1,0,".","C"]
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
  const result = counter(type, lastInputType, val, countString)
  setCountString(counter(type, lastInputType, val, countString))
  if(val ==="C"){
    setLastInputType(null)
  } else if(val ==="="){
    setLastInputType("number")
  }else{
    setLastInputType(type)
  }
  
  
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
            {btns.map(i=>{
              if(i===""){
                return <Button className="not-active" disabled={true}></Button>
              }else {
                return(
                  <Button disabled={i === null} key={i} value={i} label={i} type={"number"} onClick={onChangeCountString}></Button>
                )
              }
             })}
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
