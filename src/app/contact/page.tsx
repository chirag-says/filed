import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | FIELD. Guild",
    description: "Get in touch with FIELD. Free Fire guild. Join our Discord, WhatsApp, or reach us via email.",
};

const contactMethods = [
    {
        title: "Discord",
        description: "Join our official Discord server for the fastest response and community chat.",
        link: "https://discord.gg",
        buttonText: "Join Discord",
        color: "#5865F2",
        icon: (
            <svg style={{ width: '32px', height: '32px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
        )
    },
    {
        title: "WhatsApp",
        description: "Connect with our leadership team directly via WhatsApp group for quick updates.",
        link: "https://wa.me/917011023015",
        buttonText: "Join Group",
        color: "#25D366",
        icon: (
            <svg style={{ width: '32px', height: '32px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        )
    },
    {
        title: "Email",
        description: "For business inquiries, sponsorships, or formal communications.",
        link: "mailto:contact@fieldguild.com",
        buttonText: "Send Email",
        color: "#f0c030",
        icon: (
            <svg style={{ width: '32px', height: '32px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
        )
    },
];

const faqs = [
    {
        question: "How do I join FIELD.?",
        answer: "Visit our Recruitment page and fill out the application form. Our leadership team will review your application and contact you via Discord.",
    },
    {
        question: "What are the requirements to join?",
        answer: "We require a minimum K/D ratio of 3.0+, Diamond rank or higher, daily activity, and Discord for communication.",
    },
    {
        question: "Is there a trial period?",
        answer: "Yes, new members undergo a 1-week trial period where we assess teamwork, communication, and skill level.",
    },
    {
        question: "Do you participate in tournaments?",
        answer: "We regularly participate in scrims and internal tournaments. We're building our competitive roster for official tournaments.",
    },
];

export default function ContactPage() {
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
                        Get In Touch
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
                        Contact <span style={{ color: '#f0c030' }}>Us</span>
                    </h1>
                    <p style={{ color: '#888888', fontSize: '1rem', lineHeight: 1.7, maxWidth: '550px', margin: '0 auto' }}>
                        Have questions? Want to collaborate? Reach out to us through any of
                        the channels below. We&apos;d love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Methods */}
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
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '1.5rem'
                        }}
                    >
                        {contactMethods.map((method) => (
                            <div
                                key={method.title}
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
                                        background: `linear-gradient(135deg, ${method.color}, rgba(240, 192, 48, 0.3), transparent)`,
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
                                            background: `linear-gradient(135deg, ${method.color}33 0%, ${method.color}11 100%)`,
                                            border: `2px solid ${method.color}50`,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 1.25rem',
                                            color: method.color
                                        }}
                                    >
                                        {method.icon}
                                    </div>
                                    <h3
                                        style={{
                                            fontFamily: "'Orbitron', sans-serif",
                                            fontSize: '1.25rem',
                                            fontWeight: 700,
                                            color: '#ffffff',
                                            marginBottom: '0.75rem',
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        {method.title}
                                    </h3>
                                    <p style={{ color: '#888888', marginBottom: '1.5rem', lineHeight: 1.6, fontSize: '0.9rem' }}>
                                        {method.description}
                                    </p>
                                    <a
                                        href={method.link}
                                        target={method.link.startsWith("http") ? "_blank" : undefined}
                                        rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                        style={{
                                            display: 'inline-block',
                                            background: `linear-gradient(135deg, ${method.color} 0%, ${method.color}cc 100%)`,
                                            color: method.color === '#f0c030' ? '#0a0a0a' : '#ffffff',
                                            fontFamily: "'Orbitron', sans-serif",
                                            fontWeight: 700,
                                            padding: '0.75rem 1.5rem',
                                            borderRadius: '4px',
                                            textDecoration: 'none',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            fontSize: '0.8rem',
                                            boxShadow: `0 0 20px ${method.color}40`
                                        }}
                                    >
                                        {method.buttonText}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: '4rem 0', backgroundColor: '#0f0f0f' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
                    <div className="text-center" style={{ marginBottom: '2.5rem' }}>
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
                            Common Questions
                        </span>
                        <h2
                            style={{
                                fontFamily: "'Orbitron', sans-serif",
                                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                                fontWeight: 700,
                                color: '#ffffff'
                            }}
                        >
                            Frequently <span style={{ color: '#f0c030' }}>Asked</span>
                        </h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: '1.5rem',
                                    background: 'linear-gradient(90deg, #1a1a1a 0%, #0f0f0f 100%)',
                                    border: '1px solid rgba(240, 192, 48, 0.15)',
                                    borderLeft: '4px solid #f0c030',
                                    borderRadius: '4px'
                                }}
                            >
                                <h4
                                    style={{
                                        fontFamily: "'Orbitron', sans-serif",
                                        fontSize: '0.95rem',
                                        fontWeight: 700,
                                        color: '#f0c030',
                                        marginBottom: '0.75rem',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.75rem'
                                    }}
                                >
                                    <svg style={{ width: '18px', height: '18px', flexShrink: 0, marginTop: '2px' }} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                                    </svg>
                                    {faq.question}
                                </h4>
                                <p style={{ color: '#888888', paddingLeft: '2rem', lineHeight: 1.7, fontSize: '0.9rem' }}>
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Server Region */}
            <section style={{ padding: '4rem 0', backgroundColor: '#0a0a0a', position: 'relative' }}>
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

                <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 1rem' }}>
                    <div
                        className="text-center"
                        style={{
                            padding: '2.5rem',
                            background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)',
                            border: '1px solid rgba(240, 192, 48, 0.2)',
                            borderRadius: '12px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Subtle glow */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '200px',
                                height: '100px',
                                background: 'radial-gradient(ellipse, rgba(240, 192, 48, 0.1) 0%, transparent 70%)',
                                pointerEvents: 'none'
                            }}
                        />

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
                                margin: '0 auto 1.5rem',
                                position: 'relative',
                                zIndex: 10
                            }}
                        >
                            <svg style={{ width: '36px', height: '36px', color: '#f0c030' }} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                        </div>
                        <h3
                            style={{
                                fontFamily: "'Orbitron', sans-serif",
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                color: '#ffffff',
                                marginBottom: '1rem',
                                textTransform: 'uppercase',
                                position: 'relative',
                                zIndex: 10
                            }}
                        >
                            Server Region
                        </h3>
                        <p style={{ color: '#888888', marginBottom: '0.75rem', position: 'relative', zIndex: 10 }}>
                            <span style={{ color: '#f0c030', fontWeight: 600, fontFamily: "'Orbitron', sans-serif" }}>Free Fire Server:</span>{' '}
                            <span style={{ color: '#ffffff' }}>India</span>
                        </p>
                        <p style={{ color: '#666666', lineHeight: 1.7, fontSize: '0.9rem', position: 'relative', zIndex: 10 }}>
                            We primarily operate on the India server. Players from neighboring
                            regions with stable ping are also welcome to apply.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
