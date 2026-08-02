import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const imgY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section ref={container} id="about" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '8vw', alignItems: 'center' }}>

                <div className="reveal-on-scroll">
                    <motion.div style={{ y: textY }}>
                        <span style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '6px', fontSize: '0.9rem', fontWeight: 800 }}>Visionary Approach</span>
                        <h2 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', margin: '3rem 0', lineHeight: 0.9 }}>
                            WE CODE <br /> <span className="t-stroke">THE FUTURE.</span>
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '550px' }}>
                            <p style={{ fontSize: '1.25rem', color: '#fff' }}>
                                ZE VORA operates at the intersection of cinematic artistry and precision engineering.
                                We don't just build websites; we architect complex digital ecosystems.
                            </p>
                            <p>
                                From nationwide automated compliance workflows to fluid 3D interactive interfaces,
                                our work defines the digital standards of tomorrow's scale.
                            </p>

                            <motion.div
                                whileHover={{ x: 20 }}
                                style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '2rem', cursor: 'pointer' }}
                            >
                                <div style={{ width: '60px', height: '1px', background: 'var(--accent)' }} />
                                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '4px', textTransform: 'uppercase' }}>Our Philosophy</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                <div style={{ position: 'relative', height: '80vh', overflow: 'hidden', border: '1px solid var(--border)' }}>
                    <motion.div style={{ y: imgY, height: '140%', position: 'absolute', top: '-20%', width: '100%' }}>
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
                            alt="Future Engineering"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) brightness(0.7)' }}
                        />
                        {/* Noise overlay on the image specifically */}
                        <div style={{ position: 'absolute', inset: 0, background: 'url("https://grainy-gradients.vercel.app/noise.svg")', opacity: 0.05, mixBlendMode: 'overlay' }} />
                    </motion.div>
                    <div style={{ position: 'absolute', inset: '40px', border: '1px solid rgba(255,255,255,0.05)', pointerEvents: 'none', zIndex: 1 }} />

                    {/* Floating Title Data */}
                    <div style={{ position: 'absolute', bottom: '10%', left: '-10%', transform: 'rotate(-90deg)', transformOrigin: 'left bottom', zIndex: 2 }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '8px', opacity: 0.5, textTransform: 'uppercase' }}>Zevora-Core v4.0</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
