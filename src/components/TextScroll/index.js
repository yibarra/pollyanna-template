import React from 'react';
import PropTypes from 'prop-types';

import { Scrollbars } from 'react-custom-scrollbars';
import { useWindowSize } from '@react-hook/window-size';

import './text-scroll.scss';

// text scroll
const TextScroll = ({ children, height, type }) => {
  // width
  const [ width ] = useWindowSize();
  
  // render
  return (
    <div className="text-scroll" data-type={type}>
      <div className="text-scroll--info">
        <h1>Pollyanna Ferrari</h1>
        <p>Rio de Janeiro Brasil</p>
      </div>

      {width > 768 && <Scrollbars style={{ height: height }}>
        {children}
      </Scrollbars>}

      {width <= 768 && <div>{children}</div>}
    </div>
  )
};

TextScroll.propTypes = {
  height: PropTypes.number,
  type: PropTypes.number.isRequired,
};

export default TextScroll;