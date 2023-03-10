import React, { useState, useEffect, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  speed: number;
  className?: string
}

const Parallax = ({ children, speed, className }: Props) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const divStyle = { transform: `translateY(${scrollY * speed}px)` }

  return (
    <div style={divStyle} className = {className}>
      {children}
    </div>
  );
};

export default Parallax;
