import React, { useState } from 'react';
import { Send, MessageCircle, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // PRESERVED LOGIC: Construct message for WhatsApp if needed (though UI handles redirect)
        const phone = "917200296476";
        const text = `Hi ZEVORA, I'm ${formData.name}. ${formData.message} (Email: ${formData.email})`;
        const encodedText = encodeURIComponent(text);

        // PRESERVED LOGIC: Google Sheet / Email via Apps Script
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwcZ02CGkPR08BrzI1U_fIxNDJrncPdjvi7af6YZqMBRrxWPvjdPCa5MmeyIerJggmq0Q/exec";

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(formData)
            });

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section" style={{ background: '#000' }}>
            <motion.div
                className="container"
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '8vw' }}
            >
                <div className="contact-info">
                    <motion.span variants={itemVariants} style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', fontWeight: 700, display: 'block' }}>Connection</motion.span>
                    <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '2.5rem 0' }}>LET'S START <br /> A SYSTEM.</motion.h2>
                    <motion.p variants={itemVariants} style={{ marginBottom: '3rem', fontSize: '1.1rem' }}>
                        Ready to automate your operations or build a next-gen digital presence?
                        Reach out for a strategic consultation.
                    </motion.p>

                    <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '1.5rem' }}>
                            <div style={{ padding: '0.8rem', background: 'var(--bg-soft)', borderRadius: '2px', border: '1px solid var(--border)' }}><Mail size={20} color="var(--accent)" /></div>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Email</span>
                                <a href="mailto:design.zevoratech@gmail.com" style={{ fontSize: '1.1rem' }}>design.zevoratech@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '1.5rem' }}>
                            <div style={{ padding: '0.8rem', background: 'var(--bg-soft)', borderRadius: '2px', border: '1px solid var(--border)' }}><Phone size={20} color="var(--accent)" /></div>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Direct</span>
                                <a href="tel:+917200296476" style={{ fontSize: '1.1rem' }}>+91 72002 96476</a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={itemVariants}
                    style={{
                        background: 'rgba(255, 255, 255, 0.01)',
                        padding: '3rem',
                        border: '1px solid var(--border)',
                        position: 'relative'
                    }}
                >
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8 }}>Identity</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: '1px solid var(--border)',
                                    padding: '1rem 0',
                                    color: '#fff',
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8 }}>Access</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: '1px solid var(--border)',
                                    padding: '1rem 0',
                                    color: '#fff',
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <label style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8 }}>Requirement</label>
                            <textarea
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Describe your digital challenge..."
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: '1px solid var(--border)',
                                    padding: '1rem 0',
                                    color: '#fff',
                                    fontSize: '1rem',
                                    minHeight: '120px',
                                    outline: 'none',
                                    resize: 'none'
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            style={{
                                padding: '1.2rem',
                                background: 'var(--accent)',
                                color: '#fff',
                                border: 'none',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '3px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '1rem'
                            }}
                        >
                            {status === 'submitting' ? 'Transmitting...' : (
                                <>Initiate <ArrowUpRight size={18} /></>
                            )}
                        </button>

                        {status === 'success' && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{ color: '#4ade80', fontSize: '0.9rem', textAlign: 'center' }}
                            >
                                TRANSMISSION SUCCESSFUL. WE WILL REACH OUT SOON.
                            </motion.p>
                        )}
                    </form>
                </motion.div>
            </motion.div>

        </section>
    );
};

export default ContactForm;
