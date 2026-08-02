import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const clients = [
    {
        name: "Green Falls Garden Designers",
        logo: "/clients/green-falls-v2.png",
        url: null,
        invert: false
    },
    {
        name: "Aura Dynamics",
        logo: "/clients/aura-dynamics.svg",
        url: null,
        invert: false
    },
    {
        name: "Apex Innovations",
        logo: "/clients/apex-innovations.svg",
        url: null,
        invert: false
    },
    {
        name: "Vortex Cloud",
        logo: "/clients/vortex-cloud.svg",
        url: null,
        invert: false
    },
    {
        name: "Nexus Capital",
        logo: "/clients/nexus-capital.svg",
        url: null,
        invert: false
    },
    {
        name: "Solaria Health",
        logo: "/clients/solaria-health.svg",
        url: null,
        invert: false
    }
];

export default function ClientMarquee() {
    return (
        <section style={{
            padding: '4rem 0',
            background: 'black',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <div className="container" style={{ marginBottom: '4rem' }}>
                <span style={{
                    fontSize: '0.8rem',
                    letterSpacing: '5px',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    fontWeight: 800
                }}>
                    OUR TRUSTED CLIENTS
                </span>
            </div>

            <div style={{ display: 'flex', width: '200%' }}>
                <motion.div
                    animate={{ x: [0, '-50%'] }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8vw',
                        paddingRight: '8vw'
                    }}
                >
                    {clients.concat(clients).map((client, i) => {
                        const isLink = Boolean(client.url && client.url !== '#');
                        const Component = isLink ? motion.a : motion.div;
                        const linkProps = isLink ? {
                            href: client.url,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        } : {};
                        const isGardenLogo = client.logo.includes('green-falls');

                        return (
                            <Component
                                key={i}
                                {...linkProps}
                                whileHover={{ scale: 1.1, opacity: 1 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0.85,
                                    transition: 'var(--transition-smooth)',
                                    flexShrink: 0
                                }}
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    style={{
                                        height: isGardenLogo ? 'clamp(220px, 28vh, 320px)' : 'clamp(120px, 16vh, 180px)',
                                        transform: isGardenLogo ? 'scale(1.55)' : 'none',
                                        filter: 'none',
                                        objectFit: 'contain'
                                    }}
                                />
                            </Component>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
