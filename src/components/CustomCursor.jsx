import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            const x = e.clientX || (e.touches && e.touches[0].clientX);
            const y = e.clientY || (e.touches && e.touches[0].clientY);

            if (x === undefined || y === undefined) return;

            gsap.to(cursorRef.current, {
                x: x,
                y: y,
                duration: 0.02,
                ease: "power2.out"
            });
            gsap.to(followerRef.current, {
                x: x - 20,
                y: y - 20,
                duration: 0.2, // Slightly more lag for touch
                ease: "power2.out"
            });
        };

        const handleHover = () => {
            gsap.to(cursorRef.current, { scale: 3, opacity: 0.5 });
            gsap.to(followerRef.current, { scale: 1.5 });
        };

        const handleUnhover = () => {
            gsap.to(cursorRef.current, { scale: 1, opacity: 1 });
            gsap.to(followerRef.current, { scale: 1 });
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('touchmove', moveCursor, { passive: true });

        const links = document.querySelectorAll('a, button');
        links.forEach(link => {
            link.addEventListener('mouseenter', handleHover);
            link.addEventListener('mouseleave', handleUnhover);
            link.addEventListener('touchstart', handleHover);
            link.addEventListener('touchend', handleUnhover);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('touchmove', moveCursor);
            links.forEach(link => {
                link.removeEventListener('mouseenter', handleHover);
                link.removeEventListener('mouseleave', handleUnhover);
                link.removeEventListener('touchstart', handleHover);
                link.removeEventListener('touchend', handleUnhover);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor" />
            <div ref={followerRef} className="custom-cursor-follower" />
        </>
    );
}
