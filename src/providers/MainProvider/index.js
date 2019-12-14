import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import 'firebase/firestore';
import firebase from 'firebase/app';
import { FirestoreProvider, FirestoreCollection } from '@react-firebase/firestore';
import { config } from '../../config';

// main context
const MainContext = createContext({
  template: {},
  mouse: {},
});

// Main provider
const MainProvider = props => {
  // mouse
  const [ mouse, setMouse ] = useState({ x: 0, y: 0 });

  // cursor
  const cursor = event => {
    if (!event instanceof Object) return false;
    
    setMouse({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // use effect
  useEffect(() => {
    window.addEventListener('mousemove', e => cursor(e), false);

    return () => {
      window.removeEventListener('mousemove', () => cursor);
    };
  }, []);

  // render
  return (
    <FirestoreProvider firebase={firebase} {...config}>
      <FirestoreCollection path="pollyanna/" orderByValue={"created_on"}>
        {({ value }) => {
          return <MainContext.Provider
            value={{
              template: value,
              mouse: mouse,
            }}>
            {props.children}
          </MainContext.Provider>;
        }}
      </FirestoreCollection>
    </FirestoreProvider>
  )
}

MainProvider.propTypes = {
  any: PropTypes.any,
}

export { MainProvider, MainContext };
export default MainProvider;