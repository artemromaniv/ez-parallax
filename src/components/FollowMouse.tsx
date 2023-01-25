import React, { useState, useEffect, ReactNode } from 'react';

interface Props {
    influenceX: number,
    influenceY: number,
    children: ReactNode,
    className?:string
}

function FollowMouse({children, influenceX, influenceY, className}: Props) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({
            x: event.clientX * influenceX,
            y: event.clientY * influenceY
        });
    }

    const divStyle = {
        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
    };

    return (
        <div style={divStyle} className = {className}>
            {children}
        </div>
    );
}

export default FollowMouse;