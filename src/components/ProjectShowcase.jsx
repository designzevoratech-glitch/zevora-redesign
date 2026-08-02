import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
    {
        title: "Green Falls Garden Designers",
        category: "Landscape Design & Nature UI",
        img: "/clients/green-falls-v2.png",
        desc: "Architecting a high-conversion digital presence for leading landscape designers. We translated natural aesthetics into a fluid, sub-second digital experience.",
        url: "https://www.greenfallsgardendesigner.com/",
        invert: true
    },
    {
        title: "Silver Nest",
        category: "Ecommerce & Silver Artistry",
        img: "/clients/silver-nest.jpg",
        desc: "A sophisticated digital storefront for luxury silver ornaments. Engineered to showcase intricate craftsmanship with enterprise-grade performance and security.",
        url: "#",
        invert: false
    }
];

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

export default function ProjectShowcase() {
    return (
        <section id="work" className="section" style={{ background: '#000' }}>
            <motion.div
                className="container"
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
            >
                <div style={{ marginBottom: '12vh' }}>
                    <motion.span
                        variants={itemVariants}
                        style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', fontWeight: 700, display: 'block' }}
                    >
                        Showcase
                    </motion.span>
                    <motion.h2
                        variants={itemVariants}
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '1.5rem' }}
                    >
                        Selected <br /> Engagements
                    </motion.h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15vh' }}>
                    {projects.map((project, i) => (
                        <ProjectItem key={i} project={project} index={i} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

function ProjectItem({ project, index }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={ref}
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '4rem',
                alignItems: 'center',
                opacity
            }}
        >
            <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                <span style={{ fontSize: '0.8rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '2px' }}>0{index + 1} / {project.category}</span>
                <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1.5rem 0', color: '#fff' }}>{project.title}</h3>
                <p style={{ maxWidth: '400px', fontSize: '1.1rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.7)' }}>{project.desc}</p>

                <motion.a
                    href={project.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10, color: '#fff' }}
                    style={{
                        marginTop: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        cursor: 'pointer',
                        color: 'var(--accent)',
                        fontWeight: 700,
                        textDecoration: 'none'
                    }}
                >
                    VISIT LIVE PROJECT <div style={{ width: '30px', height: '1px', background: 'var(--accent)' }} />
                </motion.a>
            </div>

            <div style={{
                order: index % 2 === 0 ? 2 : 1,
                position: 'relative',
                height: '50vh',
                overflow: 'hidden',
                background: "var(--bg-offset)",
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem'
            }}>
                <motion.img
                    src={project.img}
                    alt={project.title}
                    style={{
                        maxWidth: '90%',
                        maxHeight: '80%',
                        objectFit: 'contain',
                        filter: project.invert ? 'invert(1) brightness(2)' : 'none',
                        y
                    }}
                />
            </div>
        </motion.div>
    );
}
