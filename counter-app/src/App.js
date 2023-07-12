import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("UseEffect 1 is invoked");
  // });
  // useEffect(() => {
  //   console.log("UseEffect 2 is invoked");
  // }, []);
  // useEffect(() => {
  //   console.log("UseEffect 3 is invoked");
  // }, [count]);

  return (
    <div className="main">
      <h1>{count}</h1>

      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            if (count <= 0) {
              setCount(0);
            } else {
              setCount(count - 1);
            }
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
