import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { PlayerContext } from '../../providers/PlayerProvider';
import { PageContext } from '../../providers/PageProvider';

import MiniPlayer from '../../components/MiniPlayer';

import './home.scss';

/**
 * Home
 */
const Home = (props) => {
  // player context
  const contextPlayer = useContext(PlayerContext);
  // page context
  const pageContext = useContext(PageContext);
  // page
  const page = pageContext.page;

  const [ data, setData ] = useState([]);
  const [ item, setItem ] = useState({});
  const [ current, setCurrent ] = useState(0);

  // use effect
  useEffect(() => {
    setData(page.audios);
  }, [page.audios]);

  // set audio
  const setAudio = (audio) => {
    if (audio instanceof Object) {
      setItem(audio);
    }
  };

  // on set item
  const onSetItem = (index) => {
    if (Number.isInteger(index) === true) {
      const itemCurrent = data[index];
      
      if (itemCurrent instanceof Object) {
        if (itemCurrent.hasOwnProperty('audio')) {
          setAudio(itemCurrent.audio);
        }
      }

      setCurrent(index);
    }
  };

  // on next prev
  const onNextPrev = (e = 'prev') => {
    let index = 0;
    const total = data.length - 1;

    if (e === 'prev') {
      index = (current - 1) < 0 ? total : current - 1;
    } else if (e === 'next') {
      index = (current + 1) > total ? 0 : (current + 1);
    }

    onSetItem(index);
  };

  // return
  return (
    <div className="page home">
      <div className="home--audio">
        <MiniPlayer
          {...contextPlayer.audio}
          item={item}
          onNextPrev={onNextPrev}
          onSetAudio={contextPlayer.onSetAudio}
          onPlayAudio={contextPlayer.onPlayAudio} />
      </div>
    </div>
  );
}

Home.propTypes = {
  any: PropTypes.any,
}

export default Home;