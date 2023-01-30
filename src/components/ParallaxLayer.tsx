import React, { useState, useEffect, ReactNode } from 'react';

interface Props {
    children: ReactNode,
    speed: number,
    offset: number
}

const ParallaxLayer = ({ children, speed, offset }: Props) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const translateY = scrollY * speed + offset;

  return (
    <div
      style={{
        transform: `translateY(${translateY}px)`,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer;
