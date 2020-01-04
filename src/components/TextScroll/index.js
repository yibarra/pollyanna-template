import React from 'react';
import PropTypes from 'prop-types';

import { Scrollbars } from 'react-custom-scrollbars';

import './text-scroll.scss';

// text scroll
const TextScroll = props => {
  return (
    <div className="text-scroll" data-type={props.type}>
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