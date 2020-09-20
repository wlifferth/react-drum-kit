import React from "react";
import PropTypes from "prop-types";

const DrumKit = (props) => {
  const numDrums = 9;
  const drums = [];
  for (let i = 0; i < numDrums; i++) {
    drums.push(<div className="drum">{i}</div>);
  }
  return <div id="display">{drums}</div>;
};

DrumKit.propTypes = {};

export default DrumKit;
