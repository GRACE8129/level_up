import React from "react";
import { useState } from "react";
import "./count.css";
import Button from "./Button";
import CountDisplay from "./countDisplay";

const Count = () => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };

  const decrement = () => {
    setcount(count - 1);
  };

  const reset = () => {
    setcount(0);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter</h1>
      <CountDisplay onCount={count} />
      <div className="button-group">
        <Button onClick={increment} label="+" />
        <Button onClick={decrement} label="-" />
        <Button onClick={reset} label="Reset" />
      </div>
    </div>
  );
};

export default Count;
