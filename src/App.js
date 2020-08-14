import React from 'react';
import logo from './logo.svg';
import './App.css';
import Workouts from "./components/Workouts";
import Activity from "./components/Activity";

function App() {
  return (
    <div className="App">
     <h1>Workout Tracker</h1>
     <p>Refresh the page to see persisted state! 🙃 </p>
     <Workouts/>
    </div>
  );
}

export default App;
