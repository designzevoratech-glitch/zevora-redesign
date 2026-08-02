import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, FileText, Scale, Landmark, FileCheck, Users, Home, Bell } from 'lucide-react';

const legalModules = [
    {
        icon: <FileText size={24} />,
        title: "Digital Legal Pages",
        desc: "Custom drafting of Privacy Policies, Terms & Conditions, and Refund/Cancellation modules for modern web platforms."
    },
    {
        icon: <FileCheck size={24} />,
        title: "Service Agreements",
        desc: "Professional drafting of vendor contracts, freelance agreements, NDAs, and MoUs for secure business operations."
    },
    {
        icon: <Users size={24} />,
        title: "Founder Docs",
        desc: "Strategic partnership and founder documentation designed for early-stage and high-growth Indian startups."
    },
    {
        icon: <Home size={24} />,
        title: "Commercial Property",
        desc: "Drafting of commercial lease, leave, and license agreements for physical business expansions."
    },
    {
        icon: <Bell size={24} />,
        title: "Formal Notices",
        desc: "Drafting of formal business communications, payment demands, and termination letters with professional precision."
    },
    {
        icon: <Shield size={24} />,
        title: "Internal Compliance",
        desc: "Preparation of SOPs, internal business policies, and compliance documentation for technical workflows."
    }
];

export default function LegalSystems() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={ref} id="legal-tech" className="section" style={{ backgroundColor: '#050505', overflow: 'hidden', borderTop: '1px solid var(--border)' }}>
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '120%',
                    backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(230,0,0,0.02) 0%, transparent 50%)',
                    y: bgY,
                    zIndex: 0
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="reveal-on-scroll" style={{ marginBottom: '10vh' }}>
                    <span style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', fontWeight: 700 }}>Legal Documentation & Compliance</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1.5rem' }}>Support for <br /> Modern Businesses</h2>
                    <p style={{ maxWidth: '600px', marginTop: '2rem', fontSize: '1.1rem', opacity: 0.6 }}>
                        We provide drafting and documentation support to secure your business interests across India.
                        Precision-engineered legal scripts for the digital economy.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                }}>
                    {legalModules.map((module, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            style={{
                                padding: '3rem',
                                background: 'rgba(255, 255, 255, 0.01)',
                                border: '1px solid var(--border)',
                                position: 'relative',
                            }}
                        >
                            <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>{module.icon}</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 800 }}>{module.title}</h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.5, lineHeight: '1.6' }}>{module.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="reveal-on-scroll" style={{ marginTop: '8vh', padding: '2rem', borderLeft: '1px solid var(--accent)', background: 'rgba(255,0,0,0.02)' }}>
                    <p style={{ fontSize: '0.85rem', opacity: 0.5, lineHeight: 1.6, letterSpacing: '0.5px' }}>
                        <strong style={{ color: 'var(--accent)', marginRight: '10px' }}>SCOPE CLARIFICATION:</strong>
                        All services are provided as drafting, documentation, and compliance support only. This does not include legal advice, litigation, representation, or statutory filings. ZEVORA works as a documentation partner to your business.
                    </p>
                </div>
            </div>
        </section>
    );
}
