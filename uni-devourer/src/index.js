import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

var resources = 0;
var items = {
    
};
var progresses = {
    unmake:0,
    search:0,
    ponder:0
}


function progress(type,increment = 1,multiplier = 1) {
    progresses[type] += increment;
    progresses[type] *= multiplier;

    if (progresses[type] >= 100) {
        progresses[type] -= 100;
        progress(type,0);
    }

    // update style
    document.getElementById(`progress-fill-${type}`).style.setProperty("--fill",progresses[type]);
    document.getElementById(`progress-count-${type}`).innerHTML = `${Math.round(progresses[type])}%`;
}

function onload() {
    progress("unmake",0);
    progress("search",0);
    progress("ponder",0);
}