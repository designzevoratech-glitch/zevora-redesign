import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Bot, Cpu, Zap, ArrowRight, CheckCircle2, Bell } from 'lucide-react';

export default function Products() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yVal = useTransform(scrollYProgress, [0, 1], [-15, 15]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
        }
    };

    return (
        <section ref={containerRef} id="products" className="section" style={{ background: '#020202', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border)', paddingTop: '7rem', paddingBottom: '7rem' }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(230, 0, 0, 0.14) 0%, rgba(0,0,0,0) 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <motion.div
                className="container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ position: 'relative', zIndex: 1 }}
            >
                {/* Header Badge */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            background: 'rgba(230, 0, 0, 0.12)',
                            border: '1px solid rgba(230, 0, 0, 0.35)',
                            padding: '0.4rem 1.25rem',
                            borderRadius: '100px',
                            marginBottom: '1.25rem',
                            boxShadow: '0 0 20px rgba(230, 0, 0, 0.2)'
                        }}
                    >
                        <Sparkles size={16} style={{ color: 'var(--accent)' }} />
                        <span style={{
                            color: 'var(--accent)',
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            letterSpacing: '2px',
                            textTransform: 'uppercase'
                        }}>
                            LAUNCHING SOON • ENTERPRISE AI LABS
                        </span>
                    </motion.div>

                    <h2 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 1rem 0' }}>
                        Next-Generation AI Models <br />
                        <span style={{
                            background: 'linear-gradient(135deg, #fff 0%, var(--accent) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Engineered For Business Scale
                        </span>
                    </h2>

                    <p style={{ maxWidth: '620px', margin: '0 auto', fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, fontWeight: 300 }}>
                        We are building custom autonomous AI models designed to revolutionize client acquisition, operational efficiency, and enterprise automation.
                    </p>
                </div>

                {/* Main Interactive Showcase Card */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center',
                    background: 'linear-gradient(145deg, rgba(20, 20, 25, 0.7) 0%, rgba(5, 5, 8, 0.9) 100%)',
                    border: '1px solid rgba(230, 0, 0, 0.3)',
                    borderRadius: '24px',
                    padding: '3.5rem',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(230, 0, 0, 0.1)'
                }}>
                    {/* Left Column: Early Access Push */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                            <span style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: '#ff2828',
                                boxShadow: '0 0 12px #ff2828',
                                display: 'inline-block'
                            }} />
                            <span style={{
                                color: 'var(--accent)',
                                fontSize: '0.8rem',
                                fontWeight: 800,
                                letterSpacing: '2px',
                                textTransform: 'uppercase'
                            }}>
                                COMING SOON IN A FEW MONTHS
                            </span>
                        </div>

                        <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, margin: '0 0 1rem 0', color: '#fff', lineHeight: 1.25 }}>
                            Custom AI Models Built For Your Specific Business Needs
                        </h3>

                        <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '2.5rem', fontWeight: 300 }}>
                            Proprietary AI architectures designed to integrate directly into your business logic, driving automated growth and seamless execution.
                        </p>

                        {/* Early Access Form */}
                        <div style={{
                            background: 'rgba(0, 0, 0, 0.6)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            borderRadius: '16px',
                            padding: '1.5rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                                <Bell size={18} style={{ color: 'var(--accent)' }} />
                                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                    Request Priority Access
                                </span>
                            </div>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        color: '#4ade80',
                                        fontSize: '0.95rem',
                                        fontWeight: 600,
                                        padding: '0.5rem 0'
                                    }}
                                >
                                    <CheckCircle2 size={20} />
                                    <span>You are on the priority waitlist! We will notify you first upon launch.</span>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email address..."
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        style={{
                                            flex: 1,
                                            minWidth: '220px',
                                            padding: '0.85rem 1.25rem',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.15)',
                                            borderRadius: '100px',
                                            color: '#fff',
                                            fontSize: '0.9rem',
                                            outline: 'none'
                                        }}
                                    />
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.96 }}
                                        style={{
                                            padding: '0.85rem 1.75rem',
                                            background: 'var(--accent)',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '100px',
                                            fontWeight: 800,
                                            fontSize: '0.85rem',
                                            letterSpacing: '1px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            boxShadow: '0 10px 20px rgba(230, 0, 0, 0.3)'
                                        }}
                                    >
                                        JOIN WAITLIST <ArrowRight size={16} />
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Right Column: AI Business Models Showcase */}
                    <div>
                        <motion.div
                            style={{
                                background: '#050508',
                                border: '1px solid rgba(230, 0, 0, 0.4)',
                                borderRadius: '16px',
                                padding: '2rem',
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.9)',
                                y: yVal
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                    <Cpu size={22} style={{ color: 'var(--accent)' }} />
                                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#fff', letterSpacing: '1.5px' }}>ZEVORA AI LABS</span>
                                </div>
                                <span style={{
                                    fontSize: '0.7rem',
                                    color: '#4ade80',
                                    background: 'rgba(74, 222, 128, 0.1)',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '100px',
                                    fontWeight: 700,
                                    border: '1px solid rgba(74, 222, 128, 0.3)'
                                }}>
                                    IN DEVELOPMENT
                                </span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                {[
                                    { title: "Autonomous Business Models", status: "End-to-End Automation", color: "var(--accent)", icon: <Bot size={18} /> },
                                    { title: "Growth & Lead Generation Models", status: "Smart Client Acquisition", color: "#60a5fa", icon: <Zap size={18} /> },
                                    { title: "Custom Operational Intelligence", status: "In-House Enterprise Integration", color: "#a855f7", icon: <Sparkles size={18} /> }
                                ].map((item, i) => (
                                    <div key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        padding: '1rem 1.25rem',
                                        borderRadius: '12px'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                                            <div style={{ color: item.color }}>{item.icon}</div>
                                            <div>
                                                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#fff', display: 'block' }}>{item.title}</span>
                                                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{item.status}</span>
                                            </div>
                                        </div>
                                        <span style={{ fontSize: '0.7rem', color: item.color, fontWeight: 700, letterSpacing: '1px' }}>SOON</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
