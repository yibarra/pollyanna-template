import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

import GalleryMin from '../../components/GalleryMin';
import TextScroll from '../../components/TextScroll';

import './bio.scss';

const Bio = ({ loading, mobile, page: { gallery } }) => {
  // translate
  const { t } = useTranslation();

  // current
  const [ current, setCurrent ] = useState(0);
  // last
  const [ last, setLast ] = useState(0);

  // on set item
  const onSetItem = (index) => {
    if (Number.isInteger(index) === true) {
      setLast(current);
      setCurrent(index);
    }
  };

  // on next prev
  const onNextPrev = (e = 'prev') => {
    let index = 0;
    const total = gallery.length - 1;

    if (e === 'prev') {
      index = (current - 1) < 0 ? total : current - 1;
    } else if (e === 'next') {
      index = (current + 1) > total ? 0 : (current + 1);
    }

    onSetItem(index);
  };

  // handlder mobile
  const handlerMobile = value => {
    if (mobile.isMobile() !== true) {
      onNextPrev(value);
    }
  };

  // return
  return (
    <div className="page bio" data-active={loading}>
      <div className="wrapper">
        <GalleryMin
          current={current}
          last={last}
          handlerMobile={handlerMobile}
          onNextPrev={onNextPrev}
          setCurrent={setCurrent}
          items={gallery}
          type={2} />

        <TextScroll height={300} type={2}><p>{t('bioRelease')}</p></TextScroll>
      </div>
    </div>
  )
};

Bio.propTypes = {
  any: PropTypes.any,
}

export default Bio;