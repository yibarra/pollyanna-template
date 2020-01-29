import React from 'react';
import PropTypes from 'prop-types';

import './footer.scss';

// Footer
const Footer = () => {
  const items = [{
    url: '/',
    name: 'Facebook'
  }, {
    url: '/',
    name: 'Instagram'
  }, {
    url: '/',
    name: 'Youtube'
  }];

  // render
  return (
    <footer className="footer">
      <div className="footer--info">
        <div className="footer--networks">
          <ul className="footer--networks--list">
            {items.map((item, index) => <li className="footer--networks--item" key={index}>
              <a className="link" href={item.url}>{item.name}</a>
            </li>)}
          </ul>
        </div>

        <p className="copy">
          <i className="material-icons">copyright</i>

          <a className="to" href="tomail()">
            <span className="mail">yeissonibarra@gmail.com</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  any: PropTypes.any,
}

export default Footer;