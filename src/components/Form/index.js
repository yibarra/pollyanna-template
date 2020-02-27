import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

import FormTypes from './FormTypes';

import './form.scss';

// Form
const Form = props => {
  // translate
  const { t } = useTranslation();

  // props
  const { form } = props;

  // element
  const element = useRef(null);

  // send data
  const sendEmail = data => {
    if (data instanceof Object === false) return false;

    emailjs.send('gmail', 'email_contact', data)
      .then(
        (response) => console.log('SUCCESS!', response.status, response.text), 
        (error) => console.log('FAILED...', error));
  };

  // on submit
  const onSubmit = e => {
    e.preventDefault();

    if (element.current instanceof Object) {
      const formData = new FormData(element.current);

      const data = Array.from(formData.entries()).reduce((memo, pair) => ({
        ...memo,
        [pair[0]]: pair[1],
      }), {});

      sendEmail(data);
    }
  };

  // use effect
  useEffect(() => {
    if (emailjs instanceof Object) {
      emailjs.init(process.env.REACT_APP_EMAIL_API);
    }
  });

  // render
  return (
    <form className="form" onSubmit={onSubmit} autoComplete="off" ref={element}>
      {Array.isArray(form) && form.map((item, index) => 
        <FormTypes item={item} index={index} key={index} />)} 

      <button className="btn btn-more">{t('send')}</button>
    </form>
  );
};

Form.propTypes = {
  form: PropTypes.array,
};

export default Form;