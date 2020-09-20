import React from "react";
import PropTypes from "prop-types";
import Drum from "./Drum";

const DrumKit = ({ drums, playAudio }) => {
  const numDrums = 9;
  console.log(drums);
  let drumComponents = drums.map((drumData, i) => {
    return (
      <Drum
        key={i}
        letter={drumData.letter}
        drumName={drumData.name}
        audioPath={drumData.audioPath}
        playAudio={playAudio}
      />
    );
  });
  return <div id="display">{drumComponents}</div>;
};

DrumKit.propTypes = {};

export default DrumKit;
