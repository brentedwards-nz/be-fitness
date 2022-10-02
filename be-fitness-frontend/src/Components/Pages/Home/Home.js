import React, { useRef } from "react";
import { decrement, increment } from "../../../store/actions/counterActions";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch()
  const counterObject = useSelector((state) => state.counter.counterObject)
  const amountRef = useRef(0);

  let actionsString = "";

  const handleIncrement = () => {
    console.log("handleIncrement: " + amountRef.current.value)
    dispatch(increment(amountRef.current.value));
  };

  const handleDecrement = () => {
    console.log("handleDecrement: " + amountRef.current.value)
    dispatch(decrement(amountRef.current.value));
  };



  return (
    <>
      <div><h2>Home</h2></div>
      <p>{counterObject.value}</p>
      <p>{counterObject.incrementAmount}</p>
      <input ref={amountRef} type="text" />
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <div>
        <h2>Actions</h2>
        <div>
          {actionsString}
        </div>
      </div>
    </>
  )
}

export default Home