// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

import { useState, useMemo } from "react";

const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    { name: "Tomato", value: 30 },
    { name: "Tomato", value: 30 },
    // Add more items as needed
  ]);

  const MoneySpentAtStore = useMemo(() => {
    return items.reduce((total, currentItem) => total + currentItem.value, 0);
  }, [items]);

  return (
    <>
      {items.map((item, index) => (
        <div key={index}>{`${item.name} and it's price is ${item.value} `}</div>
      ))}
      <h3>you spent $ {MoneySpentAtStore}</h3>
    </>
  );
};

export default Assignment3;
