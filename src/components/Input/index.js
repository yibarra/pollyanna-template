import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

import './input.scss';

// Input
const Input = ({ error, name, required, placeholder, type }) => {
  // translate
  const { t } = useTranslation();

  // state
  const [ valid, setValid ] = useState(true);

  // ref
  const element = useRef(null);

  // key press
  const checkInput = () => {
    if (element.hasOwnProperty('current') === false && element.current instanceof Object) return false;
    
    const value = element.current.hasOwnProperty('value') ? element.current.value : '';

    if (value !== '') {
      switch (type) {
        case 'phone':
          if (/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm.test(value) === true) {
            return setValid(true);
          }

          break;
        case 'email':
          if (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) === true) {
            return setValid(true);
          }

          break;
        case 'text':
        case '':
        default:
          if (/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(value) === true) {
            return setValid(true);
          }

          break;
        }

        return setValid(false);
    }
  };

  // render
  return (
    <label className="input" data-error={!valid}>
      <input 
        className="input--input"
        name={name}
        onKeyUp={checkInput}
        ref={element}
        required={required}
        placeholder={t(placeholder)}
        type="text" />
      <label className="input--label">
        <span className="text">{t(name)}</span>
        <label className="input--error">{t(error)}</label>
      </label>
    </label>
  );
};

Input.propTypes = {
  any: PropTypes.any
};

export default Input;