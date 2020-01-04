import React from 'react';
import PropTypes from 'prop-types';

import './mini-player-info.scss';

// Mini Player Info
const MiniPlayerInfo = (props) => {
  // render
  return (
    <p className="mini-player--info">
      <span className="name">{props.name}</span>
    </p>
  )
};

MiniPlayerInfo.propTypes = {
  name: PropTypes.string,
  play: PropTypes.bool,
}


export default MiniPlayerInfo;