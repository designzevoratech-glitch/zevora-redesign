import React from 'react';
import { Zap, ShieldCheck, TrendingUp, Check } from 'lucide-react';
import './Sections.css';

const Features = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">Why ZEVORA?</h2>
                <p className="section-subtitle">
                    We are not just designers; we are systems thinkers.
                </p>

                <div className="grid-3">
                    <div className="card">
                        <div className="card-icon"><Zap size={24} /></div>
                        <h3 className="card-title">Automation-First</h3>
                        <p className="card-desc">
                            We build websites that work while you sleep. Automated follow-ups, CRM syncing, and smart notifications.
                        </p>
                    </div>
                    <div className="card">
                        <div className="card-icon"><ShieldCheck size={24} /></div>
                        <h3 className="card-title">Reliable Systems</h3>
                        <p className="card-desc">
                            Clean code, secure infrastructure, and scalable architecture that grows with your business logic.
                        </p>
                    </div>
                    <div className="card">
                        <div className="card-icon"><TrendingUp size={24} /></div>
                        <h3 className="card-title">Business Focused</h3>
                        <p className="card-desc">
                            We design for conversion and clarity, not just aesthetics. Every pixel serves a business purpose.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
