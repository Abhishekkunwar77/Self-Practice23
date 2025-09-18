import React, { useMemo, useState } from "react";
import "./Counter.css"; // Assuming you have a CSS file for styling
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <h1>Your Count : {count}</h1>
      <button className="increment" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="decrement" onClick={() => setCount(count - 1)}>Decrement</button>
      <button className="reset" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

//this is an example of useMemo 

const expensiveCalculation=useMemo(()=>{
  compute();
},[dependencies]);
// use of usecallback
const CallBack=useCallback(()=>{
  console.log("this is the callback function")
},[dependencies])

export default Counter;
