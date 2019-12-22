import React from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

/**
 * Slider Control Date
 * 
 * @param {*} props 
 */
const SliderControlDate = props => {
  // t
  const { t } = useTranslation();

  // return
  return (
    <div className={`control ${props.type}`}
      data-disable={props.type === 'prev' ? props.current === 0 : props.current === (props.length - 1)}>
      <button className={`btn ${props.type}`} onClick={() => props.onNextPrev(props.type)}>{t(props.type)}</button>
    </div>
  )
};

SliderControlDate.propTypes = {
  current: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  onNextPrev: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

export default SliderControlDate;