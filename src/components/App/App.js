
import './App.scss';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

const btns = [0,1,2,3,4,5,6,7,8,9,"",""]
const btns_oper = ["*","/","+","-","="]

function App() {
  return (
    <div className="App">
      <div className="calculator-wrap">
        <div className="calculator">
          <header>
            <Input/>
          </header>
          <main>
            <div className="col col-left">
            {btns.map(i=>(
                <Button key={i} label={i} type={"number"}></Button>
              ))}
            </div>
            <div className="col col-right"> {btns_oper.map(i=>(
                <Button key={i} label={i} value={i}></Button>
              ))}</div>
             
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
