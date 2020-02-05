import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = props => {
  // props
  const { type } = props;

  return (
    <label className="input">
      <input type={type} />
    </label>
  );
};

Input.propTypes = {
  any: PropTypes.any
};

export default Input;