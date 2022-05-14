// Packages
import { useState, useEffect } from 'react';

const useWindowDimensions = () => {
  const getWindowDimensions = () => {
    const width = hasWindow ? window.innerWidth : null,
      height = hasWindow ? window.innerHeight : null;

    return {
      width,
      height,
    };
  };

  const hasWindow = typeof window !== 'undefined',
    [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
};

export default useWindowDimensions;
