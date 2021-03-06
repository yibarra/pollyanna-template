import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

import FormTypes from './FormTypes';

import './form.scss';

// Form
const Form = ({ form }) => {
  // translate
  const { t } = useTranslation();

  // state
  const [ send, setSend ] = useState({ send: false, success: null });
  // element
  const element = useRef(null);

  // send data
  const sendEmail = data => {
    if (data instanceof Object === false) return false;

    emailjs.send('gmail', 'email_contact', data)
      .then(
        (response) => setSend({ success: true, send: true }),
        (error) => setSend({ success: false, send: true }));
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
    <form
      autoComplete="off"
      className="form"
      data-send={send.send}
      onSubmit={onSubmit}
      ref={element}>
      
      {Array.isArray(form) && 
        <div className="form--inputs">
          <h1 className="title-main">{t('message')}</h1>
          {form.map((item, index) =>
            <FormTypes item={item} index={index} key={index} />)}
            <button className="btn btn-more">{t('send')}</button>
        </div>}

      <h1 className="title-main" data-error={!send.success}>{send.success === true ? t('successMessage') : t('errorMessage')}</h1>
    </form>
  );
};

Form.propTypes = {
  form: PropTypes.array,
};

export default Form;