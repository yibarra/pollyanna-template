import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './webdoor-item.scss';

/**
 * Webdoor Item
 *
 * @class WebdoorItem
 * @extends {Component}
 */
const WebdoorItem = ({ item: { description, linkUrl, linkText, name } }) => {
  // translate
  const { t } = useTranslation();
  
  // render
  return (
    <div className="webdoor--item">
      <div className="container">
        <p className="title">{t(name)}</p>
        <p className="description">{t(description)}</p>

        <Link className="btn-more r" to={`#/${linkUrl}`}>{t(linkText)}</Link>
      </div>
    </div>
  );
};

WebdoorItem.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
}

export default WebdoorItem;