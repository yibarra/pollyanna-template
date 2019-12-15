import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';

import { BackgroundContext } from '../../providers/BackgroundProvider';

import './background-text.scss';

/**
 * Background Text
 * 
 * @param {*} props 
 */
const BackgroundText = () => {
  // background context
  const backgroundContext = useContext(BackgroundContext);

  // return
  return (
    <div className="background-text">
      <ul className="background-text--list">
        {backgroundContext.items && <Fragment>
            {backgroundContext.items.map((item, index) =>
              <li className="background-text--item" key={index}>
                <h1 className="title">{item.name}</h1>
              </li>
            )}
          </Fragment>
        }
      </ul>
    </div>
  );
};

BackgroundText.propTypes = {
  any: PropTypes.any,
}

export default BackgroundText;