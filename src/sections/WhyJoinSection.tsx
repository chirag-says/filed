"use client";

import { useEffect, useState, useRef } from "react";

interface ReasonCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}

function ReasonCard({ icon, title, description, index }: ReasonCardProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), index * 150);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [index]);

    return (
        <div
            ref={ref}
            style={{
                position: 'relative',
                width: '200px',
                height: '180px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.5s ease'
            }}
        >
            {/* Angular card SVG */}
            <svg viewBox="0 0 200 180" style={{ width: '100%', height: '100%', position: 'absolute' }}>
                <defs>
                    <linearGradient id={`cardGold-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f0c030" />
                        <stop offset="50%" stopColor="#d4a528" />
                        <stop offset="100%" stopColor="#8a6d1b" />
                    </linearGradient>
                    <linearGradient id={`cardDark-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1a1a1a" />
                        <stop offset="100%" stopColor="#0a0a0a" />
                    </linearGradient>
                </defs>

                {/* Gold border - angular shape */}
                <path
                    d="M25 0 L200 0 L200 155 L175 180 L0 180 L0 25 Z"
                    fill={`url(#cardGold-${index})`}
                />

                {/* Inner dark background */}
                <path
                    d="M27 3 L197 3 L197 153 L173 177 L3 177 L3 27 Z"
                    fill={`url(#cardDark-${index})`}
                />

                {/* Top accent line */}
                <path d="M30 8 L194 8" stroke="#f0c030" strokeWidth="1" opacity="0.5" />

                {/* Corner cut accent */}
                <path d="M0 25 L25 0" stroke="#f0c030" strokeWidth="2" />
                <path d="M175 180 L200 155" stroke="#f0c030" strokeWidth="2" />
            </svg>

            {/* Content */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 10,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '1.5rem'
                }}
            >
                {/* Icon */}
                <div style={{ color: '#f0c030', marginBottom: '0.75rem' }}>
                    {icon}
                </div>

                {/* Title */}
                <h3
                    style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                    style={{
                        color: '#666666',
                        fontSize: '0.75rem',
                        lineHeight: 1.4
                    }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function WhyJoinSection() {
    const reasons = [
        {
            icon: (
                <svg style={{ width: '40px', height: '40px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
            ),
            title: "Organized Squads",
            description: "Pro-level coordination and gameplay.",
        },
        {
            icon: (
                <svg style={{ width: '40px', height: '40px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    <rect x="15" y="11" width="7" height="2" rx="1" />
                    <rect x="17" y="9" width="3" height="6" rx="1" />
                </svg>
            ),
            title: "Active Members",
            description: "50+ online players ready to team up.",
        },
        {
            icon: (
                <svg style={{ width: '40px', height: '40px' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                </svg>
            ),
            title: "Competitive Mindset",
            description: "Join tournaments and dominate.",
        },
    ];

    return (
        <section
            style={{
                padding: '4rem 0',
                background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 50%, #0a0a0a 100%)',
                position: 'relative'
            }}
        >
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
                {/* Section Title */}
                <div className="text-center" style={{ marginBottom: '0.5rem' }}>
                    <h2
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: '#ffffff',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                        }}
                    >
                        Why Join <span style={{ color: '#f0c030' }}>FIELD.</span>
                    </h2>
                </div>
                <p
                    className="text-center"
                    style={{
                        color: '#666666',
                        marginBottom: '2.5rem',
                        fontSize: '0.9rem'
                    }}
                >
                    Organized squads, and gameplay.
                </p>

                {/* Cards Grid */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1.5rem',
                        flexWrap: 'wrap'
                    }}
                >
                    {reasons.map((reason, index) => (
                        <ReasonCard
                            key={reason.title}
                            icon={reason.icon}
                            title={reason.title}
                            description={reason.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
