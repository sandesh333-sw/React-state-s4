import { useState } from "react";

import "./App.css";
export default function App() {
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);

  return (
    <>

      <h1>Counter</h1>
      <div className="card">
        <h1>Count is {count}</h1>
      </div>
      <div>
        <button
          onClick={() => setCount(count+1)}
          style={{ margin: "0 5 px" }}
        >
          Increase
        </button>

        <button
          onClick={() => setCount((count) => Math.max(count-1, 0))}
          style={{ margin: "0 5 px" }}
        >
          Decrease
        </button>

        <button
          onClick={() => setCount(0)}
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
          value={countToSet}
          onChange={(e) => setCountToSet(Number(e.target.value))}
          type="text"
        >
        </input>
        <button
        onClick={() => {
          setCount(Number(countToSet))
        }}
        >
          Increase by  {countToSet}</button>
      </div>
    </>
  );
}