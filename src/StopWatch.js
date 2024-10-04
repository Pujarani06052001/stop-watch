"use client"
import React, { useState, useEffect } from 'react';
import './StopWatch.css'; 

const Stopwatch = () => {
    const [time, setTime] = useState(0); 
    const [isRunning, setIsRunning] = useState(false); 

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000); 
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval); 
    }, [isRunning, time]);

    const start = () => {
        setIsRunning(true);
    };

    const stop = () => {
        setIsRunning(false);
    };

    const reset = () => {
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (seconds) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${secs}`;
    };

    return (
        <div className="stopwatch">
            <h1>{formatTime(time)}</h1>
            <div className="buttons">
                <button onClick={start} disabled={isRunning}>
                    Start
                </button>
                <button onClick={stop} disabled={!isRunning}>
                    Stop
                </button>
                <button onClick={reset} disabled={time === 0}>
                    Restart
                </button>
            </div>
        </div>
    );
};

export default Stopwatch;
