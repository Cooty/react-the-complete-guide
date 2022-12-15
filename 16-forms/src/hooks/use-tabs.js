import { useState, useCallback } from "react";

const useTabs = (shownByDefault) => {
  const [shown, setShown] = useState(shownByDefault);

  const setFromUrl = useCallback(() => {
    const url = new URL(window.location.href);
    if (url.hash) {
      const formToShowFromUrl = url.hash.substring(1);
      if (formToShowFromUrl !== shownByDefault) {
        setShown(formToShowFromUrl);
      }
    }
  }, [shownByDefault]);

  return {
    shown,
    setShown,
    setFromUrl,
  };
};

export default useTabs;
