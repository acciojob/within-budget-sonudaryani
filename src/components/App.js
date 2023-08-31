
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
      <table>
      {items.map((item) => (
        <tbody className="items">
          <td>{item.name}</td>
          {budget>= item.price ? (<td style={{color: "green"}}>{item.price}</td>) : (<td style={{color: "red"}}>{item.price}</td>)}
        </tbody>
      ))}
      </table>
    </div>
  );
}

