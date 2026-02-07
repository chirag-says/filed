"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Ember particle component
function Ember({ delay, left, size }: { delay: number; left: string; size: number }) {
    return (
        <div
            style={{
                position: 'absolute',
                bottom: '0',
                left,
                width: `${size}px`,
                height: `${size}px`,
                background: 'radial-gradient(circle, #ff6b00 0%, #ff4400 50%, transparent 70%)',
                borderRadius: '50%',
                animation: `floatUp ${6 + Math.random() * 4}s infinite`,
                animationDelay: `${delay}s`,
                boxShadow: '0 0 6px #ff6b00, 0 0 12px #ff4400',
                opacity: 0
            }}
        />
    );
}

export default function HeroSection() {
    const [embers, setEmbers] = useState<Array<{ id: number; delay: number; left: string; size: number }>>([]);

    useEffect(() => {
        const newEmbers = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            delay: Math.random() * 8,
            left: `${Math.random() * 100}%`,
            size: 2 + Math.random() * 4
        }));
        setEmbers(newEmbers);
    }, []);

    return (
        <section
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'flex-end',
                paddingBottom: '12vh',
                overflow: 'hidden',
                paddingTop: '60px'
            }}
        >
            {/* Background Image */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url(/hero.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* Dark overlay for better text readability */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.7) 40%, rgba(10, 10, 10, 0.3) 70%, transparent 100%)'
                }}
            />

            {/* Fire glow at bottom */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background: 'radial-gradient(ellipse at center bottom, rgba(255, 80, 0, 0.3) 0%, rgba(255, 60, 0, 0.15) 30%, transparent 70%)',
                    pointerEvents: 'none'
                }}
            />

            {/* Top vignette */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '30%',
                    background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.8) 0%, transparent 100%)',
                    pointerEvents: 'none'
                }}
            />

            {/* Ember particles */}
            {embers.map((ember) => (
                <Ember key={ember.id} delay={ember.delay} left={ember.left} size={ember.size} />
            ))}

            {/* Keyframes */}
            <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>

            {/* Content */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 10,
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 2rem'
                }}
            >
                {/* Left Content */}
                <div style={{ maxWidth: '550px' }}>
                    {/* Guild Name */}
                    <h1
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: 'clamp(4rem, 12vw, 8rem)',
                            fontWeight: 900,
                            letterSpacing: '-0.02em',
                            marginBottom: '0.5rem',
                            lineHeight: 0.9,
                            fontStyle: 'italic',
                            color: '#f0c030',
                            textShadow: '0 0 40px rgba(240, 192, 48, 0.5), 0 0 80px rgba(240, 192, 48, 0.3), 2px 2px 4px rgba(0,0,0,0.8)'
                        }}
                    >
                        FIELD.
                    </h1>

                    {/* Tagline */}
                    <p
                        style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontSize: '1rem',
                            fontWeight: 500,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            marginBottom: '2.5rem',
                            color: '#888888',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                        }}
                    >
                        Discipline • Skill • Dominance
                    </p>

                    {/* CTA Buttons */}
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link
                            href="/recruitment"
                            style={{
                                background: 'linear-gradient(135deg, #f0c030 0%, #d4a528 100%)',
                                color: '#0a0a0a',
                                fontFamily: "'Orbitron', sans-serif",
                                fontWeight: 700,
                                padding: '0.875rem 2rem',
                                border: 'none',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                fontSize: '0.85rem',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 0 25px rgba(240, 192, 48, 0.4), 0 4px 15px rgba(0,0,0,0.3)'
                            }}
                        >
                            Apply to Join
                        </Link>
                        <a
                            href="https://discord.gg"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                background: 'rgba(10, 10, 10, 0.6)',
                                backdropFilter: 'blur(10px)',
                                color: '#ffffff',
                                fontFamily: "'Orbitron', sans-serif",
                                fontWeight: 600,
                                padding: '0.875rem 2rem',
                                border: '2px solid #f0c030',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                fontSize: '0.85rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                            }}
                        >
                            <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                            </svg>
                            Join Discord
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile overlay adjustment */}
            <style jsx>{`
        @media (max-width: 768px) {
          section > div:nth-child(2) {
            background: linear-gradient(180deg, rgba(10, 10, 10, 0.85) 0%, rgba(10, 10, 10, 0.7) 50%, rgba(10, 10, 10, 0.85) 100%) !important;
          }
        }
      `}</style>
        </section>
    );
}
