import { useEffect, useState } from 'react';

function useSlidesToScroll() {
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  useEffect(() => {
    // handle how many slides to scroll on breakpoints
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesToScroll(4);
      } else if (width >= 768) {
        setSlidesToScroll(3);
      } else if (width >= 640) {
        setSlidesToScroll(2);
      } else {
        setSlidesToScroll(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return slidesToScroll;
}

export default useSlidesToScroll;
