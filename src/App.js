import React from "react";
import "./App.scss";

import DrumKit from "./components/DrumKit";

import Data from "./basic-drumkit.json";

const playAudio = (audioId) => {
  console.log("Got to playAudio!");
  var audio = document.getElementById(audioId);
  audio.play();
};

function App() {
  return (
    <div id="drum-machine">
      <header className="App-header">Drum Kit</header>
      <DrumKit drums={Data["drums"]} playAudio={playAudio} />
    </div>
  );
}

export default App;
