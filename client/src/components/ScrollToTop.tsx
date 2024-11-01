import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  /* 
    The reason window.scrollTo(1, 0) works while window.scrollTo(0, 0) 
    doesn't may be due to some rendering quirks in certain browsers or environments 
    where scrollTo(0, 0) is interpreted as no scroll change. 
    Adding a small offset (like 1 on the x-axis) forces the browser to scroll, resolving this issue. 
  */

  useEffect(() => {
    window.scrollTo(1, 0);
  }, [pathname]);

  return null;
}
