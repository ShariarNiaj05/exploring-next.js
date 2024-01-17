"use client"

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>Count: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
    </div>
  );
};

export default Counter;
