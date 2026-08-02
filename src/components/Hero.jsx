import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './Hero.css';

const TaglineLine = ({ text, mouseX, mouseY, color }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.1em', perspective: '1000px' }}>
            {text.split('').map((char, i) => (
                <MagneticLetter key={i} char={char} mouseX={mouseX} mouseY={mouseY} color={color} />
            ))}
        </div>
    );
};

const MagneticLetter = ({ char, mouseX, mouseY, color = '#fff' }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { damping: 20, stiffness: 200 });
    const springY = useSpring(y, { damping: 20, stiffness: 200 });

    useEffect(() => {
        const handleMouseMove = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = mouseX.get() - centerX;
            const distanceY = mouseY.get() - centerY;
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

            if (distance < 150) {
                const power = (150 - distance) / 150;
                x.set(distanceX * power * 0.4);
                y.set(distanceY * power * 0.4);
            } else {
                x.set(0);
                y.set(0);
            }
        };

        const unsubscribeX = mouseX.onChange(handleMouseMove);
        return () => unsubscribeX();
    }, [mouseX, mouseY]);

    return (
        <motion.span
            ref={ref}
            style={{
                display: 'inline-block',
                x: springX,
                y: springY,
                whiteSpace: char === ' ' ? 'pre' : 'normal',
                color: color,
                fontWeight: 900
            }}
        >
            {char}
        </motion.span>
    );
};

export default function Hero() {
    const containerRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 200 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    const handleTouchMove = (e) => {
        if (e.touches && e.touches[0]) {
            mouseX.set(e.touches[0].clientX);
            mouseY.set(e.touches[0].clientY);
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchstart', handleTouchMove);
        window.addEventListener('touchmove', handleTouchMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchstart', handleTouchMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.8
            }
        }
    };

    const itemVariants = {
        initial: { y: 60, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section className="hero-section" ref={containerRef} style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '80px',
            background: 'var(--bg)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Interactive Background Glow */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    x: useTransform(springX, x => x - 600),
                    y: useTransform(springY, y => y - 600),
                    width: '1200px',
                    height: '1200px',
                    background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                    opacity: 0.6
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Subtle Watermark */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '25vw',
                fontWeight: 900,
                color: '#fff',
                opacity: 0.02,
                letterSpacing: '-0.05em',
                pointerEvents: 'none',
                zIndex: 0,
                whiteSpace: 'nowrap',
                fontFamily: 'var(--font-heading)'
            }}>
                ZEVORA
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div variants={itemVariants} className="hero-top-tagline-wrapper">
                        <span className="hero-top-tagline">
                            Global Digital Growth Partner
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="hero-main-title"
                    >
                        <TaglineLine text="YOU THINK IT." mouseX={mouseX} mouseY={mouseY} />
                        <TaglineLine text="WE MAKE IT." mouseX={mouseX} mouseY={mouseY} color="var(--accent)" />
                    </motion.h1>

                    <motion.div
                        variants={itemVariants}
                        className="hero-cta-container"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="btn-premium hero-btn"
                        >
                            START YOUR SYSTEM.
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, y: -5, borderColor: '#fff' }}
                            whileTap={{ scale: 0.95 }}
                            href="#vision"
                            className="btn-outline hero-btn"
                        >
                            EXPLORE VISION
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
