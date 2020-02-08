import React from 'react';
import PropTypes from 'prop-types';

import { Scrollbars } from 'react-custom-scrollbars';

import './text-scroll.scss';

// text scroll
const TextScroll = props => {
  // props
  const { height, type, width } = props;
  
  // render
  return (
    <div className="text-scroll" data-type={type}>
      <div className="text-scroll--info">
        <h1>Pollyanna Ferrari</h1>
        <p>Rio de Janeiro Brasil</p>
      </div>

      <Scrollbars style={{ width: width, height: height }}>
        {props.children}
      </Scrollbars>
    </div>
  )
};

TextScroll.propTypes = {
  height: PropTypes.number,
  type: PropTypes.number.isRequired,
  width: PropTypes.number,
};

export default TextScroll;