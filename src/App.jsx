import { useState } from "react";

import "./App.css";
export default function App() {
  const [count, setCount] = useState(0);


  return (
    <>

      <h1>Counter</h1>
      <div className="card">
        <h1>Count is {count}</h1>
      </div>
      <div>
        <button
          onClick={() => { }}
          style={{ margin: "0 5 px" }}
        >
          Increase
        </button>

        <button
          onClick={() => { }}
          style={{ margin: "0 5 px" }}
        >
          Decrease
        </button>

        <button
          onClick={() => { }}
          style={{ margin: "0 5 px" }}
        >
          Reset
        </button>
      </div>

      <div style={{ margin: "10px 0" }}>
        <input
          style={{
            width: "100px",
            border: "1px solid white",
            margin: "0 5px",
            padding: "0.6em 1.2em",
          }}
          value={10}
          onChange={() => { }}
          type="text"
        >
        </input>
        <button>Set to 10</button>
      </div>
    </>
  );
}