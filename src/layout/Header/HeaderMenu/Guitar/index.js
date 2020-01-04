import React from 'react';
import PropTypes from 'prop-types';

import './guitar.scss';

// Guitar
const Guitar = props => {
  return(
    <div className="guitar">
      <div className="guitar--center">
        <div className="center"></div>
        <div className="out"></div>
        <div className="border"></div>
      </div>
      <div className="guitar--ropers">
        <div className="rope"></div>
        <div className="rope"></div>
        <div className="rope"></div>
        <div className="rope"></div>
        <div className="rope"></div>
        <div className="rope"></div>
      </div>
    </div>
  );
};

Guitar.propTypes = {
  any: PropTypes.any,
};

export default Guitar;