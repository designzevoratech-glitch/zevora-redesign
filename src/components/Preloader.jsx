import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsVisible(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="preloader"
                    exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                >
                    <div style={{ position: 'relative', textAlign: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                fontSize: '1rem',
                                letterSpacing: '0.5em',
                                textTransform: 'uppercase',
                                marginBottom: '2rem',
                                color: 'rgba(255,255,255,0.5)'
                            }}
                        >
                            Loading Intelligence
                        </motion.div>
                        <div className="preloader-count">{count}%</div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
