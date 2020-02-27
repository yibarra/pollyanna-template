import React from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

import './text-area.scss';

// TextArea
const TextArea = ({ name, required, placeholder }) => {
  // translate
  const { t } = useTranslation();
  
  // render
  return (
    <label className="text-area">
      <textarea className="text-area--input" name={name} rows="9" placeholder={t(placeholder)} required={required} />
      <label className="text-area--label">{t(name)}</label>
    </label>
  )
};

TextArea.propTypes = {
  any: PropTypes.any,
};

export default TextArea;