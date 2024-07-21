import { useMemo, useRef, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

const Assignment1 = () => {
  const [input, setInput] = useState(0);
  const [counter, setCounter] = useState(0);

  const factorial = useMemo(() => {
    let fact = 1;
    for (let i = 1; i <= input; i++) {
      fact *= i;
    }
    return fact;
  }, [input]);

  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <br />
      <br />
      <br />
      the factorial is {factorial}
      <br />
      <button onClick={() => setCounter((cou) => cou + 1)}>{counter}</button>
      {/* now even when we chnage the setCounter the component re-renders but it'll not re-compute the factorial bcz , we addded inside the usememo which will only runs when the input chnages :) */}
    </>
  );
};

export default Assignment1;
