import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | FIELD. Guild",
    description: "Learn about FIELD. - an elite Free Fire guild focused on tactical gameplay, discipline, and team-based dominance.",
};

const values = [
    {
        title: "Respect",
        description: "We treat every member as family. Mutual respect builds trust, and trust builds champions.",
        icon: (
            <svg style={{ width: '40px', height: '40px', color: '#f0c030' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
            </svg>
        )
    },
    {
        title: "Activity",
        description: "Active players are winning players. We maintain 150k+ weekly activity because we're always in the game.",
        icon: (
            <svg style={{ width: '40px', height: '40px', color: '#f0c030' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
            </svg>
        )
    },
    {
        title: "Skill",
        description: "Raw talent meets dedicated practice. Every member is expected to improve and push their limits.",
        icon: (
            <svg style={{ width: '40px', height: '40px', color: '#f0c030' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2v11h3v9l7-12h-4l4-8z" />
            </svg>
        )
    },
];

const playstyles = [
    {
        title: "Tactical Precision",
        description: "We don't rush blindly. Every push is calculated, every rotation is timed, every decision is strategic.",
        icon: (
            <svg style={{ width: '32px', height: '32px', color: '#f0c030' }} fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3.2" />
                <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
            </svg>
        )
    },
    {
        title: "Team Synergy",
        description: "Individual skill wins fights, but teamwork wins games. Our squads move as one unit.",
        icon: (
            <svg style={{ width: '32px', height: '32px', color: '#f0c030' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
        )
    },
    {
        title: "Disciplined Approach",
        description: "No toxic behavior, no ego. We focus on improvement, communication, and results.",
        icon: (
            <svg style={{ width: '32px', height: '32px', color: '#f0c030' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
            </svg>
        )
    },
];

export default function AboutPage() {
    return (
        <div style={{ paddingTop: '60px', backgroundColor: '#0a0a0a' }}>
            {/* Hero Section */}
            <section
                style={{
                    padding: '6rem 0 4rem',
                    background: 'linear-gradient(180deg, #0a0a0a 0%, #1a0a00 50%, #0a0a0a 100%)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Fire glow */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '400px',
                        background: 'radial-gradient(ellipse, rgba(255, 80, 0, 0.15) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                        pointerEvents: 'none'
                    }}
                />

                <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 10 }}>
                    <span
                        style={{
                            display: 'inline-block',
                            color: '#f0c030',
                            fontFamily: "'Orbitron', sans-serif",
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            fontSize: '0.75rem',
                            marginBottom: '1rem'
                        }}
                    >
                        About Us
                    </span>
                    <h1
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                            fontWeight: 900,
                            marginBottom: '1.5rem',
                            color: '#ffffff',
                            fontStyle: 'italic'
                        }}
                    >
                        The <span style={{ color: '#f0c030' }}>FIELD.</span> Story
                    </h1>
                    <p style={{ color: '#888888', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto' }}>
                        Born from a passion for competitive Free Fire, FIELD. was created to unite the most
                        dedicated players under one banner. We&apos;re not just a guild – we&apos;re a brotherhood.
                    </p>
                </div>
            </section>

            {/* Origin & Vision with Emblem */}
            <section style={{ padding: '5rem 0', backgroundColor: '#0a0a0a', position: 'relative' }}>
                {/* Decorative line */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: '10%',
                        right: '10%',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, rgba(240, 192, 48, 0.3) 20%, #f0c030 50%, rgba(240, 192, 48, 0.3) 80%, transparent)'
                    }}
                />

                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '4rem',
                            alignItems: 'center'
                        }}
                    >
                        {/* Text Content */}
                        <div>
                            <span
                                style={{
                                    display: 'inline-block',
                                    color: '#ff6600',
                                    fontFamily: "'Orbitron', sans-serif",
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '0.75rem',
                                    marginBottom: '0.75rem'
                                }}
                            >
                                Our Origin
                            </span>
                            <h2
                                style={{
                                    fontFamily: "'Orbitron', sans-serif",
                                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                                    fontWeight: 700,
                                    marginBottom: '1.5rem',
                                    color: '#ffffff'
                                }}
                            >
                                Started From <span style={{ color: '#f0c030' }}>Nothing</span>
                            </h2>
                            <div style={{ color: '#888888', fontSize: '1rem', lineHeight: 1.8 }}>
                                <p style={{ marginBottom: '1.25rem' }}>
                                    FIELD. was founded by a group of Free Fire enthusiasts who shared a common vision:
                                    to create a guild where skill, discipline, and respect are the foundation.
                                </p>
                                <p style={{ marginBottom: '1.25rem' }}>
                                    From our humble beginnings, we&apos;ve grown into a <span style={{ color: '#f0c030', fontWeight: 600 }}>Level 7 MAX</span> guild with over <span style={{ color: '#f0c030', fontWeight: 600 }}>50 active members</span> and <span style={{ color: '#f0c030', fontWeight: 600 }}>150k+ weekly activity</span>.
                                </p>
                                <p>
                                    Today, FIELD. stands as one of the most respected guilds in the Free Fire
                                    community. But we&apos;re not stopping here – we&apos;re constantly evolving.
                                </p>
                            </div>
                        </div>

                        {/* Emblem Image */}
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div
                                style={{
                                    position: 'relative',
                                    width: '320px',
                                    height: '320px'
                                }}
                            >
                                {/* Fire glow behind */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '350px',
                                        height: '350px',
                                        background: 'radial-gradient(circle, rgba(255, 80, 0, 0.4) 0%, rgba(255, 40, 0, 0.2) 40%, transparent 70%)',
                                        filter: 'blur(30px)'
                                    }}
                                />
                                <img
                                    src="/emblem.png"
                                    alt="FIELD. Guild Emblem"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        position: 'relative',
                                        zIndex: 10,
                                        filter: 'drop-shadow(0 0 30px rgba(255, 100, 0, 0.5))'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Playstyle Section */}
            <section style={{ padding: '5rem 0', backgroundColor: '#0f0f0f', position: 'relative' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <span
                            style={{
                                display: 'inline-block',
                                color: '#f0c030',
                                fontFamily: "'Orbitron', sans-serif",
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                fontSize: '0.75rem',
                                marginBottom: '0.75rem'
                            }}
                        >
                            How We Play
                        </span>
                        <h2 style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                            fontWeight: 700,
                            color: '#ffffff'
                        }}>
                            Our <span style={{ color: '#ff6600' }}>Playstyle</span>
                        </h2>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '1.5rem'
                        }}
                    >
                        {playstyles.map((style, index) => (
                            <div
                                key={style.title}
                                style={{
                                    position: 'relative',
                                    padding: '2px'
                                }}
                            >
                                {/* Angular border */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(135deg, #f0c030, rgba(240, 192, 48, 0.3), transparent)',
                                        clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                                    }}
                                />

                                {/* Inner card */}
                                <div
                                    style={{
                                        position: 'relative',
                                        background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
                                        clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
                                        padding: '2rem'
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            background: 'linear-gradient(135deg, #f0c030 0%, #d4a528 100%)',
                                            color: '#0a0a0a',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontFamily: "'Orbitron', sans-serif",
                                            fontWeight: 700,
                                            fontSize: '1.5rem',
                                            marginBottom: '1.25rem'
                                        }}
                                    >
                                        {index + 1}
                                    </div>
                                    <h3
                                        style={{
                                            fontFamily: "'Orbitron', sans-serif",
                                            fontSize: '1rem',
                                            fontWeight: 700,
                                            color: '#ffffff',
                                            marginBottom: '0.75rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}
                                    >
                                        {style.title}
                                    </h3>
                                    <p style={{ color: '#888888', lineHeight: 1.6, fontSize: '0.9rem' }}>
                                        {style.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section style={{ padding: '5rem 0', backgroundColor: '#0a0a0a', position: 'relative' }}>
                {/* Decorative line */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: '10%',
                        right: '10%',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, rgba(240, 192, 48, 0.3) 20%, #f0c030 50%, rgba(240, 192, 48, 0.3) 80%, transparent)'
                    }}
                />

                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <span
                            style={{
                                display: 'inline-block',
                                color: '#ff6600',
                                fontFamily: "'Orbitron', sans-serif",
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                fontSize: '0.75rem',
                                marginBottom: '0.75rem'
                            }}
                        >
                            What We Stand For
                        </span>
                        <h2 style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                            fontWeight: 700,
                            color: '#ffffff'
                        }}>
                            Core <span style={{ color: '#f0c030' }}>Values</span>
                        </h2>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '1.5rem'
                        }}
                    >
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="text-center"
                                style={{
                                    padding: '2.5rem 2rem',
                                    background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)',
                                    border: '1px solid rgba(240, 192, 48, 0.2)',
                                    borderRadius: '8px',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                                    {value.icon}
                                </div>
                                <h3
                                    style={{
                                        fontFamily: "'Orbitron', sans-serif",
                                        fontSize: '1.25rem',
                                        fontWeight: 700,
                                        color: '#f0c030',
                                        marginBottom: '0.75rem',
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    {value.title}
                                </h3>
                                <p style={{ color: '#888888', lineHeight: 1.6, fontSize: '0.9rem' }}>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA Section */}
            <section
                style={{
                    padding: '5rem 0',
                    background: 'linear-gradient(180deg, #0a0a0a 0%, #1a0a00 100%)',
                    position: 'relative'
                }}
            >
                {/* Fire glow */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100%',
                        height: '200px',
                        background: 'radial-gradient(ellipse at center bottom, rgba(255, 80, 0, 0.2) 0%, transparent 70%)',
                        pointerEvents: 'none'
                    }}
                />

                <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto', padding: '0 1rem', position: 'relative', zIndex: 10 }}>
                    <h2 style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '1rem'
                    }}>
                        Ready to Join <span style={{ color: '#f0c030' }}>FIELD.</span>?
                    </h2>
                    <p style={{ color: '#888888', marginBottom: '2rem', fontSize: '1rem' }}>
                        Become part of an elite Free Fire guild and dominate the battlefield.
                    </p>
                    <a
                        href="/recruitment"
                        style={{
                            display: 'inline-block',
                            background: 'linear-gradient(135deg, #f0c030 0%, #d4a528 100%)',
                            color: '#0a0a0a',
                            fontFamily: "'Orbitron', sans-serif",
                            fontWeight: 700,
                            padding: '1rem 2.5rem',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontSize: '0.9rem',
                            boxShadow: '0 0 30px rgba(240, 192, 48, 0.4)'
                        }}
                    >
                        Apply Now
                    </a>
                </div>
            </section>
        </div>
    );
}
