import { useEffect, useRef } from "react";

// problem statement --->// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.
const Assignment1 = () => {
  const InputRef = useRef(null);
  useEffect(() => {
    InputRef.current.focus();
  }, []);
  return (
    <>
      <input type="text" ref={InputRef} />
      <button onClick={() => InputRef.current.focus()}>
        Click me to focus
      </button>
    </>
  );
};

export default Assignment1;
