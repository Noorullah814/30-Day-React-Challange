import React, { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);          
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const intervalRef = useRef(null);

  const start = () => {
    if (isRunning) return;

    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 10);  
    }, 10);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
    setIsRunning(false);
  };

  const recordLap = () => {
    if (!isRunning) return;
    setLaps((prev) => [...prev, time]);
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch-container">
      <h1 className="display">{formatTime(time)}</h1>

      <div className="controls">
        {!isRunning ? (
          <button onClick={start} className="btn start">Start</button>
        ) : (
          <button onClick={pause} className="btn pause">Pause</button>
        )}
        
        <button onClick={recordLap} className="btn lap" disabled={!isRunning}>
          Lap
        </button>
        
        <button onClick={reset} className="btn reset">Reset</button>
      </div>

      {laps.length > 0 && (
        <div className="laps">
          <h3>Laps</h3>
          <ul>
            {laps.map((lapTime, index) => (
              <li key={index}>
                Lap {index + 1}: <span>{formatTime(lapTime)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Stopwatch;