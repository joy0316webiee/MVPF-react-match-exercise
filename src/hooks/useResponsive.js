/**
 * Responsive helpers
 */
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

// constants
import { screenSizes } from '../constants';

export const ZERO_OFFSET_FONT_SIZE = 10;
export const ZERO_OFFSET_FONT_PERCENTAGE = 62.5;

export const BREAKPOINTS = [
  { maxWidth: screenSizes.XXLARGE, fontSize: 62.5 },
  { maxWidth: screenSizes.XLARGE, fontSize: 56.5 },
  { maxWidth: screenSizes.LARGE, fontSize: 48.5 },
  { maxWidth: screenSizes.MEDIUM, fontSize: 41.5 },
  { maxWidth: screenSizes.SMALL, fontSize: 68.5 },
  { maxWidth: screenSizes.XSMALL, fontSize: 62.5 },
];

/**
 * Converts current display font size to JS understandable values so
 */
const useResponsive = () => {
  const [isClient, setIsClient] = useState(false);
  const [state, updateState] = useState({
    multiplier: 1,
    offsetIndex: ZERO_OFFSET_FONT_SIZE,
    isDesktop: false,
    isTablet: false,
    isMobile: false
  });

  const isMobile = useMediaQuery({
    maxWidth: screenSizes.XSMALL
  });

  const isTablet = useMediaQuery({
    minWidth: screenSizes.XSMALL + 1,
    maxWidth: screenSizes.SMALL
  });

  const isLaptop = useMediaQuery({
    minWidth: screenSizes.SMALL + 1,
    maxWidth: screenSizes.MEDIUM
  });

  const isDesktop = useMediaQuery({
    minWidth: screenSizes.MEDIUM + 1
  });

  const setState = (update) =>
    updateState({
      ...state,
      ...(update || {}),
    });

  const onWindowResize = () => {
    const screenWidth = window.innerWidth;

    let breakPointIndex = BREAKPOINTS.findIndex(({ maxWidth }) => maxWidth < screenWidth);
    if (breakPointIndex === -1) breakPointIndex = BREAKPOINTS.length - 1;
    if (breakPointIndex > 0) breakPointIndex -= 1;

    if (BREAKPOINTS[breakPointIndex]) {
      const { fontSize } = BREAKPOINTS[breakPointIndex];
      setState({ multiplier: fontSize / ZERO_OFFSET_FONT_PERCENTAGE });
    }
  };

  useEffect(() => {
    // validate window
    if (typeof window === 'undefined') return;
    setIsClient(true);

    // resize event listener
    onWindowResize();
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return {
    ...state,
    isDesktop: isClient ? isDesktop : true,
    isLaptop: isClient ? isLaptop : true,
    isTablet: isClient ? isTablet : false,
    isMobile: isClient ? isMobile : false
  };
};

export default useResponsive;
