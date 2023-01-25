import React, { useState, useEffect, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  speed: number;
  className?: string
}

const ParallaxHorizontal = ({ children, speed, className }: Props) => {
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
    <div style={{ transform: `translateX(${scrollX * speed}px)` }} className = {className}>
      {children}
    </div>
  );
};

export default ParallaxHorizontal;
