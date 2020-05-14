import { useCallback } from 'react';

// use position block
function usePositionBlock () {
  // position
  const position = useCallback((index, items) => {
    const left = (index / items.length) * 100;
    const width = parseInt(Math.floor(100 / items.length));

    return { left: `${left}%`, width: `${width}%` };
  }, []);

  return {
    position,
  }
};

export default usePositionBlock;