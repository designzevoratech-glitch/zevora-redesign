import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Products', href: '#products' },
        { name: 'Vision', href: '#vision' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`navbar-main ${scrolled ? 'navbar-scrolled' : ''}`} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'var(--transition-smooth)',
            backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', lineHeight: 1 }}>
                    <span style={{
                        fontSize: '1.6rem',
                        fontWeight: 900,
                        color: 'var(--accent)',
                        letterSpacing: '-0.02em',
                        fontFamily: 'var(--font-heading)',
                        lineHeight: 0.9,
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    }}>
                        ZEVORA
                    </span>
                    <span style={{
                        fontSize: '0.68rem',
                        fontWeight: 900,
                        color: '#fff',
                        letterSpacing: '0.28em',
                        fontFamily: 'var(--font-heading)',
                        textTransform: 'uppercase',
                        marginTop: '0.22rem',
                        textAlign: 'center'
                    }}>
                        GLOBE
                    </span>
                </a>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '3.5rem' }} className="desktop-nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                fontSize: '0.85rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em',
                                fontWeight: 600,
                                opacity: 0.6,
                                color: '#fff',
                                transition: 'var(--transition-fast)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.opacity = '1';
                                e.target.style.color = 'var(--accent)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.opacity = '0.6';
                                e.target.style.color = '#fff';
                            }}
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="https://calendly.com/design-zevoratech/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-premium"
                        style={{
                            padding: '0.8rem 2.2rem',
                            fontSize: '0.8rem',
                            borderRadius: '100px'
                        }}
                    >
                        Connect with us
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-only" onClick={() => setMobileMenu(!mobileMenu)} style={{ color: '#fff' }}>
                    {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenu && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'var(--bg)',
                            padding: '10vh 5vw',
                            zIndex: 1001,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button onClick={() => setMobileMenu(false)} style={{ color: '#fff' }}>
                                <X size={32} />
                            </button>
                        </div>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenu(false)}
                                style={{
                                    fontSize: '3.5rem',
                                    fontWeight: 900,
                                    color: '#fff',
                                    fontFamily: 'var(--font-heading)',
                                    letterSpacing: '-0.04em',
                                    textTransform: 'uppercase'
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://calendly.com/design-zevoratech/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenu(false)}
                            style={{
                                color: 'var(--accent)',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                marginTop: '2rem'
                            }}
                        >
                            Start Project —
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{
                __html: `
        .navbar-main {
          padding: 3rem 0;
        }
        .navbar-scrolled {
          padding: 1.5rem 0;
        }
        @media (max-width: 1024px) {
          .navbar-main { padding: 1.5rem 0; }
          .navbar-scrolled { padding: 1rem 0; }
          .desktop-nav { display: none !important; }
          .mobile-only { display: block !important; background: none; border: none; cursor: pointer; }
        }
        @media (min-width: 1025px) {
          .mobile-only { display: none !important; }
        }
      `}} />
        </nav>
    );
}
