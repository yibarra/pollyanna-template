import React from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

import './mini-player-info.scss';

/**
 * Mini Player Info
 */
const MiniPlayerInfo = (props) => {
  const { t } = useTranslation();

  /**
   * render
   *
   * @returns
   * @memberof MiniPlayerControls
   */
  return (
    <p className="mini-player--info" data-played={props.play}>
      <span className="info">{t('play_now')}</span>
      <span className="name">
      <span className="text-scroll">{props.name}</span>
      </span>
    </p>
  )
};

MiniPlayerInfo.propTypes = {
  name: PropTypes.string,
  play: PropTypes.bool,
}


export default MiniPlayerInfo;