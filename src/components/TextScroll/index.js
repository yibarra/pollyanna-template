import React from 'react';
import PropTypes from 'prop-types';

import { Scrollbars } from 'react-custom-scrollbars';

import './text-scroll.scss';

// text scroll
const TextScroll = props => {
  return (
    <div className="text-scroll" data-type={props.type}>
      <div className="text-scroll--info">
        <h1>Pollyanna Ferrari</h1>
        <p>Rio de Janeiro Brasil</p>
      </div>

      <Scrollbars style={{ width: props.width, height: props.height }}>
        {props.children}
      </Scrollbars>
    </div>
  )
};

TextScroll.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.number.isRequired,
};

export default TextScroll;