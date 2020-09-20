import React from "react";
import PropTypes from "prop-types";

const Drum = ({ letter, drumName, audioPath, playAudio }) => {
  const audioId = "audio" + letter;
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Clicked!");
    playAudio(audioId);
  };
  return (
    <div className="drum" onClick={handleClick}>
      <div className="drumAnnotations">
        <span className="drumName">{drumName}</span>
        <span className="drumShortcut">{letter}</span>
        <audio id={audioId}>
          <source src={"/" + audioPath} type="audio/wav"></source>
        </audio>
      </div>
    </div>
  );
};

Drum.propTypes = {};

export default Drum;
