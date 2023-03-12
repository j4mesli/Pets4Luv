import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Slideshow.css';

const images = [
  '/animals/dog_1.jpg',
  '/animals/cat_1.jpg',
  '/animals/cat_2.jpg',
  '/animals/dog_2.jpg',
];

function Slideshow() {
  const [index, setIndex] = useState(0);
  const [queuedImage, setQueuedImage] = useState(1);
  const [sliding, isSliding] = useState(false);
  const slideshowRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const queuedImageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const incrementImage = useCallback((currentIndex: number, currentQueuedImage: number) => {
    isSliding(true);

    // timeout for swapping the div.slideshow image first, done to prevent flickering
    const timeoutImageSwap = setTimeout(() => {
      slideshowRef.current.style.backgroundImage = `url(${ images[currentIndex === 3 ? 0 : currentIndex + 1] })`;
    }, 1000);
    // timeout for swapping the images and toggling sliding animation
    // 1500 ms vs 1000ms to line it up with the CSS keyframes animation
    const timeoutSliding = setTimeout(() => {
      if (currentIndex < 3) setIndex(currentIndex + 1);
      else setIndex(0);
      if (currentQueuedImage < 3) setQueuedImage(currentQueuedImage + 1);
      else setQueuedImage(0);
      queuedImageRef.current.style.backgroundImage = `url(${ images[currentQueuedImage] })`;
      isSliding(false);
    }, 1500);

    return () => {
      clearTimeout(timeoutImageSwap);
      clearTimeout(timeoutSliding);
    }
  }, []);

  // slideshow change image useEffect
  useEffect(() => {
    const timeoutId = setTimeout(() => incrementImage(index, queuedImage), 6000);
    return () => clearTimeout(timeoutId);
  }, [incrementImage, index, queuedImage]);

  return (
    <div className='slideshow-wrapper'>
      <h1>Bringing Families Together... One Rescue at a Time</h1>
      <div ref={slideshowRef} className={`slideshow ${sliding ? 'sliding' : ''}`} style={{ backgroundImage: `url(${ images[index] })` }}></div>
      <div ref={queuedImageRef} className={`queued-image ${sliding ? 'sliding' : ''}`} style={{ backgroundImage: `url(${ images[queuedImage] })` }}></div>
    </div>
  );
}

export default Slideshow;
