import React, { useState, useEffect, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  speed: number;
}

const Parallax = ({ children, speed }: Props) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ transform: `translateY(${scrollY * speed}px)` }}>
      {children}
    </div>
  );
};

export default Parallax;
