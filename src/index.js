import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './StopWatch';
import  Stopwatch from "./StopWatch.js"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Stopwatch />
  </React.StrictMode>
);
