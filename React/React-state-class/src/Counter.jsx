import { useState } from 'react'
import './App.css'

function init(){
  console.log("init is executed");
  return Math.random();
}

export default function Counter() {
  let [count, setCount] = useState(init);
  console.log("component is rendered!");
  // console.log(`count = ${count}`);

  let incCount = () => {
    setCount((currCount) => {
      return currCount + 1;
    });
  }
  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  )
}
