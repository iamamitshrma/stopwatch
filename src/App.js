import { useRef, useState } from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch';
import { formatTime } from './helpers/formatTime';

function App() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    function start() {
      if (!isRunning) {
        setIsRunning(true);
        startTimeRef.current = Date.now() - time;
        intervalRef.current = setInterval(() => {
          setTime(Date.now() - startTimeRef.current);
        }, 10);
      }
    }

    function stop() {
      if (isRunning) {
        setIsRunning(false);
        clearInterval(intervalRef.current);
      }
    }
  return (
    <div className="App">
      <div className="stopwatch_container">
        <h1 className="stopwatch_heading">Stopwatch</h1>
        {isRunning ? <Stopwatch time={time} /> : <h1>{formatTime(time)}</h1>}

        <div className="stopwatch_buttons">
          <button onClick={start} className="start_btn">
            Start
          </button>
          <button onClick={stop} className="stop_btn">
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
