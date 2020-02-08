import React from 'react';
import PropTypes from 'prop-types';

import Form from '../../components/Form';

import './contact.scss';

// contact
const Contact = props => {
  // props
  const { page: { form } } = props;

  // render
  return (
    <div className="contact">
      <div className="wrapper">
        
        <div className="contact--info">
          <div className="contact--info--container">
            <h1 className="title-main">contatos</h1>

            <ul className="contact--info--list">
              <li className="contact--info--item">
                <p className="text">
                  <span className="title">Email</span>
                  <span className="value"><i className="material-icons">mail</i>pollyferrari26@gmail.com</span>
                </p>
              </li>
              <li className="contact--info--item">
                <p className="text">
                  <span className="title">Phones</span>
                  <span className="value"><i className="material-icons">phone</i>(+351) 939 254 776</span>
                  <span className="value"><i className="material-icons">phone</i>(+351) 939 610 258</span>
                </p>
              </li>
            </ul>
          </div>

          <div className="contact--info--container">
            <h1 className="title-main">Creditos</h1>

            <ul className="contact--info--list credits">
              <li className="contact--info--item">
                <p className="text">
                  <span className="title">David Ktorza</span>
                  <span className="value"><i className="material-icons">link</i>Fotografo</span>
                </p>
              </li>
              <li className="contact--info--item">
                <p className="text">
                  <span className="title">Danielle Ferrari</span>
                  <span className="value"><i className="material-icons">link</i>Designer</span>
                </p>
              </li>
              <li className="contact--info--item">
                <p className="text">
                  <span className="title">Grupo Fala Brasil</span>
                  <span className="value"><i className="material-icons">link</i>Gravações</span>
                </p>
              </li>
              <li className="contact--info--item">
                <p className="text">
                  <span className="title">Julian Ibarra</span>
                  <span className="value"><i className="material-icons">link</i>Web Developer</span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact--form">
          <h1 className="title-main">Mensagem</h1>
          <Form form={form} />
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  page: PropTypes.object,
};

export default Contact;