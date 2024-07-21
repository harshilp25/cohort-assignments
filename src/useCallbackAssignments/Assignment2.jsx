// Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of

import { useCallback, useState } from "react";

// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.
const Assignment2 = () => {
  const [input, setInput] = useState(0);
  const handleClick = useCallback(() => {
    alert(input);
  }, [input]); // we have to give the input as an dependency to keep track of the current count var :)
  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <br />
      <Alert handleClick={handleClick} />
    </>
  );
};

const Alert = ({ handleClick }) => {
  // even if we put react memo here then sill this component will be re-render as the props is changes :)
  return (
    <>
      {console.log("object")}
      <button onClick={handleClick}>click me</button>
    </>
  );
};

export default Assignment2;
