// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items.
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).

// You will learn something new here, specifically how you have to pass more than one value in the dependency array ,

import { useMemo, useState } from "react";
const words = [
  "hey",
  "hello",
  "this",
  "goodmorning",
  "goodnight",
  "bye",
  "night",
];
const lines = 30;
let sentences = []; // to declare the array
for (let i = 0; i < lines; i++) {
  let sentence = "";
  for (let j = 0; j < words.length; j++) {
    sentence += words[Math.round(Math.random() * words.length - 1)];
    sentence += " ";
  }
  sentences[i] = sentence;
}
console.log(sentences);
const Assignment2 = () => {
  const [input, setInput] = useState(sentences); // inital value is all the sentences
  const [filter, setFilter] = useState("");
  const filteredsentences = useMemo(() => {
    let MatchedSentences = input.filter((sentence) =>
      sentence.includes(filter)
    );
    return MatchedSentences;
  }, [filter, input]); // why we add input as a dependency bcz just assusme that if the data comes from the backend then on the scrren we should be able to to see that data that's why if the input state changes we will run this useMmeo and fetched that particu;lar data :)
  return (
    <>
      <input type="text" onChange={(e) => setFilter(e.target.value)} />
      {filteredsentences.map((sentence) => (
        <div>{sentence}</div>
      ))}
    </>
  );
};

export default Assignment2;
