import React from 'react';
import PropTypes from 'prop-types';

import FormTypes from './FormTypes';

import './form.scss';

// Form
const Form = props => {
  // props
  const { form } = props;

  const onSubmit = e => {
    e.preventDefault();

    console.log(e);
  };

  // render
  return (
    <form className="form" onSubmit={onSubmit} autoComplete="off">
      {Array.isArray(form) && form.map((item, index) => 
        <FormTypes item={item} index={index} key={index} />)}

      <button className="btn btn-more">Enviar</button>
    </form>
  );
};

Form.propTypes = {
  form: PropTypes.array,
};

export default Form;