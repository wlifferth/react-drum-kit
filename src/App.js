import React from "react";
import "./App.scss";

import DrumKit from "./components/DrumKit";

import Data from "./basic-drumkit.json";

const cachedAudio = {};

const playAudio = (audioId) => {
  console.log("Got to playAudio!");
  var audio = document.getElementById(audioId);
  if (audio === null) return;
  if (audio.paused) {
    console.log(`AUDIO src=${audio.src}`);
    audio.play();
  } else {
    console.log("Realized audio is already playing!");
    if (!cachedAudio.hasOwnProperty(audio.src)) {
      console.log(`Added a new list for ${audio.src}`);
      cachedAudio[audio.src] = [];
    }
    let unplayed = true;
    let i = 0;
    while (unplayed) {
      if (i >= cachedAudio[audio.src].length) {
        let newAudio = new Audio();
        newAudio.src = audio.src;
        cachedAudio[audio.src].push(newAudio);
      }
      if (cachedAudio[audio.src][i].paused) {
        cachedAudio[audio.src][i].play();
        unplayed = false;
      }
      i++;
    }
    console.log(
      `New length of cache for ${audio.src}: ${cachedAudio[audio.src].length}`
    );
  }
};

document.onkeypress = (e) => {
  const key = e.key.toUpperCase();
  playAudio("audio" + key);
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
