// Your code here!
import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
function Counter () {
const [count, setCount] = useState(0);
const increment = () => {
    setCount(count + 2/4)
}  
    return(
        <div id='container'>
            <div id='navbar'>
                fractionToDecimalCounter.js
            </div>
            <p id='title'>FRACTION TO DECIMAL CONVERTeR</p>
            <div id='counter'>
                <h1>{count}</h1>
                <button id='button' onClick={increment}>CONVeRT</button>
            </div>
        </div>
    ) 
}
console.log('helloWorld')
//console.log(setCount)
ReactDOM.render(<Counter />, document.getElementById('app'));
//ReactDOM.render(increment(), document.getElementById('button'));
