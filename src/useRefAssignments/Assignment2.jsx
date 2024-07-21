// problem statment ---> // Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

// important thing about useRef is -->

/*
  TWO USE CASES OF IT --->
  1) to interact or access the DOM element by the useRef
  2) to store the value persistantly accross the re-renders :)
*/

import { useState } from "react";
import { useRef } from "react";

const Assignment2 = () => {
  const [render, setRender] = useState(1);
  const timeRender = useRef(0); // as we all knew that like others state the values will be persistent accross the whole re-rendering lifeCycle of react :)
  timeRender.current++;
  return (
    <>
      hey this component has been render for the {timeRender.current} time
      <br />
      <button onClick={() => setRender((render) => render + 1)}>
        incrment render
      </button>
    </>
  );
};

export default Assignment2;
