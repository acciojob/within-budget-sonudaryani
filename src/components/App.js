
import React, { useState } from "react";
import './../styles/App.css';

const items = [
  {
    name: "Apple",
    price: 20
  },
  {
    name: "Banana",
    price: 10
  },
  {
    name: "Neutella",
    price: 30
  },
  {
    name: "Razor",
    price: 5
  },
  {
    name: "CornFlakes",
    price: 15
  },
  {
    name: "Sound Bar",
    price: 50
  },
  {
    name: "Iphone",
    price: 80
  }
];
export default function App() {
  let [budget, setBudget] = useState("");
  return (
    <div className="App">
      <p>
        <b>Enter your budget to check available items:</b>
      </p>
      <input type="number" onChange={(e)=> setBudget(e.target.value)} />
      <p>
        <b>Items you can buy are in Green color</b>
      </p>
      <div>
      {items.map((item) => (
        <div className="items">
          <p>{item.name}</p>
          {budget>= item.price ? (<p style={{color: "green"}}>{item.price}</p>) : (<p style={{color: "red"}}>{item.price}</p>)}
        </div>
      ))}
      </div>
    </div>
  );
}

