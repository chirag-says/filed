"use client";

import { useEffect, useState, useRef } from "react";

interface StatCardProps {
    label: string;
    value: string;
    suffix: string;
    showIcon?: boolean;
    showMax?: boolean;
    delay?: number;
}

function StatCard({ label, value, suffix, showIcon, showMax, delay = 0 }: StatCardProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const numericValue = parseInt(value.replace(/\D/g, ""));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);

    useEffect(() => {
        if (!isVisible) return;
        const duration = 2000;
        const steps = 60;
        const increment = numericValue / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                setCount(numericValue);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isVisible, numericValue]);

    return (
        <div
            ref={ref}
            style={{
                position: 'relative',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease'
            }}
        >
            {/* Hexagonal card with gold border */}
            <svg viewBox="0 0 220 140" style={{ width: '220px', height: '140px' }}>
                <defs>
                    <linearGradient id={`goldBorder-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f0c030" />
                        <stop offset="50%" stopColor="#d4a528" />
                        <stop offset="100%" stopColor="#f0c030" />
                    </linearGradient>
                    <linearGradient id={`cardBg-${label}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1a1a1a" />
                        <stop offset="100%" stopColor="#0a0a0a" />
                    </linearGradient>
                </defs>

                {/* Gold border */}
                <path
                    d="M30 0 L190 0 L220 70 L190 140 L30 140 L0 70 Z"
                    fill={`url(#goldBorder-${label})`}
                />

                {/* Inner dark background */}
                <path
                    d="M33 4 L187 4 L215 70 L187 136 L33 136 L5 70 Z"
                    fill={`url(#cardBg-${label})`}
                />

                {/* Corner accents */}
                <path d="M30 0 L50 0 L35 15 Z" fill="#f0c030" opacity="0.5" />
                <path d="M190 0 L170 0 L185 15 Z" fill="#f0c030" opacity="0.5" />
                <path d="M30 140 L50 140 L35 125 Z" fill="#f0c030" opacity="0.5" />
                <path d="M190 140 L170 140 L185 125 Z" fill="#f0c030" opacity="0.5" />
            </svg>

            {/* Content overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '1rem'
                }}
            >
                {/* Label */}
                <div
                    style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        color: '#888888',
                        letterSpacing: '0.15em',
                        marginBottom: '0.25rem',
                        textTransform: 'uppercase'
                    }}
                >
                    {label}
                </div>

                {/* Icon for Level */}
                {showIcon && (
                    <svg style={{ width: '28px', height: '28px', color: '#f0c030', marginBottom: '0.25rem' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        <path d="M5 17l2-6L2 9l6-1L12 2l1 6h6l-5 2 2 6-6-3z" opacity="0.3" />
                    </svg>
                )}

                {/* Value */}
                {!showIcon && (
                    <div
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: '2.25rem',
                            fontWeight: 900,
                            color: '#f0c030',
                            textShadow: '0 0 20px rgba(240, 192, 48, 0.4)',
                            lineHeight: 1
                        }}
                    >
                        {label === "WEEKLY ACTIVITY" ? `${Math.floor(count / 1000)}K${suffix}` : `${count}${suffix}`}
                    </div>
                )}

                {/* MAX label for Level */}
                {showMax && (
                    <div
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: '#f0c030',
                            marginTop: '0.25rem'
                        }}
                    >
                        MAX
                    </div>
                )}
            </div>
        </div>
    );
}

export default function StatsSection() {
    const stats = [
        { label: "LEVEL", value: "7", suffix: "", showIcon: true, showMax: true },
        { label: "WEEKLY ACTIVITY", value: "150000", suffix: "+" },
        { label: "MEMBERS", value: "50", suffix: "+" },
    ];

    return (
        <section
            style={{
                padding: '4rem 0',
                background: '#0a0a0a',
                position: 'relative'
            }}
        >
            {/* Top decorative line */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '5%',
                    right: '5%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(240, 192, 48, 0.5) 20%, #f0c030 50%, rgba(240, 192, 48, 0.5) 80%, transparent)'
                }}
            >
                {/* Diamond accents */}
                <div
                    style={{
                        position: 'absolute',
                        left: '20%',
                        top: '-4px',
                        width: '10px',
                        height: '10px',
                        background: '#f0c030',
                        transform: 'rotate(45deg)'
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        right: '20%',
                        top: '-4px',
                        width: '10px',
                        height: '10px',
                        background: '#f0c030',
                        transform: 'rotate(45deg)'
                    }}
                />
            </div>

            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
                {/* Section Title */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1.5rem',
                        marginBottom: '2.5rem'
                    }}
                >
                    <div style={{ width: '80px', height: '2px', background: 'linear-gradient(90deg, transparent, #f0c030)' }} />
                    <h2
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: '#f0c030',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em'
                        }}
                    >
                        Guild Stats
                    </h2>
                    <div style={{ width: '80px', height: '2px', background: 'linear-gradient(-90deg, transparent, #f0c030)' }} />
                </div>

                {/* Stats Grid */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1.5rem',
                        flexWrap: 'wrap'
                    }}
                >
                    {stats.map((stat, index) => (
                        <StatCard
                            key={stat.label}
                            label={stat.label}
                            value={stat.value}
                            suffix={stat.suffix}
                            showIcon={stat.showIcon}
                            showMax={stat.showMax}
                            delay={index * 200}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom decorative line */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '5%',
                    right: '5%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(240, 192, 48, 0.5) 20%, #f0c030 50%, rgba(240, 192, 48, 0.5) 80%, transparent)'
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        left: '20%',
                        top: '-4px',
                        width: '10px',
                        height: '10px',
                        background: '#f0c030',
                        transform: 'rotate(45deg)'
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        right: '20%',
                        top: '-4px',
                        width: '10px',
                        height: '10px',
                        background: '#f0c030',
                        transform: 'rotate(45deg)'
                    }}
                />
            </div>
        </section>
    );
}
