import React, { useState, useEffect, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  speed: number;
}

const ParallaxHorizontal = ({ children, speed }: Props) => {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ transform: `translateX(${scrollX * speed}px)` }}>
      {children}
    </div>
  );
};

export default ParallaxHorizontal;
