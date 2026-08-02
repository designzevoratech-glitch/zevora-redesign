import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{ padding: '10vh 0 5vh 0', borderTop: '1px solid var(--border)', background: '#050505' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '5rem', marginBottom: '8vh' }}>
                    <div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <a href="#" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', lineHeight: 1 }}>
                            <span style={{
                                fontSize: '1.9rem',
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
                                fontSize: '0.75rem',
                                fontWeight: 900,
                                color: '#fff',
                                letterSpacing: '0.28em',
                                fontFamily: 'var(--font-heading)',
                                textTransform: 'uppercase',
                                marginTop: '0.25rem',
                                textAlign: 'center'
                            }}>
                                GLOBE
                            </span>
                        </a>
                    </div>
                        <p style={{ maxWidth: '300px', opacity: 0.6 }}>
                            Next-generation digital agency engineering high-performance ecosystems nationwide.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '2px', marginBottom: '2rem', textTransform: 'uppercase' }}>Ecosystem</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li><a href="#services" style={{ opacity: 0.6, fontSize: '0.9rem' }}>Services</a></li>
                            <li><a href="#products" style={{ opacity: 0.6, fontSize: '0.9rem' }}>Products</a></li>
                            <li><a href="#vision" style={{ opacity: 0.6, fontSize: '0.9rem' }}>Vision</a></li>
                            <li><a href="#contact" style={{ opacity: 0.6, fontSize: '0.9rem' }}>Contact </a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '2px', marginBottom: '2rem', textTransform: 'uppercase' }}>Operations</h4>
                        <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Engineering digital excellence for clients across all of India.
                        </p>
                        <p style={{ marginTop: '1.5rem', fontWeight: 700, fontSize: '0.9rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Remote-First Agency
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '2px', marginBottom: '2rem', textTransform: 'uppercase' }}>Connect</h4>
                        <a href="mailto:design.zevoratech@gmail.com" style={{ opacity: 0.6, fontSize: '0.9rem', display: 'block' }}>design.zevoratech@gmail.com</a>
                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem' }}>
                            <a href="https://www.instagram.com/zevora.globe" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.5, color: '#fff' }}><Instagram size={20} /></a>
                            <a href="https://www.linkedin.com/in/zevorawork/" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.5, color: '#fff' }}><Linkedin size={20} /></a>
                            <a href="#" style={{ opacity: 0.5, color: '#fff' }}><Twitter size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="flex-between" style={{ borderTop: '1px solid var(--border)', paddingTop: '3rem', opacity: 0.3, fontSize: '0.7rem' }}>
                    <p>© {new Date().getFullYear()} ZEVORA Engineering Excellence.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
