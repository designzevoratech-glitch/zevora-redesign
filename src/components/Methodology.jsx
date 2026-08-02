import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const steps = [
    {
        num: "01",
        title: "Discovery & Logic",
        desc: "We dive deep into your business architecture to extract core challenges. No generic solutions—only bespoke strategic alignment."
    },
    {
        num: "02",
        title: "Experimental Design",
        desc: "Pushing visual boundaries while maintaining structural integrity. We create interfaces that evoke emotion and drive action."
    },
    {
        num: "03",
        title: "Technical Engineering",
        desc: "Turning concepts into high-performance machines. Clean code, sub-second load times, and extreme digital stability."
    },
    {
        num: "04",
        title: "Hyper Growth",
        desc: "Deploying data-driven growth systems. We don't just launch; we scale your presence globally with continuous optimization."
    }
];

const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

export default function Methodology() {
    return (
        <section id="methodology" className="section" style={{ background: '#050505', position: 'relative', overflow: 'hidden' }}>
            {/* Dynamic Background Element */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '40vw',
                height: '40vw',
                background: 'radial-gradient(circle, rgba(230,0,0,0.03) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <motion.div
                className="container"
                variants={containerVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-10%" }}
                style={{ position: 'relative', zIndex: 1 }}
            >
                <div style={{ marginBottom: '10rem' }}>
                    <motion.span
                        variants={itemVariants}
                        style={{
                            color: 'var(--accent)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5em',
                            fontSize: '0.7rem',
                            fontWeight: 900,
                            display: 'block',
                            marginBottom: '2rem'
                        }}
                    >
                        THE ZEVORA SYSTEM / METHODOLOGY
                    </motion.span>
                    <motion.h2
                        variants={itemVariants}
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', maxWidth: '900px', lineHeight: 1 }}
                    >
                        Transforming <span style={{ color: 'var(--accent)', fontWeight: 900 }}>Ambition</span> <br />
                        <span style={{ fontWeight: 300, opacity: 0.7 }}>into Digital Performance.</span>
                    </motion.h2>
                </div>

                <div className="methodology-interactive-grid">
                    {steps.map((step, i) => (
                        <StepCard key={i} step={step} index={i} />
                    ))}
                </div>
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .methodology-interactive-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1px;
                    background: var(--border);
                    border: 1px solid var(--border);
                }
                @media (max-width: 768px) {
                    .methodology-interactive-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}} />
        </section>
    );
}

function StepCard({ step, index }) {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            variants={itemVariants}
            className="methodology-card"
            style={{
                position: 'relative',
                background: '#080808',
                padding: '4rem 3rem',
                overflow: 'hidden',
                cursor: 'default'
            }}
        >
            {/* Spotlight Effect */}
            <motion.div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: useSpring(useMotionValue('radial-gradient(400px circle at 0px 0px, rgba(230,0,0,0.08), transparent 80%)'), { damping: 20, stiffness: 200 }),
                    opacity: 0,
                    zIndex: 0,
                }}
                className="card-spotlight"
                animate={{
                    background: `radial-gradient(400px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(230,0,0,0.1), transparent 80%)`
                }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
                    <span style={{
                        fontSize: '0.8rem',
                        fontWeight: 900,
                        color: 'var(--accent)',
                        fontFamily: 'var(--font-heading)',
                        opacity: 0.4
                    }}>
                        STEP / {step.num}
                    </span>
                    <div style={{
                        width: '40px',
                        height: '1px',
                        background: 'var(--accent)',
                        opacity: 0.3,
                        marginTop: '0.5rem'
                    }} />
                </div>

                <h3 style={{
                    fontSize: '1.8rem',
                    marginBottom: '1.5rem',
                    color: '#fff',
                    letterSpacing: '-0.02em',
                    transition: 'var(--transition-smooth)'
                }}>
                    {step.title}
                </h3>
                <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.7',
                    opacity: 0.5,
                    transition: 'var(--transition-smooth)'
                }}>
                    {step.desc}
                </p>
            </div>

            {/* Bottom Border Interaction */}
            <motion.div
                className="card-border-line"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: 'var(--accent)',
                    zIndex: 2,
                    transition: 'var(--transition-smooth)'
                }}
            />

            <style dangerouslySetInnerHTML={{
                __html: `
                .methodology-card:hover .card-spotlight {
                    opacity: 1;
                }
                .methodology-card:hover h3 {
                    transform: translateY(-5px);
                    color: var(--accent);
                }
                .methodology-card:hover p {
                    opacity: 1;
                    color: #fff;
                }
                .methodology-card:hover .card-border-line {
                    width: 100%;
                }
            `}} />
        </motion.div>
    );
}
