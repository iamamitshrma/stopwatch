import { useState } from "react";
import "./App.css";
import Stopwatch from "./components/Stopwatch";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const handleStartStopClick = () => {
    setIsRunning((r) => !r);
  };

  return (
    <div className="App">
      <div className="stopwatch_container">
        <h1 className="stopwatch_heading">Stopwatch</h1>
        {isRunning && <Stopwatch />}
        <div className="stopwatch_buttons">
          <button className={isRunning ? "stop_btn" : "start_btn"} onClick={handleStartStopClick}>
            {isRunning ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
