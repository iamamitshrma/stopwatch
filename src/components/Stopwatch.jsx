import React, { useEffect, useState } from "react";
import { formatTime } from "../helpers/formatTime";
import "./Stopwatch.css";

const Stopwatch = () => {
  const time = localStorage.getItem("time");
  const [count, setCount] = useState(time === "null" ? 0 : Number(time));

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setCount((c) => c + 10);
    }, 10);
    return () => {
      clearInterval(timer);
      localStorage.setItem("time", count)
    };
  }, [count]);

  return (
    <div>
      <h1 className="stopwatch_counter">{formatTime(count)}</h1>
    </div>
  );
};

export default Stopwatch;
