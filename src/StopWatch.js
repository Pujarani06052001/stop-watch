import React from 'react';
import './StopWatch.css'; 

const StopWatchWatch = () => {
    return (
        <>
        <div className="watch-container" >
            <div className="watch">
                <div className="watch-face">
                    <div className="hand hour-hand"></div>
                    <div className="hand minute-hand"></div>
                    <div className="hand second-hand"></div>
                    <div className="center-circle"></div>
                </div>
            </div>
            <div className="controls">
                <button className="control-button stop-button">Start</button>
                <button className="control-button restart-button">Stop</button>
                <button className="control-button stop-button-only">Restart</button>
            </div>
        </div>

        </>
    );
};

export default StopWatchWatch;
