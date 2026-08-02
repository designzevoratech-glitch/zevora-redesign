import { motion } from 'framer-motion';
import { Monitor, Layers, TrendingUp, Target, ShieldCheck, LifeBuoy } from 'lucide-react';

const services = [
    {
        title: "High-End Web Engineering",
        icon: <Monitor size={40} />,
        num: "01",
        pillar: "BUILD",
        desc: "Engineering high-performance digital ecosystems with sub-second response times. As a premier web agency for Indian enterprises, we deliver clean-code solutions that set new standards for security and architectural scalability."
    },
    {
        title: "Cinematic UI/UX Design",
        icon: <Layers size={40} />,
        num: "02",
        pillar: "BUILD",
        desc: "Redefining digital storytelling through intuitive, high-end interfaces. We create world-class design systems that establish your business as a leader in the Indian and global markets."
    },
    {
        title: "Data-Driven SEO & Growth",
        icon: <TrendingUp size={40} />,
        num: "03",
        pillar: "GROW",
        desc: "Dominating search rankings with ROI-focused SEO strategies. Recognized among the best web agencies in Coimbatore and India, we ensure your brand captures high-intent traffic for sustainable market expansion."
    },
    {
        title: "Automated Sales Engines",
        icon: <Target size={40} />,
        num: "04",
        pillar: "GROW",
        desc: "Transforming your digital presence into a consistent revenue machine. We deploy custom lead-generation architectures designed for ambitious Indian startups and established corporate houses."
    },
    {
        title: "Legal Documentation & Compliance Support for Businesses",
        icon: <ShieldCheck size={40} />,
        num: "05",
        pillar: "PROTECT",
        desc: "Specialized drafting of Website Legal pages, Business Contracts, NDAs, and Founder Docs. Support for Commercial Lease agreements, Business Notices, and internal SOPs. (Drafting & documentation support only)"
    },
    {
        title: "Premium Ecosystem Support",
        icon: <LifeBuoy size={40} />,
        num: "06",
        pillar: "PROTECT",
        desc: "24/7 technical oversight for mission-critical platforms. As your dedicated growth partner in India, we manage performance updates and security protocols, ensuring your operations never stop."
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

export default function Services() {
    return (
        <section id="services" className="section" style={{ background: 'var(--bg)', perspective: '1000px' }}>
            <motion.div
                className="container"
                variants={containerVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-10%" }}
            >
                <div className="services-header">
                    <div className="services-header-content">
                        <motion.span
                            variants={itemVariants}
                            className="services-tagline"
                        >
                            Global Services / Core Pillars
                        </motion.span>
                        <motion.h2
                            variants={itemVariants}
                            className="services-main-title"
                        >
                            Precision Engineering <br />
                            <span style={{ color: 'var(--text-dim)', fontWeight: 300 }}>for Global Scale.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        variants={itemVariants}
                        className="services-header-line"
                    />
                </div>

                <div className="services-interactive-grid">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="service-row"
                            whileHover={{ x: 10 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="service-flex">
                                <span className="service-number">{service.num}</span>
                                <div className="service-title-wrap">
                                    <span className="service-pillar-tag">
                                        {service.pillar}
                                    </span>
                                    <h3 className="service-title">{service.title}</h3>
                                    <motion.p
                                        className="service-desc"
                                        initial={{ opacity: 0.6 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        {service.desc}
                                    </motion.p>
                                </div>
                                <div className="service-icon-box">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="service-hover-bg" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .services-header {
                    margin-bottom: 10rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    flex-wrap: wrap;
                    gap: 2rem;
                }
                .services-header-content {
                    max-width: 700px;
                }
                .services-tagline {
                    color: var(--accent);
                    text-transform: uppercase;
                    letter-spacing: 0.4em;
                    font-size: 0.75rem;
                    font-weight: 800;
                    display: block;
                    margin-bottom: 2rem;
                }
                .services-main-title {
                    font-size: clamp(2.5rem, 6vw, 5rem);
                    line-height: 0.9;
                }
                .services-header-line {
                    width: 100px;
                    height: 1px;
                    background: var(--accent);
                    opacity: 0.3;
                }

                @media (max-width: 768px) {
                    .services-header {
                        margin-bottom: 4rem;
                    }
                    .services-tagline {
                        letter-spacing: 0.2em;
                        margin-bottom: 1rem;
                    }
                    .services-main-title {
                        font-size: 2.5rem;
                    }
                    .services-header-line {
                        display: none;
                    }
                }

                .services-interactive-grid {
                    border-top: 1px solid var(--border);
                }
                .service-row {
                    position: relative;
                    border-bottom: 1px solid var(--border);
                    padding: 4rem 0;
                    cursor: pointer;
                    overflow: hidden;
                    transition: var(--transition-smooth);
                }
                .service-flex {
                    display: grid;
                    grid-template-columns: 80px 1fr 100px;
                    align-items: center;
                    gap: 3rem;
                    position: relative;
                    z-index: 2;
                }
                .service-pillar-tag {
                    font-size: 0.7rem;
                    color: var(--accent);
                    fontWeight: 800;
                    letterSpacing: 0.1em;
                    marginBottom: 0.5rem;
                    display: block;
                }
                .service-number {
                    font-family: var(--font-heading);
                    font-size: 1rem;
                    font-weight: 800;
                    color: var(--accent);
                    opacity: 0.5;
                }
                .service-title {
                    font-size: clamp(1.5rem, 3vw, 2.5rem);
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: -0.02em;
                    transition: var(--transition-smooth);
                }
                .service-desc {
                    color: var(--text-dim);
                    max-width: 650px;
                    margin-top: 1rem;
                    font-size: 1.1rem;
                    line-height: 1.6;
                    opacity: 0.6;
                    transition: var(--transition-smooth);
                }
                .service-icon-box {
                    color: var(--accent);
                    opacity: 0.2;
                    transform: scale(0.8);
                    transition: var(--transition-smooth);
                    display: flex;
                    justify-content: flex-end;
                }
                
                /* Interaction Logic */
                .service-row:hover .service-title {
                    transform: translateX(10px);
                    color: #fff;
                }
                .service-row:hover .service-desc {
                    opacity: 1;
                    color: #fff;
                }
                .service-row:hover .service-icon-box {
                    opacity: 1;
                    transform: scale(1.1) translateX(-10px);
                }
                .service-hover-bg {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(90deg, rgba(230,0,0,0.05) 0%, transparent 100%);
                    transform: translateX(-101%);
                    transition: var(--transition-smooth);
                    z-index: 1;
                }
                .service-row:hover .service-hover-bg {
                    transform: translateX(0);
                }

                @media (max-width: 768px) {
                    .service-flex {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                    .service-icon-box { display: none; }
                    .service-desc { 
                        opacity: 1; 
                        transform: none; 
                        font-size: 1rem;
                    }
                }
            `}} />
        </section>
    );
}
