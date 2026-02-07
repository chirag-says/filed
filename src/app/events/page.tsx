import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events | FIELD. Guild",
    description: "Upcoming scrims, training sessions, and internal tournaments for FIELD. Free Fire guild members.",
};

const eventCategories = [
    {
        type: "scrim",
        title: "Scrims",
        description: "Practice matches against other competitive guilds",
        icon: (
            <svg style={{ width: '36px', height: '36px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
        )
    },
    {
        type: "training",
        title: "Training Sessions",
        description: "Skill improvement and strategy workshops",
        icon: (
            <svg style={{ width: '36px', height: '36px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
            </svg>
        )
    },
    {
        type: "tournament",
        title: "Internal Tournaments",
        description: "Compete with fellow members for glory",
        icon: (
            <svg style={{ width: '36px', height: '36px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
            </svg>
        )
    },
];

const upcomingEvents = [
    {
        title: "Weekly CS Scrim",
        type: "scrim",
        date: "Every Saturday",
        time: "8:00 PM IST",
        description: "Competitive squad scrims against other guilds",
        status: "recurring"
    },
    {
        title: "1v1 Championship",
        type: "tournament",
        date: "Coming Soon",
        time: "TBA",
        description: "Prove your individual skills in intense 1v1 battles",
        status: "upcoming"
    },
    {
        title: "Strategy Workshop",
        type: "training",
        date: "Coming Soon",
        time: "TBA",
        description: "Learn advanced rotations and callouts",
        status: "upcoming"
    }
];

export default function EventsPage() {
    return (
        <div style={{ paddingTop: '60px', minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
            {/* Hero Section */}
            <section
                style={{
                    padding: '5rem 0 3rem',
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
                        height: '300px',
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
                            marginBottom: '0.75rem'
                        }}
                    >
                        Stay Active
                    </span>
                    <h1
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 900,
                            marginBottom: '1rem',
                            color: '#ffffff',
                            fontStyle: 'italic'
                        }}
                    >
                        Guild <span style={{ color: '#ff6600' }}>Events</span>
                    </h1>
                    <p style={{ color: '#888888', fontSize: '1rem', lineHeight: 1.7, maxWidth: '550px', margin: '0 auto' }}>
                        Scrims, training sessions, and tournaments. Stay updated with all
                        FIELD. activities and never miss a match.
                    </p>
                </div>
            </section>

            {/* Event Categories */}
            <section style={{ padding: '3rem 0', backgroundColor: '#0a0a0a', position: 'relative' }}>
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

                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
                    <div className="text-center" style={{ marginBottom: '2.5rem' }}>
                        <h2
                            style={{
                                fontFamily: "'Orbitron', sans-serif",
                                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                                fontWeight: 700,
                                color: '#ffffff',
                                marginBottom: '0.5rem'
                            }}
                        >
                            Event <span style={{ color: '#f0c030' }}>Types</span>
                        </h2>
                        <p style={{ color: '#666666', fontSize: '0.9rem' }}>
                            We organize various activities to keep our members sharp
                        </p>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '1.5rem'
                        }}
                    >
                        {eventCategories.map((category) => (
                            <div
                                key={category.type}
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
                                        padding: '2rem',
                                        textAlign: 'center'
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '70px',
                                            height: '70px',
                                            background: 'linear-gradient(135deg, rgba(240, 192, 48, 0.2) 0%, rgba(240, 192, 48, 0.05) 100%)',
                                            border: '2px solid rgba(240, 192, 48, 0.3)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 1.25rem',
                                            color: '#f0c030'
                                        }}
                                    >
                                        {category.icon}
                                    </div>
                                    <h3
                                        style={{
                                            fontFamily: "'Orbitron', sans-serif",
                                            fontSize: '1rem',
                                            fontWeight: 700,
                                            color: '#ffffff',
                                            marginBottom: '0.75rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.03em'
                                        }}
                                    >
                                        {category.title}
                                    </h3>
                                    <p style={{ color: '#888888', lineHeight: 1.6, fontSize: '0.9rem' }}>
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section style={{ padding: '4rem 0', backgroundColor: '#0f0f0f' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
                    <div className="text-center" style={{ marginBottom: '2.5rem' }}>
                        <h2
                            style={{
                                fontFamily: "'Orbitron', sans-serif",
                                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                                fontWeight: 700,
                                color: '#ffffff',
                                marginBottom: '0.5rem'
                            }}
                        >
                            Upcoming <span style={{ color: '#ff6600' }}>Schedule</span>
                        </h2>
                        <p style={{ color: '#666666', fontSize: '0.9rem' }}>
                            Mark your calendars for these events
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {upcomingEvents.map((event, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr auto',
                                    gap: '1rem',
                                    padding: '1.5rem',
                                    background: 'linear-gradient(90deg, #1a1a1a 0%, #0f0f0f 100%)',
                                    border: '1px solid rgba(240, 192, 48, 0.15)',
                                    borderLeft: '4px solid #f0c030',
                                    borderRadius: '4px',
                                    alignItems: 'center'
                                }}
                            >
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                        <h3
                                            style={{
                                                fontFamily: "'Orbitron', sans-serif",
                                                fontSize: '1rem',
                                                fontWeight: 700,
                                                color: '#ffffff',
                                                textTransform: 'uppercase'
                                            }}
                                        >
                                            {event.title}
                                        </h3>
                                        <span
                                            style={{
                                                fontSize: '0.65rem',
                                                fontWeight: 600,
                                                padding: '0.25rem 0.5rem',
                                                borderRadius: '3px',
                                                textTransform: 'uppercase',
                                                background: event.status === 'recurring'
                                                    ? 'rgba(0, 255, 100, 0.15)'
                                                    : 'rgba(255, 150, 0, 0.15)',
                                                color: event.status === 'recurring'
                                                    ? '#00ff64'
                                                    : '#ff9900',
                                                border: event.status === 'recurring'
                                                    ? '1px solid rgba(0, 255, 100, 0.3)'
                                                    : '1px solid rgba(255, 150, 0, 0.3)'
                                            }}
                                        >
                                            {event.status === 'recurring' ? 'Weekly' : 'Coming Soon'}
                                        </span>
                                    </div>
                                    <p style={{ color: '#888888', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                                        {event.description}
                                    </p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ color: '#f0c030', fontFamily: "'Orbitron', sans-serif", fontSize: '0.9rem', fontWeight: 600 }}>
                                        {event.date}
                                    </div>
                                    <div style={{ color: '#666666', fontSize: '0.8rem' }}>
                                        {event.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Discord CTA */}
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
                    {/* Discord icon */}
                    <div
                        style={{
                            width: '80px',
                            height: '80px',
                            background: 'linear-gradient(135deg, #5865F2 0%, #4752C4 100%)',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                            boxShadow: '0 0 30px rgba(88, 101, 242, 0.4)'
                        }}
                    >
                        <svg style={{ width: '45px', height: '45px', color: '#ffffff' }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                        </svg>
                    </div>

                    <h2 style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '1rem'
                    }}>
                        Never Miss an <span style={{ color: '#f0c030' }}>Event</span>
                    </h2>
                    <p style={{ color: '#888888', marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.7 }}>
                        Join our Discord server to receive instant notifications about
                        upcoming events, scrims, and announcements.
                    </p>
                    <a
                        href="https://discord.gg"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            background: 'linear-gradient(135deg, #f0c030 0%, #d4a528 100%)',
                            color: '#0a0a0a',
                            fontFamily: "'Orbitron', sans-serif",
                            fontWeight: 700,
                            padding: '1rem 2rem',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontSize: '0.9rem',
                            boxShadow: '0 0 25px rgba(240, 192, 48, 0.3)'
                        }}
                    >
                        <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                        </svg>
                        Join Discord
                    </a>
                </div>
            </section>
        </div>
    );
}
