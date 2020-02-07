import React from 'react';
import PropTypes from 'prop-types';

import './text-area.scss';

// TextArea
const TextArea = props => {
  // props
  const { name, required, placeholder } = props;

  // render
  return (
    <label className="text-area">
      <textarea className="text-area--input" name={name} rows="9" placeholder={placeholder} required={required} />
      <label className="text-area--label">{name}</label>
    </label>
  )
};

TextArea.propTypes = {
  any: PropTypes.any,
};

export default TextArea;