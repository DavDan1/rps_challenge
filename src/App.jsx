import React from "react";
import "./App.css";

function App() {
  const play = 'Play'
  return (
    <div className="container">
      <h1>My App</h1>
      <button onClick={play}>
      Play
    </button>
    </div>
  );
}

export default App;
