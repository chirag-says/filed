"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/recruitment", label: "RECRUITMENT" },
    { href: "/events", label: "EVENTS" },
    { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                transition: 'all 0.3s ease',
                backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none'
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: '60px'
                    }}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            letterSpacing: '0.02em',
                            textDecoration: 'none',
                            fontStyle: 'italic',
                            color: '#f0c030',
                            textShadow: '0 0 20px rgba(240, 192, 48, 0.3)'
                        }}
                    >
                        FIELD.
                    </Link>

                    {/* Desktop Navigation - Center */}
                    <div
                        className="hidden md:flex"
                        style={{
                            alignItems: 'center',
                            gap: '2rem'
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    fontFamily: "'Orbitron', sans-serif",
                                    fontWeight: 500,
                                    fontSize: '0.7rem',
                                    color: pathname === link.href ? '#f0c030' : '#ffffff',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease',
                                    letterSpacing: '0.05em'
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Discord Button - Right */}
                    <a
                        href="https://discord.gg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex"
                        style={{
                            background: 'transparent',
                            color: '#ffffff',
                            fontFamily: "'Orbitron', sans-serif",
                            fontWeight: 600,
                            padding: '0.5rem 1rem',
                            border: '1px solid #f0c030',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            fontSize: '0.65rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <svg style={{ width: '14px', height: '14px' }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                        </svg>
                        Join Discord
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                        style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                        aria-label="Toggle menu"
                    >
                        <span
                            style={{
                                display: 'block',
                                width: '22px',
                                height: '2px',
                                backgroundColor: '#f0c030',
                                transition: 'all 0.3s ease',
                                transform: isOpen ? 'rotate(45deg) translateY(6px)' : 'none'
                            }}
                        />
                        <span
                            style={{
                                display: 'block',
                                width: '22px',
                                height: '2px',
                                backgroundColor: '#f0c030',
                                marginTop: '5px',
                                transition: 'all 0.3s ease',
                                opacity: isOpen ? 0 : 1
                            }}
                        />
                        <span
                            style={{
                                display: 'block',
                                width: '22px',
                                height: '2px',
                                backgroundColor: '#f0c030',
                                marginTop: '5px',
                                transition: 'all 0.3s ease',
                                transform: isOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
                            }}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className="md:hidden"
                style={{
                    backgroundColor: 'rgba(10, 10, 10, 0.98)',
                    borderTop: '1px solid rgba(240, 192, 48, 0.2)',
                    overflow: 'hidden',
                    maxHeight: isOpen ? '350px' : '0',
                    opacity: isOpen ? 1 : 0,
                    transition: 'all 0.3s ease'
                }}
            >
                <div style={{ padding: '1rem 2rem' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            style={{
                                display: 'block',
                                padding: '0.75rem 0',
                                fontFamily: "'Orbitron', sans-serif",
                                fontSize: '0.8rem',
                                fontWeight: 500,
                                color: pathname === link.href ? '#f0c030' : '#ffffff',
                                textDecoration: 'none',
                                letterSpacing: '0.05em'
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://discord.gg"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'center',
                            marginTop: '1rem',
                            background: 'transparent',
                            color: '#ffffff',
                            fontFamily: "'Orbitron', sans-serif",
                            fontWeight: 600,
                            padding: '0.75rem 1rem',
                            border: '1px solid #f0c030',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            fontSize: '0.75rem',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <svg style={{ width: '14px', height: '14px' }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                        </svg>
                        Join Discord
                    </a>
                </div>
            </div>
        </nav>
    );
}
