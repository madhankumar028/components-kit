import { useState, useEffect } from 'react';

/**
 * Accepts a media query string then uses like '(min-width: 768px)' the
 * [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) API to determine if it
 * matches with the current document.<br />
 * It also monitor the document changes to detect when it matches or stops matching the media query.<br />
 * Returns the validity state of the given media query.
 *
 */
export const useMediaQuery = (query) => {
  const isBrowser = typeof window !== 'undefined';
  const [matches, setMatches] = useState(isBrowser ? window.matchMedia(query).matches : false);

  useEffect(() => {
    if (isBrowser) {
      let media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      let listener = () => setMatches(media.matches);
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [query]);

  return matches;
};
