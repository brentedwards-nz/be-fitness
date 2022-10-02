import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, multiply, divide } from '../../../features/advancedCounter/advancedCounterSlice'
import { useState, useRef } from "react";

const About = () => {
  const currentValue = useSelector((state) => state.advancedCounter.value);
  let defaultOperand = 0;

  const inputRef = useRef(0);
  const dispatch = useDispatch();

  const reset = () => {
    console.log(`*** Input: ${inputRef.current.valueOf()}`)
  };

  return (
    <>
      <div><h2>About</h2></div>
      <div>
        <h3>Current Value:</h3>
        <p>{currentValue}</p>
      </div>
      <div>
        <h3>Operand:</h3>
        <input type="text" ref={inputRef} />
      </div>
      <div>
        <h3>Operation</h3>
        <button style={{ margin: "2px" }} onClick={() => { dispatch(increment()) }}>+</button>
        <button style={{ margin: "2px" }}>-</button>
        <button style={{ margin: "2px" }}>*</button>
        <button style={{ margin: "2px" }}>/</button>
        <button style={{ margin: "2px" }} onClick={reset()}>Reset</button>
      </div>
    </>

  )
}

export default About

rfc