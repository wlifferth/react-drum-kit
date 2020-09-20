import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import DrumKit from "./components/DrumKit";

function App() {
  return (
    <div id="drum-machine">
      <header className="App-header">Drum Kit</header>
      <DrumKit />
    </div>
  );
}

export default App;
