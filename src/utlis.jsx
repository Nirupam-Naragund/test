import { useEffect, useState } from 'react';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', listener);
    } else {
      media.addEventListener(listener);
    }

    return () => {
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', listener);
      } else {
        media.removeEventListener(listener);
      }
    };
  }, [matches, query]);

  return matches;
};

export const useIsSmall = () => useMediaQuery('(min-width: 480px)');
export const useIsMedium = () => useMediaQuery('(min-width: 768px)');
