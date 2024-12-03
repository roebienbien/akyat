import React, { useEffect } from 'react';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';

type TEmblaOptions = {
  dragFree?: boolean;
  loop?: boolean;
  slidesToScroll?: number;
};
// NOT WORKING
const useNonDraggableEmblaCarousel = (options?: TEmblaOptions): [React.RefObject<HTMLDivElement>, UseEmblaCarouselType | undefined] => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useEffect(() => {
    if (emblaApi) {
      const preventDrag = (event: Event) => event.preventDefault();
      const containerNode = emblaApi.containerNode();

      containerNode.addEventListener('pointerdown', preventDrag);

      return () => {
        containerNode.removeEventListener('pointerdown', preventDrag);
      };
    }
  }, [emblaApi]);

  return [emblaRef, emblaApi];
};

export default useNonDraggableEmblaCarousel;
