// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

import { memo, useCallback, useMemo, useState } from "react";

// THINGS TO KNOW
// IMPORTANT THING ---> on each render the js functions also chnages by its references not by the function bodies :)

// the most important thing to understand is that whenever the components mounts inside the DOM what will happen the useCallback we have written as we all know that its used to cached the function itself not a value so the , even if the component mounts or re-render whatever we function definiiton we have written inside the useCallback hook the control never execute or reach there ... only the reference or address of the function will change :)

// but as we knew that control reaches insde the useMeMO bcz its used to cache the value that's why the control goes inside useMmeo logic :)

// but one thing is sure that control only reaches inside the useCallback() hook whenever that particular function called :)

const Assignment1 = () => {
  const [count, setCount] = useState(0);

  const Increment = useCallback(() => {
    // only at the inital mount the reference would be changed of this function  , even if we use or call this function inside the child component this function will be triggers but refernce never changed :) that's why if reference never changes the child components will never again re-render :)
    // reference can be changed even if one of the dependency gets changed :)
    setCount((count) => count + 1);
  }, []);

  const Decrement = useCallback(() => {
    // if (count === 0) return; // it will gives the value as 0 on each time even if the count value isn't 0 why ?

    // bcz when the useCallback() was created at the mounting process the inital value of the count was 0 that's why it gives 0 :)
    // and as we didn't update the useCallback as our dependency array is empty , if we wanna achieve the latest value of the count state either we have to put the count state var as a dependency so our callback() can track the latest value of it , or we should utilize the count value inside the setter fucntion of counter which will have the latest value of it :)

    setCount((count) => {
      console.log(count); // tbis can have access to the latest value of state var count :)
      if (count === 0) return 0;
      return count - 1;
    });
  }, []);

  return (
    <div>
      <button
        style={{ margin: "1rem" }}
        onClick={() => setCount((counter) => counter + 1)}
      >
        {count}
      </button>
      <br />
      <IncrementDecrementComp Increment={Increment} Decrement={Decrement} />
    </div>
  );
};

const IncrementDecrementComp = memo(({ Increment, Decrement }) => {
  return (
    <>
      {console.log("child component")}
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  );
});

export default Assignment1;
