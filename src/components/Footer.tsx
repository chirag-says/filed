"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: '#0a0a0a',
                padding: '3rem 0',
                borderTop: '1px solid rgba(240, 192, 48, 0.1)'
            }}
        >
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
                {/* Logo */}
                <div className="text-center">
                    <Link
                        href="/"
                        style={{
                            display: 'inline-block',
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: '2.5rem',
                            fontWeight: 700,
                            letterSpacing: '0.02em',
                            textDecoration: 'none',
                            fontStyle: 'italic',
                            color: '#f0c030',
                            textShadow: '0 0 30px rgba(240, 192, 48, 0.3)'
                        }}
                    >
                        FIELD.
                    </Link>
                </div>
            </div>
        </footer>
    );
}
